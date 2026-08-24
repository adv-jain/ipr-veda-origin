import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function VerifyOtp() {
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [digits, setDigits] = useState(['', '', '', '', '', '']);

    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index, value) => {
        const digit = value.replace(/\D/g, '').slice(-1);

        const next = [...digits];
        next[index] = digit;
        setDigits(next);
        setOtp(next.join(''));

        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !digits[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === 'ArrowRight' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pasted = e.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, 6);

        const next = ['', '', '', '', '', ''];

        pasted.split('').forEach((digit, index) => {
            next[index] = digit;
        });

        setDigits(next);
        setOtp(next.join(''));

        const focusIndex = Math.min(pasted.length, 5);
        inputRefs.current[focusIndex]?.focus();
    };

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

            navigate('/');

        } catch (error) {
            setError(
                error.message || 'Invalid OTP'
            );
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4">

            {/* Background overlay */}
            <div className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40" />

            {/* OTP Modal */}
            <div className="relative z-50 w-full max-w-[512px] rounded-lg bg-white px-8 py-9 sm:px-10 sm:py-8 shadow-2xl">

                <div className="text-center">

                    <h2 className="text-[28px] sm:text-[30px] font-bold text-black mb-5">
                        OTP Verification
                    </h2>

                    <p className="text-[17px] text-gray-500 mb-8">
                        Enter OTP received on&nbsp;
                        <span className="text-gray-700">
                            {email || 'your whatsapp'}
                        </span>
                    </p>

                    {error && (
                        <div className="mb-5 p-3 bg-red-100 text-red-700 rounded text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>

                        <div
                            className="flex justify-center gap-3 sm:gap-4 mb-12"
                            onPaste={handlePaste}
                        >
                            {digits.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => {
                                        inputRefs.current[index] = el;
                                    }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) =>
                                        handleChange(index, e.target.value)
                                    }
                                    onKeyDown={(e) =>
                                        handleKeyDown(index, e)
                                    }
                                    className="w-[58px] h-[56px] sm:w-[58px] sm:h-[56px] rounded-md border border-gray-300 bg-white text-center text-xl text-gray-700 outline-none transition focus:border-gray-500 focus:ring-0"
                                    aria-label={`OTP digit ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="hidden"
                            aria-hidden="true"
                        >
                            Verify OTP
                        </button>

                    </form>

                    <button
                        type="button"
                        onClick={() => {
                            setError('');
                        }}
                        className="text-[18px] text-slate-700 underline underline-offset-2 hover:text-black transition"
                    >
                        Resend OTP
                    </button>

                </div>
            </div>
        </div>
    );
}

export default VerifyOtp;