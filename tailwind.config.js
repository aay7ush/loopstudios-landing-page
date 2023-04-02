/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alata', 'sans-serif'],
        headings: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'gray-400': '#d9d6d2',
        'gray-800': 'hsl(0, 0%, 41%)',
      },
    },
  },
  plugins: [],
}
