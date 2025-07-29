/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "olas-scroll": {
          "0%": { backgroundPosition: "100% " },
          "100%": { backgroundPosition: "0% " },
        },
      },
      animation: {
        "olas-scroll": "olas-scroll 40s linear infinite", //infinite
      },
      colors: {
        primaryLanding: "#FF7430",
        secondaryLanding: "#232323",
        CTALanding: "#F7F7F7",
        successLanding: "#14D455",
        errorLanding: "#E55010",
        linkLanding: "#3366CC",
        grayColor: "#757575",
        primaryHackeps: "#54311A", // src/components/hackeps/Home/Schedule.js, line 23
        textPrimaryHackeps: "#F5F5F5",
        primaryHackepsDark: "#2F7D5F",
        secondaryHackeps: "#F5E7DE",
        textSecondaryHackeps: "#000000",
        blackHackeps: "#0F0F0F",
        lightHackeps: "#F5F5F5",
        grayLightHackeps: "#bbb8b8",
        grayLightHackepsDark: "#8c8787",
        grayStrongHackeps: "#444343",
        loginPage: "#211f1f",
        successGreen: "#4caf50",
        errorRed: "#f44336",
        blueSky: "#bdfffe",
        secondaryColorButton: "#237090",
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
      },
    },
    backgroundImage: {
      "background-hero": "url('/src/imgs/hackers_group.jpg')",
      "background-patron": "url('/src/imgs/patron_imagen.png')",
      "background-none": "url()",
      "background-cartellA": "url('/src/assets/Cartell A.png')",
      "background-cartellB": "url('/src/assets/Cartell B.png')",
      "background-cartellC": "url('/src/assets/Cartell C.png')",
      "background-cartellD": "url('/src/assets/Cartell D.png')",
    },
  },
  plugins: [],
};
