const gradients = require('tailwindcss-plugins/gradients');

module.exports = {
    theme: {
        extend: {
            borderWidth: {
                1: '1px',
            },
            boxShadow: {
                '3xl': '1px 3px 12px 4px rgba(0, 0, 0, 0.6)',
            },
            colors: {
                black: {
                    900: '#121212',
                },
                grey: {
                    900: '#282828',
                    800: '#3E3E3E',
                    700: '#7B7B7B',
                    600: '#AAAAAA',
                    500: '#AEAEAE',
                },
                green: {
                    900: '#1DB954',
                },
            },
            fontFamily: {
                circular: ['Circular', 'sans-serif'],
            },
            fontSize: {
                tiny: '0.7rem',
                smaller: '0.86rem',
                larger: '1.1875rem',
            },
            height: {
                1.25: '0.3125rem',
                18: '4.5rem',
            },
        },
        gradients: () => ({
            graydient: ['to top', '#181818', '#3E3E3E'],
        }),
        variants: {
            fill: ['hover'],
        },
    },
    variants: {
        gradients: ['responsive', 'hover'],
    },
    plugins: [
        gradients,
    ],
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
};
