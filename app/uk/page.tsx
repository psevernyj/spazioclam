import type { Metadata } from "next";
import HomePage from "../page";

const TITLE = "Масотерапія та персональний тренінг | Макс Войцеховський";
const DESCRIPTION =
    "Масотерапія, постуральний баланс, лімфодренаж, Pancafit® та персональний тренінг в Аббьятеграссо. Дізнайся більше про процедури Макса.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/uk",
    languages: { it: "/", en: "/en", uk: "/uk", "x-default": "/" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/uk",
    locale: "uk_UA",
    images: ["/max-1.webp"],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: ["/max-1.webp"],
  },
};

export default function UkHomePage() {
  return <HomePage />;
}
