/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'search-icon': "url('../assets/img/search-icon.svg')",
      },
      backgroundPosition: {
        'search-icon-position': "20rem center",
      }
    },
  },
  plugins: [],
}