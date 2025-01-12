import { Nunito } from "next/font/google";
import localfont from "next/font/local";
import "@styles/globals.css";
import Footer from "@components/Footer";
import ReactQueryProvider from "@providers/ReactQueryProvider";
import { PopupProvider } from "@providers/PopupProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { DESCRIPTION, NAME } from "@lib/constants";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

const nunito_local = localfont({
  src: "../public/fonts/Nunito-VariableFont_wght.ttf",
});

export const metadata = {
  title: NAME || "Cravyn",
  description: DESCRIPTION || "Cravyn is a platform for ordering food.",
  icons: {
    icon: "/app-icons/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${
          nunito_local.className ?? nunito.className
        } antialiased scroll-smooth`}
      >
        <PopupProvider>
          <ReactQueryProvider>
            {children}
            <Footer />
            <SpeedInsights />
            <Analytics />
          </ReactQueryProvider>
        </PopupProvider>
      </body>
    </html>
  );
}
