import React, { useState, useCallback } from 'react';
import useFacebookSDK from '../hooks/useFacebookSDK';

// TODO: move these to your .env (e.g. import.meta.env.VITE_FB_APP_ID)
const APP_ID = 'YOUR_APP_ID';
const CONFIG_ID = 'YOUR_CONFIG_ID';
const GRAPH_VERSION = 'v22.0';

function WhatsAppConnect() {
    const isSdkReady = useFacebookSDK(APP_ID, GRAPH_VERSION);

    const [status, setStatus] = useState('idle'); // idle | connecting | success | error
    const [error, setError] = useState('');

    const sendCodeToBackend = useCallback(async (code) => {
        try {
            const response = await fetch('/api/whatsapp/exchange-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ code }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw data;
            }

            setStatus('success');
        } catch (err) {
            setStatus('error');
            setError(err.message || 'Could not connect your WhatsApp account.');
        }
    }, []);

    const launchWhatsAppSignup = () => {
        if (!isSdkReady || !window.FB) {
            setError('Still loading, please try again in a moment.');
            return;
        }

        setError('');
        setStatus('connecting');

        window.FB.login(
            function (response) {
                if (response.authResponse && response.authResponse.code) {
                    sendCodeToBackend(response.authResponse.code);
                } else {
                    setStatus('idle');
                    setError('WhatsApp connection was cancelled.');
                }
            },
            {
                config_id: CONFIG_ID,
                response_type: 'code',
                override_default_response_type: true,
                extras: {
                    setup: {},
                    sessionInfoVersion: '3',
                },
            }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                <h2 className="text-5xl font-bold mb-10">
                    <span className="border-b-4 border-yellow-500">
                        Connect WhatsApp
                    </span>
                </h2>

                <p className="text-gray-600 mb-8">
                    Link your WhatsApp Business account to start messaging your customers.
                </p>

                {error && (
                    <div className="mb-5 p-3 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}

                {status === 'success' && (
                    <div className="mb-5 p-3 bg-green-100 text-green-700 rounded">
                        WhatsApp account connected successfully.
                    </div>
                )}

                <button
                    type="button"
                    onClick={launchWhatsAppSignup}
                    disabled={status === 'connecting'}
                    className="bg-yellow-500 hover:bg-yellow-600 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold px-7 py-3 rounded-lg shadow transition"
                >
                    {status === 'connecting' ? 'Connecting…' : 'Connect WhatsApp'}
                </button>

            </div>
        </div>
    );
}

export default WhatsAppConnect;