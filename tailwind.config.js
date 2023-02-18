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
        },
        extend: {
            boxShadow: {
                subtle: '0px 15px 25px rgb(0 4 74 / 4%)',
                intense: 'inset 0px 15px 15px -5px rgb(29 24 83 / 5%)',
            },
            gridTemplateColumns: {
                auto: 'repeat(auto-fit, minmax(200px, 1fr))',
            },
            colors: {
                primary: '#0da799',
                legiblePrimary: '#14b9a5',
                secondary: '#47c1fe',
            },
            fontFamily: {
                heading: ['Proxima Soft', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
