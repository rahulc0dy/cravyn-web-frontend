"use client";
import { Nunito } from "next/font/google";
import "@styles/globals.css";
import Footer from "@components/Footer";
import { usePathname } from "next/navigation";
import HomeNav from "@components/HomeNav";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  const path = usePathname();

  const noFooterPaths = ["/about", "/login", "/signup", "/404","/restaurant/register","/analytics"];
  const noNavPaths=["/about", "/login", "/signup", "/404","/analytics"];

  const resetLayout1 = noNavPaths.includes(path);
  const resetLayout2 = noFooterPaths.includes(path);

  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        {!resetLayout1 && <HomeNav />}
        {children}
        {!resetLayout2 && <Footer />}
      </body>
    </html>
  );
}
