/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        navy: "#0B1F33",
        gold: "#C9A45C",
        cream: "#F7F4EE",
        mist: "#EEF2F5"
      },
      fontFamily: {
        bangla: ["Noto Sans Bengali", "sans-serif"],
        display: ["Playfair Display", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(11,31,51,.10)"
      }
    }
  },
  plugins: []
};git 