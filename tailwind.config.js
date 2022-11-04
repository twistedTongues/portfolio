/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212126",
        secondary: "#3abcca",
        neutral: "#f6f5f4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
