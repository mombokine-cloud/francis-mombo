import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francis MOMBO – Ostéopathe & Kinésithérapeute | Castelnau-le-Lez",
  description:
    "Francis MOMBO, ostéopathe et kinésithérapeute à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers. Ostéopathie, sport, équilibre féminin, hypnose. Rendez-vous sur Doctolib.",
  keywords: [
    "ostéopathe",
    "kinésithérapeute",
    "Francis MOMBO",
    "Castelnau-le-Lez",
    "Saint-Mathieu-de-Tréviers",
    "ostéopathie du sport",
    "hypnose",
    "équilibre féminin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
