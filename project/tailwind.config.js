/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primaryBlue': '#0469ff',
        'brand-primaryPurple': '#7000ff',
        'Neutrals/neutrals-6': '#c0bfc4',
        'Neutrals/neutrals-7': '#fffff',
        'washed-purple-900': '#4c4b6b',
        'primary-purple-900': '#2f006b',

      },
    },
  },
  plugins: [],
}