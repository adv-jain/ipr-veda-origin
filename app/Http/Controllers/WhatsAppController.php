<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WhatsAppController extends Controller
{
    public function exchangeToken(Request $request)
    {
        $request->validate([
            'code' => 'required|string',
        ]);

        $response = Http::get('https://graph.facebook.com/' . config('services.facebook.graph_version', 'v22.0') . '/oauth/access_token', [
            'client_id'     => env('FB_APP_ID'),
            'client_secret' => env('FB_APP_SECRET'),
            'code'          => $request->input('code'),
        ]);

        if ($response->failed()) {
            return response()->json([
                'message' => 'Failed to connect WhatsApp account.',
                'details' => $response->json(),
            ], 422);
        }

        $data = $response->json();

        // TODO: save $data['access_token'] against the authenticated user
        // e.g. $request->user()->update(['wa_access_token' => $data['access_token']]);

        return response()->json([
            'message' => 'WhatsApp account connected successfully.',
        ]);
    }
}