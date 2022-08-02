/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'search-icon': "url('../assets/img/search-icon.svg')",
        'hero-img': "url('../assets/img/geeky-shots-hQ4BQ3wdHsQ-unsplash.jpg')"
      },
      backgroundPosition: {
        'search-icon-position': "20rem center",
      },
      fontFamily:{
        'body': ['"Raleway"'],
      }
    },
  },
  plugins: [],
}