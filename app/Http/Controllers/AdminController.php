<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Payment;
use App\Models\IssueReport;
use App\Models\WhatsAppNotification;   
use Inertia\Inertia;
use App\Models\TrademarkApplication;

class AdminController extends Controller
{
    /**
     * Show admin login form
     */
    public function showLoginForm()
    {
        if (Auth::check() && Auth::user()->hasRole('admin')) {
            return redirect()->route('admin.dashboard');
        }

        return Inertia::render('Admin/Login');
    }

    /**
     * Admin login
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if ($user->hasRole('admin') || $user->role === 'admin') {
                $request->session()->regenerate();
                return redirect()->route('admin.dashboard');
            }

            Auth::logout();
            return back()->withErrors([
                'email' => 'You do not have admin access.',
            ]);
        }

        return back()->withErrors([
            'email' => 'Email or password wrong.',
        ]);
    }

    /**
     * Admin Dashboard — Users + Reports + WhatsApp Logs
     */
    public function index()
    {
        // ============================================
        // 1. USERS TAB
        // ============================================
        $paidUsersCount = Payment::where('status', 'success')
            ->distinct('user_id')
            ->count('user_id');

        $onboardingStats = [
            'step_1'    => User::whereNotNull('business_type')->count(),
            'step_2'    => User::whereNotNull('company_name')->count(),
            'step_3'    => User::whereNotNull('preference')->count(),
            'completed' => User::where('is_onboarded', true)->count(),
        ];

        $users = User::select(
                'id', 'name', 'email', 'business_type',
                'company_name', 'preference', 'is_onboarded', 'created_at'
            )
            ->with(['payments' => function ($query) {
                $query->select('user_id', 'status', 'amount');
            }])
            ->latest()
            ->paginate(10);

        // ============================================
        // 2. ISSUE REPORTS TAB
        // ============================================
        $reports = IssueReport::with('user:id,name,email')
            ->latest()
            ->get();

        $reportStats = [
            'total'       => IssueReport::count(),
            'pending'     => IssueReport::pending()->count(),
            'in_progress' => IssueReport::inProgress()->count(),
            'resolved'    => IssueReport::resolved()->count(),
        ];

        // ============================================
        // 3. WHATSAPP LOGS TAB (NEW)
        // ============================================
        $notifications = WhatsAppNotification::with([
                'user:id,name,email',
                'application:id,trade_id',
            ])
            ->latest()
            ->limit(100)
            ->get();

        $notificationStats = [
            'total'  => WhatsAppNotification::count(),
            'sent'   => WhatsAppNotification::where('status', 'sent')->count(),
            'failed' => WhatsAppNotification::where('status', 'failed')->count(),
            'today'  => WhatsAppNotification::whereDate('created_at', today())->count(),
        ];
        $servicePurchases = TrademarkApplication::with('user')
        ->whereNotNull('service_id')                    // sirf service purchases
        ->orderBy('created_at', 'desc')
        ->get()
        ->map(function ($app) {
            return [
                'id'             => $app->id,
                'user_name'      => $app->user?->name ?? 'Unknown',
                'user_email'     => $app->user?->email ?? '—',
                'service_id'     => $app->service_id,
                'service_title'  => $app->service_title ?? $app->trademark_type,
                'amount'         => $app->amount,
                'payment_status' => $app->payment_status,
                'trade_id'       => $app->trade_id,
                'created_at'     => $app->created_at->format('d M Y, h:i A'),
            ];
             });
              $serviceStats = [
        'total'    => $servicePurchases->count(),
        'paid'     => $servicePurchases->where('payment_status', 'paid')->count(),
        'pending'  => $servicePurchases->where('payment_status', 'pending')->count(),
        'revenue'  => $servicePurchases->where('payment_status', 'paid')->sum('amount'),
    ];

        // ============================================
        // 4. Pass to Inertia
        // ============================================
        return Inertia::render('Admin/Dashboard', [
            // Users tab
            'paidUsersCount'  => $paidUsersCount,
            'onboardingStats' => $onboardingStats,
            'users'           => $users,

            // Issue Reports tab
            'reports'         => $reports,
            'reportStats'     => $reportStats,

            // WhatsApp Logs tab
            'notifications'     => $notifications,
            'notificationStats' => $notificationStats,
            //services
            'servicePurchases'  => $servicePurchases, 
              'serviceStats'      => $serviceStats,
        ]);
    }

    /**
     * Admin logout
     */
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}