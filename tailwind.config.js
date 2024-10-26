/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-background": "url('/assets/images/colorful-stingrays.svg')",
        "about-background": "url('/assets/images/about/abstract.png')",
        card1_bg: "url('/assets/images/about/card1_bg.jpg')",
        card2_bg: "url('/assets/images/about/card2_bg.jpg')",
        card3_bg: "url('/assets/images/about/card3_bg.jpg')",
      },
      colors: {
        primary: {
          orange: "#ffbb25",
          red: "#e63a3a",
          grey: "#282723",
        },
        secondary: {
          red: "#960a0a",
          orange: "#ED7E00",
          blue: "#1A9FC9",
          green: "#1AC98B",
          pink: "#FF69B4",
        },
        tertiary: {
          yellow: "#ffedc0",
          grey: "#232323",
          blue: "#1d3e73",
          green: "#385145",
        },
        accent: {
          yellow: "#ffda7f",
          "yellow-light": "#fff1bd",
          "red-dark": "#df3d3d",
          "green": "#c0ffe1" ,
        },
        warning: {
          "yellow-light": "#ffdd68",
        },
        danger: {
          red: "#ff324b",
          "red-dark": "#f80407",
        },
        grey: {
          "light-1": "#dbdbdb",
          "light-2": "#f6f6f6",
          "light-3": "#c6c6c6",
          medium: "#747474",
          "dark-2": "#5b5b5b",
          "dark-3": "#484848",
          "dark-4": "#212121",
        },
      },
    },
  },
  plugins: [],
};
