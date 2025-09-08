/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'artea-green': '#347758',
        'artea-light-green': '#A3D2B8',
        'artea-cream': '#F3F3E9',
        'artea-dark': '#2A3C34',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
