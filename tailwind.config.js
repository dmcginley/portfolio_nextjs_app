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
        primary: ["var(--lora-font)", ...fontFamily.sans],
        serif: ["var(--lora-font)", ...fontFamily.serif],
      },
      colors: {
        darkBlue: "rgb(40, 98, 170);",
        darkBlueHover: "rgb(53, 143, 227);",
      },
    },
  },
  plugins: [],
};
