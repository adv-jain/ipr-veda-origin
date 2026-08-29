import React, { useState } from 'react';

export default function About() {
  
const [openFaq,setOpenFaq] = useState(0)
   

    return (
        <div className="pt-[82px]">
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