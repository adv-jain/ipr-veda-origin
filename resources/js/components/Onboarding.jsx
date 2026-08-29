import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        const storedUser = localStorage.getItem('user');

        if (!token) {
            navigate('/login');
            return;
        }

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome, {user?.name || 'User'}!
                </h1>
                <p className="text-gray-600 mb-6">{user?.email}</p>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Onboarding;