/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp:{
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
            animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
            }
    },
  },
  plugins: [],
}

