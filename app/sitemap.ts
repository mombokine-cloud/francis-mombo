import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mombofrancis.com";
  const now = new Date("2026-10-08");
  const jul = new Date("2026-07-13");

  return [
    // Accueil
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // Cabinets
    { url: `${base}/osteopathe-castelnau-le-lez`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/osteopathe-saint-mathieu-de-treviers`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Pages locales - Montpellier ville
    { url: `${base}/osteopathe-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 1 },

    // Pages locales - Est Montpellier (Castelnau cabinet)
    { url: `${base}/osteopathe-jacou`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathe-le-cres`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathe-clapiers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-vendargues`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Pages locales - Sud/Ouest Montpellier
    { url: `${base}/osteopathe-juvignac`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-lattes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathe-perols`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-saint-jean-de-vedas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-pignan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/osteopathe-fabreges`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/osteopathe-laverune`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Pages locales - Nord Montpellier
    { url: `${base}/osteopathe-grabels`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-prades-le-lez`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-saint-gely-du-fesc`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-montferrier-sur-lez`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/osteopathe-teyran`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/osteopathe-assas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Pages locales - Pic Saint-Loup / vers Quissac (Saint-Mathieu cabinet)
    { url: `${base}/osteopathe-les-matelles`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-saint-bauzille-de-montmel`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/osteopathe-claret`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/osteopathe-sauve`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/osteopathe-quissac`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/collaboratrices-osteopathie-castelnau`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathe-manon-de-rul-castelnau`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/osteopathe-pauline-broussard-castelnau`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/tarifs-osteopathe-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faq-osteopathe-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Ostéopathie générale
    { url: `${base}/maladies-chroniques-osteopathie`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/douleurs-chroniques-osteopathie`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/mal-de-dos-comprendre-prevenir`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/urgences-osteopathie-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-urgences`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kine-osteo-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Pages multilingues
    { url: `${base}/osteopath-montpellier-english`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopata-montpellier-espanol`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopata-montpellier-portugues`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopata-montpellier-italiano`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Ostéopathie du sport
    { url: `${base}/osteopathie-sport-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/recuperation-sportive-osteopathie`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Populations spécifiques
    { url: `${base}/osteopathie-enfant-nourrisson`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-enfant`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/osteopathie-seniors-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-seniors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Santé féminine
    { url: `${base}/sante-femme-fertilite-endometriose`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-sante-femme`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-endometriose`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-grossesse-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathie-grossesse-equilibre-feminin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Hypnose
    { url: `${base}/hypnose-therapeutique-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hypnose-sport-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hypnose-therapeutique`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hypnose-sport`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Témoignages
    { url: `${base}/temoignages-video`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Articles MHSC / FFVB / Sport haut niveau
    { url: `${base}/afrobasket-2025-consultant-kine-mali`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/coupe-de-france-2022-kine-rc-strasbourg`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/9-saisons-mhsc-volley-osteopathe`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/parcours-ffvb-equipe-france-volley`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/jeux-mediterraneens-2013-kine-equipe-france-volley`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/tqce-u20-2016-kine-equipe-france-volley`, lastModified: jul, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/tqcm-u21-2017-kine-equipe-france-volley`, lastModified: jul, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/tqce-juniors-2018-kine-equipe-france-volley`, lastModified: jul, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/euro-u20-2018-kine-equipe-france-volley`, lastModified: jul, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/recuperation-sport-haut-niveau-sommeil-alimentation`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },

    // Populations artistiques & spécialités
    { url: `${base}/osteopathe-danseur-danse-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/kinesitherapeute-castelnau-le-lez`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/osteopathe-hyrox-crossfit-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/sports-individuels-osteopathie-montpellier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/kinesitherapeute-saint-mathieu-de-treviers`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Légal
    { url: `${base}/politique-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politique-cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
