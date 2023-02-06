/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1400px',
            },
        },
        extend: {
            boxShadow: {
                subtle: '0px 15px 25px rgb(0 4 74 / 4%)',
            },
            gridTemplateColumns: {
                auto: 'repeat(auto-fit, minmax(200px, 1fr))',
            },
            colors: {
                primary: '#0da799',
                secondary: '#47c1fe',
            },
            fontFamily: {
                heading: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
