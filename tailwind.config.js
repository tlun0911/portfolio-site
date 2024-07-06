/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,jpg,png,svg}"],
  theme: {
    extend: {
      backgroundColor: {
        circuitColor: "#000000",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      height: {
        100: "100%",
        screen: "100vh",
      },
      backgroundSize: {
        cover: "cover", // This ensures the background image covers the entire screen
      },
      keyframes: {
        pulseRing: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: "0.5",
          },
        },
      },
      animation: {
        "pulse-ring": "pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
