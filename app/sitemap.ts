import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://spazioclam.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: { it: `${SITE_URL}/`, en: `${SITE_URL}/en` },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: { it: `${SITE_URL}/`, en: `${SITE_URL}/en` },
      },
    },
  ];
}
