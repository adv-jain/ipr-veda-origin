import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-white">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Services */}
                    <div>
                        <h3 className="mb-4 text-base font-bold text-gray-900">
                            Services
                        </h3>

                        <ul className="list-none space-y-2.5 p-0">
                            <li>
                                <Link
                                    to="/trademark/registration"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Trademark Registration
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/copyright/registration"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Copyright Registration
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/patent/registration"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Patent Registration
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/msme/registration"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    MSME Registration
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/trademark/renewal"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Trademark Renewal
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/object/reply"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Objection Reply Filing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Helpful */}
                    <div>
                        <h3 className="mb-4 text-base font-bold text-gray-900">
                            Helpful
                        </h3>

                        <ul className="list-none space-y-2.5 p-0">
                            <li>
                                <Link
                                    to="/protect/infringement"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Protect from Infringement
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/trademark/renewal"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    Everything about Renewals
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/ca-ip"
                                    className="text-gray-600 no-underline transition hover:text-gray-900"
                                >
                                    CA vs. IP Attorneys
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-base font-bold text-gray-900">
                            Company
                        </h3>

                        <ul className="list-none space-y-2.5 p-0">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/blog"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/privacy-policy"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/disclaimer"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Disclaimer
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/refund-policy"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Refund Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/credits"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Credits
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="mb-4 text-base font-bold text-gray-900">
                            Tools
                        </h3>

                        <ul className="list-none space-y-2.5 p-0">
                            <li>
                                <Link
                                    to="/find-attorney"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Find Attorney ID
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/track-application"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Track Application
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/find-classes"
                                    className="text-gray-600 no-underline hover:text-gray-900"
                                >
                                    Find Classes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <hr className="border-gray-200" />

                <div className="flex flex-col items-start justify-between gap-3 pt-6 text-sm text-gray-500 md:flex-row md:items-center">
                    <span>
                        IPR VEDA&nbsp;© Copyright 2024. All Rights Reserved.
                    </span>

                    <span>
                        X27 Experiments Technologies Private Limited
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;