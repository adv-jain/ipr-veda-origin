import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            
            <div className="flex min-h-screen">
                {/* ✅ LEFT SIDEBAR */}
                <aside className="w-64 bg-gray-800 text-white p-6">
                    <h2 className="text-2xl font-bold mb-8">IPR Veda</h2>
                    
                    <nav className="space-y-4">
                        <button
                            onClick={() => router.visit('/dashboard')}
                            className="w-full text-left px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                        >
                            📊 Dashboard
                        </button>

                        <button
                            onClick={() => router.visit('/services')}
                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                        >
                            🛠️ Services
                        </button>

                        <button
                            onClick={() => router.visit('/account')}
                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                        >
                            👤 Account
                        </button>

                        <button
                            onClick={() => router.visit('/setting')}
                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                        >
                            ⚙️ Settings
                        </button>
                    </nav>
                </aside>

                {/* MAIN CONTENT */}
                <div className="flex-1 p-8">
                    <h1 className="text-3xl font-bold mb-6">to IPR Veda Dashboard!</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-bold">Total Users</h3>
                            <p className="text-3xl">1,234</p>
                        </div>

                        <div className="bg-green-500 text-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-bold">Revenue</h3>
                            <p className="text-3xl">₹50,000</p>
                        </div>

                        <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-bold">Active Cases</h3>
                            <p className="text-3xl">328</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}