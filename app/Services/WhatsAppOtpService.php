<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppOtpService
{
    protected string $graphVersion;
    protected string $phoneNumberId;
    protected string $systemUserToken;
    protected string $templateName;

    public function __construct()
    {
        $this->graphVersion    = config('services.whatsapp.graph_version', 'v22.0');
        $this->phoneNumberId   = config('services.whatsapp.phone_number_id');
        $this->systemUserToken = config('services.whatsapp.system_user_token');
        $this->templateName    = config('services.whatsapp.otp_template_name', 'otp_verification');
    }

    /**
     * Send an OTP to the given phone number using an approved WhatsApp template.
     *
     * @param string $phoneNumber E.164-ish digits only, e.g. 919876543210
     * @param string $otpCode
     * @return bool
     */
    public function sendOtp(string $phoneNumber, string $otpCode): bool
    {
        $response = Http::withToken($this->systemUserToken)
            ->post("https://graph.facebook.com/{$this->graphVersion}/{$this->phoneNumberId}/messages", [
                'messaging_product' => 'whatsapp',
                'to' => $phoneNumber,
                'type' => 'template',
                'template' => [
                    'name' => $this->templateName,
                    'language' => ['code' => 'en_US'],
                    'components' => [
                        [
                            'type' => 'body',
                            'parameters' => [
                                ['type' => 'text', 'text' => $otpCode],
                            ],
                        ],
                        // Some OTP templates also need the code repeated in a
                        // button (copy-code) component - add here if your
                        // approved template requires it.
                    ],
                ],
            ]);

        if ($response->failed()) {
            Log::error('WhatsApp OTP send failed', [
                'phone' => $phoneNumber,
                'response' => $response->json(),
            ]);
            return false;
        }

        return true;
    }
}