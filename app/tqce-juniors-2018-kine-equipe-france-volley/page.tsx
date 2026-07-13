import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";
const ffvbSource = "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=NDc5OA%3D%3D";

export const metadata: Metadata = {
  title: "TQCE Juniors 2018 : Francis MOMBO, kiné de l'équipe de France U20 (Monténégro)",
  description:
    "Francis MOMBO, kinésithérapeute officiel de l'équipe de France U20 masculine lors du Tournoi de Qualification Championnat d'Europe Juniors 2018 au Monténégro (FFVB).",
  keywords: [
    "kiné équipe de France juniors volley",
    "kinésithérapeute FFVB juniors 2018",
    "TQCE juniors 2018 Monténégro",
    "Francis MOMBO kiné Montpellier",
    "ostéopathe sport haut niveau Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/tqce-juniors-2018-kine-equipe-france-volley` },
  openGraph: {
    title: "TQCE Juniors 2018 : Francis MOMBO, kiné de l'équipe de France U20",
    description: "Kinésithérapeute officiel des Bleuets U20 au TQCE Juniors 2018 au Monténégro — Francis MOMBO FFVB.",
    url: `${siteUrl}/tqce-juniors-2018-kine-equipe-france-volley`,
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TQCE Juniors 2018 : Francis MOMBO, kinésithérapeute de l'équipe de France U20 au Monténégro",
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    author: { "@type": "Person", name: "Francis MOMBO", url: siteUrl, jobTitle: "Kinésithérapeute — Ostéopathe D.O." },
    publisher: { "@type": "MedicalBusiness", name: "Francis MOMBO — Cabinet d'ostéopathie & kinésithérapie", url: siteUrl },
    url: `${siteUrl}/tqce-juniors-2018-kine-equipe-france-volley`,
    citation: {
      "@type": "WebPage",
      name: "TQCE Juniors: interviews croisées Trillon/Salvan — FFVB",
      url: ffvbSource,
      publisher: { "@type": "SportsOrganization", name: "Fédération Française de Volley-Ball (FFVB)", url: "https://www.ffvb.org" },
    },
    about: {
      "@type": "SportsEvent",
      name: "Tournoi de Qualification Championnat d'Europe Juniors U20 — 2018 (Monténégro)",
      startDate: "2018-04-26",
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>FFVB · Monténégro</span>
            <span className="text-xs text-gray-400">Avril 2018</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            TQCE Juniors 2018 : Francis MOMBO, kiné des Bleuets U20 au Monténégro
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            En avril 2018, Francis MOMBO accompagne <strong>l'équipe de France U20</strong> au Tournoi de Qualification Championnat d'Europe Juniors au Monténégro — sa quatrième mission officielle avec la FFVB. Le groupe, encadré par Jocelyn Trillon, visait la qualification pour l'Euro U20 qui se jouerait quelques mois plus tard en Belgique et aux Pays-Bas.
          </p>
        </div>

        <div className="rounded-2xl p-6 mb-10 border border-gray-200" style={{ background: "#f9f9f9" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">Source officielle FFVB</p>
          <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>Staff — TQCE Juniors 2018 · Monténégro</p>
          <p className="text-gray-500 text-sm mt-1">Entraîneur : Jocelyn Trillon · Adjoints : David Vaseux, Benoît Ognier · Médecin : Aurélie Ribaut · <strong>Kinésithérapeute : Francis Mombo</strong></p>
          <a href={ffvbSource} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs mt-2 font-semibold hover:underline" style={{ color: "#D4336E" }}>
            Voir la fiche FFVB
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Le même staff, une continuité de confiance</h2>
            <p>Francis MOMBO retrouve en 2018 le même groupe de travail qu'en 2016 et 2017 : Jocelyn Trillon à la tête de l'équipe, David Vaseux en adjoint, Aurélie Ribaut au poste médical. Cette stabilité du staff n'est pas anodine — elle reflète une confiance réciproque construite sur plusieurs années de résultats et de missions réussies ensemble.</p>
            <p className="mt-3">En kinésithérapie de haut niveau, cette continuité a une valeur clinique réelle : le praticien connaît les antécédents de chaque joueur, leurs zones de fragilité, leur tolérance à l'effort. L'efficacité de l'intervention n'en est que meilleure.</p>
          </section>
          <section>
            <h2 className="article-h2">Un groupe en devenir : les futurs Champions olympiques</h2>
            <p>Le groupe U20 de 2018 comptait des joueurs comme Lucas Soldner, Thomas Gill, François Rebeyrol, Théo Faure, Pierre Toledo — une génération qui portait déjà les germes du futur succès du volley français. Plusieurs d'entre eux participeront à la grande épopée des Bleus vers le titre olympique.</p>
            <p className="mt-3">Accompagner ces joueurs à 18-20 ans — au moment où le corps construit sa capacité athlétique définitive — est une responsabilité médicale majeure. Les habitudes de récupération, la gestion des douleurs, la prévention des blessures chroniques : tout se joue en grande partie à cet âge.</p>
          </section>
          <section>
            <h2 className="article-h2">La double mission : qualification et préparation à l'Euro</h2>
            <p>Ce TQCE de Monténégro n'est pas une fin en soi — c'est une étape préparatoire à l'Euro U20 qui suivra en juillet 2018 en Belgique et aux Pays-Bas. Francis MOMBO sera présent pour les deux échéances, assurant la continuité du suivi médical sur toute la saison internationale.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tout le parcours FFVB</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/parcours-ffvb-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Vue d'ensemble FFVB</Link>
            <Link href="/jeux-mediterraneens-2013-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">JM 2013</Link>
            <Link href="/tqce-u20-2016-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">TQCE U20 2016</Link>
            <Link href="/tqcm-u21-2017-kine-equipe-france-volley" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">TQCM U21 2017</Link>
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
