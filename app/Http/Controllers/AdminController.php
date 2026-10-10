<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Payment;
use Inertia\Inertia;
use App\Models\IssueReport;
class AdminController extends Controller
{
    
    public function showLoginForm()
    {
        
        if (Auth::check() && Auth::user()->hasRole('admin')) {
            return redirect()->route('admin.dashboard');
        }

        return Inertia::render('Admin/Login');
    }

    
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
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
                'email' => 'do not have admin access.',
            ]);
        }

        return back()->withErrors([
            'email' => 'Email or password wrong.',
        ]);
    }

    
    public function index()
    {
        $paidUsersCount = Payment::where('status', 'success')->distinct('user_id')->count('user_id');

        $onboardingStats = [
            'step_1' => User::whereNotNull('business_type')->count(),
            'step_2' => User::whereNotNull('company_name')->count(),
            'step_3' => User::whereNotNull('preference')->count(),
            'completed' => User::where('is_onboarded', true)->count(),
        ];

        $users = User::select('id', 'name', 'email', 'business_type', 'company_name', 'preference', 'is_onboarded', 'created_at')
            ->with(['payments' => function($query) {
                $query->select('user_id', 'status', 'amount');
            }])
            ->latest()
            ->paginate(10);

            $reports = IssueReport::with('user:id,name,email')
        ->latest()
        ->get();

    $reportStats = [
        'total'       => IssueReport::count(),
        'pending'     => IssueReport::pending()->count(),
        'in_progress' => IssueReport::inProgress()->count(),
        'resolved'    => IssueReport::resolved()->count(),
    ];

        return Inertia::render('Admin/Dashboard', [
            'paidUsersCount' => $paidUsersCount,
            'onboardingStats' => $onboardingStats,
            'users' => $users,
            'reports' => $reports,       
        'reportStats' => $reportStats,
        ]);
    }

    // 4. Admin Logout Function
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}