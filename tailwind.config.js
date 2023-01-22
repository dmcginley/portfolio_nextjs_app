/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "rgb(40, 98, 170);",
        darkBlueHover: "rgb(53, 143, 227);",
      },
    },
  },
  plugins: [],
};
