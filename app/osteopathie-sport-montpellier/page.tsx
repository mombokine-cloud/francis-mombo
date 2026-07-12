import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathie du sport à Montpellier | Prévention, récupération, compétition",
  description:
    "Ostéopathe du sport à Montpellier et Castelnau-le-Lez : prévention des blessures, récupération, préparation compétition et suivi saison sportive. Expérience MHSC VB et FFVB.",
  keywords: [
    "ostéopathe sport Montpellier",
    "ostéopathe sportif de haut niveau",
    "ostéopathie sportive Montpellier",
    "kinésithérapeute sportif haut niveau",
    "ostéopathe sportif Montpellier",
    "prévention blessures sportives",
    "récupération sportive ostéopathie",
    "ostéopathe sportif Castelnau-le-Lez",
    "suivi saison sportive ostéopathe",
    "préparation compétition ostéopathie",
    "kinésithérapeute sport Montpellier",
    "kiné sportif Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/osteopathie-sport-montpellier` },
  openGraph: {
    title: "Ostéopathie du sport à Montpellier | Francis MOMBO",
    description: "Ostéopathe du sport à Montpellier : prévention blessures, récupération, préparation compétition, suivi saison. Expérience MHSC VB et FFVB.",
    url: `${siteUrl}/osteopathie-sport-montpellier`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-sport-bw.jpg`, width: 1200, height: 630, alt: "Francis MOMBO ostéopathe du sport Montpellier" }],
  },
};

const faqItems = [
  { q: "L'ostéopathie du sport remplace-t-elle le kinésithérapeute ou le médecin du sport ?", a: "Non, elle s'inscrit en complément du suivi médical ou paramédical. Francis MOMBO cumule les deux expertises — kinésithérapeute et ostéopathe D.O. — ce qui lui permet d'assurer une prise en charge globale." },
  { q: "Peut-on consulter même sans douleur ?", a: "Oui. La prévention est l'un des motifs les plus utiles chez le sportif. Un bilan en début ou en cours de saison permet d'identifier les zones de fragilité avant qu'elles ne deviennent problématiques." },
  { q: "Combien de séances faut-il ?", a: "Cela dépend du sport, des antécédents et des objectifs. Pour un sportif régulier, 2 à 3 séances par an en prévention suffisent souvent. En période intensive, le rythme peut être adapté." },
  { q: "Faut-il arrêter le sport après une séance ?", a: "Pas forcément. Pour une séance de prévention ou de récupération légère, la reprise peut être immédiate. En cas de traitement d'une zone douloureuse, un repos relatif de 24h peut être recommandé." },
  { q: "À quelle fréquence consulter en cours de saison ?", a: "Pour la plupart des sportifs amateurs, une séance tous les 2 à 3 mois suffit. Chez les sportifs de compétition, une séance mensuelle peut être pertinente selon le volume d'entraînement." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francis MOMBO",
    jobTitle: "Kinésithérapeute — Ostéopathe D.O.",
    url: siteUrl,
    sameAs: [
      "https://www.montpellier-volley.com/staff/francis-mombo/",
      "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Kinésithérapeute & Ostéopathe officiel",
      occupationLocation: {
        "@type": "SportsOrganization",
        name: "Montpellier Castelnau Volley-Ball (MHSC VB)",
        url: "https://www.montpellier-volley.com",
      },
      description: "Kinésithérapeute et ostéopathe officiel du MHSC VB pendant 9 saisons. Champion de France Pro A 2022, Supercoupe 2022 et 2024. Suivi des équipes nationales FFVB (Championnats du Monde, d'Europe). Jeux Méditerranéens 2013.",
    },
    alumniOf: {
      "@type": "SportsOrganization",
      name: "Montpellier Castelnau Volley-Ball (MHSC VB)",
      url: "https://www.montpellier-volley.com",
    },
  },
];

export default function OsteopathieSport() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Retour au site
          </Link>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>Prendre rendez-vous</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Sport</span>
            <span className="text-xs text-gray-400">Ostéopathie du sport · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>Ostéopathe sportif de haut niveau à Montpellier</h1>
          <p className="text-gray-500 text-lg leading-relaxed">Francis MOMBO est <strong>kinésithérapeute et ostéopathe sportif</strong>, fort de 9 saisons au plus haut niveau du sport professionnel. Il accompagne sportifs amateurs et de haut niveau pour prévenir les blessures, optimiser la récupération et préparer les compétitions — à Montpellier et Castelnau-le-Lez.</p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Pourquoi consulter un ostéopathe du sport ?</h2>
            <p>La pratique sportive sollicite fortement les muscles, les articulations, les tendons et les chaînes de mouvement. Avec l'accumulation des entraînements, des compétitions ou des reprises trop rapides, certaines tensions peuvent apparaître et limiter la performance ou augmenter le risque de blessure.</p>
            <ul className="article-list">
              <li>réduire certaines tensions liées à l'effort ;</li>
              <li>améliorer la mobilité articulaire et musculaire ;</li>
              <li>accompagner la récupération après une compétition ou un entraînement intense ;</li>
              <li>préparer le corps avant une compétition importante ;</li>
              <li>corriger certains déséquilibres fonctionnels liés à la répétition des gestes sportifs.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Prévenir les blessures sportives</h2>
            <p>La prévention est souvent l'un des premiers motifs de consultation. Un sportif peut consulter avant l'apparition d'une douleur pour faire le point sur ses contraintes mécaniques, sa mobilité et ses zones de fragilité. Les facteurs favorisant les blessures sont souvent liés à :</p>
            <ul className="article-list">
              <li>une augmentation trop rapide de la charge d'entraînement ;</li>
              <li>un manque de récupération ;</li>
              <li>une mobilité articulaire insuffisante ;</li>
              <li>des antécédents de blessure mal récupérés ;</li>
              <li>des déséquilibres musculaires entre les deux côtés du corps.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Favoriser la récupération après l'effort</h2>
            <p>Après une séance intense ou une compétition, le corps accumule des tensions. Les muscles, les fascias et les articulations peuvent rester en état de contraction, ce qui ralentit la récupération et augmente le risque de blessure lors de la prochaine séance. L'ostéopathie intervient pour :</p>
            <ul className="article-list">
              <li>lever les tensions résiduelles post-effort ;</li>
              <li>améliorer la circulation sanguine et lymphatique ;</li>
              <li>restaurer la mobilité articulaire ;</li>
              <li>rééquilibrer les chaînes musculaires ;</li>
              <li>favoriser un sommeil récupérateur en réduisant les tensions nerveuses.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Préparer une compétition</h2>
            <p>À l'approche d'un objectif sportif, le corps doit être disponible sans être sursollicité. L'ostéopathie peut aider à améliorer le confort de mouvement, à favoriser une meilleure disponibilité corporelle et à limiter certaines compensations. Cette approche est particulièrement pertinente :</p>
            <ul className="article-list">
              <li>avant un cycle de compétition ;</li>
              <li>pendant une phase de préparation spécifique ;</li>
              <li>après un pic de charge d'entraînement ;</li>
              <li>lors de changements de rythme ou de surface de pratique.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Suivi pendant la saison sportive</h2>
            <p>Un suivi régulier peut être pertinent tout au long de la saison, surtout chez les sportifs qui enchaînent entraînements et compétitions. Il permet d'identifier l'apparition de tensions avant qu'elles ne deviennent gênantes :</p>
            <ul className="article-list">
              <li>bilan en début de saison ;</li>
              <li>séance de mi-saison pour absorber les charges accumulées ;</li>
              <li>suivi en période de reprise après coupure ;</li>
              <li>relâchement des tensions en fin de saison.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Pour quels sports ?</h2>
            <ul className="article-list">
              <li>sports collectifs : volley-ball, football, rugby, basketball, handball ;</li>
              <li>sports d'endurance : course à pied, triathlon, cyclisme, natation ;</li>
              <li>sports de raquette : tennis, padel, squash ;</li>
              <li>sports de force : musculation, haltérophilie, crossfit ;</li>
              <li>sports de combat : judo, boxe, arts martiaux ;</li>
              <li>sports de montagne et outdoor : trail, ski, escalade.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Kiné et ostéopathe sportif de haut niveau</h2>
            <p>Francis MOMBO a exercé pendant <strong>9 saisons comme kinésithérapeute et ostéopathe officiel du MHSC VB</strong> (Montpellier Hérault Sport Club Volley-Ball) — Champion de France 2022, Supercoupe 2022 et 2024. Il a également accompagné les équipes de la <strong>Fédération Française de Volley-Ball (FFVB)</strong> jusqu'aux Championnats du Monde et d'Europe, ainsi que l'équipe de France lors des <strong>Jeux Méditerranéens 2013</strong> (médaille de bronze) et en Afrobasket 2025 (Mali, finaliste).</p>
            <p>Cette expérience au plus haut niveau lui permet d'appliquer au cabinet des protocoles éprouvés avec des athlètes professionnels : préparation pré-match, récupération post-compétition, gestion des blessures en cours de saison.</p>
            <p className="mt-3 text-sm">
              <a href="https://www.montpellier-volley.com/staff/francis-mombo/" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#D4336E" }}>
                Voir la fiche officielle de Francis MOMBO sur montpellier-volley.com →
              </a>
            </p>
          </section>

          <section>
            <h2 className="article-h2">Déroulement d'une consultation</h2>
            <p>La consultation débute par un échange sur le sport pratiqué, la fréquence d'entraînement, les objectifs et les antécédents de blessure. Un bilan clinique et fonctionnel (posture, amplitudes, zones de tension) est ensuite réalisé. Les techniques sont adaptées à l'état physique du moment. Des conseils pratiques de récupération, de reprise ou de prévention sont donnés en fin de séance.</p>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.q}</p>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">Conclusion</h2>
            <p>L'ostéopathie du sport accompagne le sportif à chaque étape : prévention, récupération, préparation à la compétition, suivi de saison. Avec l'expérience unique du sport professionnel, Francis MOMBO adapte chaque prise en charge aux contraintes réelles de votre discipline, à Montpellier et Castelnau-le-Lez.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Voir aussi</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/urgences-osteopathie-montpellier", label: "Urgences ostéopathiques" },
              { href: "/douleurs-chroniques-osteopathie", label: "Douleurs chroniques" },
              { href: "/osteopathie-seniors-montpellier", label: "Séniors" },
              { href: "/recuperation-sportive-osteopathie", label: "Article : récupération sportive" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Sportif ? Optimisez votre pratique.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Prévention, récupération, préparation compétition — Francis MOMBO met son expérience du sport professionnel au service de votre performance à Montpellier et Castelnau-le-Lez.</p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>Prendre rendez-vous sur Doctolib</a>
        </div>
      </main>

      <style>{`
        .article-h2 { font-family: Figtree, sans-serif; font-size: 1.25rem; font-weight: 800; color: #111; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 2px solid #fdeef3; }
        .article-list { list-style: none; padding: 0; margin: 0.75rem 0; }
        .article-list li { padding-left: 1.25rem; position: relative; margin-bottom: 0.4rem; font-size: 0.95rem; }
        .article-list li::before { content: ""; position: absolute; left: 0; top: 0.55em; width: 6px; height: 6px; border-radius: 50%; background: #D4336E; }
      `}</style>
    </>
  );
}
