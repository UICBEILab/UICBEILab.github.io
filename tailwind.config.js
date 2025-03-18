/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        spinAndMove: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(180deg) translateY(-10px)' }, // Limit upward motion
        },
      },
      animation: {
        spinAndMove: 'spinAndMove 20s linear infinite',
      },
    },
  },
  plugins: [],
};
