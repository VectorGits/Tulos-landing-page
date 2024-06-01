/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('/public/landscape-banner-first.jpg')",
      }),
      screens: {
        'xxs':'320px',
        'xs': '425px',

      },
    },
  },
  plugins: [],
}

