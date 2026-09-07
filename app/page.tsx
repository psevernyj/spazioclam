import type { Metadata } from "next";
import styles from "./page.module.css";

import HeroScreen  from "@/components/pageSections/home/HeroScreen";
import About       from "@/components/pageSections/home/About";
import Process     from "@/components/pageSections/home/Process";
import Services    from "@/components/pageSections/home/Services";
import Testimonials from "@/components/pageSections/home/Testimonials";
import Gallery     from "@/components/pageSections/home/Gallery";
import Contacts    from "@/components/pageSections/home/Contacts";

const TITLE = "Massoterapia & Personal Training | Max Voytsekhovskyy";
const DESCRIPTION =
    "Massoterapia, riequilibrio posturale, linfodrenaggio, Pancafit® e Personal Training ad Abbiategrasso. Scopri i trattamenti di Max.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: { it: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "it_IT",
    images: ["/max-1.webp"],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: ["/max-1.webp"],
  },
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroScreen />
        <About />
        <Process />
        <Services />
        <Testimonials />
        <Gallery />
        <Contacts />
      </main>
    </div>
  );
}
