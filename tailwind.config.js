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
        management_bg: "url('/assets/images/management/Sidebar.png)",
        "restaurant-login-bg": "url('/assets/images/oooscillate.svg')",
      },
      colors: {
        primary: {
          orange: "#ffbb25",
          red: "#e63a3a",
          grey: "#282723",
          green: "#1AC98B",
        },
        secondary: {
          red: "#960a0a",
          orange: "#ED7E00",
          green: "#00CD52",
        },
        tertiary: {
          yellow: "#ffedc0",
          grey: "#232323",
          green: "#0A964A",
          blue: "#1D3E73",
        },
        accent: {
          yellow: "#ffda7f",
          "yellow-light": "#fff1bd",
          "red-dark": "#df3d3d",
          green: "#C0FFE1",
        },
        warning: {
          "yellow-light": "#ffdd68",
        },
        danger: {
          red: "#ff324b",
          "red-dark": "#f80407",
          green: "#385145",
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
        blue: {
          "light-1": "#99DDFF",
          "light-2": "#0EC5FF",
          medium: "#000AFF",
          "dark-1": "#005BC7",
          "dark-2": "#00398E",
        },
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
