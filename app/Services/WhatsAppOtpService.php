<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppOtpService
{
    public function sendOtp($number, $otp)
    {
        try {
            $phoneNumberId = env('WHATSAPP_PHONE_NUMBER_ID');
            $accessToken   = env('WHATSAPP_ACCESS_TOKEN');

            // ✅ Sirf digits nikalo
            $formattedNumber = preg_replace('/[^0-9]/', '', $number);

            // ✅ Agar 10-digit number hai (India), 91 prepend karo
            if (strlen($formattedNumber) === 10) {
                $formattedNumber = '91' . $formattedNumber;
            }

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $accessToken,
                'Content-Type'  => 'application/json',
            ])->post("https://graph.facebook.com/v17.0/{$phoneNumberId}/messages", [
                'messaging_product' => 'whatsapp',
                'to' => $formattedNumber,
                'type' => 'template',
                'template' => [
                    'name' => 'jaspers_market_order_confirmation_v1', // TODO: apna otp_verification template banne ke baad yahan replace karo
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

            return true;

        } catch (\Exception $e) {
            Log::error("WhatsApp sending failed: " . $e->getMessage());
            throw new \Exception('Failed to send WhatsApp OTP: ' . $e->getMessage());
        }
    }
}