import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathe à Quissac - Francis MOMBO, Kinésithérapeute D.O.",
  description:
    "Ostéopathe à Quissac (30260) - Francis MOMBO, kinésithérapeute et ostéopathe D.O. Cabinet à Saint-Mathieu-de-Tréviers (25 min), limite Gard-Hérault. Consultation sans ordonnance, Doctolib.",
  keywords: [
    "ostéopathe Quissac",
    "ostéopathe Quissac 30260",
    "ostéopathe Gard",
    "ostéopathie Quissac",
    "kinésithérapeute Quissac",
    "ostéopathe Saint-Mathieu-de-Tréviers",
    "ostéopathe Hérault Gard",
    "Francis MOMBO ostéopathe",
    "ostéopathe sans ordonnance Quissac",
  ],
  alternates: { canonical: `${siteUrl}/osteopathe-quissac` },
  openGraph: {
    title: "Ostéopathe à Quissac - Francis MOMBO, Cabinet à 25 min de Quissac",
    description: "Cabinet d'ostéopathie à 25 minutes de Quissac (Saint-Mathieu-de-Tréviers). Francis MOMBO, kinésithérapeute et ostéopathe D.O.",
    url: `${siteUrl}/osteopathe-quissac`,
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
    streetAddress: "5 Avenue du Grand Chêne",
    addressLocality: "Saint-Mathieu-de-Tréviers",
    postalCode: "34270",
    addressCountry: "FR",
  },
  sameAs: [doctolib],
};

const faq = [
  { q: "Quel est le cabinet le plus proche de Quissac ?", a: "Le cabinet de Saint-Mathieu-de-Tréviers (5 avenue du Grand Chêne, 34270) est le plus proche, à environ 25 minutes de Quissac. Il dessert tout le secteur Gard-Hérault, de Sauve à Claret." },
  { q: "Faut-il une ordonnance pour consulter ?", a: "Non, l'ostéopathie est accessible en accès direct, sans prescription médicale. Vous pouvez prendre rendez-vous directement sur Doctolib, 24h/24." },
  { q: "Francis MOMBO reçoit-il des patients venant du Gard ?", a: "Oui, le cabinet de Saint-Mathieu-de-Tréviers est facilement accessible depuis le Gard (Quissac, Sauve, Corconne, Conqueyrac). Francis MOMBO reçoit régulièrement des patients des deux départements." },
  { q: "Proposez-vous des consultations d'urgence pour les douleurs aiguës ?", a: "Oui, Francis MOMBO propose des consultations en urgence ostéopathique pour les blocages aigus (lumbago, torticolis, entorses récentes). Consultez la disponibilité sur Doctolib pour les créneaux d'urgence." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Quissac</span>
            <span className="text-xs text-gray-400">30260 · Gard · à 25 min de Saint-Mathieu-de-Tréviers</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathe à Quissac - Cabinet à 25 min, frontière Gard-Hérault
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Vous habitez <strong>Quissac (30260)</strong>, dans le Gard, et cherchez un ostéopathe ? Francis MOMBO, kinésithérapeute et ostéopathe D.O., vous reçoit à <strong>25 minutes de Quissac</strong> au cabinet de <strong>Saint-Mathieu-de-Tréviers</strong> (5 avenue du Grand Chêne, 34270). Son cabinet est le plus proche pour la frontière Gard-Hérault.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Cabinet de référence pour Quissac et le Gard voisin</h2>
            <p>Quissac (~3 500 habitants) est une commune du Gard, carrefour entre Nîmes et Montpellier. Francis MOMBO exerce dans deux cabinets :</p>
            <ul className="article-list">
              <li><strong>Cabinet Saint-Mathieu-de-Tréviers</strong> - 5 avenue du Grand Chêne, 34270 · à 25 min de Quissac ;</li>
              <li><strong>Cabinet Castelnau-le-Lez</strong> - 1720 avenue de l'Europe, 34170 · à 40 min ;</li>
              <li>téléphone : 06 50 14 91 92 ;</li>
              <li>prise de rendez-vous en ligne sur Doctolib (24h/24).</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Un triple profil unique : kiné, ostéopathe et hypnothérapeute</h2>
            <p>Francis MOMBO cumule trois expertises complémentaires :</p>
            <ul className="article-list">
              <li><strong>Kinésithérapeute</strong> - rééducation fonctionnelle, traitement des blessures, renforcement musculaire, rééducation post-opératoire ;</li>
              <li><strong>Ostéopathe D.O.</strong> - prise en charge globale du corps, traitement des douleurs chroniques et aiguës, équilibre structurel et viscéral ;</li>
              <li><strong>Hypnothérapeute</strong> - gestion de la douleur, stress, phobies, préparation mentale sportive.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Qui peut consulter depuis Quissac ?</h2>
            <ul className="article-list">
              <li><strong>Nourrissons et enfants</strong> - coliques, plagiocéphalie, torticolis, troubles du sommeil, scoliose ;</li>
              <li><strong>Adultes</strong> - douleurs de dos, cervicalgies, migraines, stress, troubles digestifs ;</li>
              <li><strong>Sportifs</strong> - prévention, récupération, préparation compétition ;</li>
              <li><strong>Femmes</strong> - grossesse, post-partum, endométriose, cycles douloureux ;</li>
              <li><strong>Séniors</strong> - arthrose, équilibre, mobilité, prévention des chutes.</li>
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
            <h2 className="article-h2">Secteur desservi depuis Quissac</h2>
            <p>En plus de Quissac, le cabinet de Saint-Mathieu-de-Tréviers accueille des patients de : <strong>Sauve</strong>, <strong>Corconne</strong>, <strong>Conqueyrac</strong>, <strong>Claret</strong>, <strong>Les Matelles</strong> et tout le secteur de la vallée de la Vidourle.</p>
          </section>

          <section>
            <h2 className="article-h2">FAQ - Ostéopathe à Quissac</h2>
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
            src="https://maps.google.com/maps?q=5+avenue+du+Grand+Ch%C3%AAne+34270+Saint-Mathieu-de-Tr%C3%A9viers&output=embed"
            title="Cabinet Francis MOMBO - 5 avenue du Grand Chêne, Saint-Mathieu-de-Tréviers"
            width="100%"
            height="300"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="px-6 py-4 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>5 avenue du Grand Chêne - Saint-Mathieu-de-Tréviers</p>
              <p className="text-gray-500 text-xs mt-0.5">34270 Saint-Mathieu-de-Tréviers · à 25 min de Quissac (Gard)</p>
            </div>
            <a
              href="https://www.google.com/maps/dir//5+avenue+du+Grand+Ch%C3%AAne+34270+Saint-Mathieu-de-Tr%C3%A9viers"
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
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Cabinet de Saint-Mathieu-de-Tréviers - à 25 min de Quissac</h3>
          <p className="text-gray-500 text-sm mb-1 max-w-md mx-auto">5 avenue du Grand Chêne - 34270 Saint-Mathieu-de-Tréviers</p>
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
