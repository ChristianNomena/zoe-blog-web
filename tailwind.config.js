/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      light: "#fafafa",
      lightFade: "#dcdcdcd9",
      dark: "#0F0F0F",
      darkSecond: "1A1A1A",
      primary: "#0786AB",
      primaryFade: "#0785abbf",
      secondary: "b84c49",
      secondaryFade: "#b84c49bf",
      third: "#6F4BA1",
      thirdFade: "#6e4ba0d9",
    },
  },
  plugins: [],
}
