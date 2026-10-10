import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iprvedabg from "./iprvedabg.png";

function Login() {
    const [contact, setContact] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setContact(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const isEmail = contact.includes('@');
            const payload = isEmail 
                ? { email: contact } 
                : { number: contact };

            const res = await fetch("/api/home-login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            
            if (!res.ok) {
                throw new Error(data.message || 'Failed to send OTP');
            }
            
            setSuccess(data.message);
            
            setTimeout(() => {
                navigate("/verify-otp", { 
                    state: { contact: contact } 
                });
            }, 1500);

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white -mt-20">
            
            {/* Background Image - Less Blur & More Visible */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={iprvedabg} 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-30 blur-[2px] scale-105" 
                />
                {/* Lighter white overlay */}
                <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Form Card */}
            <div className="relative z-10 max-w-xs w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-center text-brand-dark mb-4">
                   Login IPRVEDA 
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Fieldset with Legend - Label inside border */}
                    <fieldset className={`border rounded-xl px-4 py-2 transition-all ${
                        error ? 'border-danger' : 'border-brand-border'
                    }`}>
                        <legend className="text-xs font-medium text-brand-dark/70 px-1">
                            Email or Phone Number
                        </legend>
                        <input 
                            id="contact"
                            name="contact"
                            type="text" 
                            value={contact}
                            onChange={handleChange} 
                            placeholder="e.g., user@email.com or 9876543210"
                            className="w-full py-1 bg-transparent text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-0 focus:border-0 border-0"
                            required
                        />
                    </fieldset>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-brand-primary text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-brand-hover transition-all transform hover:scale-[1.02] shadow-lg"
                    >
                        Get OTP
                    </button>
                </form>

                {error && (
                    <div className="mt-4 p-3 bg-danger/10 border border-danger/20 rounded-lg">
                        <p className="text-danger text-sm text-center">{error}</p>
                    </div>
                )}
                
                {success && (
                    <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-lg">
                        <p className="text-success text-sm text-center">{success}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;