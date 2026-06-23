import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mombofrancis.com";
  const now = new Date("2026-06-23");
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    // Pages services
    { url: `${base}/osteopathie-sport-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-urgences`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sante-femme-fertilite-endometriose`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-enfant`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/maladies-chroniques-osteopathie`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-seniors`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Pages hypnose
    { url: `${base}/hypnose-therapeutique`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hypnose-sport`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Articles
    { url: `${base}/mal-de-dos-comprendre-prevenir`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/recuperation-sportive-osteopathie`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathie-grossesse-equilibre-feminin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
