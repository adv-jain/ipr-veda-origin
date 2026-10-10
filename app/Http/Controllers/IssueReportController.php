<?php

namespace App\Http\Controllers;

use App\Models\IssueReport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IssueReportController extends Controller
{
    /**
     * ============================================
     * USER SIDE — Report submit karna
     * ============================================
     */
   public function store(Request $request)
{
    $validated = $request->validate([
        'subject'     => 'required|string|max:255',
        'description' => 'required|string|max:2000',
    ]);

    IssueReport::create([
        'user_id'     => $request->user()->id,
        'subject'     => $validated['subject'],
        'description' => $validated['description'],
        'status'      => IssueReport::STATUS_PENDING,
    ]);

    return back()->with('success', 'Your issue has been reported successfully.');
}
    /**
     * ============================================
     * ADMIN SIDE — Saari reports fetch karna
     * ============================================
     */
    public function index(Request $request)
    {
        // Filters (optional)
        $statusFilter = $request->query('status'); // pending / in_progress / resolved
        $search       = $request->query('search');

        $query = IssueReport::with('user:id,name,email')
            ->latest();

        // Status filter
        if ($statusFilter && in_array($statusFilter, IssueReport::statuses())) {
            $query->where('status', $statusFilter);
        }

        // Search filter (subject or description ya user name)
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('subject', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhereHas('user', function ($uq) use ($search) {
                      $uq->where('name', 'like', "%{$search}%")
                         ->orWhere('email', 'like', "%{$search}%");
                  });
            });
        }

        $reports = $query->get();

        // Stats for admin dashboard
        $stats = [
            'total'       => IssueReport::count(),
            'pending'     => IssueReport::pending()->count(),
            'in_progress' => IssueReport::inProgress()->count(),
            'resolved'    => IssueReport::resolved()->count(),
        ];

        return Inertia::render('Admin/Reports', [
            'reports' => $reports,
            'stats'   => $stats,
            'filters' => [
                'status' => $statusFilter,
                'search' => $search,
            ],
        ]);
    }

    /**
     * ============================================
     * ADMIN SIDE — Status update karna
     * ============================================
     */
    public function update(Request $request, $id)
    {
        // 1. Validate
        $validated = $request->validate([
            'status'      => 'required|in:pending,in_progress,resolved',
            'admin_notes' => 'nullable|string|max:2000',
        ]);

        // 2. Find report
        $report = IssueReport::findOrFail($id);

        // 3. Update
        $report->update([
            'status'      => $validated['status'],
            'admin_notes' => $validated['admin_notes'] ?? $report->admin_notes,
        ]);

        // 4. Return
        return response()->json([
            'status'  => 'success',
            'message' => 'Report updated successfully.',
            'report'  => $report,
        ]);
    }
}