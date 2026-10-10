import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathe Montpellier - Francis MOMBO, D.O. & Kinésithérapeute",
  description:
    "Ostéopathe à Montpellier (34000) - Francis MOMBO, kinésithérapeute et ostéopathe D.O. 2 cabinets : Castelnau-le-Lez (5 min de Montpellier) et Saint-Mathieu-de-Tréviers. Ex-kiné MHSC Champion de France 2022. Consultation sans ordonnance.",
  keywords: [
    "ostéopathe Montpellier",
    "ostéopathe Montpellier 34000",
    "meilleur ostéopathe Montpellier",
    "ostéopathe kiné Montpellier",
    "kinésithérapeute ostéopathe Montpellier",
    "ostéopathe Montpellier sport",
    "ostéopathe Castelnau-le-Lez",
    "Francis MOMBO ostéopathe",
    "ostéopathe Montpellier nourrisson",
    "ostéopathe Montpellier grossesse",
    "ostéopathe Montpellier sans ordonnance",
    "ostéopathe Montpellier Doctolib",
  ],
  alternates: { canonical: `${siteUrl}/osteopathe-montpellier` },
  openGraph: {
    title: "Ostéopathe Montpellier - Francis MOMBO, D.O. & Kinésithérapeute",
    description: "2 cabinets pour Montpellier : Castelnau-le-Lez (5 min) et Saint-Mathieu-de-Tréviers. Francis MOMBO, kinésithérapeute D.O., ex-kiné MHSC Champion de France 2022.",
    url: `${siteUrl}/osteopathe-montpellier`,
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Francis MOMBO - Ostéopathe & Kinésithérapeute",
  url: siteUrl,
  telephone: "+33650149192",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1720 Avenue de l'Europe",
    addressLocality: "Castelnau-le-Lez",
    postalCode: "34170",
    addressCountry: "FR",
  },
  sameAs: [doctolib],
};

const faq = [
  { q: "Où consulter un ostéopathe proche de Montpellier ?", a: "Le cabinet principal de Francis MOMBO est situé à Castelnau-le-Lez (1720 avenue de l'Europe, 34170), à 5 minutes de Montpellier. Un second cabinet est disponible à Saint-Mathieu-de-Tréviers (34270) pour les patients du nord de l'Hérault." },
  { q: "Faut-il une ordonnance pour consulter un ostéopathe à Montpellier ?", a: "Non, l'ostéopathie est accessible en accès direct, sans prescription médicale. Vous pouvez prendre rendez-vous directement sur Doctolib, disponible 24h/24." },
  { q: "Quelle est la particularité de Francis MOMBO par rapport aux autres ostéopathes de Montpellier ?", a: "Francis MOMBO est à la fois kinésithérapeute et ostéopathe D.O. - un double profil rare. Il a exercé 9 saisons comme praticien officiel du MHSC VB (Champion de France 2022) et accompagné la Fédération Française de Volley-Ball aux Championnats du Monde. Il pratique également l'hypnose thérapeutique." },
  { q: "Prenez-vous en charge les nourrissons à Montpellier ?", a: "Oui, Francis MOMBO prend en charge les nourrissons dès les premiers jours de vie pour les coliques, plagiocéphalie, torticolis congénital et troubles du sommeil, avec des techniques douces et sécurisées." },
];

const services = [
  { label: "Ostéopathie du sport", href: "/osteopathie-sport-montpellier" },
  { label: "Santé de la femme", href: "/sante-femme-fertilite-endometriose" },
  { label: "Nourrissons & enfants", href: "/osteopathie-enfant" },
  { label: "Séniors", href: "/osteopathie-seniors" },
  { label: "Maladies chroniques", href: "/maladies-chroniques-osteopathie" },
  { label: "Hypnose thérapeutique", href: "/hypnose-therapeutique" },
  { label: "Urgences ostéopathiques", href: "/osteopathie-urgences" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Montpellier</span>
            <span className="text-xs text-gray-400">34000 · 300 000 habitants · 2 cabinets à proximité</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathe Montpellier - Francis MOMBO, D.O. & Kinésithérapeute
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Vous cherchez un <strong>ostéopathe à Montpellier</strong> ? Francis MOMBO, kinésithérapeute et ostéopathe D.O., dispose de <strong>deux cabinets proches de Montpellier</strong> : à <strong>Castelnau-le-Lez (5 min)</strong> et à Saint-Mathieu-de-Tréviers. Ex-kinésithérapeute officiel du <strong>MHSC Volley-Ball, Champion de France 2022</strong>.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Ostéopathe Montpellier - 2 cabinets à proximité immédiate</h2>
            <p>Francis MOMBO accueille les patients de tout Montpellier et de l'agglomération dans ses deux cabinets :</p>
            <ul className="article-list">
              <li><strong>Castelnau-le-Lez</strong> - 1720 avenue de l'Europe, 34170 (5 min de Montpellier, est de l'agglomération) ;</li>
              <li><strong>Saint-Mathieu-de-Tréviers</strong> - 5 avenue du Grand Chêne, 34270 (nord de Montpellier, Pic Saint-Loup) ;</li>
              <li>téléphone : 06 50 14 91 92 ;</li>
              <li>prise de rendez-vous en ligne sur Doctolib (24h/24) ;</li>
              <li>consultation sans ordonnance.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Un double profil unique à Montpellier : kiné ET ostéopathe D.O.</h2>
            <p>Francis MOMBO est l'un des rares praticiens de l'agglomération montpelliéraine à cumuler deux expertises complémentaires :</p>
            <ul className="article-list">
              <li><strong>Kinésithérapeute</strong> - rééducation fonctionnelle, traitement des blessures, renforcement musculaire, rééducation post-opératoire ;</li>
              <li><strong>Ostéopathe D.O.</strong> - prise en charge globale du corps, traitement des douleurs chroniques et aiguës, équilibre structurel et viscéral ;</li>
              <li><strong>Hypnothérapeute</strong> - gestion de la douleur, stress, phobies, préparation mentale sportive.</li>
            </ul>
            <p>Ce double profil permet une prise en charge complète et cohérente, sans multiplication des intervenants.</p>
          </section>

          <section>
            <h2 className="article-h2">Ex-kiné MHSC - une expérience rare à Montpellier</h2>
            <p>Francis MOMBO a exercé pendant <strong>9 saisons comme kinésithérapeute et ostéopathe officiel du MHSC VB</strong> (Montpellier Hérault Volley-Ball) - club devenu <strong>Champion de France 2022</strong>. Il a également accompagné les équipes de la <strong>Fédération Française de Volley-Ball</strong> jusqu'aux Championnats du Monde. Cette expérience unique du sport de haut niveau bénéficie à tous ses patients, sportifs ou non.</p>
          </section>

          <section>
            <h2 className="article-h2">Qui peut consulter à Montpellier ?</h2>
            <ul className="article-list">
              <li><strong>Nourrissons et enfants</strong> - coliques, plagiocéphalie, torticolis, troubles du sommeil, scoliose ;</li>
              <li><strong>Adultes</strong> - douleurs de dos, cervicalgies, migraines, stress, troubles digestifs ;</li>
              <li><strong>Sportifs</strong> - prévention, récupération, traitement des blessures, préparation compétition ;</li>
              <li><strong>Femmes</strong> - grossesse, post-partum, endométriose, cycles douloureux, fertilité ;</li>
              <li><strong>Séniors</strong> - arthrose, équilibre, mobilité articulaire, prévention des chutes.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Spécialités disponibles à Montpellier</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">Communes desservies autour de Montpellier</h2>
            <p>Les deux cabinets de Francis MOMBO couvrent l'ensemble de l'agglomération montpelliéraine et ses alentours : <strong>Montpellier</strong>, <strong>Castelnau-le-Lez</strong>, <strong>Jacou</strong>, <strong>Le Crès</strong>, <strong>Clapiers</strong>, <strong>Vendargues</strong>, <strong>Prades-le-Lez</strong>, <strong>Saint-Mathieu-de-Tréviers</strong> et les communes du Pic Saint-Loup.</p>
          </section>

          <section>
            <h2 className="article-h2">FAQ - Ostéopathe à Montpellier</h2>
            <div className="space-y-4">
              {faq.map(item => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.q}</p>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="mt-10 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            src="https://maps.google.com/maps?q=1720+avenue+de+l%27Europe+34170+Castelnau-le-Lez&output=embed"
            title="Cabinet Francis MOMBO - 1720 avenue de l'Europe, Castelnau-le-Lez"
            width="100%"
            height="300"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="px-6 py-4 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>1720 avenue de l'Europe - 1er étage bureau B2</p>
              <p className="text-gray-500 text-xs mt-0.5">34170 Castelnau-le-Lez · à 5 min de Montpellier · Parking gratuit</p>
            </div>
            <a
              href="https://www.google.com/maps/dir//1720+avenue+de+l%27Europe+34170+Castelnau-le-Lez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-full text-white text-sm flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              Calculer mon itinéraire
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO - D.O. & Kinésithérapeute</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Votre ostéopathe proche de Montpellier</h3>
          <p className="text-gray-500 text-sm mb-1 max-w-md mx-auto">Castelnau-le-Lez - 1720 avenue de l'Europe, 34170</p>
          <p className="text-gray-500 text-sm mb-1 max-w-md mx-auto">Saint-Mathieu-de-Tréviers - 5 avenue du Grand Chêne, 34270</p>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">06 50 14 91 92</p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
