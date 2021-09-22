module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                base: 'Poppins,sans-serif',
                krona: '"Krona One",sans-serif',
            },
            colors: {
                green: '#3C5344',
                secondary: '#B12F4B',
                accent: '#EAD9D6',
                melon: '#DEB5A6',
                platinum: '#EBE9EC',
                pinky: '#fed2d1',
                'light-grey': '#ECECEC',
                whitesmoke: '#F5F3F7',
            },
            zIndex: {
                '-1': -1,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
