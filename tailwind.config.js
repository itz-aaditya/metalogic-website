/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  // <-- Add this line to enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}
