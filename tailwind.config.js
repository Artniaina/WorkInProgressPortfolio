/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-purple': '#6B1FB1',
        'cyber-pink': '#FF2E93',
        'cyber-dark': '#1A0B2E',
        'cyber-light': '#9D4EDD',
        'cyber-white': '#F0F0F0',
        'cyber-dark-purple': '#8A00C4',
      },
      fontFamily: {
        'pixel': ['Press Start 2P', 'cursive'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}