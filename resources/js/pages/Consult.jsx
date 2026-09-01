import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import consultImg from "../../../config/assets/img/consult.svg"

export default function Consult() {
    return (
        <AuthenticatedLayout>
           
            <div className="flex min-h-screen">
                
                <aside className="w-64 bg-gray-800 text-white p-6">
                    
                    <nav className="space-y-4">
                        <button onClick={() => router.visit('/dashboard')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">📊 Dashboard</button>
                        <button onClick={() => router.visit('/services')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">🛠️ Services</button>
                        <button onClick={() => router.visit('/account')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">👤 Account</button>
                        <button onClick={() => router.visit('/setting')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">⚙️ Settings</button>
                        <button onClick={() => router.visit('/consult')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-600 transition">💬 Consult</button>
                    </nav>
                </aside>

                
                <div className="flex-1 p-8">
                    <h1 className="text-3xl font-bold mb-6">Consult with our Experts</h1>
                    <p className="text-gray-600 mb-6">Book a consultation session for legal or IPR-related advice.</p>

                    <div className="bg-white shadow rounded-lg p-6 max-w-xl">
                        <h3 className="text-xl font-bold mb-4">Request a Consultation</h3>
                       <img src='consultImg' alt="consultImg"/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}