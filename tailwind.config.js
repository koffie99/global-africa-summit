/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Includes all HTML and JS files in the src directory
    "./*.{html}",          // Includes all HTML files in the root directory
    "./index.html" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
