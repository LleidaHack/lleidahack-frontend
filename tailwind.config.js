/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primaryLanding': '#FF7430',
        'secondaryLanding': '#232323',
        'CTALanding': '#F7F7F7',
        'successLanding': '#14D455',
        'errorLanding': '#E55010',
        'linkLanding': '#3366CC'
      },
    },
  },
  plugins: [],
};