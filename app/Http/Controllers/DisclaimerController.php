<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DisclaimerClick;
use Illuminate\Http\Request;

class DisclaimerController extends Controller
{
    public function contactClick(Request $request)
    {
        DisclaimerClick::create([
            'page' => $request->input('page', 'disclaimer'),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Contact click tracked successfully.',
        ]);
    }
}