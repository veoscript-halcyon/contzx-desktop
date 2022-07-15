/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#242830',
        'custom-black-secondary': '#2f313e'
      }
    },
  },
  plugins: [],
}
