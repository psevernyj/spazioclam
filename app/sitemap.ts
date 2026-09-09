import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://spazioclam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const languages = { it: `${SITE_URL}/`, en: `${SITE_URL}/en`, uk: `${SITE_URL}/uk` };

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/uk`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
  ];
}
