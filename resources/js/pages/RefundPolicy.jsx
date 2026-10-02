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
                            <h2 className="text-4xl font-bold mb-8 text-brand-dark">
                                <span className="underline decoration-brand-primary decoration-4 underline-offset-4">
                                    Refund Policy
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-brand-dark prose-p:text-brand-dark/70">
                        <h1 className="text-3xl font-bold mb-6 text-brand-dark">
                            Refund Policy of IPR Veda
                        </h1>

                        <p className="mb-6 text-brand-dark/70">
                            <strong>Last Updated:</strong> 19-01-2024
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-dark">
                            1. Introduction:
                        </h2>

                        <p className="mb-6 text-brand-dark/70">
                            At IPR Veda, we aim to deliver high-quality
                            trademark registration services. Our refund policy
                            is designed to be fair and transparent, respecting
                            both our clients' interests and our operational
                            requirements.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-dark">
                            2. Cancellation and Refund Eligibility:
                        </h2>

                        <ul className="list-disc pl-6 mb-6 space-y-2 text-brand-dark/70">
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

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-dark">
                            3. Processing of Refunds:
                        </h2>

                        <p className="mb-6 text-brand-dark/70">
                            To request a refund, clients must contact us via
                            email. Refunds will be processed within 90 days of
                            the request, subject to validation of the claim.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-dark">
                            4. Non-refundable Services:
                        </h2>

                        <p className="mb-6 text-brand-dark/70">
                            Certain services, due to their nature, are
                            non-refundable. These include, but are not limited
                            to, services involving government fees, expedited
                            processing fees, and consultation fees.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-dark">
                            5. Force Majeure:
                        </h2>

                        <p className="mb-6 text-brand-dark/70">
                            IPR Veda is not liable for any inability to deliver
                            services due to circumstances beyond our control,
                            such as changes in government policies, natural
                            disasters, or other force majeure events.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-dark">
                            6. Modification of Policy:
                        </h2>

                        <p className="mb-6 text-brand-dark/70">
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
                    <div className="rounded-lg bg-white shadow-md p-6 md:p-8 border border-brand-border">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <img
                                src="/assets/img/subscribe3.svg"
                                alt="Subscribe"
                                className="w-24 md:w-28"
                            />

                            <span className="text-brand-dark/70">
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
                                    className="w-full rounded-md sm:rounded-r-none border border-brand-border px-4 py-3 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 bg-brand-light text-brand-dark placeholder-brand-dark/40"
                                    disabled={loading}
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-2 sm:mt-0 rounded-md sm:rounded-l-none bg-brand-accent px-6 py-3 font-semibold text-brand-dark transition hover:bg-warning disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading
                                        ? "Subscribing..."
                                        : "Subscribe"}
                                </button>
                            </div>

                            {message && (
                                <p className="mt-3 text-sm text-success">
                                    {message}
                                </p>
                            )}

                            {error && (
                                <p className="mt-3 text-sm text-danger">
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