import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import login from "../../../config/assets/img/illustrations/login.svg" 


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

            const res = await fetch("/api/signup-otp", {
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                     Log into your account
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                            Email or Phone Number
                        </label>
                        <input 
                            id="contact"           
                            name="contact"         
                            type="text" 
                            value={contact}
                            onChange={handleChange} 
                            placeholder="e.g., user@email.com or 9876543210"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-yellow-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-yellow-700"
                    >
                        Get OTP
                    </button>
                </form>
      <div className="mt-4 text-center">
    <span>Don't have account</span>

    <button
        type="button"
        onClick={() => navigate("/signup")}
        className="bg-yellow-600 text-white px-4 py-2 rounded"
    >
        Signup
    </button>
</div>
                {error && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm text-center">{error}</p>
                    </div>
                )}
                
                {success && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-600 text-sm text-center">{success}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;