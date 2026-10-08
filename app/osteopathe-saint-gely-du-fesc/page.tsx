import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathe à Saint-Gély-du-Fesc — Francis MOMBO, Kinésithérapeute D.O.",
  description:
    "Ostéopathe à Saint-Gély-du-Fesc (34980) — Francis MOMBO, kinésithérapeute et ostéopathe D.O. Cabinets à Castelnau-le-Lez (10 min) et Saint-Mathieu-de-Tréviers (15 min). Doctolib.",
  keywords: [
    "ostéopathe Saint-Gély-du-Fesc",
    "ostéopathe Saint-Gély-du-Fesc 34980",
    "ostéopathe près de Saint-Gély",
    "ostéopathie Saint-Gély-du-Fesc",
    "kinésithérapeute Saint-Gély-du-Fesc",
    "ostéopathe nord Montpellier",
    "ostéopathe Hérault",
    "Francis MOMBO ostéopathe",
    "ostéopathe sans ordonnance Saint-Gély",
  ],
  alternates: { canonical: `${siteUrl}/osteopathe-saint-gely-du-fesc` },
  openGraph: {
    title: "Ostéopathe à Saint-Gély-du-Fesc — Francis MOMBO",
    description: "Cabinet d'ostéopathie à 10 min de Saint-Gély-du-Fesc (Castelnau-le-Lez) et 15 min (Saint-Mathieu-de-Tréviers). Francis MOMBO, kinésithérapeute et ostéopathe D.O.",
    url: `${siteUrl}/osteopathe-saint-gely-du-fesc`,
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Francis MOMBO — Ostéopathe & Kinésithérapeute",
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
  { q: "Quels cabinets sont accessibles depuis Saint-Gély-du-Fesc ?", a: "Deux cabinets : Castelnau-le-Lez à 10 minutes et Saint-Mathieu-de-Tréviers à 15 minutes. Saint-Mathieu-de-Tréviers est particulièrement pratique pour les habitants du nord de Saint-Gély, proches du Pic Saint-Loup." },
  { q: "Faut-il une ordonnance pour consulter ?", a: "Non, l'ostéopathie est accessible en accès direct, sans prescription médicale. Vous pouvez prendre rendez-vous directement sur Doctolib, 24h/24." },
  { q: "Prenez-vous en charge les migraines et maux de tête ?", a: "Oui, les céphalées et migraines sont l'une des spécialités de l'ostéopathie. Francis MOMBO évalue les tensions cervicales, crâniennes et posturales pouvant être à l'origine des douleurs." },
  { q: "Proposez-vous des consultations pour les femmes souffrant d'endométriose ?", a: "Oui, Francis MOMBO est spécialisé dans l'accompagnement des femmes atteintes d'endométriose. L'ostéopathie peut aider à réduire les douleurs pelviennes et améliorer la qualité de vie." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Saint-Gély-du-Fesc</span>
            <span className="text-xs text-gray-400">34980 · 2 cabinets accessibles</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathe à Saint-Gély-du-Fesc — Castelnau (10 min) ou Saint-Mathieu (15 min)
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Vous habitez <strong>Saint-Gély-du-Fesc (34980)</strong> et cherchez un ostéopathe ? Francis MOMBO, kinésithérapeute et ostéopathe D.O., vous reçoit à <strong>Castelnau-le-Lez (10 min)</strong> ou à <strong>Saint-Mathieu-de-Tréviers (15 min)</strong>. Saint-Gély est idéalement placée entre les deux cabinets.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Deux cabinets accessibles depuis Saint-Gély-du-Fesc</h2>
            <p>Saint-Gély-du-Fesc (~8 000 habitants) est une commune du nord de Montpellier, bien desservie :</p>
            <ul className="article-list">
              <li><strong>Cabinet Castelnau-le-Lez</strong> — 1720 avenue de l'Europe, 34170 · à 10 min ;</li>
              <li><strong>Cabinet Saint-Mathieu-de-Tréviers</strong> — 5 avenue du Grand Chêne, 34270 · à 15 min ;</li>
              <li>téléphone : 06 50 14 91 92 ;</li>
              <li>prise de rendez-vous en ligne sur Doctolib (24h/24).</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Un triple profil unique : kiné, ostéopathe et hypnothérapeute</h2>
            <p>Francis MOMBO cumule trois expertises complémentaires :</p>
            <ul className="article-list">
              <li><strong>Kinésithérapeute</strong> — rééducation fonctionnelle, traitement des blessures, renforcement musculaire, rééducation post-opératoire ;</li>
              <li><strong>Ostéopathe D.O.</strong> — prise en charge globale du corps, traitement des douleurs chroniques et aiguës, équilibre structurel et viscéral ;</li>
              <li><strong>Hypnothérapeute</strong> — gestion de la douleur, stress, phobies, préparation mentale sportive.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Qui peut consulter depuis Saint-Gély-du-Fesc ?</h2>
            <ul className="article-list">
              <li><strong>Nourrissons et enfants</strong> — coliques, plagiocéphalie, torticolis, troubles du sommeil, scoliose ;</li>
              <li><strong>Adultes</strong> — douleurs de dos, cervicalgies, migraines, stress, troubles digestifs ;</li>
              <li><strong>Sportifs</strong> — prévention, récupération, préparation compétition ;</li>
              <li><strong>Femmes</strong> — grossesse, post-partum, endométriose, cycles douloureux ;</li>
              <li><strong>Séniors</strong> — arthrose, équilibre, mobilité, prévention des chutes.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Expérience du sport de haut niveau</h2>
            <p>Francis MOMBO a exercé pendant <strong>9 saisons comme kinésithérapeute et ostéopathe officiel du MHSC VB</strong> (Montpellier Hérault Volley-Ball, <strong>Champion de France 2022</strong>) et accompagné les équipes de la <strong>Fédération Française de Volley-Ball</strong> jusqu'aux Championnats du Monde.</p>
          </section>

          <section>
            <h2 className="article-h2">Spécialités disponibles</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">FAQ — Ostéopathe à Saint-Gély-du-Fesc</h2>
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
            title="Cabinet Francis MOMBO — 1720 avenue de l'Europe, Castelnau-le-Lez"
            width="100%"
            height="300"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="px-6 py-4 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>1720 avenue de l'Europe — 1er étage bureau B2</p>
              <p className="text-gray-500 text-xs mt-0.5">34170 Castelnau-le-Lez · Parking gratuit · à 10 min de Saint-Gély-du-Fesc</p>
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
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>2 cabinets proches de Saint-Gély-du-Fesc</h3>
          <p className="text-gray-500 text-sm mb-1 max-w-md mx-auto">Castelnau-le-Lez (10 min) · Saint-Mathieu-de-Tréviers (15 min)</p>
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
