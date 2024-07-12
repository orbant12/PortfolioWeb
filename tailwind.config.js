const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        magenta: '#cc87fc', // Add your magenta color code here
      },

    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-primary': {
          backgroundImage: 'linear-gradient(360deg, var(--primary-color) 5%, #000 20%)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    })
  ],
}