import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "9 saisons au MHSC VB : ce que le sport de haut niveau m'a appris sur le corps",
  description:
    "Francis MOMBO, kinésithérapeute et ostéopathe officiel du MHSC VB pendant 9 saisons, partage les leçons essentielles tirées de l'accompagnement de joueurs de volley-ball de haut niveau.",
  keywords: [
    "ostéopathe MHSC VB",
    "kiné sportif haut niveau Montpellier",
    "ostéopathe volley-ball Montpellier",
    "kinésithérapeute sport de haut niveau",
    "ostéopathe champion de France volley",
    "Francis MOMBO MHSC VB",
    "ostéopathie performance sportive",
    "kiné ostéo sport haut niveau Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/9-saisons-mhsc-volley-osteopathe` },
  openGraph: {
    title: "9 saisons au MHSC VB : les leçons du sport de haut niveau",
    description: "Ce que 9 saisons comme kiné et ostéopathe officiel du MHSC VB m'ont appris sur le corps humain et la performance.",
    url: `${siteUrl}/9-saisons-mhsc-volley-osteopathe`,
    type: "article",
  },
};

const faq = [
  {
    q: "Combien de saisons Francis MOMBO a-t-il accompagné le MHSC VB ?",
    a: "Francis MOMBO a été kinésithérapeute et ostéopathe officiel du Montpellier Castelnau Volley-Ball (MHSC VB) pendant 9 saisons, couvrant les plus belles années du club : Champion de France Pro A 2022, Supercoupe 2022 et 2024, et suivi des équipes nationales de la FFVB.",
  },
  {
    q: "Quelles blessures sont les plus fréquentes chez les volleyeurs de haut niveau ?",
    a: "Les entorses de cheville sont les plus fréquentes (réceptions après saut). Viennent ensuite les tendinites rotuliennes (\"jumper's knee\"), les blessures d'épaule (coiffe des rotateurs), les douleurs lombaires liées aux smashes répétés et les surmenages musculaires du mollet et du genou.",
  },
  {
    q: "En quoi l'expérience du haut niveau bénéficie-t-elle aux patients non sportifs ?",
    a: "Le haut niveau enseigne la précision du geste, la rapidité de diagnostic et la capacité à traiter sous contrainte de temps. Ces compétences — lire le corps vite, prioriser, adapter — se transfèrent directement au cabinet pour tout type de patient, sportif ou non.",
  },
  {
    q: "Peut-on bénéficier d'une prise en charge similaire à celle des sportifs professionnels ?",
    a: "Oui. Francis MOMBO applique les mêmes protocoles d'évaluation et de traitement qu'en club professionnel à tous ses patients. La rigueur et les techniques utilisées sont identiques, adaptées au niveau et aux objectifs de chacun.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "9 saisons au MHSC VB : ce que le sport de haut niveau m'a appris sur le corps humain",
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
    url: `${siteUrl}/9-saisons-mhsc-volley-osteopathe`,
    about: {
      "@type": "SportsOrganization",
      name: "Montpellier Castelnau Volley-Ball (MHSC VB)",
      url: "https://www.montpellier-volley.com",
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Sport de haut niveau</span>
            <span className="text-xs text-gray-400">13 juillet 2026</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">8 min de lecture</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            9 saisons au MHSC VB : ce que le sport de haut niveau m'a appris sur le corps humain
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Champion de France 2022, Supercoupe 2022 et 2024, Championnats du Monde et d'Europe avec la FFVB, Jeux Méditerranéens 2013. Pendant neuf saisons, j'ai accompagné les meilleurs volleyeurs professionnels de France. Voici les leçons que ces années m'ont transmises — et que j'apporte aujourd'hui à chaque consultation au cabinet.
          </p>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        {/* Bloc crédibilité */}
        <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "#fdeef3", borderLeftColor: "#D4336E" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8B2035" }}>Parcours MHSC VB</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-black" style={{ color: "#D4336E", fontFamily: "Figtree, sans-serif" }}>9</p>
              <p className="text-xs text-gray-500 mt-1">saisons en club professionnel</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black" style={{ color: "#D4336E", fontFamily: "Figtree, sans-serif" }}>3</p>
              <p className="text-xs text-gray-500 mt-1">titres majeurs (Champion FR, Supercoupe ×2)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black" style={{ color: "#D4336E", fontFamily: "Figtree, sans-serif" }}>+</p>
              <p className="text-xs text-gray-500 mt-1">Équipes nationales FFVB & JM 2013</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Voir le profil officiel :{" "}
            <a href="https://www.montpellier-volley.com/staff/francis-mombo/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600">
              montpellier-volley.com
            </a>
          </p>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Le corps sous pression maximale : une école unique</h2>
            <p>Un professionnel de volley-ball saute en moyenne 300 fois par match, à une hauteur de 50 à 80 cm, et peut disputer plus de 80 rencontres officielles par saison. Chaque genou absorbe un choc équivalent à plusieurs fois le poids du corps à chaque réception.</p>
            <p className="mt-3">Travailler dans ce contexte m'a contraint à développer une précision diagnostique que peu d'environnements permettent d'acquérir aussi rapidement. Quand un joueur doit reprendre l'entraînement le lendemain matin, le traitement ne peut pas attendre. On apprend à lire le corps vite, juste, et à doser l'intervention au millimètre.</p>
          </section>

          <section>
            <h2 className="article-h2">Leçon 1 — Le corps s'adapte toujours, jusqu'à ce qu'il ne puisse plus</h2>
            <p>Les athlètes de haut niveau sont des experts de la compensation. Ils continuent à performer malgré une épaule douloureuse, une cheville instable, une lombalgie chronique. Le corps crée des stratégies motrices alternatives pour maintenir la performance.</p>
            <p className="mt-3">Le problème : ces compensations engendrent de nouvelles tensions ailleurs. L'entorse de cheville négligée devient tendinite rotulienne ; la raideur lombaire se transforme en conflit d'épaule. Au cabinet, cette logique s'applique à tous les patients. La douleur que vous consultez n'est presque jamais là où se trouve la cause réelle.</p>
            <ul className="article-list mt-3">
              <li>Toujours chercher le schéma global, pas seulement le symptôme local ;</li>
              <li>Tester la mobilité de l'ensemble de la chaîne, pas seulement la zone douloureuse ;</li>
              <li>Traiter la cause avant les conséquences pour éviter la récidive.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Leçon 2 — La récupération est un entraînement à part entière</h2>
            <p>En club professionnel, on intègre rapidement que ce n'est pas la séance d'entraînement qui fait progresser — c'est le temps entre les séances. La qualité de récupération détermine la qualité de la séance suivante.</p>
            <p className="mt-3">Cette conviction change radicalement l'approche thérapeutique. Avec mes patients — sportifs ou non —, j'insiste autant sur ce qui se passe <em>après</em> la séance que pendant. Sommeil, hydratation, gestion du stress, mobilité quotidienne : ces éléments ne sont pas des bonus. Ce sont des variables thérapeutiques à part entière.</p>
          </section>

          <section>
            <h2 className="article-h2">Leçon 3 — La prévention rapporte plus que le traitement</h2>
            <p>Dans un club comme le MHSC VB, chaque semaine sans blessure est une semaine gagnée. J'ai appris à construire des protocoles de prévention individualisés — bilan postural, testing musculaire, repérage des zones de fragilité — bien avant l'apparition du premier symptôme.</p>
            <p className="mt-3">Résultat : des joueurs disponibles sur la durée, des carrières prolongées et une cohésion d'équipe préservée. Cette philosophie préventive est aujourd'hui au cœur de ma pratique en cabinet. Venir consulter quand tout va bien est souvent le choix le plus rentable pour la santé sur le long terme.</p>
          </section>

          <section>
            <h2 className="article-h2">Leçon 4 — Le mental influence le physique, toujours</h2>
            <p>En nine saisons, j'ai vu des joueurs physiquement aptes rechuter parce qu'ils n'avaient pas confiance en leur genou opéré. Et des joueurs blessés tenir un match entier par pure force mentale. Cette réalité m'a conduit vers l'hypnothérapie — pour accompagner la dimension psychologique de la douleur et du rétablissement.</p>
            <p className="mt-3">La kinésithérapie et l'ostéopathie traitent le corps. L'hypnose thérapeutique travaille sur les représentations, la peur de la douleur, la récupération du sentiment de compétence corporelle. Au cabinet, les trois approches forment un continuum de soins complet.</p>
          </section>

          <section>
            <h2 className="article-h2">Leçon 5 — Chaque corps est unique, même entre professionnels</h2>
            <p>À niveau équivalent, deux joueurs avec la même blessure peuvent nécessiter des approches radicalement différentes. L'un répond mieux aux techniques structurelles, l'autre aux techniques myofasciales ou viscérales. Les antécédents, la morphologie, le niveau de stress — tout compte.</p>
            <p className="mt-3">Cette humilité face à la singularité de chaque patient est sans doute la leçon la plus précieuse du haut niveau. Elle m'a appris à ne jamais appliquer de protocole unique, mais toujours à adapter, tester, affiner.</p>
          </section>

          <section>
            <h2 className="article-h2">Ce que vous gagnez à consulter un praticien formé au haut niveau</h2>
            <p>Vous n'avez pas besoin d'être athlète professionnel pour bénéficier de ces apprentissages. Ce que neuf saisons au MHSC VB m'ont donné, je l'apporte à chaque consultation :</p>
            <ul className="article-list">
              <li>un diagnostic rapide et précis, entraîné sous pression ;</li>
              <li>une lecture globale du corps, pas seulement de la zone douloureuse ;</li>
              <li>des techniques manuelles affûtées sur des corps soumis à des contraintes extrêmes ;</li>
              <li>une approche préventive structurée pour durer, pas seulement guérir ;</li>
              <li>la combinaison ostéopathie + kinésithérapie + hypnose pour une prise en charge complète.</li>
            </ul>
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
            <Link href="/osteopathie-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie du sport</Link>
            <Link href="/kine-osteo-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Kiné & ostéo Montpellier</Link>
            <Link href="/recuperation-sportive-osteopathie" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Récupération sportive</Link>
            <Link href="/hypnose-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Hypnose & sport</Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Kinésithérapeute & ostéopathe D.O.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">9 saisons au MHSC VB · Champion de France 2022 · Équipes nationales FFVB<br/>Cabinet Castelnau-le-Lez & Saint-Mathieu-de-Tréviers</p>
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
