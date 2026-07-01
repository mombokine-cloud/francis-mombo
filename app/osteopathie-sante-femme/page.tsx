import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathie Santé de la Femme Montpellier | Fertilité, Endométriose, Grossesse",
  description:
    "Ostéopathie pour la santé féminine à Montpellier et Castelnau-le-Lez : fertilité, endométriose, grossesse, post-partum, troubles menstruels, ménopause. Approche douce et spécialisée.",
  keywords: [
    "ostéopathie fertilité Montpellier",
    "ostéopathe endométriose Montpellier",
    "ostéopathie grossesse Castelnau-le-Lez",
    "ostéopathe femme enceinte Montpellier",
    "équilibre féminin ostéopathie",
    "post-partum ostéopathie Montpellier",
    "troubles menstruels ostéopathie",
    "ménopause ostéopathe Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/osteopathie-sante-femme` },
  openGraph: {
    title: "Ostéopathie Santé de la Femme | Fertilité, Endométriose, Grossesse – Montpellier",
    description: "Ostéopathie pour la santé féminine à Montpellier : fertilité, endométriose, grossesse, post-partum, ménopause. Approche douce et individualisée.",
    url: `${siteUrl}/osteopathie-sante-femme`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.png`, width: 1200, height: 630, alt: "Ostéopathie santé femme Montpellier" }],
  },
};

const faqItems = [
  { q: "L'ostéopathie peut-elle aider en cas d'endométriose ?", a: "L'ostéopathie ne traite pas l'endométriose elle-même. Elle peut accompagner les patientes en travaillant sur les tensions pelviennes, les adhérences cicatricielles, les douleurs fonctionnelles et le confort global, toujours en complément du suivi médical ou gynécologique." },
  { q: "L'ostéopathie peut-elle aider dans un parcours de fertilité ou de PMA ?", a: "Oui, comme accompagnement complémentaire au suivi gynécologique. L'ostéopathie s'intéresse aux tensions abdomino-pelviennes, à la mobilité tissulaire et au confort global. Elle ne remplace pas les traitements prescrits et n'est pas un traitement de l'infertilité." },
  { q: "À partir de quel mois de grossesse peut-on consulter ?", a: "L'ostéopathie est possible dès le premier trimestre. Les techniques sont adaptées à chaque stade. Une consultation au 2e et 3e trimestre est particulièrement bénéfique pour préparer le bassin à l'accouchement." },
  { q: "Quand consulter après l'accouchement ?", a: "Idéalement entre 6 et 8 semaines après un accouchement par voie basse, ou après cicatrisation complète en cas de césarienne. Une séance précoce aide à rééquilibrer le bassin et à accompagner la récupération." },
  { q: "L'ostéopathie peut-elle aider contre les douleurs de règles ?", a: "Oui. L'ostéopathie peut contribuer à réduire les tensions pelviennes qui amplifient les douleurs menstruelles, en travaillant sur la mobilité du sacrum, de l'utérus et des structures environnantes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function SanteFemme() {
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Santé féminine</span>
            <span className="text-xs text-gray-400">Fertilité · Endométriose · Grossesse · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>Ostéopathie et santé de la femme à Montpellier</h1>
          <p className="text-gray-500 text-lg leading-relaxed">L'ostéopathie accompagne les femmes à chaque étape de leur vie : fertilité et parcours PMA, grossesse, post-partum, troubles menstruels, endométriose, ménopause. Une approche douce, globale et individualisée, toujours en complément du suivi médical.</p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Fertilité et parcours PMA : un accompagnement complémentaire</h2>
            <p>L'ostéopathie peut s'intégrer dans un parcours de fertilité ou de procréation médicalement assistée (PMA, FIV) comme approche complémentaire au suivi gynécologique et médical. Elle ne traite pas l'infertilité elle-même, mais s'intéresse aux équilibres mécaniques qui peuvent influencer le confort et le bien-être global de la patiente.</p>
            <p>L'ostéopathie peut travailler sur :</p>
            <ul className="article-list">
              <li>les tensions abdomino-pelviennes et ligamentaires ;</li>
              <li>la mobilité du sacrum, des trompes et de l'utérus ;</li>
              <li>la vascularisation locale par le travail sur les fascias ;</li>
              <li>la gestion du stress lié au parcours médical (en complément de l'hypnose thérapeutique).</li>
            </ul>
            <p>Cette approche s'inscrit toujours en complément — jamais en substitution — du suivi médical ou gynécologique.</p>
          </section>

          <section>
            <h2 className="article-h2">Endométriose : soulager les tensions pelviennes</h2>
            <p>L'ostéopathie ne traite pas l'endométriose. Elle peut en revanche accompagner les patientes dans la gestion des douleurs fonctionnelles associées, en travaillant sur :</p>
            <ul className="article-list">
              <li>les tensions pelviennes et abdominales ;</li>
              <li>les adhérences cicatricielles (après chirurgie) ;</li>
              <li>la mobilité du sacrum et du bassin ;</li>
              <li>les compensations posturales liées à la douleur chronique ;</li>
              <li>la gestion de la douleur par l'hypnose thérapeutique (en complément).</li>
            </ul>
            <p>Chaque prise en charge est discutée en lien avec le suivi gynécologique ou chirurgical en cours.</p>
          </section>

          <section>
            <h2 className="article-h2">Grossesse : accompagnement trimestre par trimestre</h2>
            <p>Pendant la grossesse, le corps féminin subit des modifications profondes : prise de poids progressive, modification du centre de gravité, relâchement ligamentaire hormonal, élargissement du bassin. Ces changements peuvent générer des douleurs lombaires, des tensions pelviennes, des sciatiques ou des troubles digestifs.</p>
            <p>L'ostéopathie pendant la grossesse peut soulager :</p>
            <ul className="article-list">
              <li>douleurs lombaires et pelviennes ;</li>
              <li>sciatique et névralgie crurale ;</li>
              <li>nausées et reflux gastro-œsophagien ;</li>
              <li>tensions ligamentaires utérines ;</li>
              <li>douleurs de la symphyse pubienne ;</li>
              <li>troubles du sommeil liés aux tensions corporelles ;</li>
              <li>préparation du bassin à l'accouchement.</li>
            </ul>
            <p>Les techniques employées sont toujours douces, sans manipulation à haute vélocité, et adaptées au trimestre de grossesse et à l'état de la patiente.</p>
          </section>

          <section>
            <h2 className="article-h2">Post-partum : récupération après l'accouchement</h2>
            <p>Après l'accouchement, le corps a besoin de se réorganiser. Le bassin, le périnée, le sacrum et le rachis lombaire ont été sollicités intensément. Une séance en post-partum permet de :</p>
            <ul className="article-list">
              <li>rééquilibrer le bassin et les sacro-iliaques ;</li>
              <li>accompagner la cicatrisation périnéale ou d'une épisiotomie ;</li>
              <li>traiter les douleurs cervicales liées à l'allaitement ;</li>
              <li>soulager les tensions dorsales dues aux soins du nourrisson ;</li>
              <li>en cas de césarienne, travailler sur la mobilité de la cicatrice.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Troubles menstruels et douleurs de règles</h2>
            <p>Les dysménorrhées (douleurs de règles) peuvent être amplifiées par des tensions pelviennes mécaniques. L'ostéopathie peut intervenir sur la mobilité du sacrum, de l'utérus et des structures environnantes pour réduire ces tensions et améliorer le confort menstruel — sans substituer à un bilan gynécologique.</p>
          </section>

          <section>
            <h2 className="article-h2">Ménopause et équilibre hormonal</h2>
            <p>Les modifications hormonales liées à la ménopause entraînent souvent des douleurs articulaires, des troubles du sommeil, un état de stress accru ou des inconforts posturaux. L'ostéopathie peut accompagner cette transition en travaillant sur les compensations mécaniques et la mobilité globale. L'hypnose thérapeutique peut compléter l'approche pour la gestion du stress et les troubles du sommeil.</p>
          </section>

          <section>
            <h2 className="article-h2">Déroulement d'une consultation</h2>
            <p>Chaque séance débute par un entretien approfondi pour comprendre le contexte de santé, les antécédents gynécologiques ou obstétricaux, les traitements en cours et les attentes. Le travail manuel est ensuite adapté à la situation : techniques douces, mobilisations viscérales, travail ligamentaire, approche crânio-sacrée selon les besoins.</p>
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
            <p>L'ostéopathie est une alliée précieuse tout au long de la vie féminine — de la fertilité à la ménopause, en passant par la grossesse et le post-partum. Francis MOMBO reçoit les femmes à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers avec une approche douce, individualisée et respectueuse de chaque étape de la vie.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Voir aussi</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/osteopathie-enfant-nourrisson", label: "Enfant et nourrisson" },
              { href: "/douleurs-chroniques-osteopathie", label: "Douleurs chroniques" },
              { href: "/osteopathie-grossesse-equilibre-feminin", label: "Article : ostéopathie et grossesse" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Un accompagnement doux et bienveillant</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Francis MOMBO reçoit les femmes à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers pour un accompagnement ostéopathique adapté à chaque étape de la vie féminine.</p>
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
