import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Francis MOMBO – Ostéopathe & Kinésithérapeute | Montpellier",
    template: "%s | Francis MOMBO Ostéopathe",
  },
  description:
    "Francis MOMBO, ostéopathe D.O. et kinésithérapeute à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers (Montpellier). Ostéopathie, sport de haut niveau, équilibre féminin, hypnose. Prise de rendez-vous sur Doctolib.",
  keywords: [
    "ostéopathe Montpellier",
    "ostéopathe Castelnau-le-Lez",
    "ostéopathe Saint-Mathieu-de-Tréviers",
    "kinésithérapeute Montpellier",
    "Francis MOMBO",
    "ostéopathie du sport",
    "ostéopathe sport haut niveau",
    "hypnose médicale Montpellier",
    "équilibre féminin ostéopathie",
    "MHSC volley-ball",
    "kiné ostéo Hérault",
  ],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  authors: [{ name: "Francis MOMBO", url: siteUrl }],
  creator: "Francis MOMBO",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Francis MOMBO – Ostéopathe & Kinésithérapeute",
    title: "Francis MOMBO – Ostéopathe & Kinésithérapeute | Montpellier",
    description:
      "Ostéopathe D.O. et kinésithérapeute à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers. Spécialiste du sport de haut niveau, équilibre féminin et hypnose médicale.",
    images: [
      {
        url: "/og-image.jpeg.png",
        width: 1200,
        height: 630,
        alt: "Francis MOMBO – Ostéopathe & Kinésithérapeute Montpellier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francis MOMBO – Ostéopathe & Kinésithérapeute | Montpellier",
    description:
      "Ostéopathe D.O. et kinésithérapeute à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers. Spécialiste sport haut niveau, équilibre féminin, hypnose.",
    images: ["/francis-champion-france-2022.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Francis MOMBO – Ostéopathe & Kinésithérapeute",
      url: siteUrl,
      telephone: "+33650149192",
      email: "contact@mombofrancis.com",
      image: `${siteUrl}/francis-champion-france-2022.jpg`,
      description:
        "Ostéopathe D.O. et kinésithérapeute spécialisé dans le sport de haut niveau, l'équilibre féminin et l'hypnose médicale.",
      medicalSpecialty: ["Osteopathic", "PhysicalTherapy"],
      priceRange: "€€",
      location: [
        {
          "@type": "MedicalClinic",
          name: "Cabinet Castelnau-le-Lez",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1720 Avenue de l'Europe",
            addressLocality: "Castelnau-le-Lez",
            postalCode: "34170",
            addressCountry: "FR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.6292,
            longitude: 3.9006,
          },
        },
        {
          "@type": "MedicalClinic",
          name: "Cabinet Saint-Mathieu-de-Tréviers",
          address: {
            "@type": "PostalAddress",
            streetAddress: "5 Avenue du Grand Chêne",
            addressLocality: "Saint-Mathieu-de-Tréviers",
            postalCode: "34270",
            addressCountry: "FR",
          },
        },
      ],
      sameAs: [doctolib],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que l'ostéopathie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'ostéopathie est une médecine manuelle qui considère le corps dans sa globalité. L'ostéopathe identifie et traite les restrictions de mobilité des différentes structures du corps (muscles, articulations, viscères, crâne) pour soulager les douleurs et améliorer le fonctionnement général.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de séances sont nécessaires ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cela dépend de votre situation. En général, 1 à 3 séances suffisent pour un problème aigu. Pour des pathologies chroniques ou un suivi préventif, des consultations régulières (tous les 3 à 6 mois) sont recommandées.",
          },
        },
        {
          "@type": "Question",
          name: "L'ostéopathie est-elle remboursée ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'ostéopathie n'est pas remboursée par l'Assurance Maladie, mais de nombreuses mutuelles participent aux frais. Renseignez-vous auprès de votre complémentaire santé pour connaître les modalités de remboursement.",
          },
        },
        {
          "@type": "Question",
          name: "Comment prendre rendez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez prendre rendez-vous directement via Doctolib ou par téléphone au 06 50 14 91 92. Le cabinet est disponible à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.",
          },
        },
        {
          "@type": "Question",
          name: "L'ostéopathie est-elle douloureuse ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les manipulations ostéopathiques sont généralement indolores. Vous pouvez ressentir de légères sensations lors des manipulations, et parfois une légère courbature dans les 24 à 48h suivant la séance, ce qui est tout à fait normal.",
          },
        },
        {
          "@type": "Question",
          name: "À qui s'adresse l'hypnose thérapeutique ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'hypnose thérapeutique s'adresse à toute personne souhaitant travailler sur le stress, l'anxiété, les douleurs chroniques, les phobies, les troubles du sommeil ou les blocages émotionnels. Elle est sans contre-indication et accessible à tous.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je consulter pendant la grossesse ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l'ostéopathie est particulièrement bénéfique pendant la grossesse pour soulager les douleurs lombaires, les nausées, les tensions ligamentaires et préparer le bassin à l'accouchement. Elle est adaptée à chaque stade de la grossesse.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Francis MOMBO",
      jobTitle: "Ostéopathe D.O. & Masseur-Kinésithérapeute",
      url: siteUrl,
      worksFor: { "@id": `${siteUrl}/#business` },
      alumniOf: [
        "Haute-École Lier de Bruxelles",
        "International Academy of Osteopathy",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
