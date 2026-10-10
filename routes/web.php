<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TrademarkApplicationController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SignupOtpController;
use App\Http\Controllers\IssueReportController;
Route::prefix('api')->group(function () {
    Route::post('/signup', [AuthController::class, 'signup']);
    Route::post('/verify-otp', [AuthController::class, 'verifyOtp']);
    Route::post('/resend-otp', [AuthController::class, 'resendOtp']);
     Route::post('/signup-otp', [SignupOtpController::class, 'store']);
    
});

// User — report submit karne ke liye
Route::middleware(['auth'])->group(function () {
    Route::post('/report-issue', [IssueReportController::class, 'store']);
});

// Admin — reports dekhne ke liye
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/reports', [IssueReportController::class, 'index']);
});



Route::middleware(['auth'])->group(function () {
   
    Route::get('/onboarding', [TrademarkApplicationController::class, 'show'])->name('onboarding');
    Route::post('/trademark/save-step', [TrademarkApplicationController::class, 'saveStep']);
    Route::post('/trademark/search-classes', [TrademarkApplicationController::class, 'searchClasses']);
    Route::post('/trademark/create-order', [TrademarkApplicationController::class, 'createOrder']);
    Route::post('/trademark/verify-payment', [TrademarkApplicationController::class, 'verifyPayment']);
    Route::post('/trademark/pay-later', [TrademarkApplicationController::class, 'payLater']);  
    Route::post('/trademark/notify-abandoned', [TrademarkApplicationController::class, 'notifyAbandoned']);
    Route::get('/dashboard/application/{tradeId}', [TrademarkApplicationController::class, 'showApplication'])
        ->name('application.show');

    });

Route::prefix('admin')->group(function () {
    Route::get('/login', [AdminController::class, 'showLoginForm'])->name('admin.login');
    Route::post('/login', [AdminController::class, 'login'])->name('admin.login.post');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::post('/logout', [AdminController::class, 'logout'])->name('admin.logout');
});


Route::post('/home-login', [AuthController::class, 'HomeLogin']);
// Admin Protected Routes 
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::post('/logout', [AdminController::class, 'logout'])->name('admin.logout');
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

Route::middleware(['auth'])->group(function () {
    Route::post('/payment/create-order', [PaymentController::class, 'createOrder']);
    Route::post('/payment/verify', [PaymentController::class, 'verify']);
});

// Temporarily 'auth' aur 'admin' middleware hata dein
// Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');

Route::get('/services', function () {
    return Inertia::render('Services');
})->middleware(['auth', 'verified'])->name('services');

Route::get('/account', function () {
    return Inertia::render('Account');
})->middleware(['auth', 'verified'])->name('account');

Route::get('/setting', function () {
    return Inertia::render('Setting');
})->middleware(['auth', 'verified'])->name('setting');

Route::get('/consult', function () {
    return Inertia::render('Consult');
})->middleware(['auth', 'verified'])->name('consult');


// // TEMPORARY: sirf UI check karne ke liye, baad me wapas auth lagana
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');

// Route::get('/dashboard', function () {
//     if (!auth()->user()->is_onboarded) {
//         return redirect('/onboarding');
//     }
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



// //route get dashboard onboarding
// Route::get('/dashboard',[TrademarkApplicationController::class,'Userdashboard']);


// ✅ Sirf ek /dashboard route rakho
Route::get('/dashboard', [TrademarkApplicationController::class, 'Userdashboard'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::get('/{any}', function () {
    return view('spa');
})->where('any', '^(?!dashboard|profile|services|account|setting|consult|onboarding).*$');