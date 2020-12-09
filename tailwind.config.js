/* https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually */
/* https://levelup.gitconnected.com/create-a-css-theme-switcher-using-gatsby-and-tailwindcss-aca85f93bd1f */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'media', // false,'media'-> to enable by default,'class'-> enable by toggle
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                'main-text': 'var(--text-main)',
                'secondary-text': 'var(--text-secondary)',
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            textColor: ["visited"],
            backgroundColor: ["checked"],
            textOpacity: ['dark']
        },
    },
    plugins: [],
};
