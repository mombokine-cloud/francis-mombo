import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathie endométriose Montpellier — soulagement des douleurs",
  description:
    "L'ostéopathie peut soulager les douleurs liées à l'endométriose : crampes, douleurs pelviennes, tensions abdominales. Francis MOMBO, ostéopathe D.O. à Montpellier, accompagne les femmes atteintes d'endométriose.",
  keywords: [
    "ostéopathie endométriose",
    "ostéopathe endométriose Montpellier",
    "douleurs endométriose ostéopathie",
    "endométriose traitement naturel",
    "ostéopathe douleurs pelviennes Montpellier",
    "hypnose endométriose Montpellier",
    "endométriose ostéopathe Castelnau",
    "soulager endométriose ostéopathie",
  ],
  alternates: { canonical: `${siteUrl}/osteopathie-endometriose` },
  openGraph: {
    title: "Ostéopathie & endométriose Montpellier — Francis MOMBO",
    description: "Soulagement des douleurs d'endométriose par l'ostéopathie et l'hypnose à Montpellier. Prise en charge douce et globale.",
    url: `${siteUrl}/osteopathie-endometriose`,
    type: "article",
  },
};

const faq = [
  { q: "L'ostéopathie peut-elle guérir l'endométriose ?", a: "L'ostéopathie ne guérit pas l'endométriose, mais elle peut significativement réduire les douleurs associées et améliorer la qualité de vie. Elle agit sur les adhérences tissulaires, les tensions pelviennes et les compensations posturales liées à la maladie." },
  { q: "Combien de séances faut-il pour ressentir un soulagement ?", a: "Les premières améliorations sont souvent ressenties dès la 1re ou 2e séance. Un suivi régulier (toutes les 4 à 8 semaines) est généralement recommandé pour maintenir les effets dans la durée, notamment en lien avec le cycle menstruel." },
  { q: "L'hypnose peut-elle aider en complément ?", a: "Oui. L'hypnose thérapeutique est particulièrement efficace pour la gestion de la douleur chronique. Francis MOMBO peut associer ostéopathie et hypnose pour agir à la fois sur les tensions physiques et sur la perception de la douleur." },
  { q: "Dois-je avoir un diagnostic confirmé avant de consulter ?", a: "Non. Vous pouvez consulter Francis MOMBO sans diagnostic préalable si vous souffrez de douleurs pelviennes chroniques. Il adapte sa prise en charge à votre situation et travaille en complémentarité avec votre gynécologue." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Endométriose</span>
            <span className="text-xs text-gray-400">Santé féminine · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathie et endométriose à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            L'endométriose touche 1 femme sur 10 et provoque des douleurs parfois invalidantes. L'ostéopathie, associée à l'hypnose thérapeutique, offre une approche complémentaire pour soulager ces douleurs et améliorer la qualité de vie au quotidien.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Comment l'ostéopathie agit sur l'endométriose ?</h2>
            <p>L'endométriose crée des adhérences, des tensions et des inflammations qui perturbent l'ensemble du bassin et de l'abdomen. L'ostéopathie viscérale et pelvienne agit sur :</p>
            <ul className="article-list">
              <li>les tensions et restrictions de mobilité des organes pelviens (utérus, trompes, ovaires) ;</li>
              <li>les adhérences tissulaires qui limitent la mobilité intestinale et pelvienne ;</li>
              <li>les compensations posturales liées à la douleur chronique (dos, hanches, diaphragme) ;</li>
              <li>le système nerveux autonome pour réduire l'hyperalgésie ;</li>
              <li>la circulation lymphatique et veineuse pour réduire la congestion pelvienne.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Douleurs soulagées par l'ostéopathie</h2>
            <ul className="article-list">
              <li>dysménorrhée (règles douloureuses) ;</li>
              <li>douleurs pelviennes chroniques ;</li>
              <li>dyspareunie (douleurs lors des rapports) ;</li>
              <li>douleurs abdominales et intestinales ;</li>
              <li>douleurs lombaires et sciatique associées ;</li>
              <li>tensions musculaires du périnée et du plancher pelvien.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Hypnose : agir sur la perception de la douleur</h2>
            <p>La douleur chronique liée à l'endométriose est amplifiée par le système nerveux central. L'hypnose thérapeutique permet de :</p>
            <ul className="article-list">
              <li>moduler la perception de la douleur via le cerveau ;</li>
              <li>réduire l'anxiété et le stress liés à la maladie ;</li>
              <li>améliorer le sommeil souvent perturbé par les douleurs ;</li>
              <li>apprendre des techniques d'autohypnose pour gérer les crises.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">Francis MOMBO peut combiner ostéopathie et hypnose dans le même suivi pour une efficacité maximale.</p>
          </section>

          <section>
            <h2 className="article-h2">Un témoignage</h2>
            <blockquote className="border-l-4 pl-5 italic text-gray-600 text-sm leading-relaxed" style={{ borderColor: "#D4336E" }}>
              "J'ai consulté M. Mombo pour une sciatique chronique. Dès la première séance d'hypnose, les douleurs qui étaient présentes depuis des mois ont considérablement diminué. Incroyable."
              <footer className="mt-2 text-xs text-gray-400 not-italic">— julie m., Patiente hypnose, Montpellier</footer>
            </blockquote>
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
            <Link href="/osteopathie-sante-femme" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Santé femme & fertilité</Link>
            <Link href="/hypnose-therapeutique-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Hypnose thérapeutique</Link>
            <Link href="/osteopathie-grossesse-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Grossesse & ostéopathie</Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Prendre rendez-vous</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Castelnau-le-Lez et Saint-Mathieu-de-Tréviers — ostéopathie et hypnose pour l'endométriose.</p>
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
