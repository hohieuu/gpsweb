"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`bg-[#FCFCFC] ${inter.className}`}>
      <Providers>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <Analytics />
      </Providers>
    </body>
  );
}
