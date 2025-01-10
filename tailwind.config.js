/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      perspective: {
        1000: "1000px",
      },
      colors: {
        black_solid: "rgba(0, 0, 0)",
        black_ulrtaDark: "rgba(1,3,14)",
        black_dark: "rgba(23,23,22)",
        black_medium: "rgba(38,38,43)",
        black_light: "rgba(74, 85, 103)",
        black_ultraLight: "rgba(78, 79, 87)",

        white_ultraDark: "rgba(103, 104, 110)",
        white_dark: "rgba(162, 162, 162)",
        white_ultraMedium: "rgba(181, 182, 190)",
        white_medium: "rgba(217, 217, 219)",
        white_lightMedium: "rgba(205,213,224)",
        white_light: "rgba(237, 238, 240",
        white_ultraLight: "rgba(248, 249, 250)",
        white_light_4: "rgba(255, 255, 255, 0.04)",
        white_light_12: "rgba(255, 255, 255, 0.12)",
        white_light_20: "rgba(255, 255, 255, 0.20)",
        white_light_32: "rgba(255, 255, 255, 0.32)",
        white_light_50: "rgba(255, 255, 255, 0.50)",
        white_light_80: "rgba(255, 255, 255, 0.80)",
        white_solid: "rgba(255, 255, 255)",

        blue_ultraDark: "rgba(8, 13, 32)",
        blue_dark: "rgba(13, 18, 36)",
        blue_ultraMedium: "rgba(11, 19,40)",
        blue_medium: "rgba(33, 43, 69)",
        blue_lightMedium: "rgba(52,64, 84)",
        blue_light: "rgba(43, 166, 235)",
        blue_light_12: "rgba(70, 117, 206, 0.12)",
        blue_light_30: "rgba(70, 117, 206, 0.30)",
        blue_light_20: "rgba(70, 117, 206, 0.20)",

        orange_dark: "rgba(92, 39, 15)",
        orange_light: "rgba(255, 76, 0)",

        yellow_light: "rgba(255, 189, 19, 0.8)",

        purple_light_30: "rgba(181, 148, 255, 0.3)",
      },
      fontFamily: {
        inter: ["Inter"],
        montserrat: ["Montserrat"],
        jakarta: ["Plus Jakarta Sans"],
      },

      // fontSize: {
      //   "responsive-lg": "clamp(2rem, 4rem, 6rem)",
      //   "responsive-md": "",
      //   "responsive-sm": "",
      // },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-debug-screens"),
  ],
};
