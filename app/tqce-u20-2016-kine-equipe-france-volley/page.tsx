import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";
const ffvbSource = "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=MzY0Nw%3D%3D";

export const metadata: Metadata = {
  title: "TQCE U20 2016 : Francis MOMBO, kiné de l'équipe de France de volley-ball",
  description:
    "Francis MOMBO, kinésithérapeute officiel de l'équipe de France U20 masculine lors du Tournoi de Qualification pour le Championnat d'Europe 2016 (FFVB). Victories sur la Slovaquie et la Norvège.",
  keywords: [
    "kiné équipe de France U20 volley",
    "kinésithérapeute FFVB U20",
    "TQCE U20 2016 volley France",
    "Francis MOMBO kiné Montpellier",
    "ostéopathe sport haut niveau Montpellier",
    "kinésithérapeute équipe nationale jeunes volley",
  ],
  alternates: { canonical: `${siteUrl}/tqce-u20-2016-kine-equipe-france-volley` },
  openGraph: {
    title: "TQCE U20 2016 : Francis MOMBO, kiné de l'équipe de France",
    description: "Kinésithérapeute officiel des Bleuets U20 lors du TQCE 2016 — Francis MOMBO accompagne la nouvelle génération du volley français.",
    url: `${siteUrl}/tqce-u20-2016-kine-equipe-france-volley`,
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TQCE U20 2016 : Francis MOMBO, kinésithérapeute de l'équipe de France de volley-ball",
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    author: { "@type": "Person", name: "Francis MOMBO", url: siteUrl, jobTitle: "Kinésithérapeute — Ostéopathe D.O." },
    publisher: { "@type": "MedicalBusiness", name: "Francis MOMBO — Cabinet d'ostéopathie & kinésithérapie", url: siteUrl },
    url: `${siteUrl}/tqce-u20-2016-kine-equipe-france-volley`,
    citation: {
      "@type": "WebPage",
      name: "TQCE : Les Bleuets confirment — FFVB",
      url: ffvbSource,
      publisher: { "@type": "SportsOrganization", name: "Fédération Française de Volley-Ball (FFVB)", url: "https://www.ffvb.org" },
    },
    about: {
      "@type": "Event",
      name: "Tournoi de Qualification Championnat d'Europe U20 — 2016",
      startDate: "2016-03-31",
      endDate: "2016-04-02",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Tournoi de Qualification Europe U20",
        address: { "@type": "PostalAddress", addressCountry: "FR" },
      },
      image: "https://www.mombofrancis.com/og-image.jpeg.png",
      performer: { "@type": "Person", name: "Francis MOMBO", url: "https://www.mombofrancis.com" },
      organizer: { "@type": "SportsOrganization", name: "Fédération Française de Volley-Ball (FFVB)", url: "https://www.ffvb.org" },
    },
  },
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
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Équipe de France U20</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>FFVB</span>
            <span className="text-xs text-gray-400">Avril 2016</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            TQCE U20 2016 : Francis MOMBO, kinésithérapeute des Bleuets de France
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            En mars-avril 2016, Francis MOMBO intègre le staff médical officiel de <strong>l'équipe de France masculine U20</strong> pour le Tournoi de Qualification au Championnat d'Europe, aux côtés du coach Jocelyn Trillon. Les Bleuets remportent leurs deux premiers matchs face à la Slovaquie (3-0) et la Norvège (3-0).
          </p>
        </div>

        <div className="rounded-2xl p-6 mb-10 border border-gray-200" style={{ background: "#f9f9f9" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">Source officielle FFVB</p>
          <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>Staff — TQCE U20 2016</p>
          <p className="text-gray-500 text-sm mt-1">Entraîneur : Jocelyn Trillon · Adjoint : David Vaseux · Médecin : Aurélie Ribaut · <strong>Kinésithérapeute : Francis Mombo</strong></p>
          <a href={ffvbSource} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs mt-2 font-semibold hover:underline" style={{ color: "#D4336E" }}>
            Voir la fiche FFVB
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Le contexte : la filière jeune de la FFVB</h2>
            <p>Le Tournoi de Qualification pour le Championnat d'Europe U20 est une étape clé dans le développement des jeunes volleyeurs français. C'est à ce niveau que les futures stars du volley national sont identifiées et façonnées — plusieurs joueurs de ce groupe iront ensuite en Pro A et en équipe de France senior.</p>
            <p className="mt-3">Francis MOMBO accompagne ces jeunes athlètes (18-20 ans) dont les corps sont en pleine construction physique : charge d'entraînement intense, premier contact avec le haut niveau international, gestion de la pression de la compétition qualificative.</p>
          </section>
          <section>
            <h2 className="article-h2">Résultats du tournoi</h2>
            <ul className="article-list">
              <li>31 mars — Slovaquie 0-3 France (22-25, 18-25, 23-25) ;</li>
              <li>1er avril — Norvège 0-3 France (18-25, 17-25, 18-25) ;</li>
              <li>2 avril — France vs Autriche (troisième match du groupe).</li>
            </ul>
            <p className="mt-3">Deux victoires nettes en deux matchs, avec des scores sans appel — le signe d'une équipe bien préparée physiquement et médicalement.</p>
          </section>
          <section>
            <h2 className="article-h2">Kiné des jeunes : un rôle pédagogique autant que médical</h2>
            <p>Travailler avec des joueurs U20 requiert une approche spécifique. Ces athlètes apprennent encore à écouter et comprendre leur corps. Le kinésithérapeute national joue un rôle pédagogique central : apprendre aux jeunes joueurs à signaler leurs douleurs tôt, à respecter les protocoles de récupération, à intégrer les gestes préventifs qui feront durer leur carrière.</p>
            <p className="mt-3">Cette compétence — former autant que soigner — est au cœur de la pratique de cabinet de Francis MOMBO à Castelnau-le-Lez. Expliquer, éduquer, responsabiliser le patient sur son propre corps.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tout le parcours FFVB</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/parcours-ffvb-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Vue d'ensemble FFVB</Link>
            <Link href="/jeux-mediterraneens-2013-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">JM 2013</Link>
            <Link href="/tqcm-u21-2017-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">TQCM U21 2017</Link>
            <Link href="/euro-u20-2018-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Euro U20 2018</Link>
            <Link href="/osteopathie-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie du sport</Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Kinésithérapeute & ostéopathe D.O.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">5 missions officielles FFVB · 9 saisons MHSC VB · Champion de France 2022<br/>Cabinet Castelnau-le-Lez & Saint-Mathieu-de-Tréviers</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>Prendre rendez-vous</a>
            <a href="tel:0650149192" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-sm border-2" style={{ borderColor: "#D4336E", color: "#D4336E" }}>06 50 14 91 92</a>
          </div>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
