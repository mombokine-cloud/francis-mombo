import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";
const paulineDoctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/pauline-broussard-castelnau-le-lez";

export const metadata: Metadata = {
  title: "Collaboratrices ostéopathes — Cabinet Castelnau-le-Lez | Francis MOMBO",
  description:
    "Découvrez Pauline BROUSSARD, ostéopathe D.O. collaboratrice au cabinet de Castelnau-le-Lez. Approche douce et personnalisée pour nourrissons, femmes enceintes, sportifs, adultes et seniors.",
  keywords: [
    "ostéopathe Castelnau-le-Lez",
    "Pauline Broussard ostéopathe",
    "cabinet ostéopathie Castelnau-le-Lez",
    "ostéopathe Montpellier",
    "ostéopathie nourrisson enfant Castelnau",
    "ostéopathie femme enceinte Montpellier",
    "ostéopathie sportif Castelnau-le-Lez",
  ],
  alternates: { canonical: `${siteUrl}/collaboratrices-osteopathie-castelnau` },
  openGraph: {
    title: "Collaboratrices ostéopathes — Cabinet Castelnau-le-Lez",
    description: "Pauline BROUSSARD, ostéopathe D.O., rejoint le cabinet Francis MOMBO à Castelnau-le-Lez.",
    url: `${siteUrl}/collaboratrices-osteopathie-castelnau`,
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Cabinet d'ostéopathie Francis MOMBO — Castelnau-le-Lez",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1720 avenue de l'Europe, 1er étage bureau B2",
      addressLocality: "Castelnau-le-Lez",
      postalCode: "34170",
      addressCountry: "FR",
    },
    employee: [
      {
        "@type": "Person",
        name: "Francis MOMBO",
        jobTitle: "Ostéopathe D.O. — Kinésithérapeute",
        url: siteUrl,
        sameAs: ["https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"],
      },
      {
        "@type": "Person",
        name: "Pauline BROUSSARD",
        jobTitle: "Ostéopathe D.O.",
        sameAs: [paulineDoctolib],
      },
    ],
  },
];

const specialitesPauline = [
  "Nourrissons et enfants",
  "Femmes enceintes",
  "Sportifs amateurs et confirmés",
  "Adultes",
  "Seniors",
];

const accompagnementsPauline = [
  "Tensions et inconforts musculo-squelettiques",
  "Douleurs du dos et cervicales",
  "Troubles fonctionnels",
  "Inconforts liés au cycle menstruel",
  "Récupération et mobilité du sportif",
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Retour au site
          </Link>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Cabinet Castelnau-le-Lez</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            Notre équipe d'ostéopathes à Castelnau-le-Lez
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Le cabinet accueille des collaboratrices ostéopathes D.O. pour vous offrir davantage de disponibilités et une prise en charge adaptée à chaque profil de patient, à proximité de Montpellier.
          </p>
        </div>

        {/* Carte Pauline */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 mb-10" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
          <div className="p-8 sm:flex sm:gap-8 items-start">

            {/* Photo */}
            <div className="flex-shrink-0 mb-6 sm:mb-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mx-auto sm:mx-0" style={{ background: "#f3f3f3" }}>
                <Image
                  src="/Pauline_BROUSSARD_Osteopathe_Castelnau_Montpellier.webp"
                  alt="Pauline BROUSSARD, ostéopathe D.O. à Castelnau-le-Lez"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="160px"
                />
              </div>
            </div>

            {/* Infos */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Ostéopathe D.O.</span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>Castelnau-le-Lez</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Pauline BROUSSARD</h2>
              <p className="text-sm text-gray-400 mb-4">Ostéopathe D.O. — Cabinet Francis MOMBO, Castelnau-le-Lez</p>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Pauline BROUSSARD propose une approche douce, attentive et personnalisée de l'ostéopathie. Chaque consultation débute par un échange et un bilan permettant d'adapter la prise en charge aux besoins de chaque patient. Elle utilise différentes techniques manuelles — musculo-squelettiques et myofasciales — avec une approche globale du corps et de ses différentes mobilités.
              </p>

              <a href={paulineDoctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
                Prendre rendez-vous avec Pauline
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 px-8 py-6 grid sm:grid-cols-2 gap-6" style={{ background: "#fafafa" }}>
            {/* Spécialités */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Patientèle</p>
              <ul className="space-y-1.5">
                {specialitesPauline.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#D4336E" }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {/* Accompagnements */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Accompagnements</p>
              <ul className="space-y-1.5">
                {accompagnementsPauline.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#E8A020" }} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bloc cabinet */}
        <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "#fdeef3", borderLeftColor: "#D4336E" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8B2035" }}>Cabinet Castelnau-le-Lez / Montpellier</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            L'arrivée de Pauline permet de proposer davantage de disponibilités pour vos consultations d'ostéopathie à Castelnau-le-Lez. Le cabinet est situé au <strong>1720 avenue de l'Europe, 1er étage bureau B2, 34170 Castelnau-le-Lez</strong>, à proximité immédiate de Montpellier.
          </p>
        </div>

        {/* Liens internes */}
        <div className="p-5 bg-gray-50 rounded-xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Pages liées</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/osteopathe-castelnau-le-lez" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Cabinet Castelnau-le-Lez</Link>
            <Link href="/osteopathie-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie du sport</Link>
            <Link href="/osteopathie-grossesse-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie grossesse</Link>
            <Link href="/tarifs-osteopathe-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Tarifs</Link>
          </div>
        </div>

        {/* CTA Francis */}
        <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Kinésithérapeute & ostéopathe D.O.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">9 saisons au MHSC VB · Champion de France 2022 · Équipes nationales FFVB<br/>Cabinet Castelnau-le-Lez & Saint-Mathieu-de-Tréviers</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>Prendre rendez-vous</a>
            <a href="tel:0650149192" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-sm border-2" style={{ borderColor: "#D4336E", color: "#D4336E" }}>06 50 14 91 92</a>
          </div>
        </div>
      </main>
    </>
  );
}
