/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#002778",
        brandOrange: "#F66C20",
        brandYellow: "#FDB92E",
        brandWhite: "#FEFEFE",
      }
    },
  },
  plugins: [],
}