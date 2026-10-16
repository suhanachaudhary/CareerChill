/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#111827',
        mint: { DEFAULT: '#A7F3D0', deep: '#34D399', dark: '#047857' },
        cloud: '#F9FAFB',
        butter: '#FDE68A',
        lilac: '#DDD6FE',
        peach: '#FED7AA',
        sky: '#BAE6FD',
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      boxShadow: {
        'pop-sm': '3px 3px 0 0 #111827',
        pop: '5px 5px 0 0 #111827',
        'pop-lg': '8px 8px 0 0 #111827',
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        floaty: { '0%,100%': { transform: 'translateY(0) rotate(var(--r,0deg))' }, '50%': { transform: 'translateY(-8px) rotate(var(--r,0deg))' } },
      },
      animation: { marquee: 'marquee 28s linear infinite', floaty: 'floaty 5s ease-in-out infinite' },
    },
  },
  plugins: [],
}
