/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        'electric-blue': '#007BFF',
        'crimson-red': '#DC143C',
        'lime-green': '#32CD32',
        'sunshine-yellow': '#FFD700',
      },
    },
  },
  plugins: [],
}