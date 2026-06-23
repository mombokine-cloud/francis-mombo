import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mombofrancis.com";
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
        url: "/francis-champion-france-2022.jpg",
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
