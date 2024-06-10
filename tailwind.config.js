/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/2.png')",
      },
      fontFamily: {
        display: ["Flecha S", "sans-serif"],
        landing: ["Montserrat", "sans-serif"],
      },
      height: {
        '100': '100%',
        'screen': '100vh'
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
}

