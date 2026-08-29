<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('api')->group(function () {
    Route::post('/signup', [AuthController::class, 'signup']);
    Route::post('/verify-otp', [AuthController::class, 'verifyOtp']);
    Route::post('/resend-otp', [AuthController::class, 'resendOtp']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

  
    Route::post('/logout', function (Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    })->name('logout');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/services', function () {
    return Inertia::render('Services');
})->middleware(['auth', 'verified'])->name('services');

Route::get('/account', function () {
    return Inertia::render('Account');
})->middleware(['auth', 'verified'])->name('account');

Route::get('/setting', function () {
    return Inertia::render('Setting');
})->middleware(['auth', 'verified'])->name('setting');

Route::get('/{any}', function () {
    return view('spa');
})->where('any', '^(?!dashboard|profile|services|account|setting).*$');