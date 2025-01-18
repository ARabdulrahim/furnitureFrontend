/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],darkMode:"class",
  theme: {
    extend: {
      screens: {
        'xm': {min:'20px',max:'640px'},
        'xs': {min:'20px',max:'640px'},
        'xr': {min:'20px',max:'771px'},
        'xb': {min:'20px',max:'850px'},
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}