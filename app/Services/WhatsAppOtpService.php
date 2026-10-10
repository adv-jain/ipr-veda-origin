<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppOtpService
{
    public function sendOtp(string $number, string|int $otp): bool
    {
        $config        = config('services.whatsapp');
        $phoneNumberId = $config['phone_number_id'] ?? null;
        $token         = trim((string) ($config['system_user_token'] ?? ''));
        $version       = $config['graph_version'] ?? 'v22.0';
        $template      = $config['otp_template_name'] ?? 'hello_world';
        $language      = $config['otp_language'] ?? 'en_US';

        if (!$phoneNumberId || !$token) {
            Log::error('WhatsApp config missing: phone_number_id or token is empty');
            throw new \RuntimeException('WhatsApp is not configured properly.');
        }

        // Sirf digits rakho, 10-digit India number ho to 91 prepend karo
        $to = preg_replace('/\D/', '', $number);
        if (strlen($to) === 10) {
            $to = '91' . $to;
        }

        $payload = [
            'messaging_product' => 'whatsapp',
            'to'   => $to,
            'type' => 'template',
            'template' => [
                'name'     => $template,
                'language' => ['code' => $language],
            ],
        ];

        // hello_world me koi parameter nahi hota (sirf connection test).
        // Real Authentication template ke liye body + copy-code button bhejo.
        if($template === 'jaspers_market_order_confirmation_v1'){
 $payload['template']['components'] = [
        [
            'type' => 'body',
            'parameters' => [
                ['type' => 'text', 'text' => 'Customer'],
                ['type' => 'text', 'text' => (string) $otp],
                ['type' => 'text', 'text' => '3-5 business days'],
            ],
        ],
    ];
}
        
        elseif ($template !== 'hello_world') {
            $payload['template']['components'] = [
                [
                    'type' => 'body',
                    'parameters' => [
                        ['type' => 'text', 'text' => (string) $otp],
                    ],
                ],
                [
                    'type'     => 'button',
                    'sub_type' => 'url',
                    'index'    => '0',
                    'parameters' => [
                        ['type' => 'text', 'text' => (string) $otp],
                    ],
                ],
            ];
        }

        $response = Http::withToken($token)
            ->acceptJson()
            ->timeout(15)
            ->post("https://graph.facebook.com/{$version}/{$phoneNumberId}/messages", $payload);

        if ($response->failed()) {
            $error = $response->json('error') ?? [];

            Log::error('WhatsApp API Error', [
                'status'  => $response->status(),
                'code'    => $error['code'] ?? null,
                'message' => $error['message'] ?? null,
                'details' => $error['error_data']['details'] ?? null,
                'to'      => $to,
            ]);

            throw new \RuntimeException(
                'Failed to send WhatsApp OTP: ' . ($error['message'] ?? 'Unknown error')
            );
        }

        Log::info("WhatsApp OTP request accepted for {$to}", [
            'wamid' => $response->json('messages.0.id'),
        ]);

        return true;
    }
}