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

export const metadata = {
  title: "Cravyn",
  description:
    "Cravyn is an online food ordering system working to connect restaurants directly to their customer.",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  const path = usePathname();

  const noNavFooterPaths = ["/about", "/login", "/signup", "/404"];

  const resetLayout = noNavFooterPaths.includes(path);

  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        {!resetLayout && <HomeNav />}
        {children}
        {!resetLayout && <Footer />}
      </body>
    </html>
  );
}
