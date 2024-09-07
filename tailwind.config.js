/** @type {import('tailwindcss').Config} */
// index.htmlとsrcディレクトリ以下のファイルを対象にする
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

