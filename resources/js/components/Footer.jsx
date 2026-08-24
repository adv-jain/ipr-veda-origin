import React, { useState } from "react";
import subscribe from "../../../config/assets/img/subscribe3.svg"
import iprPrefect from "../../../config/assets/img/ipr-perfect-rect.png"

const Footer = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        if (!email.trim()) {
            setError("Please enter your email.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-TOKEN":
                        document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute("content") || "",
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.errors?.email) {
                    setError(data.errors.email[0]);
                } else {
                    setError(data.message || "Something went wrong.");
                }
                return;
            }

            setMessage(
                data.message || "Successfully subscribed to our newsletter."
            );

            setEmail("");
        } catch (err) {
            setError("Unable to subscribe. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="w-full">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12">

                    {/* About / Newsletter */}
                    <div className="md:col-span-5">
                        <a
                            href="/"
                            className="mb-4 flex items-center"
                        >
                            <img
                                src={iprPrefect}
                                alt="IPR VEDA"
                                className="w-[150px]"
                            />
                        </a>

                        <p className="text-gray-500">
                            Innovate with confidence, secure your future: From
                            patents to copyrights, we shield your IP in India.
                        </p>

                        {/* Social Media */}
                        <ul className="mt-6 mb-0 flex list-none gap-4 p-0">
                            <li>
                                <a
                                    href="https://www.facebook.com/iprveda/"
                                    className="text-gray-800 transition hover:text-blue-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H8v3h2.4v8h3.1Z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/iprveda/"
                                    className="text-gray-800 transition hover:text-pink-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter Card */}
                        <div className="mt-10 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-100">
                            <div className="flex items-center gap-4">
                                <img
                                    src={subscribe}
                                    alt="Subscribe"
                                    className="w-[100px]  shrink-0"
                                />

                                <span className="text-gray-600">
                                    Subscribe to our newsletter in order not
                                    to miss new udpates, promotions and
                                    discounts.
                                </span>
                            </div>

                            <form
                                onSubmit={handleSubscribe}
                                className="mt-6"
                            >
                                <div className="flex">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter email"
                                        aria-label="Recipient's username"
                                        disabled={loading}
                                        className="min-w-0 flex-1 rounded-l-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 disabled:bg-gray-100"
                                    />

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="rounded-r-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {loading
                                            ? "Subscribing..."
                                            : "Subscribe"}
                                    </button>
                                </div>

                                {error && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {error}
                                    </p>
                                )}

                                {message && (
                                    <p className="mt-2 text-sm text-green-600">
                                        {message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-3">
                        <h3 className="mb-3 text-sm font-bold text-gray-900">
                            Services
                        </h3>

                        <ul className="list-none space-y-2 p-0">
                            <li>
                                <a
                                    href="/trademark"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Trademark Registeration
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/copyright"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Copyright Registeration
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/Patent"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Patent Registeration
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    MSME Registeration
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Trademark Renewal
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Objection Reply Filing
                                </a>
                            </li>
                        </ul>

                        <h3 className="mt-8 mb-3 text-sm font-bold text-gray-900">
                            Helpful
                        </h3>

                        <ul className="list-none space-y-2 p-0">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Protect from Infringement
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Everything about Renewals
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    CA vs. IP Attorneys
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2">
                        <h3 className="mb-3 text-sm font-bold text-gray-900">
                            Company
                        </h3>

                        <ul className="list-none space-y-2 p-0">
                            <li>
                                <a
                                    href="/about"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/blog"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/privacy-policy"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/disclaimer"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Disclaimer
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/refund-policy"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Refund Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/credits"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Credits
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="mb-3 text-sm font-bold text-gray-900">
                            Quick Links
                        </h3>

                        <ul className="list-none space-y-2 p-0">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Offers
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Shop
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    IPR&nbsp;Guide
                                </a>
                            </li>
                        </ul>

                        <h3 className="mt-8 mb-3 text-sm font-bold text-gray-900">
                            Tools
                        </h3>

                        <ul className="list-none space-y-2 p-0">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Find Attorney ID
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Track Application
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/find-classes"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Find classes
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    IPR&nbsp;Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <hr className="border-gray-200" />

                <div className="flex flex-col items-start justify-between gap-3 pt-6 text-sm text-gray-500 md:flex-row md:items-center">
                    <span>
                        IPR VEDA&nbsp;© Copyright 2024. All Rights Reserved.
                    </span>

                    <span>
                        X27 Experiments Technologies Private Limited
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;