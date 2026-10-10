/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#07080c',
        surface: '#10141c',
        accent: '#3ee0b1',
        'accent-dim': '#1fa37e',
        cream: '#f4f1ea',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(62, 224, 177, 0.18)',
        'glow-sm': '0 0 24px rgba(62, 224, 177, 0.28)',
      },
    },
  },
  plugins: [],
}
