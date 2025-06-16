/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px', // Only 'md' breakpoint. Default is 'base'.
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        'brand-purple': '#6D28D9',
        'dark-background': '#111827',
      },
    },
  },
  plugins: [],
};
