import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Kinésithérapeute Saint-Mathieu-de-Tréviers - Francis MOMBO, Kiné D.O.",
  description:
    "Francis MOMBO, masseur-kinésithérapeute et ostéopathe D.O. à Saint-Mathieu-de-Tréviers (34270), au pied du Pic Saint-Loup. Rééducation, sport, douleurs chroniques. Cabinet au 5 avenue du Grand Chêne.",
  keywords: [
    "kinésithérapeute Saint-Mathieu-de-Tréviers",
    "kiné Saint-Mathieu-de-Tréviers",
    "masseur kinésithérapeute Pic Saint-Loup",
    "rééducation Saint-Mathieu-de-Tréviers",
    "kinésithérapeute Claret Quissac Sauve",
    "kiné ostéo Hérault nord Montpellier",
    "kinésithérapie Les Matelles",
    "Francis MOMBO Saint-Mathieu",
  ],
  alternates: { canonical: `${siteUrl}/kinesitherapeute-saint-mathieu-de-treviers` },
  openGraph: {
    title: "Kinésithérapeute Saint-Mathieu-de-Tréviers - Francis MOMBO",
    description: "Masseur-kinésithérapeute et ostéopathe D.O. à Saint-Mathieu-de-Tréviers, Pic Saint-Loup. Sport, rééducation, douleurs chroniques.",
    url: `${siteUrl}/kinesitherapeute-saint-mathieu-de-treviers`,
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Francis MOMBO - Kinésithérapeute & Ostéopathe Saint-Mathieu-de-Tréviers",
    url: siteUrl,
    telephone: "+33650149192",
    medicalSpecialty: ["PhysicalTherapy", "Osteopathic"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Avenue du Grand Chêne",
      addressLocality: "Saint-Mathieu-de-Tréviers",
      postalCode: "34270",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 43.7534, longitude: 3.8536 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "20:00" },
    ],
    sameAs: [doctolib],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Le cabinet de Saint-Mathieu-de-Tréviers est-il facilement accessible depuis le Pic Saint-Loup ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Le cabinet est situé au 5 avenue du Grand Chêne à Saint-Mathieu-de-Tréviers (34270), au cœur du village, à l'entrée du massif du Pic Saint-Loup. Il dessert les communes de Claret, Les Matelles, Saint-Bauzille-de-Montmel, Sauve, Quissac et tout le nord de la métropole montpelliéraine.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il une ordonnance pour consulter à Saint-Mathieu-de-Tréviers ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, pas pour l'ostéopathie. Pour la kinésithérapie remboursée par la Sécurité Sociale, une prescription médicale est nécessaire. Francis MOMBO vous orientera selon votre situation dès la prise de contact.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les spécialités proposées au cabinet de Saint-Mathieu ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toutes les spécialités de Francis MOMBO sont disponibles à Saint-Mathieu-de-Tréviers : ostéopathie générale et du sport, kinésithérapie, rééducation musculo-squelettique, ostéopathie femme et grossesse, hypnose médicale.",
        },
      },
    ],
  },
];

const communes = [
  "Claret", "Les Matelles", "Saint-Bauzille-de-Montmel", "Sauve", "Quissac",
  "Valflaunès", "Lauret", "Sauteyrargues", "Fontanès", "Vacquières",
  "Saint-Gély-du-Fesc", "Prades-le-Lez", "Montferrier-sur-Lez",
];

export default function Page() {
  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
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

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1a0a 0%, #1a2a10 55%, #2d4a1a 100%)", minHeight: 340 }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/francis-sport-bw.webp')", backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.25 }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.12)" }}>
              🩺 Kinésithérapie & Ostéopathie
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#D4336E", color: "#fff" }}>
              Pic Saint-Loup
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 42px)" }}>
            Kinésithérapeute<br />
            <span style={{ color: "#E8A020" }}>Saint-Mathieu-de-Tréviers</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Francis MOMBO - Masseur-kinésithérapeute · Ostéopathe D.O. · Cabinet au pied du Pic Saint-Loup
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Infos rapides */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", label: "5 avenue du Grand Chêne", sub: "Saint-Mathieu-de-Tréviers 34270" },
            { icon: "🕐", label: "Lundi - Samedi", sub: "08h00 → 20h00" },
            { icon: "📞", label: "06 50 14 91 92", sub: "ou Doctolib en ligne" },
          ].map((i) => (
            <div key={i.label} className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">{i.icon}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>{i.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{i.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Un cabinet au cœur du Pic Saint-Loup</h2>
            <p>Saint-Mathieu-de-Tréviers est la commune principale du massif du <strong>Pic Saint-Loup</strong>, à 25 km au nord de Montpellier. C&apos;est également un territoire de randonnée, de trail, d&apos;escalade et de sport de plein air - des pratiques qui génèrent leurs propres blessures et besoins en rééducation.</p>
            <p className="mt-3">Le cabinet de Saint-Mathieu complète celui de Castelnau-le-Lez pour couvrir le nord de la métropole montpelliéraine et la zone Pic Saint-Loup → Quissac. Francis MOMBO y propose les mêmes prestations qu&apos;à Castelnau : kinésithérapie, ostéopathie et hypnose médicale.</p>
          </section>

          <section>
            <h2 className="article-h2">Prestations disponibles à Saint-Mathieu-de-Tréviers</h2>
            <ul className="article-list">
              <li><strong>Rééducation musculo-squelettique</strong> - entorses, fractures, post-opératoire ;</li>
              <li><strong>Ostéopathie générale</strong> - douleurs chroniques, mal de dos, cervicalgies, céphalées ;</li>
              <li><strong>Kinésithérapie & ostéopathie du sport</strong> - trail, escalade, vélo, sports de raquette ;</li>
              <li><strong>Santé féminine</strong> - grossesse, endométriose, équilibre féminin ;</li>
              <li><strong>Ostéopathie enfant & nourrisson</strong> ;</li>
              <li><strong>Hypnose médicale</strong> - douleur chronique, stress, performance ;</li>
              <li><strong>Séniors</strong> - mobilité, prévention des chutes, pathologies dégénératives.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Zone de desserte - Pic Saint-Loup et environs</h2>
            <p>Le cabinet accueille des patients des villages du Pic Saint-Loup et du nord-Hérault :</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {communes.map((c) => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600">{c}</span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">Deux cabinets pour couvrir toute la métropole</h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl p-5 border-2" style={{ borderColor: "#D4336E" }}>
                <p className="font-black text-gray-900 text-sm mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Cabinet Castelnau-le-Lez</p>
                <p className="text-gray-500 text-xs mb-3">1720 avenue de l&apos;Europe, 34170</p>
                <p className="text-gray-600 text-xs leading-relaxed">Est de Montpellier, Jacou, Le Crès, Clapiers, Vendargues, Lattes, Pérols, Saint-Jean-de-Védas</p>
                <Link href="/osteopathe-castelnau-le-lez" className="text-xs font-bold mt-3 inline-flex items-center gap-1" style={{ color: "#D4336E" }}>
                  Voir le cabinet
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="rounded-xl p-5 border-2" style={{ borderColor: "#E8A020" }}>
                <p className="font-black text-gray-900 text-sm mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Cabinet Saint-Mathieu-de-Tréviers</p>
                <p className="text-gray-500 text-xs mb-3">5 avenue du Grand Chêne, 34270</p>
                <p className="text-gray-600 text-xs leading-relaxed">Pic Saint-Loup, Claret, Les Matelles, Sauve, Quissac, nord Hérault</p>
                <Link href="/osteopathe-saint-mathieu-de-treviers" className="text-xs font-bold mt-3 inline-flex items-center gap-1" style={{ color: "#E8A020" }}>
                  Voir le cabinet
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
            <div className="space-y-4">
              {(jsonLd[1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((item) => (
                <div key={item.name} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.name}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Saint-Mathieu-de-Tréviers · Sans ordonnance</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Prendre rendez-vous
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            5 avenue du Grand Chêne, 34270 Saint-Mathieu-de-Tréviers · 06 50 14 91 92<br />
            Lundi – Samedi · 08h00 – 20h00
          </p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </main>

      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
