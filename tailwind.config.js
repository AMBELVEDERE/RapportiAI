/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}", // Aggiunto per App.tsx, index.tsx
    "./{components,common,icons,views,services}/**/*.{js,ts,jsx,tsx}", // Copre tutte le sottocartelle
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}