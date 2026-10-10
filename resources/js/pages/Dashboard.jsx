import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router } from '@inertiajs/react';
import ReportIssueModal from '@/Components/ReportIssueModal';
import { useState } from 'react';

export default function Dashboard() {
    const { applications } = usePage().props;
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showReportModal, setShowReportModal] = useState(false);

    // Filter logic
    const filteredApplications = applications.filter((app) => {
        const matchesSearch =
            app.trade_id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.trademark_type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.business_activity?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTab =
            activeTab === 'all' ||
            (activeTab === 'ongoing' && app.payment_status === 'paid') ||
            (activeTab === 'pending' && app.payment_status === 'pending') ||
            (activeTab === 'completed' && app.payment_status === 'completed') ||
            (activeTab === 'closed' && app.payment_status === 'closed');

        return matchesSearch && matchesTab;
    });

    // Count for tabs
    const counts = {
        all: applications.length,
        ongoing: applications.filter((a) => a.payment_status === 'paid').length,
        pending: applications.filter((a) => a.payment_status === 'pending').length,
        completed: applications.filter((a) => a.payment_status === 'completed').length,
        closed: applications.filter((a) => a.payment_status === 'closed').length,
    };

    return (
        <AuthenticatedLayout>
            <Head title="My Services - IPR Veda" />

            <div className="flex h-[calc(100vh-65px)] overflow-hidden bg-gray-50">

                {/* Sidebar — UNCHANGED */}
                <aside className="w-64 bg-[#0f2942] text-white flex-shrink-0 h-full overflow-y-auto">
                    {/* Logo Area */}
                    <div className="px-6 py-5 border-b border-white/10">
                        <span className="text-lg font-bold">
                            <span className="bg-yellow-400 text-[#0f2942] px-1">IPR</span>
                            <span className="ml-1">Veda</span>
                        </span>
                    </div>

                    <nav className="p-4 space-y-1">
                        <button
                            onClick={() => router.visit('/dashboard')}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/10 text-white font-medium transition"
                        >
                            <span>🏠</span> Home
                        </button>
                        <button
                            onClick={() => router.visit('/services')}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 transition"
                        >
                            <span>🛠️</span> Services
                        </button>
                        <button
                            onClick={() => router.visit('/account')}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 transition"
                        >
                            <span>👤</span> Account
                        </button>
                        <button
                            onClick={() => router.visit('/setting')}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 transition"
                        >
                            <span>⚙️</span> Settings
                        </button>
                        <button
                            onClick={() => router.visit('/consult')}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 transition"
                        >
                            <span>💬</span> Consult
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 h-full overflow-y-auto bg-[#f7f9fb]">

                    {/* Top Bar */}
                    <div className="bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-end gap-4">
                        <button
    onClick={() => setShowReportModal(true)}
    className="text-gray-500 hover:text-gray-800 text-sm flex items-center gap-1"
>
    ⚠️ Report an issue
</button>
                        <button className="text-gray-500 hover:text-gray-800 text-xl relative">
                            🔔
                        </button>
                        <button className="text-gray-500 hover:text-gray-800 text-xl relative">
                            🛒
                        </button>
                        <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                            👤
                        </button>
                    </div>

                    <div className="p-8 space-y-6">

                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">My Services</h1>
                                <p className="text-gray-500 mt-1 text-sm">
                                    Everything you have bought from IPR Veda, across your whole account.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Search */}
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                                    <input
                                        type="text"
                                        placeholder="Search service or trade id"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 pr-4 py-2 w-72 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    />
                                </div>

                                <button
                                    onClick={() => router.visit('/onboarding')}
                                    className="bg-[#0f2942] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0a1e30] transition text-sm"
                                >
                                    + New Services
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex items-center gap-2 border-b border-gray-200">
                            {[
                                { key: 'all', label: `All (${counts.all})` },
                                { key: 'pending', label: `Awaiting payment (${counts.pending})` },
                                { key: 'ongoing', label: `Ongoing (${counts.ongoing})` },
                                { key: 'completed', label: `Completed (${counts.completed})` },
                                { key: 'closed', label: `Closed / Refunded (${counts.closed})` },
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-4 py-2 text-sm font-medium transition relative ${
                                        activeTab === tab.key
                                            ? 'text-[#0f2942] border-b-2 border-[#0f2942]'
                                            : 'text-gray-500 hover:text-gray-800'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Applications List */}
                        {filteredApplications.length === 0 ? (
                            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                                <p className="text-gray-500 mb-4">
                                    {applications.length === 0
                                        ? "You don't have any trademark applications yet."
                                        : 'No services match your filter.'}
                                </p>
                                {applications.length === 0 && (
                                    <button
                                        onClick={() => router.visit('/onboarding')}
                                        className="bg-[#0f2942] text-white px-6 py-2 rounded-lg hover:bg-[#0a1e30] transition"
                                    >
                                        Start Onboarding
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredApplications.map((app) => (
                                    <div
                                        key={app.id}
                                        className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
                                    >
                                        {/* Card Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            {/* <div>
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    {app.trademark_type || 'Trademark Application'}
                                                </h3>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Trade ID: <span className="font-semibold text-gray-700">{app.trade_id || 'Not assigned'}</span>
                                                    {' • '}
                                                    Created on {app.created_at}
                                                </p>
                                            </div> */}

                                            <span
                                                className={`text-xs px-3 py-1 rounded-full font-medium ${
                                                    app.payment_status === 'paid'
                                                        ? 'bg-green-100 text-green-700'
                                                        : app.payment_status === 'pending'
                                                        ? 'bg-yellow-100 text-yellow-700'
                                                        : 'bg-gray-100 text-gray-700'
                                                }`}
                                            >
                                                {app.payment_status === 'paid'
                                                    ? '✓ In Progress'
                                                    : app.payment_status === 'pending'
                                                    ? '⏳ Awaiting Payment'
                                                    : app.payment_status || 'Pending'}
                                            </span>
                                        </div>

                                        {/* Business Activity Note */}
                                        {app.business_activity && (
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 mb-4">
                                                <p className="text-sm text-yellow-800">
                                                    {app.business_activity}
                                                </p>
                                            </div>
                                        )}

                                        {/* Current Stage */}
                                        <div className="bg-gray-50 rounded-lg px-4 py-3 flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-semibold">Current Stage</p>
                                                <p className="text-sm font-bold text-[#0f2942] mt-0.5">
                                                    {app.payment_status === 'paid'
                                                        ? 'Application Submitted'
                                                        : 'Initial Payment Pending'}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Our experts will process the application further and reach you if any details are required.
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    if (app.trade_id) {
                                                        router.visit(`/dashboard/application/${app.trade_id}`);
                                                    }
                                                }}
                                                disabled={!app.trade_id}
                                                className={`px-5 py-2 rounded-lg font-medium text-sm transition whitespace-nowrap ml-4 ${
                                                    app.trade_id
                                                        ? 'bg-[#0f2942] text-white hover:bg-[#0a1e30]'
                                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                }`}
                                            >
                                                Track status →
                                            </button>
                                        </div>

                                        {/* Plan + Amount Footer */}
                                        <div className="flex items-center justify-between text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
                                            <span>Plan: <span className="font-semibold text-gray-700 capitalize">{app.plan}</span></span>
                                            <span>Amount: <span className="font-semibold text-gray-700">₹{app.total_paid || 0}</span></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </main>
                {/* Report Issue Modal */}
{showReportModal && (
    <ReportIssueModal onClose={() => setShowReportModal(false)} />
)}

            </div>
        </AuthenticatedLayout>
    );
}