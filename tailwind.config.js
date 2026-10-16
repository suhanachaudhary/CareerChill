/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#111827',
        mint: { DEFAULT: '#A7F3D0', deep: '#34D399', dark: '#047857' },
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.04), 0 10px 28px -14px rgba(15,23,42,.14)',
        lift: '0 1px 2px rgba(15,23,42,.05), 0 18px 40px -16px rgba(15,23,42,.22)',
      },
    },
  },
  plugins: [],
}
