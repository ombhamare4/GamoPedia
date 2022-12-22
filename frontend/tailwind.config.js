/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    // './<custom directory>/**/*.{js,jsx,ts,tsx}',
    './pages/Home.{js,jsx,ts,tsx}',
    './components/TopGames/TopGame.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: {
        100: '#000000',
        200: '#14213d',
        300: '#fca311',
        400: '#e5e5e5',
        500: '#ffffff',
        600: '#d90429',
        700: '#9381ff',
      },
      // ...
    },
    extend: {},
  },
  plugins: [],
}
