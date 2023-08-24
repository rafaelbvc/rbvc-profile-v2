/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["0.55rem", "0.39rem"],
        xms: ["0.7rem", "0.9rem"],
      },
      borderWidth: {
        "border-1": "1px",
      },
    },
    colors: {
      lightGray: "#FCFCFF",
      mediumGray: "#b6b6b6",
      black: "#000",
      white: "#FFFFFF",
      lightGrayAlpha: "RGB(220,220,220, 0.05)",
      lightBGray: "#D9E2E5",
      golden: "#CAAA6C",
      goldenAlpha: "rgb(202,170,108, 0.4)",
      green: "#00FF00",
      red: "#FF0000",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
