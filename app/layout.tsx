import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LangProvider } from "@/lib/i18n";

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

export const metadata: Metadata = {
  title: "Massoterapia & Personal Training | Max Voytsekhovskyy",
  description:
      "Massoterapia, riequilibrio posturale, linfodrenaggio, Pancafit® e Personal Training ad Abbiategrasso. Scopri i trattamenti di Max.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="it" className={`${geistSans.variable} ${instrumentSerif.variable}`}>
      <body>
      <LangProvider>
        <Header />
        {children}
        <Footer />
      </LangProvider>
      </body>
      </html>
  );
}