import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../services/auth';

function Signup() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password_repeat: '',
    });
    const navigate = useNavigate();

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
            const data = await signup(formData);

            setSuccess(data.message);

            setFormData({
                email: '',
                password: '',
                password_repeat: '',
            });
            navigate("/");

        } catch (error) {

            if (error.errors) {
                setError(
                    Object.values(error.errors)
                        .flat()
                        .join(' ')
                );
            } else {
                setError(error.message || 'Signup failed');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                <h2 className="text-5xl font-bold mb-10">
                    <span className="border-b-4 border-yellow-500">
                        Sign up
                    </span>
                </h2>

                {error && (
                    <div className="mb-5 p-3 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-5 p-3 bg-green-100 text-green-700 rounded">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full mb-6 px-5 py-4 border rounded-lg shadow-sm"
                    />

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full mb-6 px-5 py-4 border rounded-lg shadow-sm"
                    />

                    <input
                        type="password"
                        name="password_repeat"
                        value={formData.password_repeat}
                        onChange={handleChange}
                        placeholder="Repeat Password"
                        className="w-full mb-6 px-5 py-4 border rounded-lg shadow-sm"
                    />

                    <button
                        type="submit"
                        className="bg-yellow-500 px-7 py-3 rounded-lg font-semibold"
                    >
                        Create account
                    </button>

                </form>

                <p className="mt-8 text-gray-600">
                    Have an account?{' '}

                    <NavLink
                        to="/login"
                        className="text-yellow-600 font-semibold"
                    >
                        Log in →
                    </NavLink>
                </p>

            </div>

        </div>
    );
}

export default Signup;