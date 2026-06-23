import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ostéopathie et grossesse : accompagnement féminin naturel",
  description:
    "L'ostéopathie accompagne les femmes à chaque étape : grossesse, post-partum, douleurs pelviennes, troubles hormonaux. Un soin doux et adapté pour l'équilibre féminin.",
  keywords: [
    "ostéopathie grossesse",
    "équilibre féminin ostéopathie",
    "ostéopathe femme Montpellier",
    "douleurs pelviennes",
    "post-partum ostéopathie",
    "troubles hormonaux ostéopathie",
    "ostéopathie Castelnau-le-Lez",
  ],
  alternates: {
    canonical: "https://www.mombofrancis.com/osteopathie-grossesse-equilibre-feminin",
  },
  openGraph: {
    title: "Ostéopathie et grossesse : accompagnement féminin naturel",
    description:
      "L'ostéopathie accompagne les femmes à chaque étape : grossesse, post-partum, douleurs pelviennes, troubles hormonaux.",
    url: "https://www.mombofrancis.com/osteopathie-grossesse-equilibre-feminin",
    type: "article",
  },
};

const faqItems = [
  {
    q: "À partir de quel mois de grossesse peut-on consulter ?",
    a: "L'ostéopathie est possible dès le premier trimestre. Les techniques sont adaptées à chaque stade de la grossesse. Une consultation au 2ème et au 3ème trimestre est particulièrement bénéfique pour préparer le bassin à l'accouchement.",
  },
  {
    q: "Les manipulations sont-elles sans risque pendant la grossesse ?",
    a: "Oui, à condition que l'ostéopathe soit formé à la prise en charge des femmes enceintes. Les techniques utilisées sont douces, sans manipulation brusque, et adaptées à l'état de grossesse.",
  },
  {
    q: "Quand consulter après l'accouchement ?",
    a: "Idéalement entre 6 et 8 semaines après un accouchement par voie basse, ou après cicatrisation complète en cas de césarienne. Une séance précoce aide à rééquilibrer le bassin et à accompagner la récupération.",
  },
  {
    q: "L'ostéopathie peut-elle aider contre les douleurs de règles ?",
    a: "Oui, l'ostéopathie peut contribuer à réduire les tensions pelviennes qui amplifient les douleurs menstruelles, en travaillant sur la mobilité du sacrum, de l'utérus et des structures environnantes.",
  },
];

export default function ArticleOsteopathieGrossesse() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
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
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>
              Équilibre féminin
            </span>
            <span className="text-xs text-gray-400">8 avril 2026 · 6 min de lecture</span>
          </div>
          <h1
            className="font-black text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}
          >
            Ostéopathie et grossesse : ce qu'il faut savoir
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            La grossesse entraîne de nombreuses transformations corporelles. L'ostéopathie accompagne les futures
            mamans de façon douce et sécurisée pour un meilleur confort à chaque trimestre — et au-delà, dans
            la période post-partum et tout au long de la vie féminine.
          </p>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Pourquoi consulter un ostéopathe pendant la grossesse ?</h2>
            <p>
              Pendant la grossesse, le corps féminin subit des modifications profondes : prise de poids progressive,
              modification du centre de gravité, relâchement ligamentaire lié aux hormones, élargissement du bassin.
              Ces changements peuvent générer des <strong>douleurs lombaires</strong>, des tensions pelviennes,
              des sciatiques, des nausées ou encore des troubles digestifs.
            </p>
            <p>
              L'ostéopathie intervient pour accompagner ces transformations, soulager les inconforts et préparer
              le corps à l'accouchement dans les meilleures conditions possibles.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Quels troubles peut-on traiter pendant la grossesse ?</h2>
            <ul className="article-list">
              <li>douleurs lombaires et pelviennes ;</li>
              <li>sciatique et névralgie crurale ;</li>
              <li>nausées et reflux gastro-œsophagien ;</li>
              <li>tensions ligamentaires utérines ;</li>
              <li>douleurs pubienne (symphyse pubienne) ;</li>
              <li>troubles du sommeil liés aux tensions corporelles ;</li>
              <li>préparation du bassin à l'accouchement.</li>
            </ul>
            <p>
              Les techniques employées sont toujours douces, sans manipulation à haute vélocité, et adaptées
              au trimestre de grossesse et à l'état de la patiente.
            </p>
          </section>

          <section>
            <h2 className="article-h2">L'ostéopathie en post-partum</h2>
            <p>
              Après l'accouchement, le corps a besoin de récupérer. Le bassin, le périnée, le sacrum et le
              rachis lombaire ont été sollicités de façon intense. Une séance ostéopathique en post-partum
              permet de :
            </p>
            <ul className="article-list">
              <li>rééquilibrer le bassin et les sacro-iliaques ;</li>
              <li>accompagner la cicatrisation périnéale ou d'une épisiotomie ;</li>
              <li>traiter les douleurs cervicales liées à l'allaitement ;</li>
              <li>soulager les tensions dorsales dues aux soins du nourrisson ;</li>
              <li>en cas de césarienne, travailler sur la mobilité de la cicatrice.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Équilibre féminin au-delà de la maternité</h2>
            <p>
              L'ostéopathie accompagne les femmes à toutes les étapes de leur vie, pas seulement pendant la
              grossesse. Elle peut aider à soulager :
            </p>
            <ul className="article-list">
              <li>les douleurs menstruelles (dysménorrhée) ;</li>
              <li>les troubles liés à l'endométriose ;</li>
              <li>les inconforts liés à la ménopause ;</li>
              <li>les douleurs pelviennes chroniques ;</li>
              <li>les tensions liées au stress et aux émotions.</li>
            </ul>
            <p>
              En travaillant sur la mobilité des structures pelviennes, la vascularisation locale et le système
              nerveux autonome, l'ostéopathie contribue à un meilleur équilibre hormonal et émotionnel.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Comment se déroule une consultation ?</h2>
            <p>
              La séance commence par un entretien pour comprendre les antécédents, le terme de grossesse, les
              symptômes et les attentes. Un bilan postural et fonctionnel est ensuite réalisé.
            </p>
            <p>
              Les techniques utilisées sont adaptées : mobilisations douces, techniques myofasciales, travail
              viscéral doux, techniques crâniennes. La patiente reste habillée ou en tenue légère, dans une
              position confortable (assise, allongée sur le côté en fin de grossesse).
            </p>
            <p>
              Chaque séance dure environ 45 minutes à 1 heure, et s'adapte en temps réel à la réponse tissulaire
              de la patiente.
            </p>
          </section>

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

          <section>
            <h2 className="article-h2">Conclusion</h2>
            <p>
              L'ostéopathie est une alliée précieuse tout au long de la vie féminine. Pendant la grossesse,
              après l'accouchement ou pour accompagner les cycles féminins, elle offre un soin doux, naturel
              et individualisé. Un accompagnement adapté permet de traverser ces étapes avec plus de confort,
              de mobilité et de sérénité.
            </p>
          </section>
        </article>

        <div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>
            Francis MOMBO
          </p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Un accompagnement doux, adapté et bienveillant
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Francis MOMBO reçoit les femmes enceintes, les jeunes mamans et toutes les femmes souhaitant
            prendre soin de leur équilibre à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.
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
