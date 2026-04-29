/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#17d05bff",
          hover: "#12a346",
          light: "#ecfdf5",
          dark: "#064e3b",
        },
        darkGreen: "#064e3b",
        lightGreen: "#ecfdf5",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
