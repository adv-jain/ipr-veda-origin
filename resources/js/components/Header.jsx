import React, { useState } from "react";
import RepublicDay1 from "../../../config/assets/img/republic-day-01.jpg"

export default function Header() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        trade_mark_name: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        

        console.log(formData);

        setLoading(false);
    };

    return (
        <header
            className="pt-20 bg-cover bg-center"
            style={{
                backgroundImage:
                    `url(${RepublicDay1})`,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12 xl:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">

                    {/* LEFT CONTENT */}
                    <div className="flex items-center justify-center md:justify-start xl:justify-center text-center md:text-left p-4 sm:p-8">
                        <div>

                            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.3] mb-6">
                                Apply for ™ by Experts
                                <br />
                                in Under 2 Minutes.
                            </h1>

                            <p className="my-6 text-base sm:text-lg leading-relaxed">
                                Protect your brand identity and gain exclusive
                                rights with our hassle-free online trademark
                                registration process.
                            </p>

                            {/* FEATURES */}
                            <div>

                                {/* Feature 1 */}
                                <div className="flex items-center py-2">
                                    <div className="w-9 h-9 rounded-lg bg-yellow-400 flex-shrink-0 flex items-center justify-center shadow-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                    </div>

                                    <div className="px-2">
                                        <h5 className="font-semibold">
                                            Free Trademark Search Report
                                        </h5>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-center py-2">
                                    <div className="w-9 h-9 rounded-lg bg-yellow-400 flex-shrink-0 flex items-center justify-center shadow-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" />
                                            <path
                                                fillRule="evenodd"
                                                d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595z"
                                            />
                                        </svg>
                                    </div>

                                    <div className="px-2">
                                        <h5 className="font-semibold">
                                            25% discount on 2+ applications
                                        </h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex flex-col items-center justify-center">

                        {/* FORM CARD */}
                        <div className="w-full max-w-[450px] bg-white rounded-lg shadow-lg mb-8">
                            <div className="p-5">

                                <h5 className="font-semibold text-lg mb-6">
                                    Register Your Trademark !
                                </h5>

                                <form onSubmit={handleSubmit}>

                                    {/* NAME */}
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                                        />
                                    </div>

                                    {/* MOBILE */}
                                    <div className="mb-4">
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="Mobile"
                                            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                                        />
                                    </div>

                                    {/* TRADEMARK */}
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="trade_mark_name"
                                            value={formData.trade_mark_name}
                                            onChange={handleChange}
                                            placeholder="What to TradeMark"
                                            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                                        />
                                    </div>

                                    {/* BUTTON */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-md shadow transition duration-200 disabled:opacity-60"
                                    >
                                        {loading
                                            ? "Submitting..."
                                            : "Apply & Get 10% OFF"}
                                    </button>

                                </form>
                            </div>
                        </div>

                        {/* TRUST FEATURES */}
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm">

                            {/* Secure */}
                            <span className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className="mr-1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"
                                    />
                                </svg>
                                100% Secure
                            </span>

                            {/* Fast */}
                            <span className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className="mr-1"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                </svg>
                                Fast Process
                            </span>

                            {/* Paperless */}
                            <span className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className="mr-1"
                                >
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                                Paperless
                            </span>

                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}