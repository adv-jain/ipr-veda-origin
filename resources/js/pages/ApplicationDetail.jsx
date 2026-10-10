import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function ApplicationDetail({ application, selectedClasses }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Application ${application.trade_id}`} />

            <div className="flex h-[calc(100vh-65px)] overflow-hidden">

                {/* Sidebar — Same as Dashboard */}
                <aside className="w-64 bg-gray-800 text-white p-6 flex-shrink-0 h-full overflow-y-auto">
                    <nav className="space-y-4">
                        <button onClick={() => router.visit('/dashboard')} className="w-full text-left px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">📊 Home</button>
                        <button onClick={() => router.visit('/services')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">🛠️ Services</button>
                        <button onClick={() => router.visit('/account')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">👤 Account</button>
                        <button onClick={() => router.visit('/setting')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">⚙️ Settings</button>
                        <button onClick={() => router.visit('/consult')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">💬 Consult</button>
                    </nav>
                </aside>

                <main className="flex-1 h-full overflow-y-auto p-8 bg-gray-50">
                    <div className="space-y-6">

                        {/* Back Button */}
                        <button
                            onClick={() => router.visit('/dashboard')}
                            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                        >
                            ← Back to Dashboard
                        </button>

                        {/* Header */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {application.trademark_type}
                                </h1>
                                <span className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
                                    {application.trade_id}
                                </span>
                            </div>

                            <span className={`text-xs px-2.5 py-1 rounded-full ${
                                application.payment_status === 'paid'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-yellow-100 text-yellow-700'
                            }`}>
                                {application.payment_status === 'paid' ? '✓ Paid' : '⏳ Payment Pending'}
                            </span>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Business Activity</p>
                                <p className="text-gray-900">{application.business_activity || '—'}</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Plan</p>
                                <p className="text-gray-900 capitalize">{application.plan || '—'}</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Amount Paid</p>
                                <p className="text-gray-900">₹{application.amount || 0}</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Created On</p>
                                <p className="text-gray-900">
                                    {new Date(application.created_at).toLocaleDateString('en-IN')}
                                </p>
                            </div>

                        </div>

                        {/* Selected Classes */}
                        {selectedClasses && selectedClasses.length > 0 && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-3">
                                    Selected Classes ({selectedClasses.length})
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedClasses.map((cls, idx) => (
                                        <span
                                            key={idx}
                                            className="text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg font-medium"
                                        >
                                            Class {cls}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </main>

            </div>
        </AuthenticatedLayout>
    );
}