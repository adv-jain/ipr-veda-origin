


import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {

            // FONTS
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                heading: ['Poppins', 'Figtree', 'sans-serif'],
                brand: ['Poppins', 'sans-serif'],
            },

            // BRAND COLORS
            colors: {
                brand: {
                    primary: '#007BFF',
                    dark: '#003366',
                    darker: '#001a4d',
                    accent: '#FFD700',
                    light: '#F0F7FF',
                    text: '#80BFFF',
                    border: '#66A3FF',
                    hover: '#0066CC',
                    muted: '#B3D9FF',
                },

                success: '#10B981',
                danger: '#EF4444',
                warning: '#F59E0B',
                info: '#3B82F6',
            },

            // CUSTOM SHADOWS
            boxShadow: {
                'brand': '0 4px 14px 0 rgba(0, 123, 255, 0.15)',
                'brand-lg': '0 10px 30px 0 rgba(0, 51, 102, 0.2)',
                'brand-sm': '0 2px 8px 0 rgba(0, 123, 255, 0.1)',
               
       
            },

            // CUSTOM GRADIENTS
            backgroundImage: {
                'brand-gradient':
                    'linear-gradient(135deg, #003366 0%, #001a4d 100%)',

                'brand-gradient-light':
                    'linear-gradient(135deg, #F0F7FF 0%, #FFFFFF 100%)',

                'brand-gradient-accent':
                    'linear-gradient(135deg, #007BFF 0%, #003366 100%)',
            },

            // CUSTOM ANIMATIONS
            animation: {

                // Existing animations
                'fade-in': 'fadeIn 0.3s ease-in-out',

                'slide-up': 'slideUp 0.4s ease-out',

                'slide-down': 'slideDown 0.3s ease-out',

                'pulse-brand': 'pulseBrand 2s infinite',

                // ⭐ NEW: Infinite horizontal scroll
                'scroll': 'scroll 20s linear infinite',
            },

            // KEYFRAMES
            keyframes: {

                fadeIn: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },

                slideUp: {
                    '0%': {
                        transform: 'translateY(20px)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },

                slideDown: {
                    '0%': {
                        transform: 'translateY(-10px)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },

                pulseBrand: {
                    '0%, 100%': {
                        boxShadow: '0 0 0 0 rgba(0, 123, 255, 0.4)',
                    },
                    '50%': {
                        boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                },

                // ⭐ NEW: Horizontal infinite scrolling
                scroll: {
                    '0%': {
                        transform: 'translateX(0)',
                    },

                    '100%': {
                        transform: 'translateX(-50%)',
                    },
                },
            },

            // CUSTOM SPACING
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },

            // CUSTOM BORDER RADIUS
            borderRadius: {
                'brand': '12px',
                'brand-lg': '16px',
                'brand-xl': '24px',
            },
             transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
        },
    },

    plugins: [forms],
};