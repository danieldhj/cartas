/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'heart-pulse': 'pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1) rotate(45deg)' },
          '50%': { transform: 'scale(1.2) rotate(45deg)' },
        }
      }
    },
  },
  plugins: [],
}