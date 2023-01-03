/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gat: "#112a77",
        th: "#7bcfb3",
        "misc-1": "#fa8d27",
        "misc-2": "#b8ff47",
      },
    },
  },
  plugins: [],
};
