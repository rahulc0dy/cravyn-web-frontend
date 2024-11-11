import { Nunito } from "next/font/google";
import "@styles/globals.css";
import Footer from "@components/Footer";
import HomeNav from "@components/HomeNav";
import ReactQueryProvider from "@providers/ReactQueryProvider";

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
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <ReactQueryProvider>
          <HomeNav />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
