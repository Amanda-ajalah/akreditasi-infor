/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ini sangat penting agar file di dalam src terbaca
  ],
  theme: {
    extend: {
      colors: {
        untagMaroon: "#A50000",
        ifCyan: "#00B4D8",
      },
    },
  },
  plugins: [],
};
