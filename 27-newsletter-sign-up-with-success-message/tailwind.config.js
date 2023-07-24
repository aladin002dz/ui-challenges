/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                'pale-navy': '#36384D',
                'dark-navy': '#242742'
            },
            borderRadius: {
                'md': '0.5rem',
                'lg': '1rem',
            }
        },
    },
    plugins: [],
}