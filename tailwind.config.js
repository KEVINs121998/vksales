/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      screens: {
        'xs': '250px',
    },
    },
  },
  plugins: [],
}