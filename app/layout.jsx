"use client";
import { Nunito, Quicksand } from "next/font/google";
import "@styles/globals.css";
import Footer from "@components/Footer";
import { usePathname } from "next/navigation";
import HomeNav from "@components/HomeNav";

const nunito = Nunito({ subsets: ["latin", "latin-ext"] });

const quickSand = Quicksand({ subsets: ["latin", "latin-ext"] });

export default function RootLayout({ children }) {
  const path = usePathname();

  const noNavFooterPaths = ["/about", "/login", "/signup", "/404"];

  const resetLayout = noNavFooterPaths.includes(path);

  return (
    <html lang="en">
      <body
        className={`${nunito.className}  ${quickSand.className} antialiased`}
      >
        {!resetLayout && <HomeNav />}
        {children}
        {!resetLayout && <Footer />}
      </body>
    </html>
  );
}
