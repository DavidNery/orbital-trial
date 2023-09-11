/** @type {import('tailwindcss').Config} */

const appColors = {
  primary: 'var(--primary)',
  accent: 'var(--accent)',
  black: 'var(--black)',
  gray: 'var(--gray)',
}

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: appColors,
      backgroundColor: appColors,
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'lobster': ['Lobster Two', 'cursive'],
      }
    },
  },
  plugins: [],
}