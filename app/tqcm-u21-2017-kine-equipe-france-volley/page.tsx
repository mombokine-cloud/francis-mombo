import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";
const ffvbSource = "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=NDI5MQ%3D%3D";

export const metadata: Metadata = {
  title: "TQCM U21 2017 : Francis MOMBO, kiné de l'équipe de France de volley-ball",
  description:
    "Francis MOMBO, kinésithérapeute officiel de l'équipe de France U21 masculine lors du Tournoi de Qualification au Championnat du Monde 2017 (FFVB). Victoire finale 3-2 contre la Bulgarie.",
  keywords: [
    "kiné équipe de France U21 volley",
    "kinésithérapeute FFVB U21",
    "TQCM U21 2017 volley France",
    "Francis MOMBO kiné Montpellier",
    "ostéopathe sport haut niveau Montpellier",
    "kinésithérapeute équipe nationale volley",
  ],
  alternates: { canonical: `${siteUrl}/tqcm-u21-2017-kine-equipe-france-volley` },
  openGraph: {
    title: "TQCM U21 2017 : Francis MOMBO, kiné de l'équipe de France",
    description: "Kinésithérapeute officiel des Bleuets U21 lors du TQCM 2017 — Francis MOMBO aux côtés du coach Jocelyn Trillon.",
    url: `${siteUrl}/tqcm-u21-2017-kine-equipe-france-volley`,
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TQCM U21 2017 : Francis MOMBO, kinésithérapeute de l'équipe de France de volley-ball",
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    author: { "@type": "Person", name: "Francis MOMBO", url: siteUrl, jobTitle: "Kinésithérapeute — Ostéopathe D.O." },
    publisher: { "@type": "MedicalBusiness", name: "Francis MOMBO — Cabinet d'ostéopathie & kinésithérapie", url: siteUrl },
    url: `${siteUrl}/tqcm-u21-2017-kine-equipe-france-volley`,
    citation: {
      "@type": "WebPage",
      name: "TQCM U21 : Les Bleus finissent par une victoire — FFVB",
      url: ffvbSource,
      publisher: { "@type": "SportsOrganization", name: "Fédération Française de Volley-Ball (FFVB)", url: "https://www.ffvb.org" },
    },
    about: {
      "@type": "SportsEvent",
      name: "Tournoi de Qualification Championnat du Monde U21 — 2017",
      startDate: "2017-05-20",
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Équipe de France U21</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>FFVB</span>
            <span className="text-xs text-gray-400">Mai 2017</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            TQCM U21 2017 : Francis MOMBO, kinésithérapeute des Bleuets en qualification mondiale
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            En mai 2017, Francis MOMBO est kinésithérapeute officiel de <strong>l'équipe de France U21</strong> lors du Tournoi de Qualification au Championnat du Monde. Les Bleuets concluent par une victoire 3-2 face à la Bulgarie (25-20, 20-25, 14-25, 25-21, 15-9) — un match à cinq sets qui illustre précisément les enjeux physiques et mentaux du haut niveau.
          </p>
        </div>

        <div className="rounded-2xl p-6 mb-10 border border-gray-200" style={{ background: "#f9f9f9" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">Source officielle FFVB</p>
          <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>Staff — TQCM U21 2017</p>
          <p className="text-gray-500 text-sm mt-1">Entraîneur : Jocelyn Trillon · Adjoints : David Vaseux, Loïc Lemarrec · Médecin : Aurélie Ribaut · <strong>Kinésithérapeute : Francis Mombo</strong></p>
          <a href={ffvbSource} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs mt-2 font-semibold hover:underline" style={{ color: "#D4336E" }}>
            Voir la fiche FFVB
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Un match à cinq sets : le test ultime de la récupération</h2>
            <p>France - Bulgarie, 3-2. Deux heures de jeu intense. Ce type de match — où le corps est poussé bien au-delà du seuil de fatigue ordinaire — est le terrain d'expression par excellence du kinésithérapeute de haut niveau.</p>
            <p className="mt-3">Entre les sets, il faut évaluer en quelques secondes : qui est en état de jouer, qui nécessite une intervention rapide, qui risque de se blesser si l'effort se prolonge. Les décisions médicales prises dans ces instants influencent directement l'issue sportive.</p>
          </section>
          <section>
            <h2 className="article-h2">Des joueurs en devenir devenus des références</h2>
            <p>Le groupe U21 de 2017 comprenait plusieurs joueurs qui allaient marquer le volley français :</p>
            <ul className="article-list">
              <li>Barthélémy Chinenyeze — futur Champion olympique avec l'équipe de France senior (Paris 2024) ;</li>
              <li>Thibaut Thoral, Gilles Lomba, Joachim Panou — tous passés par le MHSC VB ou d'autres clubs de Pro A ;</li>
              <li>Une génération qui porterait le volley français vers ses meilleurs résultats historiques.</li>
            </ul>
            <p className="mt-3">Accompagner ces joueurs à 19-21 ans, c'est contribuer à la construction physique qui leur permettra de tenir sur dix ans de carrière au plus haut niveau.</p>
          </section>
          <section>
            <h2 className="article-h2">Ce que le TQCM enseigne sur la gestion de la fatigue</h2>
            <p>Un tournoi de qualification se joue sur plusieurs jours consécutifs. La gestion de la fatigue cumulative est l'un des défis les plus complexes du kiné en sélection nationale :</p>
            <ul className="article-list">
              <li>identifier les joueurs en état de surentraînement avant qu'ils ne se blessent ;</li>
              <li>moduler les protocoles de récupération selon le profil de chaque athlète ;</li>
              <li>communiquer avec le staff technique pour adapter la charge d'entraînement entre les matchs ;</li>
              <li>prendre les décisions difficiles — retirer un joueur de l'entraînement, même sous pression du résultat.</li>
            </ul>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tout le parcours FFVB</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/parcours-ffvb-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Vue d'ensemble FFVB</Link>
            <Link href="/jeux-mediterraneens-2013-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">JM 2013</Link>
            <Link href="/tqce-u20-2016-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">TQCE U20 2016</Link>
            <Link href="/euro-u20-2018-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Euro U20 2018</Link>
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
