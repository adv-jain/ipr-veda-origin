<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SignupOtp;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;
class SignupOtpController extends Controller
{
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'number' => 'nullable|string|max:15',
            'email'  => 'nullable|email',
        ]);

        if (!isset($validateData['email']) && !isset($validateData['number'])) {
            return response()->json([
                'message' => 'please provide either email or number'
            ], 400);
        }

        $otp = rand(1000, 9999);

        $message = 'OTP sent successfully!';

        
        try {
            if (isset($validateData['email'])) {
                $this->sendEmailOTP($validateData['email'], $otp);
                $message = 'OTP sent to email successfully!';
            } elseif (isset($validateData['number'])) {
                $this->sendWhatsAppOTP($validateData['number'], $otp);
                $message = "OTP sent to your WhatsApp number";
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }

        // ✅ Sirf success ke baad hi record create karo
        $otpRecord = SignupOtp::create([
            'email'  => $validateData['email'] ?? null,
            'number' => $validateData['number'] ?? null,
            'otp'    => $otp,
             'expires_at'    => Carbon::now()->addMinutes(10),
        ]);

        return response()->json([
            'message' => $message,
            'otp_id'  => $otpRecord->id
        ], 200);
    }

    private function sendEmailOTP($email, $otp)
    {
        try {
            Mail::raw("Your OTP is: {$otp} valid for 10 min", function ($message) use ($email) {
                $message->to($email)->subject("Your OTP for Signup");
            });
            Log::info("Email OTP sent to {$email}");
        } catch (\Exception $e) {
            Log::error("Email sending failed: " . $e->getMessage());
            throw new \Exception('Failed to send email OTP: ' . $e->getMessage());
        }
    }

private function sendWhatsAppOTP($number, $otp)
{
    try{
        $phoneNumberId = env('WHATSAPP_PHONE_NUMBER_ID');
        $accessToken = env('WHATSAPP_ACCESS_TOKEN');
        
        $formattedNumber = preg_replace('/[^0-9]/', '', $number);
        
        if (strlen($formattedNumber) === 10) {
            $formattedNumber = '91' . $formattedNumber;
        }
        
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $accessToken,
            'Content-Type' => 'application/json',
        ])->post("https://graph.facebook.com/v17.0/{$phoneNumberId}/messages", [
            'messaging_product' => 'whatsapp',
            'to' => $formattedNumber,
            'type' => 'template',
            'template' => [
                'name' => 'jaspers_market_order_confirmation_v1',
                'language' => [
                    'code' => 'en_US'
                ],
                'components' => [
                    [
                        'type' => 'body',
                        'parameters' => [
                            [
                                'type' => 'text',
                                'text' => 'Customer'
                            ],
                            [
                                'type' => 'text',
                                'text' => (string) $otp
                            ],
                            [
                                'type' => 'text',
                                'text' => '3-5 business days'
                            ]
                        ]
                    ]
                ]
            ]
        ]);

        if ($response->failed()) {
            Log::error("WhatsApp API Error: " . $response->body());
            $errorBody = $response->json();
            $errorMsg = $errorBody['error']['message'] ?? 'Failed to send WhatsApp OTP';
            throw new \Exception($errorMsg);
        }

        Log::info("WhatsApp OTP sent to: {$formattedNumber}");

    }catch(\Exception $e){
        Log::error("WhatsApp sending failed: ".$e->getMessage());
        throw new \Exception('Failed to send WhatsApp OTP: ' . $e->getMessage());
    }
}
}