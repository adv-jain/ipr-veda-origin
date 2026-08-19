import React, { useState } from 'react';

export default function About() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [openFaq, setOpenFaq] = useState(1);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="pt-[82px]">

            {/* Contact Section */}

            <section className="py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4">

                    <section className="relative py-6">

                        <div className="max-w-7xl mx-auto">

                            <div className="mb-12">
                                <div className="max-w-2xl text-center mx-auto">

                                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                        Got any{' '}
                                        <span className="underline">
                                            questions
                                        </span>?
                                    </h2>

                                    <p className="text-gray-500">
                                        Our team is always here to help. Send us a message and we'll get back
                                        to you shortly.
                                    </p>

                                </div>
                            </div>


                            <div className="flex justify-center flex-col md:flex-row gap-10">

                                {/* Contact Information */}

                                <div className="w-full md:w-1/2 lg:w-1/3">

                                    <div className="flex flex-col justify-center items-start h-full">

                                        {/* Phone */}

                                        <div className="flex items-center p-3">

                                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex justify-center items-center flex-shrink-0">

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

                                            <div className="px-2">
                                                <h6 className="mb-1 font-semibold">
                                                    Phone
                                                </h6>

                                                <p className="mb-0">
                                                    +91 85060-59559
                                                </p>
                                            </div>

                                        </div>


                                        {/* Email */}

                                        <div className="flex items-center p-3">

                                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex justify-center items-center flex-shrink-0">

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

                                            <div className="px-2">

                                                <h6 className="mb-1 font-semibold">
                                                    Email
                                                </h6>

                                                <p className="mb-0">
                                                    info@iprveda.com
                                                </p>

                                            </div>

                                        </div>


                                        {/* Location */}

                                        <div className="flex items-center p-3">

                                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex justify-center items-center flex-shrink-0">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                                                </svg>

                                            </div>

                                            <div className="px-2">

                                                <h6 className="mb-1 font-semibold">
                                                    Location
                                                </h6>

                                                <p className="mb-0">
                                                    H15 Prem Nagar, Uttam Nagar, Delhi, India - 110059
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* Contact Form */}

                                <div className="w-full md:w-1/2 lg:w-1/3">

                                    <form
                                        className="p-3 md:p-6"
                                        onSubmit={handleSubmit}
                                    >

                                        <div className="mb-4">

                                            <input
                                                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="mb-4">

                                            <input
                                                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="mb-4">

                                            <textarea
                                                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                name="message"
                                                rows="6"
                                                placeholder="Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        {/* Error */}

                                        {errorMessage && (
                                            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                                                {errorMessage}
                                            </div>
                                        )}


                                        {/* Success */}

                                        {successMessage && (
                                            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                                                {successMessage}
                                            </div>
                                        )}


                                        <button
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full disabled:opacity-50"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? 'Sending...' : 'Send'}
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

                <div className="max-w-7xl mx-auto px-4">

                    <div className="mb-8">

                        <div className="max-w-2xl text-center mx-auto">

                            <h2 className="text-4xl md:text-5xl font-bold mb-8">

                                <span className="underline">
                                    FAQ
                                </span>

                            </h2>

                            <p className="text-gray-500 mb-12">
                                Your Questions Answered: A Guide to IPR
                            </p>

                        </div>

                    </div>


                    <div className="max-w-3xl mx-auto text-gray-500">

                        {/* FAQ 1 */}

                        <div className="border rounded-lg">

                            <button
                                type="button"
                                onClick={() => toggleFaq(1)}
                                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-700"
                            >
                                <span>
                                    What does a copyright protect?
                                </span>

                                <span>
                                    {openFaq === 1 ? '−' : '+'}
                                </span>

                            </button>


                            {openFaq === 1 && (

                                <div className="px-5 pb-5">

                                    <p>
                                        A copyright protects original works of authorship, such as literary, dramatic,
                                        musical, artistic, and certain other intellectual creations. It gives you the
                                        exclusive right to reproduce, distribute, and display your work, preventing
                                        others from copying or exploiting it without your permission.
                                    </p>

                                </div>

                            )}

                        </div>


                        {/* FAQ 2 */}

                        <div className="border rounded-lg mt-2">

                            <button
                                type="button"
                                onClick={() => toggleFaq(2)}
                                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-700"
                            >

                                <span>
                                    Can something be protected by both a trademark and a copyright?
                                </span>

                                <span>
                                    {openFaq === 2 ? '−' : '+'}
                                </span>

                            </button>


                            {openFaq === 2 && (

                                <div className="px-5 pb-5">

                                    <p>
                                        Yes! In some cases, a work may qualify for both protections. For
                                        example, the artistic design of a logo could be protected by copyright, while
                                        the logo itself as a brand identifier could be protected by a trademark.
                                    </p>

                                </div>

                            )}

                        </div>


                        {/* FAQ 3 */}

                        <div className="border rounded-lg mt-2">

                            <button
                                type="button"
                                onClick={() => toggleFaq(3)}
                                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-700"
                            >

                                <span>
                                    Do I need to register my trademark or copyright?
                                </span>

                                <span>
                                    {openFaq === 3 ? '−' : '+'}
                                </span>

                            </button>


                            {openFaq === 3 && (

                                <div className="px-5 pb-5">

                                    <p className="mb-3">
                                        Registration isn't mandatory for either, but it offers significant
                                        advantages:
                                    </p>

                                    <ul className="list-disc pl-6 space-y-2">

                                        <li>
                                            Stronger legal protection: A registered trademark or copyright gives you a
                                            legal presumption of ownership and makes it easier to sue infringers.
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

                                </div>

                            )}

                        </div>


                        {/* FAQ 4 */}

                        <div className="border rounded-lg mt-2">

                            <button
                                type="button"
                                onClick={() => toggleFaq(4)}
                                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-700"
                            >

                                <span>
                                    What about trade secrets in India?
                                </span>

                                <span>
                                    {openFaq === 4 ? '−' : '+'}
                                </span>

                            </button>


                            {openFaq === 4 && (

                                <div className="px-5 pb-5">

                                    <p className="mb-3">
                                        Trade secrets aren't formally registered in India, but you can
                                        protect them through:
                                    </p>

                                    <ul className="list-disc pl-6 space-y-2">

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

                                </div>

                            )}

                        </div>


                        {/* FAQ 5 */}

                        <div className="border rounded-lg mt-2">

                            <button
                                type="button"
                                onClick={() => toggleFaq(5)}
                                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-700"
                            >

                                <span>
                                    I have more questions! Who can help me?
                                </span>

                                <span>
                                    {openFaq === 5 ? '−' : '+'}
                                </span>

                            </button>


                            {openFaq === 5 && (

                                <div className="px-5 pb-5">

                                    <p>
                                        For specific legal advice, it's always best to consult with an
                                        intellectual property attorney. They can help you determine the best way to
                                        protect your IP and guide you through the registration process.

                                        <br />
                                        <br />

                                        At IPR Veda, We have experienced attorneys that have been successful in getting even
                                        hard to get trademarks.

                                        <br />
                                        <br />

                                        They have trademarked for top companies in
                                        India. Contact to discuss about yours today!
                                    </p>

                                </div>

                            )}

                        </div>

                    </div>

                </div>


                <div className="text-center mt-12">

                    <button
                        className="bg-gray-500 text-white py-3 px-6 rounded-lg opacity-60 cursor-not-allowed"
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

        </div>
    );
}