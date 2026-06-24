import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathe à Castelnau-le-Lez — Francis MOMBO, kinésithérapeute D.O.",
  description:
    "Francis MOMBO, ostéopathe et kinésithérapeute D.O. à Castelnau-le-Lez (34170), reçoit adultes, sportifs, nourrissons et seniors. Cabinet au 1720 avenue de l'Europe. Prise de rendez-vous sur Doctolib.",
  keywords: [
    "ostéopathe Castelnau-le-Lez",
    "ostéopathie Castelnau-le-Lez",
    "kinésithérapeute Castelnau-le-Lez",
    "ostéopathe 34170",
    "cabinet ostéopathie Castelnau",
    "ostéopathe proche Montpellier",
    "Francis MOMBO ostéopathe",
    "ostéopathe Montpellier nord",
  ],
  alternates: { canonical: `${siteUrl}/osteopathe-castelnau-le-lez` },
  openGraph: {
    title: "Ostéopathe à Castelnau-le-Lez — Francis MOMBO",
    description: "Cabinet d'ostéopathie à Castelnau-le-Lez : adultes, sportifs, nourrissons, seniors. Francis MOMBO, kinésithérapeute et ostéopathe D.O.",
    url: `${siteUrl}/osteopathe-castelnau-le-lez`,
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
  { q: "Comment prendre rendez-vous à Castelnau-le-Lez ?", a: "Vous pouvez réserver directement en ligne sur Doctolib, disponible 24h/24. Le cabinet est situé au 1720 avenue de l'Europe, 34170 Castelnau-le-Lez." },
  { q: "Faut-il une ordonnance pour consulter un ostéopathe ?", a: "Non, l'ostéopathie est accessible en accès direct, sans prescription médicale. Vous pouvez prendre rendez-vous librement." },
  { q: "Acceptez-vous les nourrissons et enfants ?", a: "Oui, Francis MOMBO prend en charge les nourrissons dès les premiers jours de vie, les enfants et les adolescents avec des techniques entièrement adaptées à leur âge." },
  { q: "Le cabinet est-il accessible en transport en commun ?", a: "Oui, le cabinet est desservi par les transports en commun de l'agglomération de Montpellier. Un parking est également disponible à proximité." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Castelnau-le-Lez</span>
            <span className="text-xs text-gray-400">Cabinet principal · 34170</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathe à Castelnau-le-Lez
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Francis MOMBO, kinésithérapeute et ostéopathe D.O., reçoit en consultation à Castelnau-le-Lez (34170). Son cabinet principal est situé au <strong>1720 avenue de l'Europe</strong>, à deux pas de Montpellier, facilement accessible depuis tout le nord de l'agglomération.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Le cabinet de Castelnau-le-Lez</h2>
            <p>Implanté à Castelnau-le-Lez depuis plusieurs années, le cabinet accueille des patients de tout l'est de l'agglomération montpelliéraine : Castelnau-le-Lez, Montpellier, Jacou, Le Crès, Vendargues, Clapiers, Prades-le-Lez et des communes alentour.</p>
            <ul className="article-list">
              <li>adresse : 1720 avenue de l'Europe, 34170 Castelnau-le-Lez ;</li>
              <li>téléphone : 06 50 14 91 92 ;</li>
              <li>prise de rendez-vous en ligne sur Doctolib (24h/24) ;</li>
              <li>parking à proximité immédiate ;</li>
              <li>accessible en transports en commun.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Un double profil unique : kiné et ostéopathe</h2>
            <p>Francis MOMBO cumule deux expertises complémentaires :</p>
            <ul className="article-list">
              <li><strong>Kinésithérapeute</strong> — rééducation fonctionnelle, traitement des blessures, renforcement musculaire, rééducation post-opératoire ;</li>
              <li><strong>Ostéopathe D.O.</strong> — prise en charge globale du corps, traitement des douleurs chroniques et aiguës, équilibre structurel et viscéral ;</li>
              <li><strong>Hypnothérapeute</strong> — gestion de la douleur, stress, phobies, préparation mentale sportive.</li>
            </ul>
            <p>Cette double compétence lui permet d'assurer une prise en charge complète, sans multiplier les intervenants.</p>
          </section>

          <section>
            <h2 className="article-h2">Qui peut consulter ?</h2>
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
            <p>Francis MOMBO a exercé pendant <strong>9 saisons comme kinésithérapeute et ostéopathe officiel du MHSC VB</strong> (Montpellier Hérault Volley-Ball, Champion de France 2022) et accompagné les équipes de la <strong>Fédération Française de Volley-Ball</strong> jusqu'aux Championnats du Monde. Cette expérience de haut niveau enrichit chaque consultation au cabinet.</p>
          </section>

          <section>
            <h2 className="article-h2">Spécialités disponibles à Castelnau-le-Lez</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">Second cabinet : Saint-Mathieu-de-Tréviers</h2>
            <p>Francis MOMBO exerce également à <strong>Saint-Mathieu-de-Tréviers</strong> (5 avenue du Grand Chêne, 34270), desservant les patients du Pic Saint-Loup et du nord du département.</p>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
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

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Cabinet de Castelnau-le-Lez</h3>
          <p className="text-gray-500 text-sm mb-1 max-w-md mx-auto">1720 avenue de l'Europe — 34170 Castelnau-le-Lez</p>
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
