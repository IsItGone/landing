/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 여기에 이전 답변에서 사용했던 커스텀 테마를 추가합니다.
      colors: {
        'brand-purple': '#6D28D9',
        'dark-background': '#111827',
      },
    },
  },
  plugins: [],
};
