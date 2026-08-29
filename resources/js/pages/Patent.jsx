import React, { useState } from "react";


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

            
        </>
    );
};

export default Patent;