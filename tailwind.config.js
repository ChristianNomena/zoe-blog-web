/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fafafa",
        'light-fade': "#dcdcdcd9",
        dark: "#0F0F0F",
        'dark-second': "1A1A1A",
        primary: "#0786AB",
        'primary-fade': "#0785abbf",
        secondary: "b84c49",
        'secondary-fade': "#b84c49bf",
        third: "#6F4BA1",
        'third-fade': "#6e4ba0d9",
      },

      container: {
        center: true
      },

      spacing: {
        128: "34rem",
      }
    },
  },
  plugins: [],
}
