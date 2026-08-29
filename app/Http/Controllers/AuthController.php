<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\SignupOtp; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;

class AuthController extends Controller
{
    // 1. Signup Method
    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'   => 'required|string|max:255',
            'email'  => 'required|email|unique:users,email',
            'number' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors'  => $validator->errors(),
            ], 422);
        }

        $user = User::create([
            'name'        => $request->name,
            'email'       => $request->email,
            'number'      => $request->number,
            'is_verified' => false,
        ]);

        try {
            $this->generateAndSendOtp($user);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Account created successfully. OTP sent.',
            'user_id' => $user->id,
        ], 201);
    }

    // 2. Request OTP Method (For Login/Resend)
    public function requestOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'  => 'nullable|email',
            'number' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Provide email or number'], 422);
        }

        $user = User::where('email', $request->email)
                    ->orWhere('number', $request->number)
                    ->first();

        if (!$user) {
            return response()->json(['message' => 'User not found. Please signup first.'], 404);
        }

        try {
            $this->generateAndSendOtp($user);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'OTP sent successfully.',
            'user_id' => $user->id
        ]);
    }

    // 3. Verify OTP Method (✅ FIXED: user_id query se hata diya)
    public function verifyOtp(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'nullable|exists:users,id',
            'email'   => 'nullable|email',
            'number'  => 'nullable|string',
            'otp'     => 'required|string|digits:4',
        ]);

        // User dhoondho
        $user = null;
        if (!empty($validated['user_id'])) {
            $user = User::find($validated['user_id']);
        } elseif (!empty($validated['email'])) {
            $user = User::where('email', $validated['email'])->first();
        } elseif (!empty($validated['number'])) {
            $user = User::where('number', $validated['number'])->first();
        }

        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        // ✅ Fix: Ab sirf email/number aur otp se check karega (user_id hata diya)
        $otpRecord = SignupOtp::where(function($query) use ($validated) {
            if (isset($validated['email'])) {
                $query->where('email', $validated['email']);
            }
            if (isset($validated['number'])) {
                $query->orWhere('number', $validated['number']);
            }
        })
        ->where('otp', $validated['otp'])
        ->latest()
        ->first();

        if (!$otpRecord) {
            return response()->json(['message' => 'Invalid OTP.'], 422);
        }

        // Expiry check (Safe check for null values)
        if ($otpRecord->expires_at && Carbon::parse($otpRecord->expires_at)->isPast()) {
            return response()->json(['message' => 'OTP expired. Please request a new one.'], 422);
        }

        // ✅ User ko verified mark karo
        $user->update(['is_verified' => true]);
        
        // ✅ OTP delete karo taaki dobara use na ho
        $otpRecord->delete();

        // ✅ SABSE ZAROORI: User ko Laravel Session mein login karo (Breeze Dashboard ke liye)
        Auth::login($user);

        // Token bhi return kar rahe hain (Future API use ke liye)
        $token = $user->createToken('react-app')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Account verified successfully.',
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ]
        ]);
    }

    // 4. Resend OTP Method
    public function resendOtp(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $user = User::find($validated['user_id']);

        if ($user->is_verified) {
            return response()->json(['message' => 'Account already verified.'], 422);
        }

        try {
            $this->generateAndSendOtp($user);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }

        return response()->json(['message' => 'OTP resent successfully.']);
    }

    // Helper: OTP Generate aur Send karna
    protected function generateAndSendOtp(User $user): void
    {
        $code = (string) random_int(1000, 9999);
     
        // ✅ Fix: Purane OTPs delete karo (same email/number ke)
        SignupOtp::where('email', $user->email)
                 ->orWhere('number', $user->number)
                 ->delete();

        // ✅ Fix: user_id column ko hata diya kyunki table mein nahi hai
        SignupOtp::create([
            'email'      => $user->email,
            'number'     => $user->number,
            'otp'        => $code,
            'expires_at' => Carbon::now()->addMinutes(10), // 10 minutes validity
        ]);
     
        // WhatsApp ya Email bhejna
        if (class_exists('App\Services\WhatsAppOtpService')) {
            app('App\Services\WhatsAppOtpService')->sendOtp($user->number, $code);
        } else {
            Log::info("OTP for {$user->number} is: {$code} (Testing Mode)");
        }
    }

    public function me(Request $request) {
        return response()->json(['success' => true, 'user' => $request->user()]);
    }

    public function logout(Request $request) {
        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();
        }
        return response()->json(['success' => true, 'message' => 'Logout successful']);
    }
}