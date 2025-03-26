/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{html,js}", "index.html", "./pages/**/*.{html,js}"],
    theme: {
        extend: {
            container: {
                // center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#8B5CF6",      // Vibrant purple
                secondary: "#EC4899",    // Vibrant pink
                accent: "#F59E0B",       // Vibrant amber
                neutral: "#374151",      // Dark gray
                "primary-focus": "#7C3AED", // Darker purple for hover
                "secondary-focus": "#DB2777", // Darker pink for hover
                "accent-focus": "#D97706", // Darker amber for hover
                "base-100": "#FFFFFF",   // White background
                "base-200": "#F3F4F6",   // Light gray background
            }
        },
    },
    plugins: [require("daisyui")],
}
