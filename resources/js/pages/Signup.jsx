import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../services/auth';
import whatsapplogo from "../../../config/assets/img/whatsapp-logo-free-png.webp";

function Signup() {

    const [formData, setFormData] = useState({
        name:'',
        email: '',
        number:'',
        
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
       name:'',
        email: '',
        number:'',
        
            });
           navigate("/verify-otp", { state: { email: formData.email } });

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
       type='text'
       name='name'
       value={formData.name}
       onChange={handleChange}
       placeholder='Name'
       className="w-full mb-6 px-5 py-4 border rounded-lg shadow-sm"
       />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full mb-6 px-5 py-4 border rounded-lg shadow-sm"
                    />
 <input
 type='number'
 name='number'
 value={formData.number}
 placeholder='number'
 onChange={handleChange}
 className="w-full mb-6 px-5 py-4 border rounded-lg shadow-sm"
 />


                      <div className="flex items-center gap-2 mb-6">
    <h3 className="text-sm font-medium text-gray-700 mb-2">
        Get Easy Updates Through WhatsApp
    </h3>
    <img
        src={whatsapplogo}
        alt="WhatsApp"
        className="w-10 h-10 rounded-md"
    />
    <h3>Whatsapp</h3>
    <input type='radio'/>
</div>

                    <button
                        type="submit"
                        className="bg-yellow-500 px-7 py-3 rounded-lg font-semibold"
                    >
                        Get start
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