import React, { useState } from "react";

const Blog = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);

    const faqs = [
        {
            question: "What does a copyright protect?",
            answer: (
                <p>
                    A copyright protects original works of authorship, such as literary, dramatic,
                    musical, artistic, and certain other intellectual creations. It gives you the
                    exclusive right to reproduce, distribute, and display your work, preventing
                    others from copying or exploiting it without your permission.
                </p>
            ),
        },
        {
            question:
                "Can something be protected by both a trademark and a copyright?",
            answer: (
                <p>
                    Yes! In some cases, a work may qualify for both protections. For example, the
                    artistic design of a logo could be protected by copyright, while the logo itself
                    as a brand identifier could be protected by a trademark.
                </p>
            ),
        },
        {
            question: "Do I need to register my trademark or copyright?",
            answer: (
                <>
                    <p>Registration isn't mandatory for either, but it offers significant advantages:</p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Stronger legal protection: A registered trademark or copyright gives you
                            a legal presumption of ownership and makes it easier to sue infringers.
                        </li>

                        <li>
                            Public notice: Registration puts others on notice of your claim to the IP,
                            deterring potential infringement.
                        </li>

                        <li>
                            Benefits in certain situations: Registration is mandatory for filing certain
                            lawsuits and may be required for customs enforcement.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            question: "What about trade secrets in India?",
            answer: (
                <>
                    <p>
                        Trade secrets aren't formally registered in India, but you can protect them
                        through:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Maintaining confidentiality: Limit access to the information, use
                            non-disclosure agreements (NDAs), and keep records of who has access.
                        </li>

                        <li>
                            Marking confidential information: Label documents and materials as
                            "confidential" or "trade secret."
                        </li>

                        <li>
                            Taking prompt action against infringement: If your trade secret is leaked,
                            take steps to mitigate the damage and hold the infringer accountable.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            question: "I have more questions! Who can help me?",
            answer: (
                <p>
                    For specific legal advice, it's always best to consult with an intellectual
                    property attorney. They can help you determine the best way to protect your IP
                    and guide you through the registration process.
                    <br />
                    <br />
                    At IPR Veda, We have experienced attorneys that have been successful in getting
                    even hard to get trademarks.
                    <br />
                    <br />
                    They have trademarked for top companies in India. Contact to discuss about yours
                    today!
                </p>
            ),
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

        setSuccess("");
        setApiError("");
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setApiError("");

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 422 && data.errors) {
                    setErrors(data.errors);
                } else {
                    setApiError(
                        data.message || "Something went wrong. Please try again."
                    );
                }

                return;
            }

            setSuccess(
                data.message || "Your message has been sent successfully."
            );

            setFormData({
                name: "",
                email: "",
                message: "",
            });

            setErrors({});
        } catch (error) {
            setApiError(
                "Unable to connect to the server. Please try again later."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white pt-[82px]">
            {/* 
                Agar aapke existing React project me Nav/Banner/Footer components hain,
                to unko yahan import karke use kar sakte ho.
            */}

            {/* Contact Section */}
            <section className="py-20 mt-20">
                <div className="container mx-auto px-4 py-20">
                    <section className="relative py-8">
                        <div className="container mx-auto px-4 relative">
                            {/* Heading */}
                            <div className="mb-12">
                                <div className="max-w-2xl mx-auto text-center">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                        Got any{" "}
                                        <span className="underline">
                                            questions
                                        </span>
                                        ?
                                    </h2>

                                    <p className="text-gray-500 text-lg">
                                        Our team is always here to help. Send us a
                                        message and we'll get back to you shortly.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center gap-10">
                                {/* Contact Details */}
                                <div className="w-full md:w-1/2 lg:w-1/3">
                                    <div className="flex flex-col justify-center items-start h-full">

                                        {/* Phone */}
                                        <div className="flex items-center p-4 mb-2">
                                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0 flex justify-center items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                                                    <path d="M1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                            </div>

                                            <div className="px-3">
                                                <h6 className="font-semibold mb-1">
                                                    Phone
                                                </h6>

                                                <p className="mb-0 text-gray-600">
                                                    +91 85060-59559
                                                </p>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-center p-4 mb-2">
                                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0 flex justify-center items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                                </svg>
                                            </div>

                                            <div className="px-3">
                                                <h6 className="font-semibold mb-1">
                                                    Email
                                                </h6>

                                                <p className="mb-0 text-gray-600">
                                                    info@iprveda.com
                                                </p>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-center p-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0 flex justify-center items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                                </svg>
                                            </div>

                                            <div className="px-3">
                                                <h6 className="font-semibold mb-1">
                                                    Location
                                                </h6>

                                                <p className="mb-0 text-gray-600">
                                                    H15 Prem Nagar, Uttam Nagar,
                                                    Delhi, India - 110059
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="w-full md:w-1/2 lg:w-1/3">
                                    <form
                                        className="p-4"
                                        onSubmit={handleSubmit}
                                    >
                                        {/* Success */}
                                        {success && (
                                            <div className="mb-5 rounded-lg bg-green-100 border border-green-300 text-green-700 px-4 py-3">
                                                {success}
                                            </div>
                                        )}

                                        {/* API Error */}
                                        {apiError && (
                                            <div className="mb-5 rounded-lg bg-red-100 border border-red-300 text-red-700 px-4 py-3">
                                                {apiError}
                                            </div>
                                        )}

                                        {/* Name */}
                                        <div className="mb-4">
                                            <input
                                                className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                                                    errors.name
                                                        ? "border-red-500"
                                                        : "border-gray-300 focus:border-blue-500"
                                                }`}
                                                type="text"
                                                id="name-2"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Name"
                                            />

                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div className="mb-4">
                                            <input
                                                className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                                                    errors.email
                                                        ? "border-red-500"
                                                        : "border-gray-300 focus:border-blue-500"
                                                }`}
                                                type="email"
                                                id="email-2"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                            />

                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className="mb-4">
                                            <textarea
                                                className={`w-full rounded-lg border px-4 py-3 outline-none transition resize-none ${
                                                    errors.message
                                                        ? "border-red-500"
                                                        : "border-gray-300 focus:border-blue-500"
                                                }`}
                                                id="message-2"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="6"
                                                placeholder="Message"
                                            />

                                            {errors.message && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.message}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 transition disabled:opacity-60 disabled:cursor-not-allowed"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? "Sending..." : "Send"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 mb-20">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                <span className="underline">
                                    FAQ
                                </span>
                            </h2>

                            <p className="text-gray-500 text-lg mb-12">
                                Your Questions Answered: A Guide to IPR
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="border border-gray-200 rounded-xl overflow-hidden">

                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index;

                                return (
                                    <div
                                        key={index}
                                        className="border-b last:border-b-0 border-gray-200"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? null : index
                                                )
                                            }
                                            className="w-full flex items-center justify-between text-left px-6 py-5 font-semibold text-gray-800 hover:bg-gray-50 transition"
                                        >
                                            <span>{faq.question}</span>

                                            <svg
                                                className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                                                    isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>

                                        {isOpen && (
                                            <div className="px-6 pb-6 text-gray-500 leading-7">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* AI Guide */}
                <div className="text-center flex justify-center mt-12">
                    <button
                        className="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed"
                        type="button"
                        disabled
                    >
                        AI Powered Complete IPR Guide
                    </button>
                </div>

                <p className="text-center mt-3 text-gray-500">
                    Coming your way soon
                </p>
            </section>
        </div>
    );
};

export default Blog;