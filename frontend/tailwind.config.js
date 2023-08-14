/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100px': '100px',
      },
    },
    colors: {
      'primary': '#150F13',
      'secondary': '#F9F6F8',
      'primary-btn': '#B5C9BD',
      'secondary-btn': '#F2EDF0',
      'accent': '#B5C9BD'
    },
  },
  plugins: [],
}