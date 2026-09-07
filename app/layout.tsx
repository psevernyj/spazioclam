import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LangProvider, type Lang } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://spazioclam.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Massoterapia & Personal Training | Max Voytsekhovskyy",
  description:
      "Massoterapia, riequilibrio posturale, linfodrenaggio, Pancafit® e Personal Training ad Abbiategrasso. Scopri i trattamenti di Max.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Max Voytsekhovskyy — Massoterapia & Personal Training",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Max Voytsekhovskyy — Massoterapia & Personal Training",
  image: `${SITE_URL}/max-1.webp`,
  url: SITE_URL,
  telephone: "+393464195612",
  email: "maksymasso@gmail.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abbiategrasso",
    addressRegion: "MI",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.404423,
    longitude: 8.9185301,
  },
  sameAs: ["https://www.instagram.com/Maxtanka"],
};

export default async function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const pathname = hdrs.get("x-pathname") ?? "/";
  const lang: Lang = pathname.startsWith("/en") ? "en" : "it";

  return (
      <html lang={lang} className={`${geistSans.variable} ${instrumentSerif.variable}`}>
      <body>
      <LangProvider lang={lang}>
        <Header />
        {children}
        <Footer />
      </LangProvider>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      </body>
      </html>
  );
}
