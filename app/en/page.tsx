import type { Metadata } from "next";
import HomePage from "../page";

const TITLE = "Massage Therapy & Personal Training | Max Voytsekhovskyy";
const DESCRIPTION =
    "Massage therapy, postural rebalancing, lymphatic drainage, Pancafit® and Personal Training in Abbiategrasso. Discover Max's treatments.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/en",
    languages: { it: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/en",
    locale: "en_US",
    images: ["/max-1.webp"],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: ["/max-1.webp"],
  },
};

export default function EnHomePage() {
  return <HomePage />;
}
