<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        // ✅ API routes ko stateful banayein (Session/Cookies save karne ke liye)
        $middleware->statefulApi();

        // ✅ React se aane wali POST request ke liye CSRF token check ko bypass karein
        $middleware->validateCsrfTokens(except: [
            'api/verify-otp',
            'api/signup-otp',
            'api/request-otp',
        ]);

        // ✅ Guest user ko /login (React SPA route) par redirect karo,
        // Laravel ke named 'login' route ko dhoondne ki jagah
        $middleware->redirectGuestsTo('/login');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->shouldRenderJsonWhen(
            fn (Request $request) => $request->is('api/*') || $request->expectsJson(),
        );
    })->create();