import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Dashboard({
    paidUsersCount,
    onboardingStats,
    users,
    reports = [],
    reportStats = {},
    notifications = [],
    notificationStats = {},
}) {
    const [activeTab, setActiveTab] = useState('users');
    const [statusFilter, setStatusFilter] = useState('all');
    const [waStatusFilter, setWaStatusFilter] = useState('all');
    const [waReasonFilter, setWaReasonFilter] = useState('all');
    const [selectedError, setSelectedError] = useState(null);

    const handleLogout = () => {
        router.post('/admin/logout');
    };

    const handleStatusUpdate = (reportId, newStatus) => {
        router.patch(`/admin/reports/${reportId}`, {
            status: newStatus,
        }, {
            preserveScroll: true,
        });
    };

    const filteredReports = reports.filter((r) => {
        if (statusFilter === 'all') return true;
        return r.status === statusFilter;
    });

    const filteredNotifications = notifications.filter((n) => {
        const matchesStatus = waStatusFilter === 'all' || n.status === waStatusFilter;
        const matchesReason = waReasonFilter === 'all' || n.reason === waReasonFilter;
        return matchesStatus && matchesReason;
    });

    const formatWaNumber = (num) => {
        if (!num) return '—';
        const clean = String(num).replace(/[^0-9]/g, '');
        if (clean.length === 12 && clean.startsWith('91')) {
            return `+91 ${clean.slice(2, 7)} ${clean.slice(7)}`;
        }
        return `+${clean}`;
    };

    const getReasonBadge = (reason) => {
        switch (reason) {
            case 'abandoned_onboarding': return 'bg-amber-100 text-amber-800';
            case 'pay_later':            return 'bg-blue-100 text-blue-800';
            case 'otp':                  return 'bg-purple-100 text-purple-800';
            case 'welcome':              return 'bg-emerald-100 text-emerald-800';
            default:                     return 'bg-slate-100 text-slate-700';
        }
    };

    const getReasonLabel = (reason) => {
        switch (reason) {
            case 'abandoned_onboarding': return 'Abandoned';
            case 'pay_later':            return 'Pay Later';
            case 'otp':                  return 'OTP';
            case 'welcome':              return 'Welcome';
            default:                     return reason || 'Other';
        }
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen text-slate-800">

            {/* Header */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
                    <p className="text-xs text-slate-500">
                        Overview of user registrations, onboarding & notifications
                    </p>
                </div>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-semibold rounded-lg border border-red-200 transition duration-150 flex items-center gap-2"
                >
                    Logout
                </button>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-slate-200">
                <button
                    onClick={() => setActiveTab('users')}
                    className={`px-4 py-2.5 text-sm font-medium transition relative ${
                        activeTab === 'users'
                            ? 'text-slate-900 border-b-2 border-slate-900'
                            : 'text-slate-500 hover:text-slate-800'
                    }`}
                >
                    👥 Users & Onboarding
                </button>
                <button
                    onClick={() => setActiveTab('reports')}
                    className={`px-4 py-2.5 text-sm font-medium transition relative flex items-center gap-2 ${
                        activeTab === 'reports'
                            ? 'text-slate-900 border-b-2 border-slate-900'
                            : 'text-slate-500 hover:text-slate-800'
                    }`}
                >
                    ⚠️ Issue Reports
                    {reportStats.pending > 0 && (
                        <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
                            {reportStats.pending}
                        </span>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('whatsapp')}
                    className={`px-4 py-2.5 text-sm font-medium transition relative flex items-center gap-2 ${
                        activeTab === 'whatsapp'
                            ? 'text-slate-900 border-b-2 border-slate-900'
                            : 'text-slate-500 hover:text-slate-800'
                    }`}
                >
                    📱 WhatsApp Logs
                    {notificationStats.today > 0 && (
                        <span className="bg-emerald-500 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
                            {notificationStats.today}
                        </span>
                    )}
                </button>
            </div>

            {/* ===================== TAB 1: USERS ===================== */}
            {activeTab === 'users' && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Total Paid Users</p>
                            <h2 className="text-3xl font-extrabold text-emerald-600 mt-2">{paidUsersCount}</h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Step 1 Filled (Business Type)</p>
                            <h2 className="text-2xl font-bold text-amber-500 mt-2">{onboardingStats.step_1} Users</h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Step 2 Filled (Company Name)</p>
                            <h2 className="text-2xl font-bold text-blue-500 mt-2">{onboardingStats.step_2} Users</h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Fully Onboarded</p>
                            <h2 className="text-2xl font-bold text-indigo-600 mt-2">{onboardingStats.completed} Users</h2>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100">
                            <h2 className="text-lg font-semibold text-slate-800">User Onboarding & Selection Details</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 text-slate-600 uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-3">User</th>
                                        <th className="px-6 py-3">Business Type</th>
                                        <th className="px-6 py-3">Company Name</th>
                                        <th className="px-6 py-3">Preference</th>
                                        <th className="px-6 py-3">Onboard Status</th>
                                        <th className="px-6 py-3">Payment</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {users.data.map((user) => (
                                        <tr key={user.id} className="hover:bg-slate-50/50">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-slate-900">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-slate-700">
                                                {user.business_type || <span className="text-slate-400 font-normal">Not Selected</span>}
                                            </td>
                                            <td className="px-6 py-4 text-slate-700">
                                                {user.company_name || <span className="text-slate-400">N/A</span>}
                                            </td>
                                            <td className="px-6 py-4 text-slate-700">
                                                {user.preference ? (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
                                                        {user.preference}
                                                    </span>
                                                ) : (
                                                    <span className="text-slate-400">None</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.is_onboarded ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                                        Completed
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                                        Incomplete
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.payments?.some(p => p.status === 'success') ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        Paid
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                                        Unpaid
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* ===================== TAB 2: REPORTS ===================== */}
            {activeTab === 'reports' && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Total Reports</p>
                            <h2 className="text-3xl font-extrabold text-slate-800 mt-2">{reportStats.total || 0}</h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Pending</p>
                            <h2 className="text-2xl font-bold text-amber-500 mt-2">{reportStats.pending || 0}</h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">In Progress</p>
                            <h2 className="text-2xl font-bold text-blue-500 mt-2">{reportStats.in_progress || 0}</h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Resolved</p>
                            <h2 className="text-2xl font-bold text-emerald-600 mt-2">{reportStats.resolved || 0}</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        {[
                            { key: 'all', label: 'All' },
                            { key: 'pending', label: 'Pending' },
                            { key: 'in_progress', label: 'In Progress' },
                            { key: 'resolved', label: 'Resolved' },
                        ].map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setStatusFilter(f.key)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                                    statusFilter === f.key
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100">
                            <h2 className="text-lg font-semibold text-slate-800">Issue Reports</h2>
                            <p className="text-xs text-slate-500 mt-1">User-submitted issues from the dashboard</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 text-slate-600 uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-3">User</th>
                                        <th className="px-6 py-3">Subject</th>
                                        <th className="px-6 py-3">Description</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredReports.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                                                No reports found.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredReports.map((report) => (
                                            <tr key={report.id} className="hover:bg-slate-50/50">
                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-slate-900">
                                                        {report.user?.name || 'Unknown'}
                                                    </div>
                                                    <div className="text-xs text-slate-500">
                                                        {report.user?.email || '—'}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-medium text-slate-700 max-w-[180px]">
                                                    {report.subject}
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 max-w-[300px]">
                                                    <div className="line-clamp-2" title={report.description}>
                                                        {report.description}
                                                    </div>
                                                    {report.admin_notes && (
                                                        <div className="text-xs text-blue-600 mt-1">
                                                            📝 {report.admin_notes}
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                        report.status === 'pending'
                                                            ? 'bg-amber-100 text-amber-800'
                                                            : report.status === 'in_progress'
                                                            ? 'bg-blue-100 text-blue-800'
                                                            : 'bg-emerald-100 text-emerald-800'
                                                    }`}>
                                                        {report.status === 'pending' ? 'Pending'
                                                         : report.status === 'in_progress' ? 'In Progress'
                                                         : 'Resolved'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">
                                                    {new Date(report.created_at).toLocaleDateString('en-IN', {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <select
                                                        value={report.status}
                                                        onChange={(e) => handleStatusUpdate(report.id, e.target.value)}
                                                        className="text-xs border border-slate-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="in_progress">In Progress</option>
                                                        <option value="resolved">Resolved</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* ===================== TAB 3: WHATSAPP LOGS ===================== */}
            {activeTab === 'whatsapp' && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Total Sent</p>
                            <h2 className="text-3xl font-extrabold text-slate-800 mt-2">
                                {notificationStats.total || 0}
                            </h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Delivered</p>
                            <h2 className="text-2xl font-bold text-emerald-600 mt-2">
                                {notificationStats.sent || 0}
                            </h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Failed</p>
                            <h2 className="text-2xl font-bold text-red-500 mt-2">
                                {notificationStats.failed || 0}
                            </h2>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Today</p>
                            <h2 className="text-2xl font-bold text-blue-600 mt-2">
                                {notificationStats.today || 0}
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-slate-500 uppercase">Status:</span>
                            {[
                                { key: 'all', label: 'All' },
                                { key: 'sent', label: 'Sent' },
                                { key: 'failed', label: 'Failed' },
                            ].map((f) => (
                                <button
                                    key={f.key}
                                    onClick={() => setWaStatusFilter(f.key)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                                        waStatusFilter === f.key
                                            ? 'bg-slate-900 text-white'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                    }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-slate-500 uppercase">Reason:</span>
                            {[
                                { key: 'all', label: 'All' },
                                { key: 'abandoned_onboarding', label: 'Abandoned' },
                                { key: 'pay_later', label: 'Pay Later' },
                            ].map((f) => (
                                <button
                                    key={f.key}
                                    onClick={() => setWaReasonFilter(f.key)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                                        waReasonFilter === f.key
                                            ? 'bg-slate-900 text-white'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                    }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100">
                            <h2 className="text-lg font-semibold text-slate-800">WhatsApp Notification Logs</h2>
                            <p className="text-xs text-slate-500 mt-1">
                                Har notification ka record — kis user ko, kab, kyun gaya
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 text-slate-600 uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-3">User</th>
                                        <th className="px-6 py-3">Trade ID</th>
                                        <th className="px-6 py-3">Number</th>
                                        <th className="px-6 py-3">Reason</th>
                                        <th className="px-6 py-3">Template</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredNotifications.length === 0 ? (
                                        <tr>
                                            <td colSpan="8" className="px-6 py-12 text-center text-slate-400">
                                                No WhatsApp notifications found.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredNotifications.map((n) => (
                                            <tr key={n.id} className="hover:bg-slate-50/50">
                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-slate-900">
                                                        {n.user?.name || 'Unknown'}
                                                    </div>
                                                    <div className="text-xs text-slate-500">
                                                        {n.user?.email || '—'}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {n.application?.trade_id ? (
                                                        <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                                                            {n.application.trade_id}
                                                        </span>
                                                    ) : (
                                                        <span className="text-slate-400">—</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-slate-700 font-mono text-xs whitespace-nowrap">
                                                    {formatWaNumber(n.number)}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getReasonBadge(n.reason)}`}>
                                                        {getReasonLabel(n.reason)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-xs text-slate-600 font-mono">
                                                    {n.template_name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {n.status === 'sent' ? (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                                            ✓ Sent
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                            ✕ Failed
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">
                                                    {new Date(n.created_at).toLocaleString('en-IN', {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                    })}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {n.status === 'failed' && n.error_message ? (
                                                        <button
                                                            onClick={() => setSelectedError(n)}
                                                            className="text-xs text-red-600 hover:text-red-800 underline font-medium"
                                                        >
                                                            View error
                                                        </button>
                                                    ) : (
                                                        <span className="text-slate-300">—</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* ============= ERROR MODAL ============= */}
            {selectedError && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedError(null)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedError(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
                        >
                            ×
                        </button>

                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                            WhatsApp API Error
                        </h3>
                        <p className="text-xs text-slate-500 mb-4">
                            {formatWaNumber(selectedError.number)} • {selectedError.template_name}
                        </p>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-h-80 overflow-y-auto">
                            <pre className="text-xs text-red-800 whitespace-pre-wrap break-words">
                                {selectedError.error_message}
                            </pre>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}