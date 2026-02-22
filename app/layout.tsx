import type {Metadata} from "next";
import {Geist} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Massoterapia & Personal Training | Max Voytsekhosvkyy",
    description:
        "Massoterapia, riequilibrio posturale, linfodrenaggio, Pancafit® e Personal Training a Abbiategrasso. Scopri i trattamenti di Max.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
        <body className={`${geistSans.variable}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}