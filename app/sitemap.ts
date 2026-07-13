import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mombofrancis.com";
  const d = new Date("2026-07-01");
  return [
    // Accueil
    { url: base, lastModified: d, changeFrequency: "monthly", priority: 1 },
    // Localisation & info pratiques
    { url: `${base}/osteopathe-castelnau-le-lez`, lastModified: d, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/tarifs-osteopathe-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faq-osteopathe-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    // Hypnose
    { url: `${base}/hypnose-therapeutique-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hypnose-sport-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    // Services ostéopathiques
    { url: `${base}/osteopathie-sport-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/urgences-osteopathie-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-sante-femme`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-enfant-nourrisson`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/douleurs-chroniques-osteopathie`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-seniors-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    // Témoignages vidéo
    { url: `${base}/temoignages-video`, lastModified: d, changeFrequency: "monthly", priority: 0.8 },
    // Pages SEO mots-clés
    { url: `${base}/osteopathie-grossesse-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/kine-osteo-montpellier`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-endometriose`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathe-saint-mathieu-de-treviers`, lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    // Articles de blog
    { url: `${base}/9-saisons-mhsc-volley-osteopathe`, lastModified: new Date("2026-07-13"), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/recuperation-sport-haut-niveau-sommeil-alimentation`, lastModified: new Date("2026-07-13"), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/jeux-mediterraneens-2013-kine-equipe-france-volley`, lastModified: new Date("2026-07-13"), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/mal-de-dos-comprendre-prevenir`, lastModified: new Date("2025-06-12"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/recuperation-sportive-osteopathie`, lastModified: new Date("2025-06-03"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/osteopathie-grossesse-equilibre-feminin`, lastModified: new Date("2025-05-25"), changeFrequency: "yearly", priority: 0.7 },
  ];
}
