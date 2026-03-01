import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HighlightStats from "@/components/HighlightStats";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { getProducts } from "@/lib/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIGPS – Bán và lắp đặt định vị tại Huế | Định vị xe máy, ô tô, camera",
  description: "Bán và lắp đặt định vị tại Huế. AIGPS lắp đặt tận nơi: định vị xe máy, ô tô, camera hành trình, camera giám sát. Gọi 0869913144.",
  metadataBase: new URL("https://aigps.vn"),
  openGraph: {
    title: "AIGPS – Bán và lắp đặt định vị tại Huế",
    description: "Định vị xe máy, ô tô, camera hành trình, camera giám sát. Lắp đặt định vị tận nơi tại Huế. Gọi 0869913144.",
    url: "https://aigps.vn",
    siteName: "AIGPS",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIGPS – Bán và lắp đặt định vị tại Huế",
    description: "Bán và lắp đặt định vị tại Huế. Định vị xe máy, ô tô, camera. 0869913144.",
  },
};

export default async function Home() {
  const products = getProducts();
  return (
    <>
      <ScrollUp />
      <Hero />
      <HighlightStats />
      <Features products={products} />
      <AboutSectionOne />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
