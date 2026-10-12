<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Payment;
use App\Models\IssueReport;
use App\Models\WhatsAppNotification;   // ✅ Naya import
use Inertia\Inertia;

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