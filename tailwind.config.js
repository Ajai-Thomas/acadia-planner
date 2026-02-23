/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        planetary: '#334EAC',
        universe: '#7096D1',
        sky: '#D0E3FF',
        venus: '#BAD6EB',
        galaxy: '#081F5C',
        meteor: '#F7F2EB',
        milkyway: '#FFF9F0',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(8, 31, 92, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
