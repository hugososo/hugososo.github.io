const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    letterSpacing: {
      wider: '.1em',
      widest: '.25em',
    },
    minWidth: {
      72: '18rem',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
