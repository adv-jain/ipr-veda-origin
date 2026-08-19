import React, { useState } from 'react';

function Contact() {

    // =========================
    // Contact Form State
    // =========================

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // =========================
    // FAQ State
    // =========================

    const [openFaq, setOpenFaq] = useState(0);

    // =========================
    // Input Change
    // =========================

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // =========================
    // Form Submit
    // =========================

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },

                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || 'Something went wrong.'
                );
            }

            setSuccessMessage(data.message);

            setFormData({
                name: '',
                email: '',
                message: '',
            });

        } catch (error) {

            setErrorMessage(error.message);

        } finally {

            setLoading(false);

        }
    };

    // =========================
    // FAQ Toggle
    // =========================

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // =========================
    // FAQ Data
    // =========================

    const faqs = [
        {
            question: 'What does a copyright protect?',
            answer: (
                <p>
                    A copyright protects original works of authorship, such as literary,
                    dramatic, musical, artistic, and certain other intellectual creations.
                    It gives you the exclusive right to reproduce, distribute, and display
                    your work, preventing others from copying or exploiting it without your
                    permission.
                </p>
            ),
        },

        {
            question:
                'Can something be protected by both a trademark and a copyright?',
            answer: (
                <p>
                    Yes! In some cases, a work may qualify for both protections. For
                    example, the artistic design of a logo could be protected by copyright,
                    while the logo itself as a brand identifier could be protected by a
                    trademark.
                </p>
            ),
        },

        {
            question:
                'Do I need to register my trademark or copyright?',
            answer: (
                <>
                    <p>
                        Registration isn't mandatory for either, but it offers significant
                        advantages:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Stronger legal protection: A registered trademark or copyright
                            gives you a legal presumption of ownership and makes it easier
                            to sue infringers.
                        </li>

                        <li>
                            Public notice: Registration puts others on notice of your claim
                            to the IP, deterring potential infringement.
                        </li>

                        <li>
                            Benefits in certain situations: Registration is mandatory for
                            filing certain lawsuits and may be required for customs
                            enforcement.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            question: 'What about trade secrets in India?',
            answer: (
                <>
                    <p>
                        Trade secrets aren't formally registered in India, but you can
                        protect them through:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Maintaining confidentiality: Limit access to the information,
                            use non-disclosure agreements (NDAs), and keep records of who
                            has access.
                        </li>

                        <li>
                            Marking confidential information: Label documents and materials
                            as "confidential" or "trade secret."
                        </li>

                        <li>
                            Taking prompt action against infringement: If your trade secret
                            is leaked, take steps to mitigate the damage and hold the
                            infringer accountable.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            question:
                'I have more questions! Who can help me?',
            answer: (
                <p>
                    For specific legal advice, it's always best to consult with an
                    intellectual property attorney. They can help you determine the best
                    way to protect your IP and guide you through the registration process.
                    <br />
                    <br />
                    At IPR Veda, We have experienced attorneys that have been successful
                    in getting even hard to get trademarks.
                    <br />
                    <br />
                    They have trademarked for top companies in India. Contact to discuss
                    about yours today!
                </p>
            ),
        },
    ];

    return (
        <main className="pt-[82px]">

            {/* =========================
                CONTACT SECTION
            ========================= */}

            <section className="py-20 mt-20">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <section className="relative py-4">

                        {/* Heading */}

                        <div className="max-w-2xl mx-auto text-center mb-12">

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">

                                Got any{' '}

                                <span className="border-b-4 border-yellow-400 pb-1">
                                    questions
                                </span>

                                ?

                            </h2>

                            <p className="text-gray-500 text-lg">
                                Our team is always here to help. Send us a message and
                                we'll get back to you shortly.
                            </p>

                        </div>


                        {/* Contact Information + Form */}

                        <div className="flex flex-col lg:flex-row justify-center gap-12">

                            {/* =========================
                                CONTACT INFORMATION
                            ========================= */}

                            <div className="w-full lg:w-1/3">

                                <div className="flex flex-col justify-center items-start h-full">

                                    {/* Phone */}

                                    <div className="flex items-center p-3 mb-4">

                                        <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex-shrink-0 flex justify-center items-center">

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a.678.678 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg>

                                        </div>

                                        <div className="px-3">

                                            <h6 className="mb-1 font-semibold">
                                                Phone
                                            </h6>

                                            <p className="mb-0 text-gray-600">
                                                +91 85060-59559
                                            </p>

                                        </div>

                                    </div>


                                    {/* Email */}

                                    <div className="flex items-center p-3 mb-4">

                                        <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex-shrink-0 flex justify-center items-center">

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                            </svg>

                                        </div>

                                        <div className="px-3">

                                            <h6 className="mb-1 font-semibold">
                                                Email
                                            </h6>

                                            <p className="mb-0 text-gray-600">
                                                info@iprveda.com
                                            </p>

                                        </div>

                                    </div>


                                    {/* Location */}

                                    <div className="flex items-center p-3">

                                        <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex-shrink-0 flex justify-center items-center">

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001m-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282" />
                                            </svg>

                                        </div>

                                        <div className="px-3">

                                            <h6 className="mb-1 font-semibold">
                                                Location
                                            </h6>

                                            <p className="mb-0 text-gray-600">
                                                H15 Prem Nagar, Uttam Nagar, Delhi, India - 110059
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* =========================
                                CONTACT FORM
                            ========================= */}

                            <div className="w-full lg:w-2/5">

                                <form
                                    className="p-3 md:p-6"
                                    onSubmit={handleSubmit}
                                >

                                    {/* Name */}

                                    <div className="mb-4">

                                        <input
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                                            type="text"
                                            id="name-2"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    {/* Email */}

                                    <div className="mb-4">

                                        <input
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                                            type="email"
                                            id="email-2"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    {/* Message */}

                                    <div className="mb-4">

                                        <textarea
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 resize-none"
                                            id="message-2"
                                            name="message"
                                            rows="6"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    {/* Submit */}

                                    <div>

                                        <button
                                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition disabled:opacity-50"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? 'Sending...' : 'Send'}
                                        </button>

                                    </div>


                                    {/* Success */}

                                    {successMessage && (
                                        <p className="mt-4 text-green-600">
                                            {successMessage}
                                        </p>
                                    )}


                                    {/* Error */}

                                    {errorMessage && (
                                        <p className="mt-4 text-red-600">
                                            {errorMessage}
                                        </p>
                                    )}

                                </form>

                            </div>

                        </div>

                    </section>

                </div>

            </section>


            {/* =========================
                FAQ SECTION
            ========================= */}

            <section className="py-6 xl:py-10 mb-20">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-2xl mx-auto text-center mb-12">

                        <h2 className="text-4xl md:text-5xl font-bold mb-8">

                            <span className="border-b-4 border-yellow-400 pb-3">
                                FAQ
                            </span>

                        </h2>

                        <p className="text-gray-500 text-lg">
                            Your Questions Answered: A Guide to IPR
                        </p>

                    </div>


                    {/* FAQ */}

                    <div className="max-w-3xl mx-auto">

                        <div className="border-t border-gray-200">

                            {faqs.map((faq, index) => {

                                const isOpen = openFaq === index;

                                return (
                                    <div
                                        key={index}
                                        className="border-b border-gray-200"
                                    >

                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between gap-5 text-left py-5 px-2 font-semibold text-gray-700 hover:text-gray-900"
                                        >

                                            <span>
                                                {faq.question}
                                            </span>

                                            <span
                                                className={`text-2xl flex-shrink-0 transition-transform duration-300 ${
                                                    isOpen ? 'rotate-45' : ''
                                                }`}
                                            >
                                                +
                                            </span>

                                        </button>


                                        {isOpen && (
                                            <div className="px-2 pb-6 text-gray-500 leading-7">
                                                {faq.answer}
                                            </div>
                                        )}

                                    </div>
                                );

                            })}

                        </div>

                    </div>

                </div>


                {/* AI Powered Complete IPR Guide */}

                <div className="text-center flex justify-center mt-12">

                    <button
                        className="bg-gray-500 text-white px-5 py-2 rounded-lg opacity-60 cursor-not-allowed"
                        type="button"
                        disabled
                    >
                        AI Powered Complete IPR Guide
                    </button>

                </div>

                <p className="text-center mt-3">
                    Coming your way soon
                </p>

            </section>

        </main>
    );
}

export default Contact;