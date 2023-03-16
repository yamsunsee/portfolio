/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Be Vietnam Pro", "sans-serif"],
        sub: ["HelloKetta", "cursive"],
      },
      colors: {
        lightTheme: "#16a085",
        darkTheme: "#007158",
      },
      screens: {
        xs: "320px",
        sm: "512px",
      },
    },
  },
  plugins: [],
};

