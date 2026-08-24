<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\DisclaimerController;
use App\Http\Controllers\CreditsController;

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password',[AuthController::class,'forgotpassword']);

Route::post('/verify-otp', [AuthController::class, 'verifyOtp']);
Route::post('/resend-otp', [AuthController::class, 'resendOtp']);

Route::post('/contact', [ContactController::class, 'sendMessage']);
Route::post(
    '/newsletter/subscribe',
    [NewsletterController::class, 'subscribe']
);
Route::post(
    '/disclaimer/contact-click',
    [DisclaimerController::class, 'contactClick']
);

Route::get('/credits', [CreditsController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
  
    Route::get('/me', [AuthController::class, 'me']);

   
    Route::post('/logout', [AuthController::class, 'logout']);

   
    Route::post('/logout-all', [AuthController::class, 'logoutAll']);
});