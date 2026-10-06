import React from 'react';
import { router } from '@inertiajs/react';

export default function Dashboard({ paidUsersCount, onboardingStats, users }) {
    
    // Logout Handler Function
    const handleLogout = () => {
        router.post('/admin/logout');
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen text-slate-800">
            {/* Header with Logout Button */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
                    <p className="text-xs text-slate-500">Overview of user registrations & onboarding status</p>
                </div>
                
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-semibold rounded-lg border border-red-200 transition duration-150 flex items-center gap-2"
                >
                    Logout
                </button>
            </div>

            {/* Metrics Breakdown Cards */}
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

            {/* Detailed User Table */}
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
                                        {user.business_type ? user.business_type : <span className="text-slate-400 font-normal">Not Selected</span>}
                                    </td>

                                    <td className="px-6 py-4 text-slate-700">
                                        {user.company_name ? user.company_name : <span className="text-slate-400">N/A</span>}
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
                                        {user.payments && user.payments.length > 0 && user.payments.some(p => p.status === 'success') ? (
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
        </div>
    );
}