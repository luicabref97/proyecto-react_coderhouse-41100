/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#1C2B33',
      'light-gray': '#D9DFE6',
      'white': '#FFF',
      'purple': '#A121CE',
      'light-blue': '#418AF7',
      'blue': '#1D65C1',
      'dark-gray-text': '#344854',
      'light-gray-text': '#FEFEFE',
      'gray-text-secondary': '#67788a',
      'button-gray': '#E8F0F9',
      'transparent': 'transparent',
    },
    screens: {
      'sm-min': '640px',
      'sm': {'min': '640px', 'max': '767px'},
      'sm-max': {'max': '767px'},
      'md-min': '768px',
      'md': {'min': '768px', 'max': '1023px'},
      'md-max': {'max': '1023px'},
      'lg-min': '1024px',
      'lg': {'min': '1024px', 'max': '1279px'},
      'lg-max': {'max': '1279px'},
      'xl-min': '1280px',
      'xl': {'min': '1280px', 'max': '1535px'},
      'xl-max': {'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  plugins: [],
}
