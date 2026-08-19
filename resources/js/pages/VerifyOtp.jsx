import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function VerifyOtp() {

    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        try {
            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    otp,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw data;
            }

            navigate('/reset-password', {
                state: {
                    email,
                    reset_token: data.reset_token,
                },
            });

        } catch (error) {
            setError(
                error.message || 'Invalid OTP'
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                <h2 className="text-4xl font-bold mb-5">
                    Verify OTP
                </h2>

                <p className="text-gray-500 mb-6">
                    Enter the OTP sent to your email.
                </p>

                {error && (
                    <div className="mb-5 p-3 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 6 digit OTP"
                        maxLength="6"
                        required
                        className="w-full px-4 py-3 border rounded-lg mb-5"
                    />

                    <button
                        type="submit"
                        className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
                    >
                        Verify OTP
                    </button>

                </form>

            </div>

        </div>
    );
}

export default VerifyOtp;