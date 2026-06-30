/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C6A15B',
          /**dark: '#0B0B0B',*/
        },
      },
    },
  },
  plugins: [],
}
