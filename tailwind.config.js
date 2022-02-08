module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "meteorite": "#2A2A2A",
        "soft-gray": "#707070",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
        secondary: ["sans-serif"],
      },
    },
    plugins: [],
  }
}
