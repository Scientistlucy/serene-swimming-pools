import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";
import { images } from "@/data/images";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.seo.title,
    template: "%s | Serene Swimming Pool Contractors",
  },
  description: site.seo.description,
  keywords: [
    "Serene Swimming Pool Contractors",
    "Swimming Pool Contractors in Kenya",
    "Swimming Pool Experts in Kenya",
    "Swimming Pool Construction Company in Kenya",
    "Swimming Pool Builders in Kenya",
  ],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    locale: "en_KE",
    images: [{ url: images.hero.src, alt: images.hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [images.hero.src],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrument.variable}`}>
      <body className="bg-ivory font-sans text-charcoal antialiased">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
