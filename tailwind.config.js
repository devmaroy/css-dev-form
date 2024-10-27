const { mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      colors: {
        ...mauve,
        ...violet,
        "bc-blue-400": "#111D4A",
        "bc-blue-300": "#677BC9",
        "bc-blue-200": "#7D8DCA",
        "bc-blue-100": "#DDE2F3",
        "bc-gray-300": "#777F9F",
        "bc-gray-200": "#C0C4D2",
        "bc-gray-100": "#F1F3FA",
      },
    },
  },
  plugins: [],
};
