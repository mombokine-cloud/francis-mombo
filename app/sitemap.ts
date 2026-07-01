import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mombofrancis.com";
  const d = new Date("2026-07-01");
  return [
    // Page d'accueil
    { url: base, lastModified: d, changeFrequency: "monthly", priority: 1 },
    // Pages de localisation
    { url: `${base}/osteopathe-castelnau-le-lez`, lastModified: d, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/osteopathe-saint-mathieu-de-treviers`, lastModified: d, changeFrequency: "monthly", priority: 1 },
    // Pages hypnose
    { url: `${base}/hypnose-therapeutique-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hypnose-sport-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hypnose-therapeutique`, lastModified: d, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hypnose-sport`, lastModified: d, changeFrequency: "monthly", priority: 0.8 },
    // Tarifs
    { url: `${base}/tarifs-osteopathe-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    // Pages de services
    { url: `${base}/osteopathie-sport-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-urgences`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sante-femme-fertilite-endometriose`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-enfant`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/maladies-chroniques-osteopathie`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-seniors`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    // Articles
    { url: `${base}/mal-de-dos-comprendre-prevenir`, lastModified: d, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/recuperation-sportive-osteopathie`, lastModified: d, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathie-grossesse-equilibre-feminin`, lastModified: d, changeFrequency: "monthly", priority: 0.8 },
  ];
}
