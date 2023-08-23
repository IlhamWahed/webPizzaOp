/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        myShadow: " 6px 6px 0px #9f7060",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        primaryColor: "hsl(359, 100%, 35%)",
        primaryColorAlt: "hsl(359, 100%, 25%)",
        titleColor: "hsl(19, 16%, 15%)",
        textColor: "hsl(19, 16%, 35%)",
        textColorLight: "hsl(19, 8%, 55%)",
        bodyColor: "hsl(36, 52%, 87%)",
        containerColor: "hsl(19, 100%, 97%)",
        headingColor: "hsl(36, 100%, 96%)",
        strokeColor: "#401c10",
      },
    },
    fontFamily: {
      bodyFont: ["Poppins", "sans-serif"],
      titleFont: ["Titan One", "cursive"],
      subtitleFont: ["Dancing Script", "cursive"],
    },
    container: {
      center: true,
      padding: {
        lg: "7rem",
        sm: "1rem",
      },
    },
  },

  plugins: [],
};
