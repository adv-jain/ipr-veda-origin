import React, { useState } from "react";

const CopyRoute = () => {
    const [openFaq, setOpenFaq] = useState(0);

    

   

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

    

    


    return (
        <div className="min-h-screen bg-white pt-[82px]">
           
           

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

export default CopyRoute;