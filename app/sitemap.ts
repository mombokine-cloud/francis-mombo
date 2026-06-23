import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mombofrancis.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.mombofrancis.com/mal-de-dos-comprendre-prevenir",
      lastModified: new Date("2025-06-12"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.mombofrancis.com/recuperation-sportive-osteopathie",
      lastModified: new Date("2025-06-03"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.mombofrancis.com/osteopathie-grossesse-equilibre-feminin",
      lastModified: new Date("2025-05-25"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
