/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLanding: "#FF7430",
        secondaryLanding: "#232323",
        CTALanding: "#F7F7F7",
        grayColor: "#757575",
      },
      screens: {
        sm: "576px",
        md: "768px",
      },
      height: {
        128: "37rem",
        94: "25rem",
      },
    },
    backgroundImage: {
      "background-hero": "url('/src/imgs/hackers_group.jpg')",
      "background-patron": "url('/src/imgs/patron_imagen.png')",
    },
  },
  plugins: [],
};
