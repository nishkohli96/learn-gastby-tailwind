module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            textColor: ["visited"],
            backgroundColor: ['checked'],
        },
    },
    plugins: [],
};
