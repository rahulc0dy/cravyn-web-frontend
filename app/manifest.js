import { DESCRIPTION, NAME, SHORT_NAME } from "@lib/constants";

export default function manifest() {
  return {
    name: NAME,
    short_name: SHORT_NAME,
    description: DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#222222",
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
