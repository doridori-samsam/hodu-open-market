/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#21BF48",
        mainText: "#000000",
        subText: "#767676",
        accentText: "#EB5757",
        background: "#f2f2f2",
        disabled: "#c4c4c4",
        tabGray: "#E0E0E0",
      },
      fontFamily: {
        spoqa: ["SpoqaHanSansNeo-Regular"],
        spoqaMedium: ["SpoqaHanSansNeo-Medium"],
        spoqaBold: ["SpoqaHanSansNeo-Bold"],
      },
    },
    screens: {
      xs: "360px",
      ss: "480px",
      sm: "620px",
      sl: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
