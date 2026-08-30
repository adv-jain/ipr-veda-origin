import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import consultImg from "../../../config/assets/img/consult.svg"

export default function Setting() {
    return (
        <AuthenticatedLayout>
            <Head title="Consult" />
            <div className="flex min-h-screen">
                {/* LEFT SIDEBAR */}
                <aside className="w-64 bg-gray-800 text-white p-6">
                   
                    <nav className="space-y-4">
                        <button onClick={() => router.visit('/dashboard')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">📊 Dashboard</button>
                        <button onClick={() => router.visit('/services')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">🛠️ Services</button>
                        <button onClick={() => router.visit('/account')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">👤 Account</button>
                        <button onClick={() => router.visit('/setting')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">⚙️ Settings</button>
                        <button onClick={() => router.visit('/consult')} className="w-full text-left px-4 py-2 rounded-lg  hover:bg-gray-600 transition">💬 Consult</button>
                    </nav>
                </aside>

                {/* MAIN CONTENT */}
                <div className="flex-1 p-8">
                    <h1 className="text-3xl font-bold mb-6">Setting</h1>
                    
                   
                </div>
            </div>
        </AuthenticatedLayout>
    );
}