/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF7430',
        'secondary': '#232323',
        'CTA': '#F7F7F7',
        'success': '#14D455',
        'error': '#E55010',
        'link': '#3366CC'
      },
    },
  },
  plugins: [],
};
