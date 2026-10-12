<?php

namespace App\Services;

use App\Models\WhatsAppNotification;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppNotificationService
{
    /**
     * Current context — jo har notification ke saath log hoga
     */
    private array $context = [
        'user_id'        => null,
        'application_id' => null,
        'reason'         => WhatsAppNotification::REASON_OTHER,
    ];

    /**
     * Context set karo (controller se call karo)
     */
    public function withContext(array $context): self
    {
        $this->context = array_merge($this->context, $context);
        return $this;
    }

    /**
     * Meta API URL
     */
    private function getApiUrl(): string
    {
        $phoneNumberId = config('services.whatsapp.phone_number_id');
        return "https://graph.facebook.com/v17.0/{$phoneNumberId}/messages";
    }

    /**
     * Auth headers
     */
    private function getHeaders(): array
    {
        return [
            'Authorization' => 'Bearer ' . config('services.whatsapp.access_token'),
            'Content-Type'  => 'application/json',
        ];
    }

    /**
     * Indian number format karo
     */
    private function formatNumber(string $number): string
    {
        $clean = preg_replace('/[^0-9]/', '', $number);
        if (strlen($clean) === 10) {
            return '91' . $clean;
        }
        return $clean;
    }

    /**
     * ==================================================
     * Generic — koi bhi template bhejne ke liye
     * + DB mein log karo (success/failure)
     * ==================================================
     */
    private function sendTemplate(
        string $number,
        string $templateName,
        array $bodyParams = [],
        string $language = 'en_US'
    ): bool {
        $formatted = $this->formatNumber($number);
        $status = 'failed';
        $errorMessage = null;

        try {
            // Build components
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

            if ($response->successful()) {
                $status = 'sent';
                Log::info("WhatsApp Notification Sent [{$templateName}]", [
                    'number' => $formatted,
                ]);
            } else {
                $errorMessage = $response->body();
                Log::error("WhatsApp Notification Failed [{$templateName}]", [
                    'number'   => $formatted,
                    'response' => $errorMessage,
                ]);
            }

        } catch (\Exception $e) {
            $errorMessage = $e->getMessage();
            Log::error("WhatsApp Notification Exception [{$templateName}]", [
                'number'  => $formatted,
                'message' => $errorMessage,
            ]);
        }

        // ✅ Har case mein DB mein log karo
        $this->logNotification([
            'number'        => $formatted,
            'template_name' => $templateName,
            'status'        => $status,
            'error_message' => $errorMessage,
        ]);

        return $status === 'sent';
    }

    /**
     * ==================================================
     * DB mein notification log karo
     * ==================================================
     */
    private function logNotification(array $data): void
    {
        try {
            WhatsAppNotification::create([
                'user_id'        => $this->context['user_id'],
                'application_id' => $this->context['application_id'],
                'number'         => $data['number'],
                'reason'         => $this->context['reason'] ?? WhatsAppNotification::REASON_OTHER,
                'template_name'  => $data['template_name'],
                'status'         => $data['status'],
                'error_message'  => $data['error_message'] ?? null,
            ]);
        } catch (\Exception $e) {
            // Logging fail ho to bhi main flow na ruke
            Log::error('Failed to log WhatsApp notification', [
                'error' => $e->getMessage(),
                'data'  => $data,
            ]);
        }
    }

    /**
     * ==================================================
     * SITUATION 1: User ne onboarding chhod diya
     * ==================================================
     */
    public function sendAbandonedOnboarding(
        string $number,
        string $userName = 'Customer',
        string $resumeLink = ''
    ): bool {
        return $this->sendTemplate(
            $number,
            'hello_world',   // 🧪 TESTING (baad mein 'onboarding_abandoned')
            // [
            //     $userName,
            //     $resumeLink,
            // ]
        );
    }

    /**
     * ==================================================
     * SITUATION 2: User ne Pay Later click kiya
     * ==================================================
     */
    public function sendPayLaterReminder(
        string $number,
        string $tradeId = '',
        string $amount = '',
        string $payLink = ''
    ): bool {
        return $this->sendTemplate(
            $number,
            'hello_world',   // 🧪 TESTING (baad mein 'pay_later_reminder')
            // [
            //     $tradeId,
            //     $amount,
            //     $payLink,
            // ]
        );
    }
}