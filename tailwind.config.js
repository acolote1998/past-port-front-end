/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightMainBg: "#CAF0F8",
        lightSecondaryLigther: "#90e0ef",
        lightSecondaryDarker: "#00b4d8",
        lightDarker: "#0077B6",
        ligthDarkest: "03045E",
      },
    },
  },
  plugins: [],
};
