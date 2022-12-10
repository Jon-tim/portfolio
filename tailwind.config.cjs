/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        OrangeRed: "#f35330",
        DarkText: "#424242",
        BgGray: "#e1e1e1",
      },
    },
  },
  plugins: [],
};
