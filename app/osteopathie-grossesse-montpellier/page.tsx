import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathie grossesse Montpellier — Francis MOMBO D.O.",
  description:
    "Ostéopathie pendant la grossesse à Montpellier et Castelnau-le-Lez. Francis MOMBO, ostéopathe D.O., soulage les douleurs lombaires, nausées, tensions ligamentaires et prépare le bassin à l'accouchement.",
  keywords: [
    "ostéopathie grossesse Montpellier",
    "ostéopathe femme enceinte Montpellier",
    "ostéopathe grossesse Castelnau-le-Lez",
    "ostéopathie post-partum Montpellier",
    "douleurs grossesse ostéopathe",
    "ostéopathe périnatal Montpellier",
    "préparation accouchement ostéopathie",
    "ostéopathie bassin grossesse",
  ],
  alternates: { canonical: `${siteUrl}/osteopathie-grossesse-montpellier` },
  openGraph: {
    title: "Ostéopathie grossesse Montpellier — Francis MOMBO",
    description: "Soulagement des douleurs de grossesse par l'ostéopathie à Montpellier. Dos, bassin, nausées, préparation à l'accouchement.",
    url: `${siteUrl}/osteopathie-grossesse-montpellier`,
    type: "article",
  },
};

const faq = [
  { q: "L'ostéopathie est-elle sans danger pendant la grossesse ?", a: "Oui. L'ostéopathie est parfaitement adaptée à toutes les étapes de la grossesse. Les techniques utilisées sont douces, sans manipulation brusque, et spécifiquement adaptées à l'état de la femme enceinte. Francis MOMBO adapte chaque séance au trimestre et aux symptômes." },
  { q: "À quel trimestre consulter un ostéopathe pendant la grossesse ?", a: "L'ostéopathie est bénéfique dès le 1er trimestre (nausées, fatigue) jusqu'au 3e trimestre (douleurs lombaires, sciatique, préparation du bassin). Une consultation après l'accouchement (post-partum) est également recommandée pour la rééducation du périnée et du bassin." },
  { q: "Quels problèmes l'ostéopathe peut-il traiter pendant la grossesse ?", a: "Douleurs lombaires et dorsales, sciatique et névralgie pudendale, douleurs de la symphyse pubienne, nausées et troubles digestifs, tensions ligamentaires, jambes lourdes, préparation du bassin à l'accouchement." },
  { q: "Combien de séances sont nécessaires ?", a: "En général, 1 à 3 séances par trimestre suffisent en prévention. Pour des douleurs aiguës, une séance peut apporter un soulagement immédiat. Francis MOMBO adapte le suivi à votre situation." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Grossesse</span>
            <span className="text-xs text-gray-400">Ostéopathie · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathie pendant la grossesse à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            La grossesse transforme profondément le corps. L'ostéopathie accompagne chaque trimestre pour soulager les douleurs, préparer le bassin à l'accouchement et favoriser un post-partum harmonieux.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Pourquoi consulter un ostéopathe pendant la grossesse ?</h2>
            <p>La grossesse entraîne des modifications profondes : prise de poids, changements hormonaux, déplacement du centre de gravité, relâchement ligamentaire. Ces transformations peuvent provoquer des douleurs et des inconforts que l'ostéopathie soulage efficacement et en toute sécurité.</p>
            <ul className="article-list">
              <li>douleurs lombaires et dorsales, qui s'aggravent souvent au 3e trimestre ;</li>
              <li>sciatique et douleurs irradiantes dans les jambes ;</li>
              <li>douleurs de la symphyse pubienne (SPD) ;</li>
              <li>nausées et troubles digestifs au 1er trimestre ;</li>
              <li>tensions ligamentaires et sensation de lourdeur ;</li>
              <li>préparation du bassin et des tissus pelviens à l'accouchement.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Ostéopathie au 1er trimestre</h2>
            <p>Le 1er trimestre est marqué par les nausées, la fatigue et les premiers ajustements hormonaux. L'ostéopathie agit sur le système nerveux autonome et les structures digestives pour atténuer les nausées. Elle aide aussi à relâcher les tensions du bas du dos et du bassin qui s'adaptent à la grossesse naissante.</p>
          </section>

          <section>
            <h2 className="article-h2">Ostéopathie au 2e et 3e trimestre</h2>
            <p>À mesure que le bébé grandit, les tensions mécaniques s'intensifient. Francis MOMBO travaille sur :</p>
            <ul className="article-list">
              <li>les articulations sacro-iliaques et le bassin pour prévenir ou soulager la sciatique ;</li>
              <li>les tensions diaphragmatiques liées à la remontée du ventre ;</li>
              <li>la colonne vertébrale pour compenser l'hyperlordose lombaire ;</li>
              <li>la préparation du périnée et des ligaments utérins pour faciliter l'accouchement.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Ostéopathie post-partum</h2>
            <p>Après l'accouchement, le corps a besoin de se réajuster. Une séance d'ostéopathie post-partum (idéalement 6 à 8 semaines après la naissance) aide à :</p>
            <ul className="article-list">
              <li>rééquilibrer le bassin et le sacrum après l'accouchement ;</li>
              <li>soulager les douleurs dorsales liées à l'allaitement ;</li>
              <li>accompagner la récupération périnéale ;</li>
              <li>traiter les conséquences d'une épisiotomie ou d'une césarienne.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">FAQ — Ostéopathie et grossesse</h2>
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
            <Link href="/osteopathie-sante-femme" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Santé femme & fertilité</Link>
            <Link href="/osteopathie-enfant-nourrisson" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie enfant & nourrisson</Link>
            <Link href="/tarifs-osteopathe-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Tarifs</Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Prendre rendez-vous</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Castelnau-le-Lez et Saint-Mathieu-de-Tréviers — suivi grossesse et post-partum.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Réserver sur Doctolib
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
