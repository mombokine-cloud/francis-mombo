import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Francis MOMBO, kiné de l'équipe de France de volley-ball — 5 missions FFVB (2013–2018)",
  description:
    "Francis MOMBO, kinésithérapeute officiel de l'équipe de France de volley-ball lors de 5 compétitions internationales (2013–2018) : Jeux Méditerranéens, TQCE U20, TQCM U21, Euro U20. Sources FFVB officielles.",
  keywords: [
    "kiné équipe de France volley-ball FFVB",
    "kinésithérapeute sélection nationale volley",
    "Francis MOMBO FFVB Montpellier",
    "ostéopathe équipe de France volley",
    "kinésithérapeute sport international Montpellier",
    "kiné volley haut niveau Montpellier",
    "Francis MOMBO kiné ostéopathe Montpellier",
    "parcours international kiné volley",
  ],
  alternates: { canonical: `${siteUrl}/parcours-ffvb-equipe-france-volley` },
  openGraph: {
    title: "Francis MOMBO — 5 missions officielles comme kiné de l'équipe de France (FFVB)",
    description: "De 2013 à 2018, Francis MOMBO accompagne les équipes nationales de volley-ball françaises sur 5 compétitions internationales. Toutes sources FFVB vérifiables.",
    url: `${siteUrl}/parcours-ffvb-equipe-france-volley`,
    type: "article",
  },
};

const missions = [
  {
    year: "2013",
    title: "Jeux Méditerranéens",
    subtitle: "Équipe de France senior · Mersin, Turquie",
    detail: "France vs Égypte (2-3) · Entraîneur : Marc Francastel",
    href: "/jeux-mediterraneens-2013-kine-equipe-france-volley",
    ffvb: "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=MjcwNQ%3D%3D",
  },
  {
    year: "2016",
    title: "TQCE U20",
    subtitle: "Équipe de France U20 · Qualification Europe",
    detail: "Victoires vs Slovaquie (3-0) et Norvège (3-0) · Coach : Jocelyn Trillon",
    href: "/tqce-u20-2016-kine-equipe-france-volley",
    ffvb: "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=MzY0Nw%3D%3D",
  },
  {
    year: "2017",
    title: "TQCM U21",
    subtitle: "Équipe de France U21 · Qualification Monde",
    detail: "Victoire finale vs Bulgarie (3-2) · Coach : Jocelyn Trillon",
    href: "/tqcm-u21-2017-kine-equipe-france-volley",
    ffvb: "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=NDI5MQ%3D%3D",
  },
  {
    year: "2018",
    title: "TQCE Juniors U20",
    subtitle: "Équipe de France U20 · Monténégro",
    detail: "Qualification pour l'Euro U20 · Coach : Jocelyn Trillon",
    href: "/tqce-juniors-2018-kine-equipe-france-volley",
    ffvb: "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=NDc5OA%3D%3D",
  },
  {
    year: "2018",
    title: "Championnat d'Europe U20",
    subtitle: "Équipe de France U20 · Belgique & Pays-Bas",
    detail: "Objectif médaille + qualification Mondiale · Coach : Jocelyn Trillon",
    href: "/euro-u20-2018-kine-equipe-france-volley",
    ffvb: "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=NDk1MQ%3D%3D",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francis MOMBO",
  url: siteUrl,
  jobTitle: "Kinésithérapeute — Ostéopathe D.O. — Hypnothérapeute",
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Cabinet Francis MOMBO",
    url: siteUrl,
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Kinésithérapeute officiel — Équipe de France de Volley-Ball",
      occupationLocation: {
        "@type": "SportsOrganization",
        name: "Fédération Française de Volley-Ball (FFVB)",
        url: "https://www.ffvb.org",
      },
      description: "5 missions officielles comme kinésithérapeute des équipes de France de volley-ball (FFVB) entre 2013 et 2018 : Jeux Méditerranéens 2013, TQCE U20 2016, TQCM U21 2017, TQCE Juniors 2018, Euro U20 2018.",
    },
    {
      "@type": "Occupation",
      name: "Kinésithérapeute & Ostéopathe officiel — MHSC VB",
      occupationLocation: {
        "@type": "SportsOrganization",
        name: "Montpellier Castelnau Volley-Ball (MHSC VB)",
        url: "https://www.montpellier-volley.com",
      },
      description: "9 saisons comme kiné et ostéopathe officiel du MHSC VB. Champion de France Pro A 2022, Supercoupe 2022 et 2024.",
    },
  ],
  sameAs: [
    "https://www.montpellier-volley.com/staff/francis-mombo/",
    "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo",
  ],
};

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
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Équipe de France</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>FFVB · 2013–2018</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            Francis MOMBO, kinésithérapeute de l'équipe de France de volley-ball — 5 missions FFVB
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            De 2013 à 2018, Francis MOMBO a été sélectionné à <strong>5 reprises</strong> comme kinésithérapeute officiel des équipes de France de volley-ball (FFVB) : des Jeux Méditerranéens en équipe senior jusqu'au Championnat d'Europe U20. Chaque mission est documentée et vérifiable sur le site officiel de la Fédération.
          </p>
        </div>

        {/* Compteur */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { n: "5", label: "missions FFVB officielles" },
            { n: "6", label: "années de sélections nationales" },
            { n: "3", label: "catégories (senior, U21, U20)" },
          ].map((item) => (
            <div key={item.n} className="rounded-2xl p-4 text-center border border-gray-100">
              <p className="text-3xl font-black" style={{ color: "#D4336E", fontFamily: "Figtree, sans-serif" }}>{item.n}</p>
              <p className="text-xs text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        {/* Timeline des missions */}
        <div className="mb-12">
          <h2 className="article-h2">Les 5 missions — sources FFVB vérifiables</h2>
          <div className="space-y-4 mt-6">
            {missions.map((m, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-5 hover:border-pink-200 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black" style={{ color: "#D4336E" }}>{m.year}</span>
                      <span className="text-xs text-gray-300">·</span>
                      <span className="text-xs font-bold text-gray-900">{m.title}</span>
                    </div>
                    <p className="text-sm text-gray-600">{m.subtitle}</p>
                    <p className="text-xs text-gray-400 mt-1">{m.detail}</p>
                    <div className="flex gap-3 mt-3">
                      <Link href={m.href} className="text-xs font-semibold hover:underline" style={{ color: "#D4336E" }}>
                        Lire l'article →
                      </Link>
                      <a href={m.ffvb} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-gray-600 hover:underline">
                        Source FFVB ↗
                      </a>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
                    {i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Qu'est-ce que cela représente concrètement ?</h2>
            <p>Être sélectionné dans le staff médical de l'équipe de France, c'est passer par un processus de validation par la DTN (Direction Technique Nationale) de la FFVB. Ce n'est pas une candidature spontanée — c'est une désignation basée sur la réputation, les résultats et la confiance du sélectionneur.</p>
            <p className="mt-3">Francis MOMBO a été reconduit <strong>cinq fois</strong> par le même staff, autour du coach Jocelyn Trillon. Cette fidélité sur six ans est la preuve la plus tangible de la qualité de son travail médical au plus haut niveau national.</p>
          </section>
          <section>
            <h2 className="article-h2">En parallèle : 9 saisons au MHSC VB</h2>
            <p>Ces missions FFVB s'inscrivent en parallèle de son poste de kinésithérapeute et ostéopathe officiel au MHSC VB — neuf saisons en club professionnel de Ligue A, avec à la clé le titre de <strong>Champion de France Pro A 2022</strong> et deux Supercoupes (2022, 2024).</p>
            <p className="mt-3">Club + sélection nationale + cabinet libéral : une triple expérience que peu de praticiens dans l'Hérault peuvent revendiquer.</p>
            <div className="mt-4">
              <Link href="/9-saisons-mhsc-volley-osteopathe" className="inline-flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: "#D4336E" }}>
                Lire l'article sur les 9 saisons MHSC VB →
              </Link>
            </div>
          </section>
          <section>
            <h2 className="article-h2">Ce que vous gagnez en consultant ce praticien</h2>
            <p>Vous n'avez pas besoin de jouer en Pro A pour bénéficier de ce niveau d'expertise. Chaque consultation au cabinet de Castelnau-le-Lez ou de Saint-Mathieu-de-Tréviers s'appuie sur :</p>
            <ul className="article-list">
              <li>un diagnostic rapide forgé sous pression internationale ;</li>
              <li>des protocoles de récupération testés sur des athlètes d'élite ;</li>
              <li>une lecture globale du corps (kinésithérapie + ostéopathie + hypnose) ;</li>
              <li>une connaissance fine des pathologies du sportif, de l'adolescent au senior.</li>
            </ul>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Pages liées</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/osteopathie-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie du sport</Link>
            <Link href="/kine-osteo-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Kiné & ostéo Montpellier</Link>
            <Link href="/recuperation-sport-haut-niveau-sommeil-alimentation" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Récupération sportive</Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Kinésithérapeute & ostéopathe D.O.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            5 missions FFVB · 9 saisons MHSC VB · Champion de France 2022<br/>
            120 avis Google 5/5 · Cabinet Castelnau-le-Lez & Saint-Mathieu-de-Tréviers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Prendre rendez-vous
            </a>
            <a href="tel:0650149192" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-sm border-2" style={{ borderColor: "#D4336E", color: "#D4336E" }}>
              06 50 14 91 92
            </a>
          </div>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
