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
        grayNeutral: "#e4e6eb",
        primaryHackeps: "#0e3a29",
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
        "max-ml": { max: "1170px" },
        "max-xl": { max: "1400px" },
      },
      height: {
        128: "37rem",
        94: "25rem",
        119: "32rem",
      },
    },
    backgroundImage: {
      "background-hero": "url('/src/imgs/hackers_group.jpg')",
      "background-patron": "url('/src/imgs/patron_imagen.png')",
      "background-none": "url()",
    },
  },
  plugins: [],
};
