import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Hypnose et performance sportive à Montpellier — préparation mentale",
  description:
    "Hypnose pour sportifs à Montpellier : préparation mentale, gestion du stress de compétition, confiance en soi, récupération psychologique. Francis MOMBO, kinésithérapeute et ostéopathe du sport.",
  keywords: [
    "hypnose sport Montpellier",
    "préparation mentale sportif Montpellier",
    "hypnose performance sportive Montpellier",
    "hypnose stress compétition Montpellier",
    "hypnose confiance en soi sportif",
    "hypnothérapeute sportif Montpellier",
    "préparation mentale Castelnau-le-Lez",
  ],
  alternates: { canonical: `${siteUrl}/hypnose-sport-montpellier` },
  openGraph: {
    title: "Hypnose & performance sportive à Montpellier — Francis MOMBO",
    description: "Préparation mentale par l'hypnose pour sportifs à Montpellier : gestion du stress, confiance, concentration, récupération psychologique.",
    url: `${siteUrl}/hypnose-sport-montpellier`,
    type: "article",
  },
};

const faq = [
  { q: "L'hypnose peut-elle vraiment améliorer les performances sportives ?", a: "Oui. De nombreuses études montrent que la préparation mentale — dont l'hypnose — améliore la concentration, réduit le trac et renforce la confiance en soi. Elle est utilisée par des athlètes de haut niveau dans de nombreuses disciplines." },
  { q: "À quel moment de la saison consulter ?", a: "L'hypnose peut être utilisée en préparation d'une compétition importante, en cours de saison pour gérer une baisse de moral ou une blessure, ou en période de coupure pour travailler sur des objectifs de fond." },
  { q: "Peut-on combiner hypnose et ostéopathie du sport ?", a: "Oui, c'est même l'un des atouts de Francis MOMBO : il peut intégrer les deux approches dans le même suivi, traitant à la fois les tensions physiques et les blocages mentaux." },
  { q: "L'hypnose fonctionne-t-elle pour les blessures et la rééducation ?", a: "Oui. L'hypnose peut réduire la douleur liée à la blessure, accélérer la récupération psychologique et aider le sportif à maintenir une projection positive pendant la période de rééducation." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
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
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Hypnose & Sport</span>
            <span className="text-xs text-gray-400">Préparation mentale · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Hypnose et performance sportive à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            La performance sportive ne repose pas uniquement sur le physique. La dimension mentale — concentration, confiance, gestion du stress de compétition — est souvent décisive. Francis MOMBO propose à Montpellier et Castelnau-le-Lez un accompagnement par l'hypnose, complémentaire de l'entraînement physique et de l'ostéopathie du sport.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Pourquoi intégrer l'hypnose dans la préparation sportive ?</h2>
            <p>Le mental est souvent le facteur différenciant entre deux athlètes de niveau physique équivalent. L'hypnose agit directement sur les mécanismes psychologiques qui influencent la performance :</p>
            <ul className="article-list">
              <li>réduire le trac et l'anxiété de compétition ;</li>
              <li>renforcer la confiance en soi et l'estime des capacités ;</li>
              <li>améliorer la concentration et la gestion de l'attention ;</li>
              <li>optimiser la récupération psychologique entre les efforts ;</li>
              <li>travailler sur les croyances limitantes ("je craque toujours sous pression").</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Gestion du stress de compétition</h2>
            <p>Le stress pré-compétitif est normal et même utile en petite dose. Mais lorsqu'il dépasse un certain seuil, il devient paralysant : pensées intrusives, tensions musculaires excessives, perte de lucidité. L'hypnose permet de :</p>
            <ul className="article-list">
              <li>installer des ancrages de calme activables avant ou pendant l'épreuve ;</li>
              <li>travailler en visualisation sur le déroulement optimal de la compétition ;</li>
              <li>réduire la réactivité au stress via la régulation du système nerveux autonome ;</li>
              <li>construire une routine mentale pré-compétition efficace.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Visualisation et répétition mentale</h2>
            <p>En état hypnotique, la visualisation est plus vivante, plus immersive et plus efficace. Le cerveau ne fait pas toujours la différence entre une action réellement vécue et une action fortement imaginée. Cette propriété est utilisée pour :</p>
            <ul className="article-list">
              <li>répéter mentalement des gestes techniques dans les moindres détails ;</li>
              <li>préparer des scénarios de compétition et leurs variantes ;</li>
              <li>renforcer les automatismes moteurs ;</li>
              <li>travailler le "flow" — cet état de performance optimale et de fluidité.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Confiance en soi et croyances limitantes</h2>
            <p>Beaucoup de sportifs sont freinés par des croyances intérieures négatives installées par des échecs passés, des critiques répétées ou des blessures traumatisantes. L'hypnose en thérapie brève permet de :</p>
            <ul className="article-list">
              <li>identifier et neutraliser les croyances limitantes ;</li>
              <li>reconstruire une image positive de soi en tant que sportif ;</li>
              <li>déprogrammer la peur de l'échec ou de la blessure ;</li>
              <li>renforcer la résilience mentale face à l'adversité.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Récupération psychologique après blessure</h2>
            <p>La blessure sportive est souvent vécue comme un traumatisme : peur de la rechute, perte de confiance dans le corps, sentiment d'exclusion du groupe. L'hypnose accompagne la rééducation en :</p>
            <ul className="article-list">
              <li>réduisant la douleur perçue pendant la rééducation ;</li>
              <li>maintenant une projection positive vers la reprise ;</li>
              <li>travaillant sur la peur de la rechute ;</li>
              <li>accélérant la reprise de confiance dans les capacités physiques.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">L'expertise du sport de haut niveau</h2>
            <p>Francis MOMBO a accompagné pendant <strong>9 saisons le MHSC VB</strong> (Montpellier Hérault Volley-Ball, Champion de France 2022) et les équipes de la <strong>FFVB</strong> aux Championnats du Monde et d'Europe. Il connaît les exigences du sport de haut niveau, les dynamiques d'équipe et la pression de compétition — ce qui lui permet d'adapter son approche hypnotique au contexte sportif réel de chaque patient.</p>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
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

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Voir aussi</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/hypnose-therapeutique-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Hypnose thérapeutique Montpellier</Link>
            <Link href="/osteopathie-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie du sport</Link>
            <Link href="/recuperation-sportive-osteopathie" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Article : récupération sportive</Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Performez aussi dans votre tête</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Préparation mentale par l'hypnose pour sportifs amateurs et de compétition à Montpellier — Castelnau-le-Lez.</p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
