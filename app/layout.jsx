"use client";

import { Nunito, Quicksand } from "next/font/google";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { usePathname } from "next/navigation";

const nunito = Nunito({ subsets: ["latin", "latin-ext"] });

const quickSand = Quicksand({ subsets: ["latin", "latin-ext"] });

export default function RootLayout({ children }) {
  const path = usePathname();

  const noNavFooterPaths = ["/login-signup", "/login", "/signup", "/404"];

  const resetLayout = noNavFooterPaths.includes(path);

  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${quickSand.className} antialiased`}
      >
        {!resetLayout && <Navbar />}
        {children}
        {/* <main className="max-w-screen-2xl mx-auto relative"></main> */}
        {!resetLayout && <Footer />}
      </body>
    </html>
  );
}
