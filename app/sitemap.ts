import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mombofrancis.com";
  const serviceDate = new Date("2026-06-23");
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    // Pages services
    { url: `${base}/osteopathie-sport-montpellier`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/urgences-osteopathie-montpellier`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-sante-femme`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-enfant-nourrisson`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/douleurs-chroniques-osteopathie`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-seniors-montpellier`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    // Articles
    { url: `${base}/mal-de-dos-comprendre-prevenir`, lastModified: new Date("2025-06-12"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/recuperation-sportive-osteopathie`, lastModified: new Date("2025-06-03"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/osteopathie-grossesse-equilibre-feminin`, lastModified: new Date("2025-05-25"), changeFrequency: "yearly", priority: 0.7 },
  ];
}
