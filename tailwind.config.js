/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00704A',
          light: '#008f5e',
          dark: '#005939',
        },
        background: {
          light: '#f7f7f7',
          dark: '#272727'
        },
        text: {
          light: '#272727',
          dark: '#f7f7f7'
        }
      },
      fontFamily: {
        onset: ['Onset', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}