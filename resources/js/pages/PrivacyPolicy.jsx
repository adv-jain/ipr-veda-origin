import React from "react";
import { useState } from "react";

const PrivacyPolicy = () => {
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
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/newsletter`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        email: email.trim(),
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong. Please try again."
                );
            }

            setMessage(
                data.message || "You have successfully subscribed!"
            );
            setEmail("");
        } catch (err) {
            setError(
                err.message || "Unable to subscribe. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Privacy Policy */}
            <section className="mt-20 py-12">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                    {/* Page Heading */}
                    <div className="mb-12">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="flex justify-center gap-5 text-3xl font-bold md:text-4xl">
                                <span className="border-b-4 border-blue-500 pb-2">
                                    Privacy Policies
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <h1 className="mb-6 text-3xl font-bold text-gray-900">
                            Privacy Policy of IPR Veda
                        </h1>

                        <p className="mb-6 text-gray-600">
                            <strong>Last Updated:</strong> 19-01-2024
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            1. Introduction:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            Welcome to IPR Veda. This Privacy Policy describes
                            how we collect, use, process, and share your
                            information, including personal information, in
                            conjunction with your access to and use of our
                            services and when you interact with our advertising
                            and applications on third-party websites and
                            services.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            2. Data Collection:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            We collect information that you provide directly to
                            us, such as when you create or modify your account,
                            request services, or communicate with us. This may
                            include your name, email address, phone number,
                            payment information, and other information you
                            choose to provide.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            3. Use of Information:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            The information we collect is used to provide,
                            maintain, and improve our services, to develop new
                            services, and to protect IPR Veda and our users. We
                            also use this information to provide customer
                            support, send communications, and to process
                            transactions.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            4. Sharing of Information:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            We may share your information with third parties in
                            connection with the services we offer, particularly
                            with advertising platforms like Facebook and Google
                            for targeted advertising purposes. We ensure that
                            our data handling practices are in alignment with
                            the privacy policies of these platforms.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            5. Data Security:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            We implement measures to ensure the security of your
                            personal information from unauthorized access,
                            alteration, disclosure, or destruction.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            6. User Rights:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            You have the right to access, update, or to delete
                            your personal information. Please contact us if you
                            wish to exercise these rights.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            7. Changes to Privacy Policy:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            We may update this privacy policy from time to
                            time. We will notify you of any changes by posting
                            the new privacy policy on this page.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            8. Contact Us:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            If you have any questions about this privacy policy,
                            please contact us at info@iprveda.com
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            9. Compliance with Legal Obligations:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            We will comply with all applicable laws and
                            regulations regarding data protection and will
                            cooperate with data protection authorities and law
                            enforcement agencies as required.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            10. No Liability Clause:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            IPR Veda is not responsible for any third-party
                            links, services, or applications that may be
                            accessed through our services. We encourage you to
                            review the privacy policies of these third parties.
                        </p>

                        <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
                            11. Acceptance of Terms:
                        </h2>

                        <p className="mb-6 leading-7 text-gray-600">
                            By using our services, you agree to the collection
                            and use of information in accordance with this
                            policy.
                        </p>

                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="px-4 pb-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                        <div className="flex flex-col items-center gap-6 md:flex-row">
                            <img
                                src="/assets/img/subscribe3.svg"
                                width="100"
                                alt="Subscribe"
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:rounded-r-none"
                                    disabled={loading}
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-2 rounded-lg bg-yellow-500 px-6 py-3 font-medium text-white transition hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-0 sm:rounded-l-none"
                                >
                                    {loading ? "Subscribing..." : "Subscribe"}
                                </button>
                            </div>

                            {error && (
                                <p className="mt-3 text-sm text-red-600">
                                    {error}
                                </p>
                            )}

                            {message && (
                                <p className="mt-3 text-sm text-green-600">
                                    {message}
                                </p>
                            )}
                        </form>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;