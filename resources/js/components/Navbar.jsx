import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import iprPrefect from "../../../config/assets/img/ipr-perfect-rect.png"

export default function Navbar() {
    const navClass = ({ isActive }) =>
        `transition-colors duration-200 ${
            isActive
                ? 'text-yellow-500 font-semibold'
                : 'text-gray-700 hover:text-yellow-500'
        }`;

    return (
        <nav className="w-full border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={iprPrefect} className='w-[100px]'/>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6">

                    <NavLink to="/trademark" className={navClass}>
                        Trademark
                    </NavLink>

                    <NavLink to="/copyright" className={navClass}>
                        Copyright
                    </NavLink>

                    <NavLink to="/patent" className={navClass}>
                        Patent
                    </NavLink>

                    <NavLink to="/about" className={navClass}>
                        About
                    </NavLink>

                    <NavLink to="/contact" className={navClass}>
                        Contact
                    </NavLink>

                    <NavLink to="/blog" className={navClass}>
                        Blog
                    </NavLink>

                </div>

                {/* Auth buttons */}
                <div className="flex items-center gap-2">

                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `rounded border px-4 py-2 ${
                                isActive
                                    ? 'border-yellow-500 bg-yellow-500 text-black'
                                    : 'border-yellow-500 text-yellow-600'
                            }`
                        }
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            `rounded px-4 py-2 ${
                                isActive
                                    ? 'bg-yellow-600 text-black'
                                    : 'bg-yellow-500 text-black'
                            }`
                        }
                    >
                        SignUp
                    </NavLink>
                    
                    <NavLink
                     to="/verify-otp"
                     className={({isActive})=>
                    `rounded px-4 py-2 ${
                        isActive ? '':''
                    }`}
                    >
                    </NavLink>

                </div>

            </div>
        </nav>
    );
}