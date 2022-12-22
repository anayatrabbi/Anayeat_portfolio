/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/*.{html,js,jsx,tsx}",
        "./components/**/*.{html,js,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "7xs": "0.55rem",
                "6xs": "0.6rem",
                "5xs": "0.65rem",
                "4xs": "0.675rem",
                "3xs": "0.7rem",
                "2xs": "0.725rem",
            },
            colors: {
                // Configure your color palette here
                pink: {
                    DEFAULT: "#eb83f8",
                },
                black: "#000000",
                red: {
                    DEFAULT: "#f33b3b",
                    200: "#f9c1c2",
                    300: "#FFEAEA",
                    500: "#f33b3b",
                    hover: "#fd6a6a",
                },
                blue: {
                    DEFAULT: "#251170",
                    700: "#0C95D7",
                    600: "#006ac4",
                    500: "#5856D6",
                    400: "#2189ff",
                    hover: "#519FF6",
                },
                green: {
                    DEFAULT: "#5bb300",
                    500: "#5bb300",
                },
                yellow: {
                    DEFAULT: "#ffcc00",
                    500: "#ffcc00",
                },
                gray: {
                    50: "#f9f9f9",
                    100: "#f5f5f5",
                    150: "#F5F5F5",
                    200: "#e7e7e7",
                    250: "#B7B7B7",
                    400: "#a0a0a0",
                    500: "#666",
                    600: "#878787",
                    hover: "#d1d1d1",
                },
            },
            padding: {
                inherit: "inherit",
            },
            borderRadius: {
                inherit: "inherit",
                DEFAULT: "5px",
                md: "5px",
                lg: "10px",
            },
        },
    },
    plugins: [],
};
