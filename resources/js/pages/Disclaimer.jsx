import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Disclaimer = () => {
    const [loading, setLoading] = useState(false);

    const handleContactClick = async () => {
        try {
            setLoading(true);

            await fetch(
                `${import.meta.env.VITE_API_URL}/disclaimer/contact-click`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        page: "disclaimer",
                    }),
                }
            );
        } catch (error) {
            console.error("Contact click tracking failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="pt-[82px]">

            {/* Disclaimer Content */}
            <section className="mt-20 py-12">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="mb-12">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="mb-6 text-4xl font-bold">
                                <span className="border-b-4 border-blue-500 pb-2">
                                    Disclaimer
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-none">

                        <h1 className="mb-6 text-3xl font-bold text-gray-900">
                            Disclaimer for IPR Veda
                        </h1>

                        <p className="mb-6 text-gray-600">
                            <strong>Last Updated:</strong> 19-01-2024
                        </p>

                        <p className="mb-6 leading-8 text-gray-600">
                            The information provided by IPR Veda on
                            https://iprveda.com/ or https://iprveda.in and
                            through our services is for general informational
                            purposes only. All information is provided in good
                            faith, however, we make no representation or
                            warranty of any kind, express or implied, regarding
                            the accuracy, adequacy, validity, reliability,
                            availability, or completeness of any information.
                        </p>

                        <p className="mb-6 leading-8 text-gray-600">
                            IPR Veda does not warrant that the service is free
                            of viruses or other harmful components. External
                            links provided on our website are not investigated,
                            monitored, or checked for accuracy, adequacy,
                            validity, reliability, availability, or completeness
                            by us.
                        </p>

                        <p className="mb-6 leading-8 text-gray-600">
                            Under no circumstance shall we have any liability to
                            you for any loss or damage incurred as a result of
                            the use of the site or reliance on any information
                            provided on the site. Your use of the site and
                            reliance on any information is solely at your own
                            risk.
                        </p>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col justify-between rounded-lg border border-blue-600 bg-blue-600 p-6 text-white md:p-8 lg:flex-row">

                        <div className="pb-2 lg:pb-1">
                            <h2 className="mb-2 text-2xl font-bold text-yellow-400">
                                Not sure which plan suits you?
                            </h2>

                            <p className="mb-0">
                                Imperdiet consectetur dolor, tristique
                                himenaeos ultrices tristique neque.
                            </p>
                        </div>

                        <div className="my-2">
                            <Link
                                to="/contact"
                                onClick={handleContactClick}
                                className={`inline-flex rounded-lg bg-white px-6 py-3 text-lg font-medium text-gray-900 transition hover:bg-gray-100 ${
                                    loading
                                        ? "pointer-events-none opacity-70"
                                        : ""
                                }`}
                            >
                                Contact us
                            </Link>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
};

export default Disclaimer;