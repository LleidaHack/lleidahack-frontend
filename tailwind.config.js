/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLanding: "#FF7430",
        secondaryLanding: "#232323",
        CTALanding: "#F7F7F7",
        successLanding: "#14D455",
        errorLanding: "#E55010",
        linkLanding: "#3366CC",
        grayColor: "#757575",
        primaryHackeps: "#0e3a29", // src/components/hackeps/Home/Schedule.js, line 23
        textPrimaryHackeps: "#F5F5F5",
        primaryHackepsDark: "#2F7D5F",
        secondaryHackeps: "#F7F7F2",
        textSecondaryHackeps: "#000000",
        blackHackeps: "#0F0F0F",
        lightHackeps: "#F5F5F5",
        grayLightHackeps: "#bbb8b8",
        grayLightHackepsDark: "#8c8787",
        grayStrongHackeps: "#444343",
        loginPage: "#211f1f",
        successGreen: "#4caf50",
        errorRed: "#f44336",
      },
      screens: {
        sm: "576px",
        md: "768px",
        "max-md": { max: "768px" },
        "max-lg": { max: "998px" },
        "max-xl": { max: "1400px" },
      },
      keyframes: {
        fadeIn:{
          '0%': {opacity: '0', transform: 'translateY(20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      boxShadow:{
        'faq': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
    backgroundImage: {
      "background-hero": "url('/src/imgs/hackers_group.jpg')",
      "background-patron": "url('/src/imgs/patron_imagen.png')",
      "background-hackeps-main": "url('src/icons/icons_home.png')",
    },
    height: {
      128: "37rem",
      94: "25rem",
    },
  },
  plugins: [],
};
