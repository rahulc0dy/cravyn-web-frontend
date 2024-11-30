import { Nunito } from "next/font/google";
import localfont from "next/font/local";
import "@styles/globals.css";
import Footer from "@components/Footer";
import ReactQueryProvider from "@providers/ReactQueryProvider";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

const nunito_local = localfont({
  src: "../public/fonts/Nunito-VariableFont_wght.ttf",
});

export const metadata = {
  title: "Cravyn",
  description:
    "Cravyn is an online food ordering system working to connect restaurants directly to their customer.",
  icons: {
    icon: "/favicon.ico",
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
        <ReactQueryProvider>
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
