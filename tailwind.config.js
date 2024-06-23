/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nightBg: '#171c28',
        violetBg: '#6E57E0',
        greenYellow: 'rgba(173, 255, 47)',
        lightgreyBg: '#444452',
        darkgreyBg:'#AFAFBF'
      },
      lineHeight: {
        "12": "3rem",
        "16": "4rem"
      },
      keyframes: {
        'pulse-animation': {
          '0%': { 'box-shadow': '0 0 0 0px rgba(173, 255, 47, 0.2)' },
          // '50%': { 'box-shadow': '0 0 0 0px rgba(173, 255, 47, 1)' },
          '100%': { 'box-shadow': '0 0 0 12px rgba(173, 255, 47, 0)' },
        },
      },
      animation: {
        'pulse-animation': 'pulse-animation 2s infinite',
      },
      fontFamily: {
        apercu: ["Apercu", "sans-serif"],
        aperculight: ["Aperculight", "sans-serif"],
        apercumono: ["Apercumono", "sans-serif"],
      },
    },
  },
  plugins: [],
}