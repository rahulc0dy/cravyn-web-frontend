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
        "login-background": "url('/assets/images/blurry-gradient-haikei.svg')",
      },
      colors: {
        primary: {
          orange: "#ffbb25",
          red: "#e63a3a",
          grey: "#282723",
        },
        secondary: {
          red: "#960a0a",
        },
        tertiary: {
          yellow: "#ffedc0",
          grey: "#232323",
        },
        accent: {
          yellow: "#ffda7f",
          "yellow-light": "#fff1bd",
          "red-dark": "#df3d3d",
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

