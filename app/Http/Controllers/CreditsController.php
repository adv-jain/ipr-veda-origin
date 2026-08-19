<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class CreditsController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'title' => 'Credits',

            'last_updated' => '26-01-2024',

            'description' => 'The resouces used on IPR Veda such as images, videos etc are from the following sources. We do not imply ownership on these resources. for removal of any resouces. Please mail info@iprveda.com or reach us out on phone via whatsapp or call on +91 85060-59559',

            'resources' => [
                [
                    'label' => 'created by freepik - www.freepik.com',
                    'url' => 'https://www.freepik.com/',
                ],
                [
                    'label' => 'Republic Vectors by Vecteezy',
                    'url' => 'https://www.vecteezy.com/free-vector/republic',
                ],
            ],
        ]);
    }
}