import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCsrfToken } from '../utils/csrf';

function VerifyOtp() {
    const location = useLocation();
    const navigate = useNavigate();

    const contact = location.state?.contact;
    const isEmail = contact?.includes('@');

    const [error, setError] = useState('');
    const [digits, setDigits] = useState(['', '', '', '']);
    const [loading, setLoading] = useState(false);

    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    // ✅ Ye function actual API call karta hai, poora otp string leke
    const verifyOtp = async (otpValue) => {
        setError('');
        setLoading(true);

        try {
            const payload = { otp: otpValue };

            if (isEmail) {
                payload.email = contact;
            } else {
                payload.number = contact;
            }

            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': getCsrfToken(),
                },
                credentials: 'include',
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Invalid OTP');
            }

            // localStorage.setItem('auth_token', data.token);
            // localStorage.setItem('user', JSON.stringify(data.user));
localStorage.setItem('auth_token', data.token);
localStorage.setItem('user', JSON.stringify(data.user));

setTimeout(() => {
    window.location.href = data.is_onboarded ? '/dashboard' : '/onboarding';
}, 500);

        } catch (error) {
            setError(error.message || 'Invalid OTP');
            setLoading(false);
        }
    };

    const handleChange = (index, value) => {
        const digit = value.replace(/\D/g, '').slice(-1);

        const next = [...digits];
        next[index] = digit;
        setDigits(next);

        if (digit && index < digits.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // ✅ Auto-submit jab sab boxes fill ho jayein
        const otpValue = next.join('');
        if (otpValue.length === digits.length && next.every(d => d !== '')) {
            verifyOtp(otpValue);
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !digits[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === 'ArrowRight' && index < digits.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pasted = e.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, digits.length);

        const next = Array(digits.length).fill('');

        pasted.split('').forEach((digit, index) => {
            next[index] = digit;
        });

        setDigits(next);

        const focusIndex = Math.min(pasted.length, digits.length - 1);
        inputRefs.current[focusIndex]?.focus();

        // ✅ Paste se bhi agar sab fill ho jayein, auto-submit
        const otpValue = next.join('');
        if (otpValue.length === digits.length && next.every(d => d !== '')) {
            verifyOtp(otpValue);
        }
    };

    // ✅ Manual submit button ke liye bhi (optional fallback)
    const handleSubmit = (e) => {
        e.preventDefault();
        const otpValue = digits.join('');
        if (otpValue.length === digits.length) {
            verifyOtp(otpValue);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40" />

            <div className="relative z-50 w-full max-w-[512px] rounded-lg bg-white px-8 py-9 sm:px-10 sm:py-8 shadow-2xl">
                <div className="text-center">
                    <h2 className="text-[28px] sm:text-[30px] font-bold text-black mb-5">
                        OTP Verification
                    </h2>

                    <p className="text-[17px] text-gray-500 mb-8">
                        Enter OTP received on&nbsp;
                        <span className="text-gray-700">
                            {contact || 'your device'}
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
                                    disabled={loading}
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
                    </form>

                    {loading && (
                        <p className="text-sm text-gray-500 mb-4">Verifying...</p>
                    )}

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