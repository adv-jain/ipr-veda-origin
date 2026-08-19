import React, { useState } from "react";

const RefundPolicy = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        if (!email.trim()) {
            setError("Please enter your email address.");
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
                },
                body: JSON.stringify({
                    email: email.trim(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong. Please try again."
                );
            }

            setMessage(data.message || "Successfully subscribed!");
            setEmail("");
        } catch (err) {
            setError(
                err.message || "Unable to subscribe. Please try again later."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="py-20 mt-20">
                <div className="container mx-auto px-4 py-8 xl:py-12">
                    {/* Heading */}
                    <div className="mb-12">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-bold mb-8">
                                <span className="underline">
                                    Refund Policy
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-3xl font-bold mb-6">
                            Refund Policy of IPR Veda
                        </h1>

                        <p className="mb-6">
                            <strong>Last Updated:</strong> 19-01-2024
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">
                            1. Introduction:
                        </h2>

                        <p className="mb-6">
                            At IPR Veda, we aim to deliver high-quality
                            trademark registration services. Our refund policy
                            is designed to be fair and transparent, respecting
                            both our clients' interests and our operational
                            requirements.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">
                            2. Cancellation and Refund Eligibility:
                        </h2>

                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>
                                Refund requests must be made within 3 days of
                                the service purchase date.
                            </li>
                            <li>
                                Refunds are not applicable once the trademark
                                registration process has commenced.
                            </li>
                            <li>
                                Services involving third-party costs
                                (government fees, etc.) are non-refundable.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">
                            3. Processing of Refunds:
                        </h2>

                        <p className="mb-6">
                            To request a refund, clients must contact us via
                            email. Refunds will be processed within 90 days of
                            the request, subject to validation of the claim.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">
                            4. Non-refundable Services:
                        </h2>

                        <p className="mb-6">
                            Certain services, due to their nature, are
                            non-refundable. These include, but are not limited
                            to, services involving government fees, expedited
                            processing fees, and consultation fees.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">
                            5. Force Majeure:
                        </h2>

                        <p className="mb-6">
                            IPR Veda is not liable for any inability to deliver
                            services due to circumstances beyond our control,
                            such as changes in government policies, natural
                            disasters, or other force majeure events.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">
                            6. Modification of Policy:
                        </h2>

                        <p className="mb-6">
                            IPR Veda reserves the right to modify this refund
                            policy at any time. Any changes will be effective
                            immediately upon posting on our website.
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="rounded-lg bg-white shadow-md p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <img
                                src="/assets/img/subscribe3.svg"
                                alt="Subscribe"
                                className="w-24 md:w-28"
                            />

                            <span className="text-gray-600">
                                Subscribe to our newsletter in order not to
                                miss new udpates, promotions and discounts.
                            </span>
                        </div>

                        <form
                            onSubmit={handleNewsletterSubmit}
                            className="mt-6"
                        >
                            <div className="flex flex-col sm:flex-row">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Enter email"
                                    className="w-full rounded-md sm:rounded-r-none border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                                    disabled={loading}
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-2 sm:mt-0 rounded-md sm:rounded-l-none bg-yellow-500 px-6 py-3 font-semibold text-white transition hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading
                                        ? "Subscribing..."
                                        : "Subscribe"}
                                </button>
                            </div>

                            {message && (
                                <p className="mt-3 text-sm text-green-600">
                                    {message}
                                </p>
                            )}

                            {error && (
                                <p className="mt-3 text-sm text-red-600">
                                    {error}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RefundPolicy;