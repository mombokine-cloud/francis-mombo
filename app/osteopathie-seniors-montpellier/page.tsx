import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathie Séniors Montpellier | Arthrose, Mobilité, Équilibre | Francis MOMBO",
  description:
    "Ostéopathie pour séniors à Montpellier et Castelnau-le-Lez. Maintien de la mobilité, arthrose, troubles de l'équilibre, douleurs articulaires, prévention des chutes. Techniques douces adaptées.",
  keywords: [
    "ostéopathe séniors Montpellier",
    "ostéopathie personnes âgées Castelnau-le-Lez",
    "arthrose ostéopathe Montpellier",
    "mobilité sénior ostéopathie",
    "prévention chutes ostéopathe",
    "troubles équilibre ostéopathie",
    "ostéopathe retraité Montpellier",
    "douleurs articulaires sénior ostéopathie",
  ],
  alternates: { canonical: `${siteUrl}/osteopathie-seniors-montpellier` },
  openGraph: {
    title: "Ostéopathie Séniors Montpellier | Mobilité, Arthrose, Équilibre | Francis MOMBO",
    description: "Ostéopathie pour séniors à Montpellier. Maintien de la mobilité, arthrose, équilibre, prévention des chutes. Techniques douces et adaptées.",
    url: `${siteUrl}/osteopathie-seniors-montpellier`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.png`, width: 1200, height: 630, alt: "Ostéopathie séniors Montpellier Francis MOMBO" }],
  },
};

const faqItems = [
  { q: "L'ostéopathie est-elle sans danger pour les personnes âgées ?", a: "Oui, à condition que les techniques soient adaptées. Francis MOMBO utilise des techniques douces, sans manipulation à haute vélocité, parfaitement adaptées aux personnes âgées, fragiles ou souffrant d'ostéoporose." },
  { q: "L'ostéopathie peut-elle aider contre l'arthrose ?", a: "L'ostéopathie ne traite pas l'arthrose elle-même (usure du cartilage), mais elle peut améliorer la mobilité articulaire, réduire les tensions musculaires compensatrices et améliorer le confort fonctionnel." },
  { q: "Peut-on consulter en cas d'ostéoporose ?", a: "Oui, mais les techniques sont adaptées. En cas d'ostéoporose avérée, les manipulations directes sont évitées au profit de techniques douces : mobilisations légères, travail myofascial, approche crânio-sacrée." },
  { q: "L'ostéopathie peut-elle améliorer l'équilibre chez les séniors ?", a: "L'ostéopathie peut travailler sur certains facteurs mécaniques qui affectent l'équilibre : mobilité du rachis cervical, tensions podales, restrictions du bassin. Elle s'intègre idéalement dans un programme de prévention des chutes incluant des exercices d'équilibre." },
  { q: "À quelle fréquence consulter quand on est sénior ?", a: "Pour un suivi préventif, une séance tous les 2 à 3 mois est souvent adaptée. En cas de douleurs persistantes ou de perte de mobilité progressive, un suivi plus rapproché peut être pertinent." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function OsteopathieSeniors() {
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Séniors</span>
            <span className="text-xs text-gray-400">Mobilité · Arthrose · Équilibre · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>Ostéopathie pour séniors à Montpellier</h1>
          <p className="text-gray-500 text-lg leading-relaxed">Avec l'avancée en âge, le corps accumule des raideurs, des douleurs articulaires, des troubles de l'équilibre et une perte progressive de mobilité. L'ostéopathie offre aux séniors une approche douce et adaptée pour maintenir leur autonomie, réduire les douleurs et préserver la qualité de vie — à Montpellier et Castelnau-le-Lez.</p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Pourquoi consulter un ostéopathe après 60 ans ?</h2>
            <p>Le vieillissement s'accompagne de modifications mécaniques progressives : perte de souplesse articulaire, diminution de la masse musculaire, modifications posturales, réduction de la proprioception. Ces changements peuvent générer des douleurs, des limitations fonctionnelles et une moins bonne gestion de l'équilibre.</p>
            <p>L'ostéopathie pour séniors vise à :</p>
            <ul className="article-list">
              <li>maintenir ou améliorer la mobilité articulaire ;</li>
              <li>réduire les douleurs mécaniques (dos, hanches, genoux, épaules) ;</li>
              <li>améliorer la posture et la proprioception ;</li>
              <li>accompagner la prévention des chutes ;</li>
              <li>préserver l'autonomie et la qualité de vie.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Arthrose : améliorer le confort fonctionnel</h2>
            <p>L'arthrose est la pathologie articulaire la plus répandue chez les séniors. Elle touche les genoux, les hanches, le rachis lombaire et cervical, les doigts et les épaules. Si l'ostéopathie ne peut pas régénérer le cartilage usé, elle peut :</p>
            <ul className="article-list">
              <li>maintenir les amplitudes articulaires par des mobilisations douces ;</li>
              <li>réduire les tensions musculaires compensatrices ;</li>
              <li>améliorer la vascularisation locale ;</li>
              <li>soulager les douleurs fonctionnelles associées ;</li>
              <li>conseiller sur les activités physiques adaptées.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Équilibre et prévention des chutes</h2>
            <p>Les chutes représentent un risque majeur chez les personnes âgées. Plusieurs facteurs mécaniques peuvent être travaillés par l'ostéopathie pour améliorer l'équilibre :</p>
            <ul className="article-list">
              <li>mobilité du rachis cervical (capteurs proprioceptifs importants) ;</li>
              <li>tensions podales (voûte plantaire, cheville) qui affectent la stabilité ;</li>
              <li>restrictions du bassin qui modifient la posture globale ;</li>
              <li>tensions sacro-iliaques qui perturbent le transfert du poids.</li>
            </ul>
            <p>L'ostéopathie s'intègre idéalement dans un programme de prévention des chutes incluant des exercices d'équilibre, de renforcement musculaire et parfois un bilan podologique ou ophtalmologique.</p>
          </section>

          <section>
            <h2 className="article-h2">Douleurs dorsales et cervicales liées au vieillissement</h2>
            <p>La perte de hauteur des disques intervertébraux, les ostéophytes (becs de perroquet) et la réduction de la souplesse musculaire génèrent fréquemment des douleurs lombaires et cervicales chez les séniors. L'ostéopathie peut :</p>
            <ul className="article-list">
              <li>soulager les douleurs mécaniques du rachis vieillissant ;</li>
              <li>maintenir la mobilité globale du dos ;</li>
              <li>traiter les névralgies cervicales ou les sciatiques d'origine mécanique ;</li>
              <li>accompagner les douleurs liées au tassement vertébral.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Techniques adaptées aux séniors</h2>
            <p>La prise en charge ostéopathique du sénior diffère de celle de l'adulte jeune. Francis MOMBO adapte systématiquement les techniques en fonction :</p>
            <ul className="article-list">
              <li>de la fragilité osseuse (éviction des manipulations brusques en cas d'ostéoporose) ;</li>
              <li>de la tolérance articulaire ;</li>
              <li>des pathologies associées et des traitements médicamenteux ;</li>
              <li>de la position sur la table (allongée, assise ou semi-inclinée selon le confort).</li>
            </ul>
            <p>Les techniques privilégiées sont les mobilisations douces, le travail myofascial, les approches viscérales légères et les techniques crânio-sacrées — sans manipulation à haute vélocité.</p>
          </section>

          <section>
            <h2 className="article-h2">Maintenir l'autonomie et la qualité de vie</h2>
            <p>Au-delà du soulagement de la douleur, l'objectif de l'ostéopathie chez le sénior est de maintenir une capacité fonctionnelle satisfaisante : monter des escaliers, marcher sans aide, jardiner, pratiquer une activité de loisir. Un suivi régulier permet de détecter précocement les restrictions de mobilité et d'intervenir avant qu'elles ne deviennent invalidantes.</p>
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
            <p>L'ostéopathie pour séniors est une approche douce, respectueuse et efficace pour maintenir la mobilité, réduire les douleurs et préserver l'autonomie avec l'avancée en âge. Francis MOMBO reçoit les personnes âgées à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers dans un cadre bienveillant, avec des techniques entièrement adaptées à leurs besoins et leur fragilité.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Voir aussi</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/douleurs-chroniques-osteopathie", label: "Douleurs chroniques" },
              { href: "/urgences-osteopathie-montpellier", label: "Urgences ostéopathiques" },
              { href: "/osteopathie-enfant-nourrisson", label: "Enfant et nourrisson" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Bouger mieux, vivre mieux.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Francis MOMBO reçoit les séniors à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers avec des techniques douces adaptées à chaque âge et chaque situation.</p>
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
