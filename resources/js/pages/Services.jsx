import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import iprvedatrademark from '../../../config/assets/img/iprvedatrademark.jpg'
import iprcopyright from '../../../config/assets/img/iprcopyright.jpg'
import iprpatent from '../../../config/assets/img/iprpatend.jpg'
import iprmsme from '../../../config/assets/img/iprmems.jpg'
import iprvedatrademarkreg from '../../../config/assets/img/iprtrademarkreg.jpg'
import iprobject from '../../../config/assets/img/iprobject.jpg'
export default function Services() {
    return (
        <AuthenticatedLayout>
            <Head title="Services" />
            <div className="flex min-h-screen">
                <aside className="w-64 bg-gray-800 text-white p-6">
                    <h2 className="text-2xl font-bold mb-8">IPR Veda</h2>
                    <nav className="space-y-4">
                        <button onClick={() => router.visit('/dashboard')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">📊 Dashboard</button>
                        <button onClick={() => router.visit('/services')} className="w-full text-left px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">🛠️ Services</button>
                        <button onClick={() => router.visit('/account')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">👤 Account</button>
                        <button onClick={() => router.visit('/setting')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">⚙️ Settings</button>
                    </nav>
                </aside>
                <div className="flex-1 p-8">
                    <div>   
                    <img src={iprvedatrademark}/>
                    <h1 className="text-3xl font-bold mb-6">Trademarks</h1>
                    <p className="text-gray-600">Your brand's shield: Distinctive signs protecting your ideas from copycats.</p>
               </div>
               <div>                   
                    <img src={iprcopyright}/>
                    <h1 className="text-3xl font-bold mb-6">Copyrights</h1>
                    <p className="text-gray-600">Your creation's shield: Protects your original work from unauthorized borrowing.</p>
               </div>
                <div>                   
                    <img src={iprpatent}/>
                    <h1 className="text-3xl font-bold mb-6">Patends</h1>
                    <p className="text-gray-600">Patent registration protects your invention, prevents unauthorized use, strengthens ownership rights, and supports innovation with legal protection and commercial opportunities.</p>
               </div>
                <div>                   
                    <img src={iprmsme}/>
                    <h1 className="text-3xl font-bold mb-6">MSME Registration</h1>
                    <p className="text-gray-600">MSME Registration officially recognizes your business, provides government benefits, improves credibility, and supports access to schemes, loans, subsidies, and opportunities.</p>
               </div>
                <div>                   
                    <img src={iprvedatrademarkreg}/>
                    <h1 className="text-3xl font-bold mb-6">Trademark Renewal</h1>
                    <p className="text-gray-600">Trademark Renewal keeps your brand protection active, preserves registration rights, and helps avoid expiration, penalties, or loss of valuable trademark protection.</p>
               </div>

                    <div>                   
                    <img src= {iprobject}/>
                    <h1 className="text-3xl font-bold mb-6">Objection Reply Filing</h1>
                    <p className="text-gray-600">Objection Reply Filing helps respond to objections, protect your brand, and strengthen your trademark registration application legally.</p>
               </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}