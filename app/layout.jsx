import { Nunito, Quicksand } from "next/font/google";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const nunito = Nunito({ subsets: ["latin", "latin-ext"] });

const quickSand = Quicksand({ subsets: ["latin", "latin-ext"] });
export const metadata = {
  title: "Cravyn",
  description:
    "Cravyn is an online food ordering system that delivers your food fresh and warm to you withing minutes so your hunger no longer waits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${quickSand.className} antialiased`}
      >
        <Navbar />
        <main className="max-w-screen-2xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
