/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    extend: {
      colors: {
        white: '#FFFFFF',
        yellow: '#FBB13C',
        green: '#218380',
        red: '#D81159',
        'light-blue': '#73D2DE',
        'dark-blue': '#020A44',
        'dark-red': '#8F2D56',
        black: '#101010',
        'black-80': '#404040',
        'black-60': '#707070',
        'black-40': '#9F9F9F',
        'black-20': '#CFCFCF',
        'light-gray': '#F9F9F9',
        'input-color': '#E7EFF0'
      },
      width: {
        small: '16.666667%',
        medium: '50%',
        large: '83.333333%',
        'x-large': '100%',
        page: '75%',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  }
}