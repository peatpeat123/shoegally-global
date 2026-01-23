/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'balenciaga': ['Work Sans', 'Helvetica Neue', 'Arial Black', 'sans-serif'],
        'rubik-glitch': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

