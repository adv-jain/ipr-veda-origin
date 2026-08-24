import React, { useState } from 'react';

export default function Trademark() {
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
                throw new Error(data.message || 'Something went wrong.');
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

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800">
            {/* Contact Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
                        Got any <span className="underline decoration-blue-600 underline-offset-4">questions</span>?
                    </h2>
                    <p className="text-gray-600 text-base">
                        Our team is always here to help. Send us a message and we'll get back to you shortly.
                    </p>
                </div>

                {/* Grid Layout (Side by Side on Desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-center max-w-5xl mx-auto">
                    
                    {/* LEFT SIDE - Contact Info */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-6 p-2">
                        {/* Phone */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="font-semibold text-gray-900 text-base mb-0">Phone</h6>
                                <p className="text-gray-600 text-sm mb-0">+91 85060-59559</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 1-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="font-semibold text-gray-900 text-base mb-0">Email</h6>
                                <p className="text-gray-600 text-sm mb-0">info@iprveda.com</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001m-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="font-semibold text-gray-900 text-base mb-0">Location</h6>
                                <p className="text-gray-600 text-sm mb-0">
                                    H15 Prem Nagar, Uttam Nagar, Delhi, India - 110059
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Form */}
                    <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-gray-900 placeholder-gray-400"
                                    type="text"
                                    id="name-2"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-gray-900 placeholder-gray-400"
                                    type="email"
                                    id="email-2"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <textarea
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-gray-900 placeholder-gray-400"
                                    id="message-2"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {successMessage && (
                                <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg">
                                    {successMessage}
                                </div>
                            )}

                            {errorMessage && (
                                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                                    {errorMessage}
                                </div>
                            )}

                            <div>
                                <button
                                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
                        <span className="underline decoration-blue-600 underline-offset-4">
                            FAQ
                        </span>
                    </h2>
                    <p className="text-gray-600 text-base">
                        Your Questions Answered: A Guide to IPR
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {/* Item 1 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                            type="button"
                            className="w-full px-5 py-4 text-left font-medium text-gray-900 flex justify-between items-center focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
                            onClick={() => toggleFaq(1)}
                        >
                            <span>What does a copyright protect?</span>
                            <span className="ml-2 font-bold">{openFaq === 1 ? '−' : '+'}</span>
                        </button>
                        {openFaq === 1 && (
                            <div className="px-5 py-4 text-gray-600 text-sm border-t border-gray-100 bg-white">
                                <p>
                                    A copyright protects original works of authorship, such as literary,
                                    dramatic, musical, artistic, and certain other intellectual creations.
                                    It gives you the exclusive right to reproduce, distribute, and display
                                    your work, preventing others from copying or exploiting it without your
                                    permission.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Item 2 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                            type="button"
                            className="w-full px-5 py-4 text-left font-medium text-gray-900 flex justify-between items-center focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
                            onClick={() => toggleFaq(2)}
                        >
                            <span>Can something be protected by both a trademark and a copyright?</span>
                            <span className="ml-2 font-bold">{openFaq === 2 ? '−' : '+'}</span>
                        </button>
                        {openFaq === 2 && (
                            <div className="px-5 py-4 text-gray-600 text-sm border-t border-gray-100 bg-white">
                                <p className="mb-0">
                                    Yes! In some cases, a work may qualify for both protections. For
                                    example, the artistic design of a logo could be protected by copyright,
                                    while the logo itself as a brand identifier could be protected by a
                                    trademark.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Item 3 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                            type="button"
                            className="w-full px-5 py-4 text-left font-medium text-gray-900 flex justify-between items-center focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
                            onClick={() => toggleFaq(3)}
                        >
                            <span>Do I need to register my trademark or copyright?</span>
                            <span className="ml-2 font-bold">{openFaq === 3 ? '−' : '+'}</span>
                        </button>
                        {openFaq === 3 && (
                            <div className="px-5 py-4 text-gray-600 text-sm border-t border-gray-100 bg-white space-y-3">
                                <p className="mb-0">
                                    Registration isn't mandatory for either, but it offers significant
                                    advantages:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>
                                        Stronger legal protection: A registered trademark or copyright
                                        gives you a legal presumption of ownership and makes it easier to
                                        sue infringers.
                                    </li>
                                    <li>
                                        Public notice: Registration puts others on notice of your claim to
                                        the IP, deterring potential infringement.
                                    </li>
                                    <li>
                                        Benefits in certain situations: Registration is mandatory for
                                        filing certain lawsuits and may be required for customs enforcement.
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Item 4 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                            type="button"
                            className="w-full px-5 py-4 text-left font-medium text-gray-900 flex justify-between items-center focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
                            onClick={() => toggleFaq(4)}
                        >
                            <span>What about trade secrets in India?</span>
                            <span className="ml-2 font-bold">{openFaq === 4 ? '−' : '+'}</span>
                        </button>
                        {openFaq === 4 && (
                            <div className="px-5 py-4 text-gray-600 text-sm border-t border-gray-100 bg-white space-y-3">
                                <p className="mb-0">
                                    Trade secrets aren't formally registered in India, but you can
                                    protect them through:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>
                                        Maintaining confidentiality: Limit access to the information, use
                                        non-disclosure agreements (NDAs), and keep records of who has access.
                                    </li>
                                    <li>
                                        Marking confidential information: Label documents and materials as
                                        "confidential" or "trade secret."
                                    </li>
                                    <li>
                                        Taking prompt action against infringement: If your trade secret is
                                        leaked, take steps to mitigate the damage and hold the infringer
                                        accountable.
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Item 5 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                            type="button"
                            className="w-full px-5 py-4 text-left font-medium text-gray-900 flex justify-between items-center focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
                            onClick={() => toggleFaq(5)}
                        >
                            <span>I have more questions! Who can help me?</span>
                            <span className="ml-2 font-bold">{openFaq === 5 ? '−' : '+'}</span>
                        </button>
                        {openFaq === 5 && (
                            <div className="px-5 py-4 text-gray-600 text-sm border-t border-gray-100 bg-white">
                                <p className="mb-0">
                                    For specific legal advice, it's always best to consult with an
                                    intellectual property attorney. They can help you determine the best way
                                    to protect your IP and guide you through the registration process.
                                    <br /><br />
                                    At IPR Veda, We have experienced attorneys that have been successful
                                    in getting even hard to get trademarks.
                                    <br /><br />
                                    They have trademarked for top companies in India. Contact to discuss
                                    about yours today!
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-center flex justify-center mt-10">
                    <button
                        className="py-2.5 px-6 bg-gray-200 text-gray-500 font-medium rounded-lg cursor-not-allowed shadow-none"
                        type="button"
                        disabled
                    >
                        AI Powered Complete IPR Guide
                    </button>
                </div>

                <p className="text-center text-sm text-gray-500 mt-3">
                    Coming your way soon
                </p>
            </section>
        </div>
    );
}