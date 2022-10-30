/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        maxWidth: {
            '1/2': '50%',
            '1/4': '20%',
            lg: '32rem',
        },
        top: {
            '1/5': '20%',
        },
    },
    plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
};
