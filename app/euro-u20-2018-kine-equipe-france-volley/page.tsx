import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";
const ffvbSource = "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=NDk1MQ%3D%3D";

export const metadata: Metadata = {
  title: "Euro U20 2018 : Francis MOMBO, kiné de l'équipe de France de volley-ball",
  description:
    "Francis MOMBO, kinésithérapeute officiel de l'équipe de France U20 lors du Championnat d'Europe 2018 en Belgique et aux Pays-Bas (FFVB). 5e mission internationale pour le praticien montpelliérain.",
  keywords: [
    "kiné équipe de France U20 Euro volley 2018",
    "kinésithérapeute FFVB Euro U20 2018",
    "Euro U20 volley 2018 Belgique Pays-Bas",
    "Francis MOMBO kiné Montpellier",
    "ostéopathe sport haut niveau Montpellier",
    "kinésithérapeute champion Europe volley",
  ],
  alternates: { canonical: `${siteUrl}/euro-u20-2018-kine-equipe-france-volley` },
  openGraph: {
    title: "Euro U20 2018 : Francis MOMBO, kiné de l'équipe de France",
    description: "Kinésithérapeute officiel des Bleuets U20 lors de l'Euro U20 2018 — 5e mission FFVB pour Francis MOMBO.",
    url: `${siteUrl}/euro-u20-2018-kine-equipe-france-volley`,
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Euro U20 2018 : Francis MOMBO, kinésithérapeute de l'équipe de France de volley-ball",
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    author: { "@type": "Person", name: "Francis MOMBO", url: siteUrl, jobTitle: "Kinésithérapeute — Ostéopathe D.O." },
    publisher: { "@type": "MedicalBusiness", name: "Francis MOMBO — Cabinet d'ostéopathie & kinésithérapie", url: siteUrl },
    url: `${siteUrl}/euro-u20-2018-kine-equipe-france-volley`,
    citation: {
      "@type": "WebPage",
      name: "Euro U20 - Jocelyn Trillon : « Chercher la médaille » — FFVB",
      url: ffvbSource,
      publisher: { "@type": "SportsOrganization", name: "Fédération Française de Volley-Ball (FFVB)", url: "https://www.ffvb.org" },
    },
    about: {
      "@type": "SportsEvent",
      name: "Championnat d'Europe U20 de Volley-Ball — 2018",
      startDate: "2018-07-11",
      location: { "@type": "Place", name: "Belgique & Pays-Bas" },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Championnat d'Europe U20</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>FFVB</span>
            <span className="text-xs text-gray-400">Juillet 2018</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            Euro U20 2018 : Francis MOMBO, kinésithérapeute des Bleuets au Championnat d'Europe
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            En juillet 2018, Francis MOMBO est kinésithérapeute officiel de <strong>l'équipe de France U20</strong> lors du Championnat d'Europe organisé en Belgique et aux Pays-Bas. C'est sa <strong>5e mission internationale avec la FFVB</strong>, au terme d'un cycle de trois ans au sein du même staff — un gage de confiance exceptionnel.
          </p>
        </div>

        <div className="rounded-2xl p-6 mb-10 border border-gray-200" style={{ background: "#f9f9f9" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">Source officielle FFVB</p>
          <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>Staff — Euro U20 2018 · Belgique & Pays-Bas</p>
          <p className="text-gray-500 text-sm mt-1">Entraîneur : Jocelyn Trillon · Adjoints : David Vaseux, Benoît Ognier · Médecin : Aurélie Ribaut · <strong>Kinésithérapeute : Francis Mombo</strong> · Statisticien : Valentin Routeau</p>
          <a href={ffvbSource} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs mt-2 font-semibold hover:underline" style={{ color: "#D4336E" }}>
            Voir la fiche FFVB
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Un objectif affiché : « Chercher la médaille »</h2>
            <p>C'est en ces termes que Jocelyn Trillon a résumé l'ambition du groupe avant le tournoi. Les deux premiers du classement obtiendraient une qualification directe pour le Championnat du Monde U21 de 2019 — l'enjeu était donc double : performer et se qualifier.</p>
            <p className="mt-3">Avec un groupe difficile incluant l'Italie, la Belgique, la Pologne, la Russie et la Turquie, seuls deux qualifiés en demi-finale. La préparation physique et la gestion médicale du staff étaient des variables critiques.</p>
          </section>
          <section>
            <h2 className="article-h2">La préparation : bac + CNVB + matchs amicaux</h2>
            <p>La particularité de ce groupe U20 : six joueurs ont passé leur baccalauréat en même temps que la préparation internationale — et tous l'ont réussi, certains avec mention. Une anecdote qui illustre la qualité humaine d'un groupe capable de gérer pression scolaire et pression sportive simultanément.</p>
            <p className="mt-3">La préparation s'est déroulée au CNVB de Montpellier et au CREPS de Wattignies, avec cinq matchs amicaux contre l'Allemagne et la Belgique. Francis MOMBO a donc travaillé à Montpellier — sa ville de cabinet — dans les mêmes installations qui forment l'élite du volley français.</p>
          </section>
          <section>
            <h2 className="article-h2">5 missions FFVB : un bilan d'exception</h2>
            <p>L'Euro U20 2018 clôt un cycle de cinq années au service des équipes nationales :</p>
            <ul className="article-list">
              <li>2013 — Jeux Méditerranéens (équipe senior) ;</li>
              <li>2016 — TQCE U20 (qualification Europe) ;</li>
              <li>2017 — TQCM U21 (qualification Monde) ;</li>
              <li>2018 — TQCE Juniors U20 (Monténégro) ;</li>
              <li>2018 — Euro U20 (Belgique / Pays-Bas).</li>
            </ul>
            <p className="mt-3">Cinq compétitions officielles. Cinq fois dans le staff médical de l'équipe de France. Une reconnaissance institutionnelle de la FFVB qui ne s'improvise pas — elle se mérite par la qualité du travail au quotidien.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tout le parcours FFVB</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/parcours-ffvb-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Vue d'ensemble FFVB</Link>
            <Link href="/jeux-mediterraneens-2013-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">JM 2013</Link>
            <Link href="/tqce-u20-2016-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">TQCE U20 2016</Link>
            <Link href="/tqcm-u21-2017-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">TQCM U21 2017</Link>
            <Link href="/tqce-juniors-2018-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">TQCE Juniors 2018</Link>
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
