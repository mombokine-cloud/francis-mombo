import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";
const ffvbSource = "https://www.ffvb.org/index.php?mduuseid=Mw%3D%3D&dsgtypid=37&page=actu&actid=MjcwNQ%3D%3D";

export const metadata: Metadata = {
  title: "Jeux Méditerranéens 2013 : Francis MOMBO, kiné de l'équipe de France de volley-ball",
  description:
    "Francis MOMBO, kinésithérapeute officiel de l'équipe de France masculine de volley-ball aux Jeux Méditerranéens 2013 (FFVB). Retour sur cette expérience internationale qui forge l'expertise du praticien montpelliérain.",
  keywords: [
    "kiné équipe de France volley-ball",
    "kinésithérapeute FFVB",
    "Jeux Méditerranéens 2013 volley",
    "Francis MOMBO kiné Montpellier",
    "ostéopathe équipe nationale volley",
    "kinésithérapeute sport international",
    "kiné volley-ball haut niveau",
    "Francis MOMBO FFVB",
    "ostéopathe sportif Montpellier",
    "kinésithérapeute sport de haut niveau Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/jeux-mediterraneens-2013-kine-equipe-france-volley` },
  openGraph: {
    title: "Francis MOMBO, kiné de l'équipe de France aux Jeux Méditerranéens 2013",
    description: "Kinésithérapeute officiel de l'équipe de France masculine de volley-ball (FFVB) aux Jeux Méditerranéens 2013 — une étape clé du parcours international de Francis MOMBO.",
    url: `${siteUrl}/jeux-mediterraneens-2013-kine-equipe-france-volley`,
    type: "article",
  },
};

const faq = [
  {
    q: "Francis MOMBO a-t-il accompagné l'équipe de France de volley-ball ?",
    a: "Oui. Francis MOMBO figure officiellement dans le staff de l'équipe de France masculine de volley-ball aux Jeux Méditerranéens 2013 en tant que kinésithérapeute, aux côtés de l'entraîneur Marc Francastel. Source : Fédération Française de Volley-Ball (FFVB).",
  },
  {
    q: "Quelles compétitions internationales Francis MOMBO a-t-il couvertes ?",
    a: "Francis MOMBO a accompagné les équipes de la FFVB lors des Jeux Méditerranéens 2013, ainsi que des Championnats du Monde et d'Europe de volley-ball. Il a également été kinésithérapeute et ostéopathe officiel du MHSC VB pendant 9 saisons, club Champion de France Pro A 2022.",
  },
  {
    q: "En quoi l'expérience internationale enrichit-elle la pratique au cabinet ?",
    a: "Travailler avec l'équipe de France implique des contraintes extrêmes : matchs enchaînés sur plusieurs jours, voyages, pression de la compétition, diversité des profils physiques. Cette expérience affûte la rapidité diagnostique, la maîtrise des techniques de récupération et la capacité à intervenir efficacement sous pression.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jeux Méditerranéens 2013 : Francis MOMBO, kinésithérapeute de l'équipe de France de volley-ball",
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    author: {
      "@type": "Person",
      name: "Francis MOMBO",
      url: siteUrl,
      jobTitle: "Kinésithérapeute — Ostéopathe D.O.",
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: "Francis MOMBO — Cabinet d'ostéopathie & kinésithérapie",
      url: siteUrl,
    },
    url: `${siteUrl}/jeux-mediterraneens-2013-kine-equipe-france-volley`,
    citation: {
      "@type": "WebPage",
      name: "JEUX MED - VOLLEY MASCULIN — FFVB",
      url: ffvbSource,
      publisher: {
        "@type": "SportsOrganization",
        name: "Fédération Française de Volley-Ball (FFVB)",
        url: "https://www.ffvb.org",
      },
    },
    about: {
      "@type": "SportsEvent",
      name: "Jeux Méditerranéens 2013 — Volley-ball masculin",
      startDate: "2013-06-25",
      location: { "@type": "Place", name: "Mersin, Turquie" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
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

        {/* Hero */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Équipe de France</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>FFVB</span>
            <span className="text-xs text-gray-400">13 juillet 2026</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">5 min de lecture</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            Jeux Méditerranéens 2013 : Francis MOMBO, kinésithérapeute de l'équipe de France de volley-ball
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            En juin 2013, Francis MOMBO intègre le staff médical officiel de <strong>l'équipe de France masculine de volley-ball</strong> pour les Jeux Méditerranéens, aux côtés de l'entraîneur national Marc Francastel. Une mission internationale qui marque un moment charnière dans un parcours déjà riche au plus haut niveau du volley français.
          </p>
        </div>

        {/* Bloc source FFVB */}
        <div className="rounded-2xl p-6 mb-10 border border-gray-200" style={{ background: "#f9f9f9" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">Source officielle</p>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
                Staff officiel — Jeux Méditerranéens 2013, Volley-ball masculin
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Kinésithérapeute : <strong>Francis Mombo</strong> · Médecin : Francis Genson · Entraîneur : Marc Francastel
              </p>
              <a
                href={ffvbSource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs mt-2 font-semibold hover:underline"
                style={{ color: "#D4336E" }}
              >
                Voir la fiche FFVB
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Le contexte : les Jeux Méditerranéens 2013</h2>
            <p>Les Jeux Méditerranéens 2013 se déroulent à Mersin, en Turquie. L'équipe de France masculine de volley-ball y dispute une compétition relevée, face à des nations méditerranéennes historiquement fortes dans cette discipline — dont l'Égypte et la Turquie.</p>
            <p className="mt-3">Le 25 juin 2013, les Bleus affrontent l'Égypte dans un match épique : deux heures trente de jeu, cinq sets, une défaite arrachée 3-2 (26/24, 23/25, 25/23, 18/25, 13/15). La suite du programme incluait France-Turquie pour les qualifications en demi-finale. Un calendrier intensif qui illustre précisément les défis que doit gérer le kinésithérapeute de l'équipe nationale.</p>
          </section>

          <section>
            <h2 className="article-h2">Le rôle du kiné dans un staff national</h2>
            <p>Dans un staff de sélection nationale, le kinésithérapeute n'est pas un prestataire extérieur qu'on appelle en cas de blessure. Il est un pilier permanent du dispositif médical, présent avant, pendant et après chaque match :</p>
            <ul className="article-list">
              <li><strong>avant</strong> — préparation physique, activation musculaire, strapping préventif, gestion des douleurs chroniques ;</li>
              <li><strong>pendant</strong> — interventions rapides sur les blessures de match, conseils en temps réel ;</li>
              <li><strong>après</strong> — protocoles de récupération (drainage, étirements, cryothérapie), évaluation des joueurs pour le match suivant.</li>
            </ul>
            <p className="mt-3">Avec des matchs parfois séparés de 24 à 48 heures seulement, la récupération active devient aussi déterminante que la préparation tactique.</p>
          </section>

          <section>
            <h2 className="article-h2">Ce que l'international apporte que le club ne peut pas donner</h2>
            <p>Travailler avec l'équipe de France, c'est intervenir sur des profils physiques extrêmement variés — des joueurs issus de clubs différents, avec des antécédents médicaux distincts, des schémas de blessures propres à leur poste (libéro, passeur, central, pointu, réceptionneur-attaquant).</p>
            <p className="mt-3">Cette diversité oblige à une lecture diagnostique immédiate et précise, sans filet de sécurité. Il n'y a pas de dossier médical complet disponible, pas toujours de temps pour des explorations complémentaires. Le kinésithérapeute national doit évaluer vite et décider juste.</p>
            <p className="mt-3">C'est cette exigence qui forge une compétence rare — et qui, transposée au cabinet de Castelnau-le-Lez, bénéficie à chaque patient, sportif ou non.</p>
          </section>

          <section>
            <h2 className="article-h2">Un parcours construit au plus haut niveau</h2>
            <p>Les Jeux Méditerranéens 2013 s'inscrivent dans un parcours cohérent :</p>
            <ul className="article-list">
              <li>Kinésithérapeute de l'équipe de France aux <strong>Jeux Méditerranéens 2013</strong> (FFVB) ;</li>
              <li>Kinésithérapeute et ostéopathe de l'équipe nationale lors des <strong>Championnats du Monde et d'Europe</strong> (FFVB) ;</li>
              <li><strong>9 saisons</strong> comme kiné et ostéopathe officiel du <strong>MHSC VB</strong> — Champion de France Pro A 2022, Supercoupe 2022 et 2024 ;</li>
              <li>Praticien en cabinet à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers depuis plus de 20 ans.</li>
            </ul>
            <p className="mt-3">Chaque étape a enrichi la suivante. Les techniques apprises sur les terrains internationaux alimentent chaque séance au cabinet.</p>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.q}</p>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Liens internes */}
        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Articles et pages liés</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/9-saisons-mhsc-volley-osteopathe" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">9 saisons au MHSC VB</Link>
            <Link href="/osteopathie-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie du sport</Link>
            <Link href="/recuperation-sport-haut-niveau-sommeil-alimentation" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Récupération sportive</Link>
            <Link href="/kine-osteo-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Kiné & ostéo Montpellier</Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Kinésithérapeute & ostéopathe D.O.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Kiné équipe de France · FFVB · Jeux Méditerranéens 2013<br/>
            9 saisons MHSC VB · Champion de France 2022<br/>
            Cabinet Castelnau-le-Lez & Saint-Mathieu-de-Tréviers
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
