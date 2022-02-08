module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "check-mark": 'url("/images/icon-check-mark.svg")',
        curved: 'url("/images/background-bottomshape.svg")',
        "curved-reverse": 'url("/images/background-bottomshape-invert.svg")',
      }),
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
