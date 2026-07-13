import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Récupération sportive : sommeil, alimentation, hydratation — Francis MOMBO, kiné Montpellier",
  description:
    "Francis MOMBO, kinésithérapeute officiel du MHSC VB, détaille les trois piliers incontournables de la récupération sportive de haut niveau : sommeil, alimentation et hydratation.",
  keywords: [
    "récupération sportive haut niveau",
    "sommeil récupération sportive",
    "alimentation sportif récupération",
    "hydratation sport performance",
    "kiné récupération Montpellier",
    "ostéopathe récupération sport Montpellier",
    "récupération volley-ball haut niveau",
    "kinésithérapeute sport Montpellier",
    "Francis MOMBO kiné Montpellier",
    "récupération entre matchs sport",
  ],
  alternates: { canonical: `${siteUrl}/recuperation-sport-haut-niveau-sommeil-alimentation` },
  openGraph: {
    title: "Récupération sportive : les 3 piliers selon Francis MOMBO, kiné MHSC VB",
    description: "Sommeil, alimentation, hydratation : les clés de la récupération en sport de haut niveau par le kiné officiel du MHSC VB.",
    url: `${siteUrl}/recuperation-sport-haut-niveau-sommeil-alimentation`,
    type: "article",
  },
};

const faq = [
  {
    q: "Combien d'heures de sommeil faut-il pour bien récupérer après un match ?",
    a: "Les études sur les athlètes de haut niveau recommandent entre 8 et 10 heures de sommeil par nuit en période de compétition intense. Le sommeil profond (phases 3 et 4) est le moment où l'organisme sécrète le plus d'hormone de croissance, essentielle à la réparation musculaire. Une sieste de 20 minutes en début d'après-midi peut aussi compléter la récupération entre deux matchs rapprochés.",
  },
  {
    q: "Que faut-il manger après un effort intense pour récupérer ?",
    a: "Dans les 30 à 45 minutes suivant l'effort (fenêtre métabolique), l'organisme assimile idéalement glucides et protéines. Concrètement : une source de protéines de qualité (poisson, poulet, légumineuses) combinée à des glucides à index glycémique modéré (riz, pâtes, patate douce) et des légumes riches en antioxydants. À éviter : l'alcool et les graisses saturées qui ralentissent la resynthèse du glycogène.",
  },
  {
    q: "Quelle quantité boire après un match ou un entraînement ?",
    a: "Une règle simple : se peser avant et après l'effort. Chaque kilogramme perdu correspond à environ 1 litre de sueur. L'objectif est de compenser 150 % de ces pertes dans les 4 heures suivant l'effort, avec une boisson légèrement salée ou enrichie en électrolytes pour faciliter la rétention hydrique. L'eau plate seule peut paradoxalement accélérer l'élimination urinaire.",
  },
  {
    q: "L'ostéopathie aide-t-elle à récupérer plus vite ?",
    a: "Oui. L'ostéopathie améliore la récupération en levant les tensions articulaires et musculaires, en facilitant la circulation lymphatique et en régulant le système nerveux autonome — ce qui favorise le passage en mode parasympathique (repos et réparation). En club professionnel, les séances préventives post-match font partie intégrante du protocole de récupération.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Récupération sportive de haut niveau : sommeil, alimentation, hydratation",
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
    url: `${siteUrl}/recuperation-sport-haut-niveau-sommeil-alimentation`,
    mentions: {
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Récupération sportive</span>
            <span className="text-xs text-gray-400">13 juillet 2026</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">6 min de lecture</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-5" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            Récupération sportive de haut niveau : les trois piliers que tout athlète doit maîtriser
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Cité dans <em>La Nouvelle République</em> en mai 2025 lors des demi-finales de Ligue A entre Tours et Montpellier, Francis MOMBO résumait l'essentiel de la récupération en trois mots : <strong>sommeil, alimentation, hydratation</strong>. Derrière cette apparente simplicité se cache une science précise, que neuf saisons au MHSC VB lui ont permis d'affiner match après match.
          </p>
        </div>

        {/* Citation presse */}
        <blockquote className="mb-10 rounded-2xl p-6 border-l-4" style={{ background: "#fdeef3", borderLeftColor: "#D4336E" }}>
          <p className="text-gray-700 italic leading-relaxed">
            « Le sommeil, l'alimentation, l'hydratation — ce sont les clés de la récupération. »
          </p>
          <p className="text-xs text-gray-400 mt-3">
            — Francis MOMBO, kinésithérapeute du MHSC VB · <span className="italic">La Nouvelle République</span>, 3 mai 2025
          </p>
        </blockquote>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Pourquoi la récupération est la variable la plus sous-estimée</h2>
            <p>Dans le sport de haut niveau, les marges de progression physique s'amenuisent à mesure que le niveau monte. Ce qui distingue les équipes au sommet, ce n'est pas seulement l'entraînement — c'est la capacité à enchainer les efforts sans s'effondrer.</p>
            <p className="mt-3">En demi-finale de Ligue A de volley-ball, Tours et Montpellier ont parfois disputé trois matchs en cinq jours. Dans ce contexte, la récupération entre les rencontres devient aussi stratégique que la tactique de jeu. Un joueur qui dort mal et mange à la va-vite ne sera pas le même athlète sur le terrain le surlendemain.</p>
          </section>

          <section>
            <h2 className="article-h2">Pilier 1 — Le sommeil : la réparation s'opère la nuit</h2>
            <p>Le sommeil est la récupération la plus puissante et la moins chère qui soit. C'est durant les phases de sommeil profond que l'organisme :</p>
            <ul className="article-list">
              <li>libère l'hormone de croissance (GH), indispensable à la réparation musculaire ;</li>
              <li>consolide les apprentissages moteurs de la journée ;</li>
              <li>régule les marqueurs inflammatoires (cytokines pro-inflammatoires) ;</li>
              <li>recharge les réserves du système nerveux central.</li>
            </ul>
            <p className="mt-3">En club professionnel, les matchs se terminent souvent tard le soir. La lumière des écrans, l'adrénaline post-compétition et les voyages perturbent l'endormissement. Les protocoles mis en place au MHSC VB incluaient : extinction des écrans 30 minutes avant de dormir, obscurcissement total de la chambre, et sieste de récupération le lendemain après-midi.</p>
          </section>

          <section>
            <h2 className="article-h2">Pilier 2 — L'alimentation : reconstruire le muscle dans la bonne fenêtre</h2>
            <p>Après un effort intense, le muscle est en état catabolique — il se dégrade. L'alimentation post-effort doit inverser ce processus le plus vite possible. La clé est la <strong>fenêtre métabolique</strong> : les 30 à 45 minutes suivant la fin du match.</p>
            <ul className="article-list">
              <li><strong>Protéines</strong> (20 à 30 g) pour stopper le catabolisme et initier la synthèse protéique ;</li>
              <li><strong>Glucides</strong> pour resynthétiser le glycogène musculaire vidé par l'effort ;</li>
              <li><strong>Antioxydants</strong> (fruits, légumes colorés) pour limiter le stress oxydatif ;</li>
              <li><strong>Oméga-3</strong> (poisson gras, noix) pour leur effet anti-inflammatoire naturel.</li>
            </ul>
            <p className="mt-3">À l'inverse, l'alcool — même en faible quantité — retarde significativement la récupération en perturbant la synthèse protéique et la qualité du sommeil. Un verre après la victoire a un coût physiologique réel le lendemain matin.</p>
          </section>

          <section>
            <h2 className="article-h2">Pilier 3 — L'hydratation : plus qu'une question de soif</h2>
            <p>Un athlète de haut niveau peut perdre entre 1,5 et 3 litres de sueur par heure d'effort intense. Une déshydratation de seulement 2 % du poids corporel réduit les performances cognitives et physiques de façon mesurable.</p>
            <p className="mt-3">Mais la réhydratation post-effort ne s'improvise pas :</p>
            <ul className="article-list">
              <li>se peser avant et après l'effort pour quantifier les pertes exactes ;</li>
              <li>compenser 150 % des pertes dans les 4 heures suivant l'effort ;</li>
              <li>inclure des électrolytes (sodium, potassium, magnésium) pour favoriser la rétention hydrique ;</li>
              <li>éviter l'eau pure en excès, qui peut diluer le sodium sanguin (hyponatrémie).</li>
            </ul>
            <p className="mt-3">Au MHSC VB, la couleur des urines était un indicateur de suivi quotidien : jaune pâle, objectif atteint ; jaune foncé, réhydratation insuffisante.</p>
          </section>

          <section>
            <h2 className="article-h2">Le rôle de l'ostéopathie et de la kinésithérapie dans la récupération</h2>
            <p>Ces trois piliers constituent le socle. Mais la récupération active — thérapeutique — accélère encore le processus :</p>
            <ul className="article-list">
              <li><strong>Ostéopathie</strong> — levée des tensions articulaires et fasciales, régulation du système nerveux autonome, amélioration de la circulation lymphatique ;</li>
              <li><strong>Kinésithérapie</strong> — techniques de drainage, massages de récupération, étirements passifs, électrothérapie anti-inflammatoire ;</li>
              <li><strong>Cryothérapie localisée</strong> — application de froid sur les zones inflammatoires dans les premières heures post-match ;</li>
              <li><strong>Hypnose</strong> — gestion du stress et du système nerveux pour faciliter le passage en mode parasympathique (repos et réparation).</li>
            </ul>
            <p className="mt-3">En demi-finale comme en consultation de cabinet, les principes sont identiques. L'entraîneur amateur qui joue le week-end, le senior qui reprend le sport ou le patient post-opératoire bénéficient des mêmes leviers de récupération que les professionnels.</p>
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
            <Link href="/kine-osteo-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Kiné & ostéo Montpellier</Link>
            <Link href="/recuperation-sportive-osteopathie" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Récupération & ostéopathie</Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Kinésithérapeute & ostéopathe D.O.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Kiné officiel du MHSC VB · 9 saisons de sport de haut niveau<br/>
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
