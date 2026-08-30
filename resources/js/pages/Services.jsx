import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import iprvedatrademark from '../../../config/assets/img/iprvedatrademark.jpg'
import iprcopyright from '../../../config/assets/img/iprcopyright.jpg'
import iprpatent from '../../../config/assets/img/iprpatend.jpg'
import iprmsme from '../../../config/assets/img/iprmems.jpg'
import iprvedatrademarkreg from '../../../config/assets/img/iprtrademarkreg.jpg'
import iprobject from '../../../config/assets/img/iprobject.jpg'

export default function Services() {
    const services = [
        {
            img: iprvedatrademark,
            title: 'Trademarks',
            desc: "Your brand's shield: Distinctive signs protecting your ideas from copycats.",
        },
        {
            img: iprcopyright,
            title: 'Copyrights',
            desc: "Your creation's shield: Protects your original work from unauthorized borrowing.",
        },
        {
            img: iprpatent,
            title: 'Patents',
            desc: 'Patent registration protects your invention, prevents unauthorized use, strengthens ownership rights, and supports innovation with legal protection and commercial opportunities.',
        },
        {
            img: iprmsme,
            title: 'MSME Registration',
            desc: 'MSME Registration officially recognizes your business, provides government benefits, improves credibility, and supports access to schemes, loans, subsidies, and opportunities.',
        },
        {
            img: iprvedatrademarkreg,
            title: 'Trademark Renewal',
            desc: 'Trademark Renewal keeps your brand protection active, preserves registration rights, and helps avoid expiration, penalties, or loss of valuable trademark protection.',
        },
        {
            img: iprobject,
            title: 'Objection Reply Filing',
            desc: 'Objection Reply Filing helps respond to objections, protect your brand, and strengthen your trademark registration application legally.',
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Services" />
            <div className="flex min-h-screen">
                <aside className="w-64 bg-gray-800 text-white p-6">
                    <nav className="space-y-4">
                        <button onClick={() => router.visit('/dashboard')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">📊 Dashboard</button>
                        <button onClick={() => router.visit('/services')} className="w-full text-left px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">🛠️ Services</button>
                        <button onClick={() => router.visit('/account')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">👤 Account</button>
                        <button onClick={() => router.visit('/setting')} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition">⚙️ Settings</button>
                        <button onClick={() => router.visit('/consult')} className="w-full text-left px-4 py-2 rounded-lg  hover:bg-gray-600 transition">💬 Consult</button>
                    </nav>
                </aside>

                <div className="flex-1 p-8">
                    <h1 className="text-2xl font-bold mb-6">Our Services</h1>

                    <div className="grid grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col"
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-28 object-cover"
                                />
                                <div className="p-3">
                                    <h2 className="text-sm font-bold mb-1">{service.title}</h2>
                                    <p className="text-gray-600 text-xs leading-snug">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}