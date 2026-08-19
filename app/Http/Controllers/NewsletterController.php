<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        try {
            $validated = $request->validate([
                'email' => [
                    'required',
                    'email',
                    'max:255',
                ],
            ]);

            $existingSubscriber = NewsletterSubscriber::where(
                'email',
                $validated['email']
            )->first();

            if ($existingSubscriber) {
                return response()->json([
                    'success' => true,
                    'message' => 'You are already subscribed to our newsletter.',
                ]);
            }

            NewsletterSubscriber::create([
                'email' => $validated['email'],
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Successfully subscribed to our newsletter!',
            ], 201);

        } catch (ValidationException $e) {

            return response()->json([
                'success' => false,
                'message' => 'Please enter a valid email address.',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again later.',
            ], 500);
        }
    }
}