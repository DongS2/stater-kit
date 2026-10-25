// TailwindCSS v4 PostCSS 설정 - v3의 tailwindcss/autoprefixer 대신 단일 플러그인 사용
/** @type {import('postcss').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
