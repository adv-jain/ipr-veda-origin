import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
    return (
        <> 
        <div className="bg-white text-gray-900">
<Navbar/>
            {/* ================= HERO SECTION ================= */}
            <section className="relative overflow-hidden bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[650px] py-16 lg:py-20">

                        {/* LEFT CONTENT */}
                        <div>

                            <p className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-5">
                                Intellectual Property Rights
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Protect Your
                                <span className="text-yellow-500">
                                    {' '}Ideas, Brands & Innovations
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
                                IPR VEDA provides professional Intellectual Property
                                Rights services to help businesses, entrepreneurs,
                                creators and innovators protect their valuable
                                intellectual assets.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">

                                <NavLink
                                    to="/signup"
                                    className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-7 py-3 rounded-lg shadow transition"
                                >
                                    Get Started
                                </NavLink>

                                <NavLink
                                    to="/contact"
                                    className="inline-flex items-center justify-center border border-gray-300 hover:border-yellow-500 hover:bg-yellow-50 font-semibold px-7 py-3 rounded-lg transition"
                                >
                                    Consult Attorney
                                </NavLink>

                            </div>

                            {/* TRUST ITEMS */}
                            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600">

                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 text-xl">
                                        ✓
                                    </span>
                                    Professional Assistance
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 text-xl">
                                        ✓
                                    </span>
                                    Reliable Service
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 text-xl">
                                        ✓
                                    </span>
                                    Expert Guidance
                                </div>

                            </div>

                        </div>


                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">

                            <img
                                src="/assets/img/illustrations/desk.svg"
                                alt="Intellectual Property Services"
                                className="w-full max-w-xl"
                            />

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= INTRODUCTION ================= */}
            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
                            Welcome to IPR VEDA
                        </p>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                            Your Intellectual Property,
                            <span className="text-yellow-500">
                                {' '}Our Priority
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-600 leading-8 text-lg">
                            Intellectual Property is one of the most valuable
                            assets of any modern business. Whether you have
                            created a unique brand, developed an innovative
                            invention or produced original creative work,
                            protecting it is essential.
                        </p>

                        <p className="mt-4 text-gray-600 leading-8">
                            At IPR VEDA, we help individuals and businesses
                            understand, register and protect their Intellectual
                            Property Rights through professional and practical
                            solutions.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= SERVICES ================= */}
            <section className="py-20 bg-gray-50">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-14">

                        <p className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
                            What We Do
                        </p>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                            Our Intellectual Property Services
                        </h2>

                        <p className="mt-5 text-gray-600">
                            Comprehensive Intellectual Property services
                            designed to help you secure and protect your
                            valuable intellectual assets.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        {/* TRADEMARK */}
                        <NavLink
                            to="/trademark"
                            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-yellow-400 transition duration-300"
                        >

                            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl text-yellow-600 mb-6">
                                ™
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Trademark
                            </h3>

                            <p className="text-gray-600 leading-7">
                                Protect your brand identity, business name,
                                logo, tagline and other distinctive marks
                                through trademark registration and protection.
                            </p>

                            <div className="mt-6 text-yellow-600 font-semibold">
                                Explore Trademark →
                            </div>

                        </NavLink>


                        {/* COPYRIGHT */}
                        <NavLink
                            to="/copyright"
                            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-yellow-400 transition duration-300"
                        >

                            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl text-yellow-600 mb-6">
                                ©
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Copyright
                            </h3>

                            <p className="text-gray-600 leading-7">
                                Safeguard your original creative works,
                                literary works, artistic works, software,
                                designs and other copyrightable creations.
                            </p>

                            <div className="mt-6 text-yellow-600 font-semibold">
                                Explore Copyright →
                            </div>

                        </NavLink>


                        {/* PATENT */}
                        <NavLink
                            to="/patent"
                            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-yellow-400 transition duration-300"
                        >

                            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl text-yellow-600 mb-6">
                                ⚖
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Patent
                            </h3>

                            <p className="text-gray-600 leading-7">
                                Protect your inventions and innovative ideas
                                with appropriate patent filing and
                                intellectual property assistance.
                            </p>

                            <div className="mt-6 text-yellow-600 font-semibold">
                                Explore Patent →
                            </div>

                        </NavLink>


                        {/* DESIGN */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">

                            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl text-yellow-600 mb-6">
                                ◈
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Design
                            </h3>

                            <p className="text-gray-600 leading-7">
                                Protect the visual appearance and unique
                                design features of your products through
                                design registration.
                            </p>

                        </div>


                        {/* IP CONSULTATION */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">

                            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl text-yellow-600 mb-6">
                                💡
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                IP Consultation
                            </h3>

                            <p className="text-gray-600 leading-7">
                                Get professional guidance to understand your
                                intellectual property rights and choose the
                                right protection strategy.
                            </p>

                        </div>


                        {/* IP PROTECTION */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">

                            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl text-yellow-600 mb-6">
                                🛡
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                IP Protection
                            </h3>

                            <p className="text-gray-600 leading-7">
                                Build a strong strategy for managing,
                                protecting and enforcing your valuable
                                intellectual property assets.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-20">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        {/* LEFT */}
                        <div>

                            <p className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
                                Why IPR VEDA
                            </p>

                            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                                Protect What Makes
                                <span className="text-yellow-500">
                                    {' '}You Unique
                                </span>
                            </h2>

                            <p className="mt-6 text-gray-600 leading-8">
                                Your ideas and intellectual creations deserve
                                proper protection. We focus on making the
                                Intellectual Property process easier,
                                transparent and accessible.
                            </p>

                        </div>


                        {/* RIGHT FEATURES */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            <div className="p-6 border rounded-xl">
                                <div className="text-3xl mb-4">
                                    ✓
                                </div>

                                <h3 className="font-bold text-xl mb-2">
                                    Professional Guidance
                                </h3>

                                <p className="text-gray-600">
                                    Assistance throughout your IP journey.
                                </p>
                            </div>


                            <div className="p-6 border rounded-xl">
                                <div className="text-3xl mb-4">
                                    🔒
                                </div>

                                <h3 className="font-bold text-xl mb-2">
                                    Secure Process
                                </h3>

                                <p className="text-gray-600">
                                    Your information is handled with care.
                                </p>
                            </div>


                            <div className="p-6 border rounded-xl">
                                <div className="text-3xl mb-4">
                                    ⚡
                                </div>

                                <h3 className="font-bold text-xl mb-2">
                                    Simple Process
                                </h3>

                                <p className="text-gray-600">
                                    Easy and straightforward IP services.
                                </p>
                            </div>


                            <div className="p-6 border rounded-xl">
                                <div className="text-3xl mb-4">
                                    🤝
                                </div>

                                <h3 className="font-bold text-xl mb-2">
                                    Client Focused
                                </h3>

                                <p className="text-gray-600">
                                    Solutions designed around your needs.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= HOW IT WORKS ================= */}
            <section className="py-20 bg-gray-50">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-14">

                        <p className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
                            Our Process
                        </p>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                            How It Works
                        </h2>

                    </div>


                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="text-center">

                            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-500 flex items-center justify-center text-xl font-bold">
                                01
                            </div>

                            <h3 className="text-xl font-bold mt-5">
                                Tell Us About Your Requirement
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Share your Intellectual Property requirement
                                with our team.
                            </p>

                        </div>


                        <div className="text-center">

                            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-500 flex items-center justify-center text-xl font-bold">
                                02
                            </div>

                            <h3 className="text-xl font-bold mt-5">
                                Get Professional Guidance
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Understand the appropriate protection and
                                registration process.
                            </p>

                        </div>


                        <div className="text-center">

                            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-500 flex items-center justify-center text-xl font-bold">
                                03
                            </div>

                            <h3 className="text-xl font-bold mt-5">
                                Protect Your IP
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Move forward with the appropriate IP
                                registration and protection.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="bg-gray-900">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                    <div className="text-center">

                        <p className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">
                            Get Started Today
                        </p>

                        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
                            Have an Intellectual Property Requirement?
                        </h2>

                        <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
                            Protect your ideas, inventions, creative works
                            and brand with the right Intellectual Property
                            strategy.
                        </p>

                        <div className="mt-8 flex justify-center flex-wrap gap-4">

                            <NavLink
                                to="/signup"
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition"
                            >
                                Create Account
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className="border border-gray-500 hover:border-yellow-400 text-white px-8 py-3 rounded-lg transition"
                            >
                                Contact Us
                            </NavLink>

                        </div>

                    </div>

                </div>

            </section>


        </div>
        <Footer/>
        </>
    );
}

export default Home;