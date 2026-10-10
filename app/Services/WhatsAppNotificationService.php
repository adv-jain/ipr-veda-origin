<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppNotificationService
{
    private function getApiUrl(): string
    {
        $phoneNumberId = config('services.whatsapp.phone_number_id');
        return "https://graph.facebook.com/v17.0/{$phoneNumberId}/messages";
    }

   
    private function getHeaders(): array
    {
        return [
            'Authorization' => 'Bearer ' . config('services.whatsapp.access_token'),
            'Content-Type'  => 'application/json',
        ];
    }

    
    private function formatNumber(string $number): string
    {
        $clean = preg_replace('/[^0-9]/', '', $number);

        if (strlen($clean) === 10) {
            return '91' . $clean;
        }

        return $clean;
    }

   
    private function sendTemplate(string $number, string $templateName, array $bodyParams = [], string $language = 'en_US'): bool
    {
        try {
            $formatted = $this->formatNumber($number);

         
            $components = [];
            if (!empty($bodyParams)) {
                $parameters = array_map(function ($value) {
                    return [
                        'type' => 'text',
                        'text' => (string) $value,
                    ];
                }, $bodyParams);

                $components[] = [
                    'type'       => 'body',
                    'parameters' => $parameters,
                ];
            }

            $payload = [
                'messaging_product' => 'whatsapp',
                'to'                => $formatted,
                'type'              => 'template',
                'template'          => [
                    'name'       => $templateName,
                    'language'   => ['code' => $language],
                    'components' => $components,
                ],
            ];

            $response = Http::withHeaders($this->getHeaders())
                ->post($this->getApiUrl(), $payload);

            if ($response->failed()) {
                Log::error("WhatsApp Notification Failed [{$templateName}]", [
                    'number' => $formatted,
                    'response' => $response->body(),
                ]);
                return false;
            }

            Log::info("WhatsApp Notification Sent [{$templateName}]", [
                'number' => $formatted,
            ]);

            return true;

        } catch (\Exception $e) {
            Log::error("WhatsApp Notification Exception [{$templateName}]", [
                'number'  => $number,
                'message' => $e->getMessage(),
            ]);
            return false;
        }
    }

 
    // public function sendAbandonedOnboarding(string $number, string $userName = 'Customer', string $resumeLink = ''): bool
    // {
    //     return $this->sendTemplate(
    //         $number,
    //         'onboarding_abandoned',   // Meta template name
    //         [
    //             $userName,             // {{1}} — user name
    //             $resumeLink,           // {{2}} — resume link
    //         ]
    //     );
    // }

    public function sendAbandonedOnboarding(string $number, string $userName = 'Customer', string $resumeLink = ''): bool
{
    return $this->sendTemplate(
        $number,
        'hello_world'
    );
}

   
    // public function sendPayLaterReminder(string $number, string $tradeId, string $amount = '', string $payLink = ''): bool
    // {
    //     return $this->sendTemplate(
    //         $number,
    //         'hello_world',     // Meta template name
    //         // [
    //         //     $tradeId,              // {{1}} — trade ID (IPR-2026-0001)
    //         //     $amount,               // {{2}} — amount (₹2359)
    //         //     $payLink,              // {{3}} — payment link
    //         // ]
    //     );
    // }

public function sendPayLaterReminder(string $number, string $tradeId = '', string $amount = '', string $payLink = ''): bool
{
    return $this->sendTemplate(
        $number,
        'hello_world'
    );
}

    }