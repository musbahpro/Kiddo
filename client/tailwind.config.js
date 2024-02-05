/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend : {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: "#F0A2A3",
        secondary: "#797575",
      },
    }
  },
  plugins: [],
};
