import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le mal de dos : comprendre, prévenir et soulager durablement",
  description:
    "Comprenez les causes du mal de dos et adoptez les bons réflexes pour le prévenir et le soulager efficacement au quotidien.",
  keywords: [
    "mal de dos",
    "lombalgie",
    "prévention du mal de dos",
    "douleur lombaire",
    "mal au dos",
    "exercices pour le dos",
    "posture et dos",
    "soulager le mal de dos",
  ],
  alternates: {
    canonical: "https://www.mombofrancis.com/mal-de-dos-comprendre-prevenir",
  },
  openGraph: {
    title: "Le mal de dos : comprendre, prévenir et soulager durablement",
    description:
      "Comprenez les causes du mal de dos et adoptez les bons réflexes pour le prévenir et le soulager efficacement au quotidien.",
    url: "https://www.mombofrancis.com/mal-de-dos-comprendre-prevenir",
    type: "article",
  },
};

const faqItems = [
  {
    q: "Le mal de dos est-il toujours grave ?",
    a: "Non, dans la plupart des cas, il s'agit d'une douleur mécanique bénigne. En revanche, certains signes doivent amener à consulter rapidement.",
  },
  {
    q: "Faut-il rester au repos en cas de mal de dos ?",
    a: "Le repos prolongé n'est généralement pas conseillé. Le mouvement adapté aide souvent à récupérer plus vite.",
  },
  {
    q: "Le sport est-il bon pour le dos ?",
    a: "Oui, à condition qu'il soit progressif, régulier et adapté au niveau de la personne.",
  },
  {
    q: "Peut-on prévenir les récidives ?",
    a: "Oui, avec une bonne hygiène de mouvement, du renforcement musculaire et une reprise progressive des activités.",
  },
];

export default function ArticleMalDeDos() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Retour au site
          </Link>
          <a
            href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-4 py-2 rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
          >
            Prendre rendez-vous
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>
              Ostéopathie
            </span>
            <span className="text-xs text-gray-400">12 juin 2025 · 5 min de lecture</span>
          </div>
          <h1
            className="font-black text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}
          >
            Le mal de dos : comprendre et prévenir
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Le mal de dos est un problème très fréquent, touchant aussi bien les personnes sédentaires que les sportifs
            ou les travailleurs exposés aux efforts répétés. Dans la majorité des cas, il s'agit d'une douleur mécanique
            liée aux postures, aux mouvements du quotidien ou à un manque d'activité physique. Mieux comprendre ses
            causes permet d'agir plus tôt et de limiter les récidives.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-10" />

        {/* Article body */}
        <article className="prose-article space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Qu'est-ce que le mal de dos ?</h2>
            <p>
              Le terme "mal de dos" regroupe différentes douleurs situées au niveau du rachis cervical, dorsal ou lombaire.
              La forme la plus fréquente est la <strong>lombalgie</strong>, c'est-à-dire la douleur lombaire située dans
              le bas du dos. Elle peut être ponctuelle, récurrente ou devenir chronique si elle dure dans le temps.
              Dans la majorité des cas, le mal de dos n'est pas grave, mais il peut devenir très gênant au quotidien.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Quelles sont les causes du mal de dos ?</h2>
            <p>Les causes les plus courantes sont multiples :</p>
            <ul className="article-list">
              <li>une posture prolongée ;</li>
              <li>un manque de mouvement ;</li>
              <li>un faux geste ou un effort mal contrôlé ;</li>
              <li>un port de charge inadapté ;</li>
              <li>une fatigue musculaire ;</li>
              <li>le stress, qui augmente les tensions corporelles.</li>
            </ul>
            <p>
              D'autres facteurs peuvent aussi favoriser l'apparition de douleurs lombaires, comme le surpoids, une
              activité sportive mal dosée ou un environnement de travail mal adapté. Le dos est une zone qui supporte
              de nombreuses contraintes, ce qui explique la fréquence de ces douleurs.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Quels sont les facteurs de risque ?</h2>
            <p>Certaines habitudes augmentent le risque de mal au dos :</p>
            <ul className="article-list">
              <li>rester assis longtemps sans bouger ;</li>
              <li>manquer de renforcement musculaire ;</li>
              <li>bouger de façon répétitive sans récupération musculaire ;</li>
              <li>adopter des postures asymétriques ;</li>
              <li>dormir sur un support inadapté ;</li>
              <li>reprendre trop vite une activité après une douleur.</li>
            </ul>
            <p>
              Chez les personnes actives, le risque augmente aussi lorsque les gestes techniques sont mal maîtrisés
              ou lorsque la récupération est insuffisante.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Comment prévenir le mal de dos ?</h2>
            <p>
              La prévention du mal de dos repose surtout sur l'hygiène de mouvement et la prévention posturale.
              Il est recommandé de :
            </p>
            <ul className="article-list">
              <li>bouger régulièrement au cours de la journée ;</li>
              <li>alterner les positions assis, debout et en marche ;</li>
              <li>renforcer la sangle abdominale et les muscles du dos ;</li>
              <li>apprendre à soulever les charges avec les jambes plutôt qu'avec le dos ;</li>
              <li>maintenir une activité physique adaptée et progressive.</li>
            </ul>
            <p>
              L'objectif n'est pas d'éviter tous les efforts, mais de rendre le dos plus mobile, plus résistant et
              mieux préparé aux contraintes du quotidien grâce à une bonne santé du dos.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Quels exercices peuvent aider ?</h2>
            <p>
              Des exercices simples peuvent contribuer à entretenir la mobilité lombaire et à limiter les raideurs :
            </p>
            <ul className="article-list">
              <li>mobilisation douce de la colonne ;</li>
              <li>exercices de gainage adaptés ;</li>
              <li>renforcement progressif des muscles profonds ;</li>
              <li>étirements du dos ciblés selon le profil de la personne.</li>
            </ul>
            <p>
              Ces exercices pour le dos doivent être adaptés à la douleur, au niveau physique et aux antécédents de
              chacun. En cas de douleur persistante, il est préférable de demander un avis professionnel avant de commencer.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Quand faut-il consulter ?</h2>
            <p>Une consultation est conseillée si la douleur lombaire :</p>
            <ul className="article-list">
              <li>dure plusieurs jours sans amélioration ;</li>
              <li>revient régulièrement ;</li>
              <li>devient intense ou handicapante ;</li>
              <li>s'accompagne de fourmillements, d'une faiblesse ou d'une douleur irradiant dans la jambe ;</li>
              <li>apparaît après un traumatisme.</li>
            </ul>
            <p>
              Un bilan permet d'identifier les facteurs déclenchants, d'écarter une cause nécessitant un avis médical
              et de proposer un accompagnement adapté pour soulager le mal de dos.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="article-h2">FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>
                    {item.q}
                  </p>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="article-h2">Conclusion</h2>
            <p>
              Le mal de dos est fréquent, mais il peut souvent être prévenu grâce à de bonnes habitudes et à une
              activité physique adaptée. Comprendre les causes permet d'agir plus efficacement et de limiter
              l'installation de douleurs chroniques. Un accompagnement personnalisé aide aussi à retrouver un dos
              plus mobile, plus fort et plus durablement protégé.
            </p>
          </section>
        </article>

        {/* CTA */}
        <div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>
            Francis MOMBO
          </p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Vous souffrez du dos ?
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Francis MOMBO, ostéopathe D.O. et kinésithérapeute à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers,
            vous accompagne pour retrouver mobilité et confort.
          </p>
          <a
            href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm"
            style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
          >
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>

      <style>{`
        .article-h2 {
          font-family: Figtree, sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #fdeef3;
        }
        .article-list {
          list-style: none;
          padding: 0;
          margin: 0.75rem 0;
          space-y: 0.5rem;
        }
        .article-list li {
          padding-left: 1.25rem;
          position: relative;
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
        }
        .article-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D4336E;
        }
      `}</style>
    </>
  );
}
