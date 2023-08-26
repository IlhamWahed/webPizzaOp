/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      strokeWidth: {
        strokeWidth: "10px",
      },

      dropShadow: {
        myShadow: " 6px 6px 0px #9f7060",
        strokeShadow: ["2.2px 2.2px 0 #000", "-2.2px -2.2px 0 #000", " 2.2px -2.2px 0 #000", "-2.2px 2.2px 0 #000", "2.2px 2.2px 0 #000"],
      },
      screens: {
        xs: "350px",
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
        gelap: "hsl(19,10%,5%)",
        gelapBanget: "hsl(0,7%,8%)",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
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
        lg: "15rem",
        sm: "1rem",
      },
    },
  },

  plugins: [],
};
