import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mombofrancis.com";
  const serviceDate = new Date("2026-06-23");
  return [
    // Page d'accueil
    { url: base, lastModified: serviceDate, changeFrequency: "monthly", priority: 1 },
    // Page de localisation (priorité maximale pour SEO local)
    { url: `${base}/osteopathe-castelnau-le-lez`, lastModified: serviceDate, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/osteopathe-saint-mathieu-de-treviers`, lastModified: serviceDate, changeFrequency: "monthly", priority: 1 },
    // Pages de services
    { url: `${base}/osteopathie-sport-montpellier`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/urgences-osteopathie-montpellier`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-sante-femme`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-enfant-nourrisson`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/douleurs-chroniques-osteopathie`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-seniors-montpellier`, lastModified: serviceDate, changeFrequency: "monthly", priority: 0.9 },
    // Articles de blog
    { url: `${base}/mal-de-dos-comprendre-prevenir`, lastModified: new Date("2025-06-12"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/recuperation-sportive-osteopathie`, lastModified: new Date("2025-06-03"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/osteopathie-grossesse-equilibre-feminin`, lastModified: new Date("2025-05-25"), changeFrequency: "yearly", priority: 0.7 },
  ];
}
