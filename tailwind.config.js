/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#FFB400",
        secondary: "#E30001",
        third: "#2C5B8E",
        forth: "#5D98DB",
      },
      fontFamily: {
        Bazinga: ["Bazinga", "sans-serif"],
        Pokemon: ["Pokemon Solid", "sans-serif"],
      },
    },
  },
  plugins: [],
};
