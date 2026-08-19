import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw data;
            }

            setSuccess(data.message);

            
             navigate('/');

        } catch (error) {
            if (error.errors) {
                setError(
                    Object.values(error.errors)
                        .flat()
                        .join(' ')
                );
            } else {
                setError(error.message || 'Login failed');
            }
        }
    };

    return (
        <main className="min-h-screen py-16 md:py-20">

            <section>
                <div className="max-w-6xl mx-auto px-4">

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Image */}
                        <div className="text-center">
                            <img
                                src="/assets/img/illustrations/login.svg"
                                alt="Login"
                                className="w-full max-w-lg mx-auto"
                            />
                        </div>

                        {/* Login Form */}
                        <div className="w-full max-w-md mx-auto md:mx-0">

                            <h2 className="text-5xl font-bold mb-12">
                                <span className="border-b-4 border-yellow-500 pb-1">
                                    Login
                                </span>
                            </h2>

                            {/* Error */}
                            {error && (
                                <div className="mb-5 p-3 bg-red-100 text-red-700 rounded-lg">
                                    {error}
                                </div>
                            )}

                            {/* Success */}
                            {success && (
                                <div className="mb-5 p-3 bg-green-100 text-green-700 rounded-lg">
                                    {success}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>

                                {/* Email */}
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-8">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-7 py-3 rounded-lg shadow transition"
                                >
                                    Log in
                                </button>

                            </form>

                            {/* Forgot password */}
                            <p className="mt-6 text-gray-500">
                                <NavLink
                                    to="/forgotten-password"
                                    className="text-gray-600 hover:text-yellow-600"
                                >
                                    Forgot your password?
                                </NavLink>
                            </p>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Login;