/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hot-pink" : "#FF69B4",
        "light-blue": "#E9F1FA",
        // "bright-blue": "#00ABE4",
        "bright-blue": "#8c6fa9",
        "white": "#FFFFFF",
      }
    },
  },
  plugins: [],
}