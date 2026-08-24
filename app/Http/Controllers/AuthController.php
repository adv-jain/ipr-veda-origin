<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use App\Models\Otp;
use App\Services\WhatsAppOtpService;
use Illuminate\Support\Carbon;

class AuthController extends Controller
{
    
   public function signup(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name'   => 'required|string|max:255',
        'email'  => 'required|email|unique:users,email',
        'number' => 'required|numeric',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => 'Validation failed',
            'errors'  => $validator->errors(),
        ], 422);
    }

    $user = User::create([
        'name'   => $request->name,
        'email'  => $request->email,
        'number' => $request->number,
    ]);

    $this->generateAndSendOtp($user);

    return response()->json([
        'success' => true,
        'message' => 'Account created successfully and otp send',
        'user' => [
            'id'     => $user->id,
            'name'   => $user->name,
            'email'  => $user->email,
            'number' => $user->number,
        ],
    ], 201);
}

protected function generateAndSendOtp(User $user): void
{
    $code = (string) random_int(100000, 999999);
 
    Otp::updateOrCreate(
        ['user_id' => $user->id],
        [
            'code'       => $code,
            'attempts'   => 0,
            'expires_at' => Carbon::now()->addMinutes(5),
        ]
    );
 
    app(WhatsAppOtpService::class)->sendOtp($user->number, $code);
}
 

public function verifyOtp(Request $request)
{
    $validated = $request->validate([
        'user_id' => 'required|exists:users,id',
        'otp'     => 'required|string',
    ]);
 
    $otp = Otp::where('user_id', $validated['user_id'])->first();
 
    if (!$otp) {
        return response()->json(['message' => 'No OTP found. Please request a new one.'], 404);
    }
 
    if ($otp->expires_at->isPast()) {
        return response()->json(['message' => 'OTP expired. Please request a new one.'], 422);
    }
 
    if ($otp->attempts >= 3) {
        return response()->json(['message' => 'Too many attempts. Please request a new OTP.'], 429);
    }
 
    if ($otp->code !== $validated['otp']) {
        $otp->increment('attempts');
        return response()->json(['message' => 'Incorrect OTP.'], 422);
    }
 
    $user = User::find($validated['user_id']);
    $user->update(['is_verified' => true]);
    $otp->delete();
 
    
    return response()->json(['message' => 'Account verified successfully.']);
}
 

public function resendOtp(Request $request)
{
    $validated = $request->validate([
        'user_id' => 'required|exists:users,id',
    ]);
 
    $user = User::find($validated['user_id']);
 
    if ($user->is_verified) {
        return response()->json(['message' => 'Account already verified.'], 422);
    }
 
    $this->generateAndSendOtp($user);
 
    return response()->json(['message' => 'OTP resent.']);
}
 


    
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or password',
            ], 401);
        }

        // Create token
        $token = $user->createToken('react-app')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
            ],
        ]);
    }


    
    public function me(Request $request)
    {
        return response()->json([
            'success' => true,
            'user' => $request->user(),
        ]);
    }


    public function logout(Request $request)
    {
         // Delete current token
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logout successful',
        ]);
    }


    
    public function logoutAll(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logged out from all devices',
        ]);
    }
}