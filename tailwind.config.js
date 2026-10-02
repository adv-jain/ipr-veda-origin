// import defaultTheme from 'tailwindcss/defaultTheme';
// import forms from '@tailwindcss/forms';

// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
//         './storage/framework/views/*.php',
//         './resources/views/**/*.blade.php',
//         './resources/js/**/*.jsx',
//     ],

//     theme: {
//         extend: {
//             fontFamily: {
//                 sans: ['Figtree', ...defaultTheme.fontFamily.sans],
//             },
//         },
//     },

//     plugins: [forms],
// };




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
            //  FONTS (Existing Figtree preserved + new brand fonts added)
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                heading: ['Poppins', 'Figtree', 'sans-serif'],
                brand: ['Poppins', 'sans-serif'],
            },

            // 🎨 BRAND COLORS (IPRveda Logo se liye gaye)
            colors: {
                brand: {
                    primary: '#007BFF',      // IPR Blue - Buttons, Links, Icons
                    dark: '#003366',         // Deep Navy - Hero BG, Footers
                    darker: '#001a4d',       // Darker Navy - Gradients, Hover
                    accent: '#FFD700',       // Gold/Yellow - Stars, Prices, Badges
                    light: '#F0F7FF',        // Very Light Blue - Card BG
                    text: '#80BFFF',         // Light Blue - Text on dark BG
                    border: '#66A3FF',       // Border Blue - Cards, Inputs
                    hover: '#0066CC',        // Hover Blue - Button hover
                    muted: '#B3D9FF',        // Muted Blue - Subtle text
                },
                // Generic utility colors
                success: '#10B981',
                danger: '#EF4444',
                warning: '#F59E0B',
                info: '#3B82F6',
            },

            // ️ CUSTOM SHADOWS
            boxShadow: {
                'brand': '0 4px 14px 0 rgba(0, 123, 255, 0.15)',
                'brand-lg': '0 10px 30px 0 rgba(0, 51, 102, 0.2)',
                'brand-sm': '0 2px 8px 0 rgba(0, 123, 255, 0.1)',
            },

            // 🎨 CUSTOM GRADIENTS
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, #003366 0%, #001a4d 100%)',
                'brand-gradient-light': 'linear-gradient(135deg, #F0F7FF 0%, #FFFFFF 100%)',
                'brand-gradient-accent': 'linear-gradient(135deg, #007BFF 0%, #003366 100%)',
            },

            // ✨ CUSTOM ANIMATIONS
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.4s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'pulse-brand': 'pulseBrand 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                pulseBrand: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 123, 255, 0.4)' },
                    '50%': { boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)' },
                },
            },

            //  CUSTOM SPACING (Optional - for consistent layouts)
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },

            // 🎯 CUSTOM BORDER RADIUS
            borderRadius: {
                'brand': '12px',
                'brand-lg': '16px',
                'brand-xl': '24px',
            },
        },
    },

    plugins: [forms],
};