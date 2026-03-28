/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#F5F5F5",
        accent: "#10B981",
        subtext: "#9CA3AF",
        card: "#141414",
        border: "#1F1F1F",
      },
      fontFamily: {
        sans: ["Noto Sans KR", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
