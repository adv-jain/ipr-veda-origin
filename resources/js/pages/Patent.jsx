import React, { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Patent = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "What does a copyright protect?",
            answer: (
                <p>
                    A copyright protects original works of authorship, such as
                    literary, dramatic, musical, artistic, and certain other
                    intellectual creations. It gives you the exclusive right
                    to reproduce, distribute, and display your work, preventing
                    others from copying or exploiting it without your
                    permission.
                </p>
            ),
        },
        {
            question:
                "Can something be protected by both a trademark and a copyright?",
            answer: (
                <p>
                    Yes! In some cases, a work may qualify for both protections.
                    For example, the artistic design of a logo could be
                    protected by copyright, while the logo itself as a brand
                    identifier could be protected by a trademark.
                </p>
            ),
        },
        {
            question: "Do I need to register my trademark or copyright?",
            answer: (
                <>
                    <p>
                        Registration isn't mandatory for either, but it offers
                        significant advantages:
                    </p>

                    <ul className="list-disc pl-6 mt-3 space-y-2">
                        <li>
                            Stronger legal protection: A registered trademark
                            or copyright gives you a legal presumption of
                            ownership and makes it easier to sue infringers.
                        </li>

                        <li>
                            Public notice: Registration puts others on notice of
                            your claim to the IP, deterring potential
                            infringement.
                        </li>

                        <li>
                            Benefits in certain situations: Registration is
                            mandatory for filing certain lawsuits and may be
                            required for customs enforcement.
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
                        Trade secrets aren't formally registered in India, but
                        you can protect them through:
                    </p>

                    <ul className="list-disc pl-6 mt-3 space-y-2">
                        <li>
                            Maintaining confidentiality: Limit access to the
                            information, use non-disclosure agreements (NDAs),
                            and keep records of who has access.
                        </li>

                        <li>
                            Marking confidential information: Label documents
                            and materials as "confidential" or "trade secret."
                        </li>

                        <li>
                            Taking prompt action against infringement: If your
                            trade secret is leaked, take steps to mitigate the
                            damage and hold the infringer accountable.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            question:
                "I have more questions! Who can help me?",
            answer: (
                <p>
                    For specific legal advice, it's always best to consult
                    with an intellectual property attorney. They can help you
                    determine the best way to protect your IP and guide you
                    through the registration process.
                    <br />
                    <br />
                    At IPR Veda, We have experienced attorneys that have been
                    successful in getting even hard to get trademarks.
                    <br />
                    <br />
                    They have trademarked for top companies in India. Contact
                    to discuss about yours today!
                </p>
            ),
        },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
           
<Navbar/>
            {/* Contact Section */}
            <section className="py-20 mt-20">
                <div className="container mx-auto px-4 py-20">
                    <section className="relative py-6 xl:py-12">
                        <div className="relative mx-auto max-w-7xl">
                            {/* Heading */}
                            <div className="mb-12">
                                <div className="mx-auto max-w-2xl text-center">
                                    <h2 className="text-4xl font-bold mb-6">
                                        Got any{" "}
                                        <span className="underline">
                                            questions
                                        </span>
                                        ?
                                    </h2>

                                    <p className="text-gray-500 text-lg">
                                        Our team is always here to help. Send us
                                        a message and we'll get back to you
                                        shortly.
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex flex-col lg:flex-row justify-center gap-12">
                                {/* Contact Information */}
                                <div className="w-full md:w-1/2 lg:w-1/3">
                                    <div className="flex flex-col justify-center items-start h-full">

                                        {/* Phone */}
                                        <div className="flex items-center p-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
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
                                        <div className="flex items-center p-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0 flex items-center justify-center">
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
                                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
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
                                <div className="w-full md:w-1/2 lg:w-2/5">
                                    <form className="p-4 xl:p-6">
                                        <div className="mb-4">
                                            <input
                                                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                                type="text"
                                                id="name-2"
                                                name="name"
                                                placeholder="Name"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <input
                                                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                                type="email"
                                                id="email-2"
                                                name="email"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <textarea
                                                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                                id="message-2"
                                                name="message"
                                                rows="6"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>

                                        <button
                                            className="w-full rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                                            type="submit"
                                        >
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 mb-20">
                <div className="container mx-auto px-4">
                    <div className="mb-10">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-bold mb-8">
                                <span className="underline pb-3">
                                    FAQ
                                    <br />
                                </span>
                            </h2>

                            <p className="text-gray-500 mb-10">
                                Your Questions Answered: A Guide to IPR
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                            {faqs.map((faq, index) => (
                                <div key={index}>
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between text-left px-6 py-5 bg-white hover:bg-gray-50 transition"
                                    >
                                        <span className="font-medium text-gray-800 pr-4">
                                            {faq.question}
                                        </span>

                                        <span className="text-2xl text-gray-500 flex-shrink-0">
                                            {openFaq === index ? "−" : "+"}
                                        </span>
                                    </button>

                                    {openFaq === index && (
                                        <div className="px-6 py-5 bg-gray-50 text-gray-600 leading-7">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button
                        className="rounded-md bg-gray-400 px-6 py-3 text-white cursor-not-allowed"
                        type="button"
                        disabled
                    >
                        AI Powered Complete IPR Guide
                    </button>

                    <p className="text-center mt-3 text-gray-500">
                        Coming your way soon
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Patent;