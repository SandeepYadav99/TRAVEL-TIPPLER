"use client";
import { Provider } from "react-redux";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "@/store/sotres";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Provider store={store}>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
