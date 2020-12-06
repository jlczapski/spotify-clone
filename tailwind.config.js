const gradients = require('tailwindcss-plugins/gradients');

module.exports = {
    theme: {
        extend: {
            colors: {
                black: {
                    900: '#191414',
                    800: '#302c2c',
                },
                grey: {
                    900: '#a3a3a3',
                },
            },
            fontFamily: {
                proxima: ['Proxima Nova', 'sans-serif'],
            },
            fontSize: {
                tiny: '0.7rem',
                smaller: '0.86rem',
            },
        },
        gradients: () => ({
            graydient: ['to top', '#191414', '#444444'],
        }),
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
