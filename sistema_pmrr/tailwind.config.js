/** @type {import('tailwindcss').Config} */

import tailwindcss from '@tailwindcss/vite';

module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./assets/**/*.{css,vue,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
  ],
};