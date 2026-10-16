/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#111827',
        mint: { DEFAULT: '#A7F3D0', deep: '#34D399', dark: '#059669' },
        cloud: '#F9FAFB',
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 10px 30px -12px rgba(17,24,39,.18)' },
    },
  },
  plugins: [],
}
