const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#50E3C2',
          700: '#42B49A',
          800: '#2F4B37',
          900: '#304B38',
        },
        dark: colors.zinc,
      },
    },
  },
  plugins: [],
};
