/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1100px', // Cambia este valor de 768 a 1200
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}