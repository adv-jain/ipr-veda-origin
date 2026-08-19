import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResetPassword() {

    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw data;
            }

            setSuccess(data.message);

            setTimeout(() => {
                navigate('/login');
            }, 1500);

        } catch (error) {
            setError(
                error.message || 'Password reset failed'
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                <h2 className="text-4xl font-bold mb-8">
                    Reset Password
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
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 border rounded-lg mb-5"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={passwordConfirmation}
                        onChange={(e) =>
                            setPasswordConfirmation(e.target.value)
                        }
                        required
                        className="w-full px-4 py-3 border rounded-lg mb-6"
                    />

                    <button
                        type="submit"
                        className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
                    >
                        Reset Password
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ResetPassword;