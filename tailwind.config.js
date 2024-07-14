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
        '.bg-gradient-sec': {
          backgroundImage: 'linear-gradient(180deg, var(--primary-color) 10%, #000 50%)',
        },
        '.bg-gradient-primary-rev': {
          backgroundImage: 'linear-gradient(50deg, var(--primary-color) 50%, #ffff 90%)',
        },
        '.bg-overlay':{
          background: 'rgba(0, 0, 0, 0.8)',
        },
        '.border-red':{
          border: '2px solid red',
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    })
  ],
}