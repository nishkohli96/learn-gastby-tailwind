/* https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually */
/* https://levelup.gitconnected.com/create-a-css-theme-switcher-using-gatsby-and-tailwindcss-aca85f93bd1f */

const plugin = require("tailwindcss/plugin");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: true, // applies !important to styles
    darkMode: "media", // false,'media'-> to enable by default,'class'-> enable by toggle
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
                "main-text": "var(--text-main)",
                "secondary-text": "var(--text-secondary)",
                "regal-blue": "#243c5a",
            },
            fontSize: {
                "16px": ["16px", "24px"], // ie. [fontsize,line-height]
                "22px": ["22px", "30px"],
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            textColor: ["visited"],
            backgroundColor: ["checked"],
            textOpacity: ["dark"],
        },
    },
    plugins: [
        plugin(function ({ addComponents, theme }) {
            const buttons = {
                ".btn": {
                    padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
                    margin: `0 ${theme("spacing.4")}`,
                    borderRadius: theme("borderRadius.md"),
                    fontWeight: theme("fontWeight.600"),
                    backgroundColor: theme("colors.blue.500"),
                },
                ".btn-blue": {
                    color: theme("colors.white"),
                    margin: `0 ${theme("spacing.4")}`,
                    backgroundColor: theme("colors.blue.400"),
                    "&:hover": {
                        backgroundColor: theme("colors.blue.800"),
                    },
                },
            };

            addComponents(buttons);
        }),
    ],
};
