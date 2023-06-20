const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)']
      },
      colors: {
        darkBlue: "rgb(40, 98, 170);",
        darkBlueHover: "rgb(53, 143, 227);",
        darkBg: "#21252b",
      },
    },
  },
  plugins: [],
};
