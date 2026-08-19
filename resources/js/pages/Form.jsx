import React, { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        email: "",
        mobile: "",
        name: "",
        brand_name: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");
        setError("");

        // Frontend validation
        if (!formData.name.trim()) {
            setError("Please enter your name.");
            setLoading(false);
            return;
        }

        if (!formData.email.trim()) {
            setError("Please enter your email.");
            setLoading(false);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        if (!formData.mobile.trim()) {
            setError("Please enter your mobile number.");
            setLoading(false);
            return;
        }

        if (!formData.brand_name.trim()) {
            setError("Please enter your brand name.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/trademark-enquiries",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong."
                );
            }

            setMessage(
                data.message || "Record inserted successfully."
            );

            // Clear form
            setFormData({
                email: "",
                mobile: "",
                name: "",
                brand_name: "",
            });
        } catch (err) {
            setError(
                err.message || "Unable to submit the form."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto">

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
            >

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Register Your Trademark
                </h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        outline-none focus:border-yellow-500 focus:ring-2
                        focus:ring-yellow-200 transition"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        outline-none focus:border-yellow-500 focus:ring-2
                        focus:ring-yellow-200 transition"
                    />
                </div>

                {/* Mobile */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile
                    </label>

                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        outline-none focus:border-yellow-500 focus:ring-2
                        focus:ring-yellow-200 transition"
                    />
                </div>

                {/* Brand Name */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Brand Name
                    </label>

                    <input
                        type="text"
                        name="brand_name"
                        value={formData.brand_name}
                        onChange={handleChange}
                        placeholder="Enter your brand name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        outline-none focus:border-yellow-500 focus:ring-2
                        focus:ring-yellow-200 transition"
                    />
                </div>

                {/* Error */}
                {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
                        {error}
                    </div>
                )}

                {/* Success */}
                {message && (
                    <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
                        {message}
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-400 hover:bg-yellow-500
                    disabled:bg-gray-300 disabled:cursor-not-allowed
                    text-black font-semibold py-3 px-5 rounded-lg
                    transition duration-200"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

            </form>
        </div>
    );
}