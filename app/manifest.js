export default function manifest() {
  return {
    name: "Cravyn - Crave, Click, Delivered",
    short_name: "Cravyn",
    description:
      "Cravyn is an online food ordering system working to connect restaurants directly to their customer.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FF1E46",
    icons: [
      {
        src: "/app-icons/icon1.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/app-icons/icon2.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/app-icons/icon3.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/app-icons/icon4.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
