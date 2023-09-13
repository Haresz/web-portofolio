/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      xs: "460px",
      // => @media (min-width: 420px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1536px) { ... }
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "1/2-screen": "50vh",
      "3/4-screen": "75vh",
      "90-screen": "90vh",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      base: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    },
    extend: {
      keyframes: {
        slideInDown: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%": {
            transform: "translateY(-5%)",
          },
          "50%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-5%)",
          },
        },
        dance: {
          "0%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-5deg)",
          },
        },
      },
    },
    colors: {
      primary: "#14b8a6",
      dark: "#0f172a",
      white: "#FFFFFF",
      secondary: "rgb(100 116 139)",
      gray: "rgb(203 213 225)",
      slate100: "rgb(241 245 249)",
      slate700: "rgb(51 65 85)",
    },
  },
  //     zIndex: {
  //       0: 0,
  //       10: 10,
  //       20: 20,
  //       30: 30,
  //       40: 40,
  //       50: 50,
  //       25: 25,
  //       50: 50,
  //       75: 75,
  //       100: 100,
  //       auto: "auto",
  //     },
  //     colors: {
  //       primary: "#14b8a6",
  //       dark: "#0f172a",
  //     },
  //   },
  // },
  plugins: [],
};
