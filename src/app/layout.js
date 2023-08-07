"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "@/store/sotres";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
        <Header />
        {children}
        <Footer />
        </Provider>
      </body>
    </html>
  );
}
