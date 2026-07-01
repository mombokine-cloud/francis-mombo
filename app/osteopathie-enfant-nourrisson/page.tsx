import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathie Enfant et Nourrisson Montpellier | Pédiatrie | Francis MOMBO",
  description:
    "Ostéopathe pour enfants et nourrissons à Montpellier et Castelnau-le-Lez. Coliques, troubles du sommeil, reflux, posture scolaire, scoliose, croissance. Approche douce et adaptée.",
  keywords: [
    "ostéopathe enfant Montpellier",
    "ostéopathie nourrisson Castelnau-le-Lez",
    "ostéopathe pédiatrique Montpellier",
    "coliques bébé ostéopathe",
    "ostéopathie scoliose enfant",
    "reflux nourrisson ostéopathe",
    "ostéopathe adolescent Montpellier",
    "troubles du sommeil bébé ostéopathie",
  ],
  alternates: { canonical: `${siteUrl}/osteopathie-enfant-nourrisson` },
  openGraph: {
    title: "Ostéopathie Enfant et Nourrisson | Montpellier | Francis MOMBO",
    description: "Ostéopathe pour enfants et nourrissons à Montpellier. Coliques, reflux, troubles du sommeil, scoliose, posture. Approche douce et adaptée à chaque âge.",
    url: `${siteUrl}/osteopathie-enfant-nourrisson`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.png`, width: 1200, height: 630, alt: "Ostéopathie enfant nourrisson Montpellier" }],
  },
};

const faqItems = [
  { q: "À quel âge peut-on emmener son bébé chez l'ostéopathe ?", a: "L'ostéopathie est possible dès les premiers jours de vie. Une première consultation est souvent recommandée dans les semaines suivant la naissance, notamment après un accouchement difficile, une extraction instrumentale ou une naissance par césarienne." },
  { q: "Les manipulations sont-elles douloureuses pour un bébé ?", a: "Non. Les techniques utilisées chez le nourrisson sont extrêmement douces — sans aucune manipulation brusque. Il s'agit principalement de légères pressions et mobilisations adaptées à la fragilité du nourrisson." },
  { q: "L'ostéopathie peut-elle aider contre les coliques du nourrisson ?", a: "L'ostéopathie peut contribuer à réduire certaines tensions mécaniques qui aggravent l'inconfort digestif. Elle ne remplace pas un avis pédiatrique, mais peut compléter la prise en charge des coliques fonctionnelles." },
  { q: "À partir de quel âge peut-on traiter une scoliose par ostéopathie ?", a: "L'ostéopathie peut accompagner dès l'adolescence les scolioses légères à modérées, en complément du suivi médical et orthopédique. Elle n'est pas un traitement de la scoliose structurelle sévère." },
  { q: "Mon enfant doit-il se déshabiller pour la séance ?", a: "Pas nécessairement. L'ostéopathe adapte la consultation selon l'âge et le confort de l'enfant. Le nourrisson peut rester en body, l'enfant en vêtements légers." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function OsteopathieEnfant() {
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Enfant</span>
            <span className="text-xs text-gray-400">Nourrisson · Enfant · Adolescent · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>Ostéopathie enfant et nourrisson à Montpellier</h1>
          <p className="text-gray-500 text-lg leading-relaxed">Du nourrisson à l'adolescent, l'ostéopathie accompagne chaque étape de la croissance. Coliques, reflux, troubles du sommeil, déformation du crâne, posture scolaire, scoliose — chaque consultation est adaptée à l'âge et aux besoins de l'enfant, avec des techniques douces et sans douleur.</p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Ostéopathie du nourrisson (0 à 18 mois)</h2>
            <p>La naissance est une épreuve physique intense pour le nouveau-né. Les contraintes mécaniques lors du passage dans le canal utérin ou lors d'une extraction instrumentale (forceps, ventouse) peuvent laisser des tensions crâniennes, cervicales ou du bassin qui perturbent le confort du bébé.</p>
            <p>L'ostéopathie du nourrisson peut être indiquée pour :</p>
            <ul className="article-list">
              <li>les coliques et troubles digestifs (gaz, constipation, reflux) ;</li>
              <li>les pleurs inexpliqués et l'irritabilité ;</li>
              <li>les troubles du sommeil ;</li>
              <li>les déformations du crâne (plagiocéphalie, brachycéphalie) ;</li>
              <li>les difficultés d'allaitement (succion, tension cervicale) ;</li>
              <li>les torticolis congénitaux ou positionnels ;</li>
              <li>après un accouchement difficile, avec forceps, ventouse ou césarienne.</li>
            </ul>
            <p>Les techniques utilisées sont extrêmement douces — légères pressions, mobilisations crâniennes — sans aucune manipulation brusque. La séance se déroule dans le calme, avec le bébé dans les bras d'un parent si nécessaire.</p>
          </section>

          <section>
            <h2 className="article-h2">Ostéopathie de l'enfant (2 à 12 ans)</h2>
            <p>Au fil de la croissance, le corps de l'enfant évolue rapidement. Les activités sportives, le port du cartable, la position assise prolongée à l'école peuvent générer des tensions ou des déséquilibres posturaux. L'ostéopathie peut accompagner :</p>
            <ul className="article-list">
              <li>les douleurs de croissance (genoux, chevilles, dos) ;</li>
              <li>les maux de tête et céphalées de tension ;</li>
              <li>les troubles posturaux liés à la position scolaire ;</li>
              <li>les rechutes fréquentes d'otites ou de rhinites d'origine mécanique ;</li>
              <li>les troubles de l'attention liés à des tensions crâniennes ;</li>
              <li>les blessures sportives chez les jeunes pratiquants ;</li>
              <li>les scolioses légères à modérées (en complément du suivi médical).</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Ostéopathie de l'adolescent</h2>
            <p>La croissance rapide de l'adolescence expose le corps à des déséquilibres entre développement osseux et musculaire. Les jeunes sportifs en particulier sont exposés à des blessures de surmenage (épiphysites, tendinopathies de croissance). L'ostéopathie peut intervenir sur :</p>
            <ul className="article-list">
              <li>les douleurs de dos liées à la croissance (scoliose, hyperlordose) ;</li>
              <li>les tendinopathies et épiphysites (genou, talon) ;</li>
              <li>les céphalées et migraines de tension ;</li>
              <li>les troubles de la posture aggravés par l'usage des écrans ;</li>
              <li>le suivi des jeunes sportifs en compétition.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Comment se déroule une consultation pédiatrique ?</h2>
            <p>La séance débute par un échange avec les parents pour comprendre le contexte, les antécédents de naissance, les comportements et les motifs de consultation. Pour les nourrissons, l'examen se fait en position allongée, dans les bras d'un parent ou sur la table selon l'âge et le confort.</p>
            <p>Les techniques sont toujours adaptées à l'âge et à l'état de l'enfant — légères et progressives. L'objectif est de rétablir la mobilité et le confort sans générer de douleur ni de stress.</p>
          </section>

          <section>
            <h2 className="article-h2">Quand consulter ?</h2>
            <ul className="article-list">
              <li>dès les premières semaines de vie, notamment après un accouchement difficile ;</li>
              <li>en cas de coliques persistantes, reflux ou troubles du sommeil ;</li>
              <li>pour un bilan de posture en début d'année scolaire ;</li>
              <li>en cas de douleurs de croissance ;</li>
              <li>après une blessure sportive chez un enfant ou adolescent ;</li>
              <li>en prévention chez les jeunes sportifs pratiquant intensivement.</li>
            </ul>
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
            <p>Du bébé à l'adolescent, l'ostéopathie accompagne chaque étape de la croissance avec douceur et précision. Francis MOMBO reçoit les enfants et les nourrissons à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers dans un cadre bienveillant, avec des techniques adaptées à chaque âge.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Voir aussi</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/osteopathie-sante-femme", label: "Santé de la femme" },
              { href: "/osteopathie-seniors-montpellier", label: "Séniors" },
              { href: "/osteopathie-sport-montpellier", label: "Ostéopathie du sport" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Votre enfant mérite des soins adaptés.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Francis MOMBO reçoit les nourrissons, enfants et adolescents à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers avec des techniques douces et individualisées.</p>
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
