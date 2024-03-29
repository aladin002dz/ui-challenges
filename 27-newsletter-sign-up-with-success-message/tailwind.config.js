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
                'xl': '2.25rem',
            }
        },
    },
    plugins: [],
}