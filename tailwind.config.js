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
        graycolor: "#959595",
        primaryHackeps: "#edab11",
        primaryHackepsDark: "#ac7c0e",
        secondaryHackeps: "#232323",
        lightHackeps: "#F5F5F5",
        grayLightHackeps: "#bbb8b8",
        grayLightHackepsDark: "#8c8787",
        grayStrongHackeps: "#444343",
      },
    },
    backgroundImage: {
      "background-hero": "url('/src/imgs/hackers_group.jpg')",
      "background-patron": "url('/src/imgs/patron_imagen.png')",
    },
    height: {
      128: "37rem",
      94: "25rem",
    },
  },
  plugins: [],
};
