import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Récupération sportive et ostéopathie : optimisez vos performances",
  description:
    "L'ostéopathie du sport joue un rôle clé dans la récupération et la prévention des blessures. Découvrez comment elle peut améliorer vos performances sportives.",
  keywords: [
    "récupération sportive",
    "ostéopathie du sport",
    "prévention blessures sportives",
    "ostéopathe sportif Montpellier",
    "performance sportive",
    "kinésithérapeute sport",
    "soins sportifs Montpellier",
  ],
  alternates: {
    canonical: "https://www.mombofrancis.com/recuperation-sportive-osteopathie",
  },
  openGraph: {
    title: "Récupération sportive et ostéopathie : optimisez vos performances",
    description:
      "L'ostéopathie du sport joue un rôle clé dans la récupération et la prévention des blessures. Découvrez comment elle peut améliorer vos performances sportives.",
    url: "https://www.mombofrancis.com/recuperation-sportive-osteopathie",
    type: "article",
  },
};

const faqItems = [
  {
    q: "À quelle fréquence consulter un ostéopathe quand on fait du sport ?",
    a: "Pour un sportif régulier, une consultation tous les 2 à 3 mois est recommandée en prévention. En période de compétition intensive, une séance avant et après peut optimiser les résultats.",
  },
  {
    q: "L'ostéopathie peut-elle remplacer la kinésithérapie sportive ?",
    a: "Non, les deux approches sont complémentaires. La kinésithérapie travaille sur la rééducation fonctionnelle tandis que l'ostéopathie s'intéresse aux restrictions de mobilité globales. Francis MOMBO combine les deux expertises.",
  },
  {
    q: "Peut-on consulter juste avant une compétition ?",
    a: "Oui, mais idéalement 48 à 72h avant pour laisser le corps intégrer les ajustements. Une séance trop proche de la compétition peut parfois générer une légère fatigue passagère.",
  },
  {
    q: "L'ostéopathie aide-t-elle à récupérer après une blessure sportive ?",
    a: "Oui, en complément du traitement médical, l'ostéopathie accélère la récupération en levant les tensions compensatoires et en améliorant la circulation locale.",
  },
];

export default function ArticleRecuperationSportive() {
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>
              Sport
            </span>
            <span className="text-xs text-gray-400">3 juin 2025 · 4 min de lecture</span>
          </div>
          <h1
            className="font-black text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}
          >
            Optimisez votre récupération sportive grâce à l'ostéopathie
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            L'ostéopathie du sport ne sert pas uniquement à traiter les blessures. Elle joue un rôle majeur dans la
            récupération et l'optimisation des performances sportives. Que vous soyez sportif amateur ou de haut
            niveau, une prise en charge ostéopathique adaptée peut faire la différence.
          </p>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Qu'est-ce que l'ostéopathie du sport ?</h2>
            <p>
              L'ostéopathie du sport est une approche manuelle qui s'intéresse à la mobilité globale du corps du
              sportif. Elle identifie et traite les restrictions articulaires, musculaires et fasciales qui peuvent
              limiter la performance, favoriser les compensations ou exposer à un risque accru de blessure.
            </p>
            <p>
              Contrairement à une idée reçue, l'ostéopathe ne traite pas uniquement en cas de douleur. Son rôle
              préventif est tout aussi important, notamment en période d'entraînement intensif ou de compétition.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Récupération sportive : pourquoi consulter ?</h2>
            <p>
              Après un effort intense, le corps accumule des tensions. Les muscles, les fascias et les articulations
              peuvent rester en état de contraction, ce qui ralentit la récupération musculaire et augmente le risque
              de blessure lors de la prochaine séance. L'ostéopathie intervient pour :
            </p>
            <ul className="article-list">
              <li>lever les tensions résiduelles post-effort ;</li>
              <li>améliorer la circulation sanguine et lymphatique ;</li>
              <li>restaurer la mobilité articulaire ;</li>
              <li>rééquilibrer les chaînes musculaires ;</li>
              <li>favoriser un sommeil récupérateur en réduisant les tensions nerveuses.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Prévention des blessures sportives</h2>
            <p>
              De nombreuses blessures sportives résultent de compensations progressives non détectées. Un genou qui
              compense une raideur de hanche, une épaule qui surcompense une restriction thoracique... Ces
              déséquilibres silencieux finissent par créer des surcharges locales qui mènent à la blessure.
            </p>
            <p>
              Un bilan ostéopathique régulier permet d'identifier ces schémas compensatoires avant qu'ils ne
              deviennent problématiques, et d'adapter l'accompagnement en conséquence.
            </p>
          </section>

          <section>
            <h2 className="article-h2">L'expérience du sport de haut niveau</h2>
            <p>
              Fort de ses années aux côtés des athlètes professionnels — kiné et ostéopathe officiel du{" "}
              <strong>MHSC VB pendant 9 saisons</strong>, accompagnateur de l'<strong>Équipe de France de
              volley-ball</strong> jusqu'aux Championnats du Monde — Francis MOMBO applique au cabinet les mêmes
              protocoles de récupération et de prévention utilisés avec les sportifs d'élite.
            </p>
            <p>
              Cette expérience unique lui permet de comprendre les contraintes spécifiques du sport de compétition
              et d'adapter chaque prise en charge au profil, à la discipline et aux objectifs de chaque patient.
            </p>
          </section>

          <section>
            <h2 className="article-h2">Quels sportifs peuvent bénéficier de l'ostéopathie ?</h2>
            <p>L'ostéopathie du sport s'adresse à tous les profils :</p>
            <ul className="article-list">
              <li>sportifs amateurs pratiquant régulièrement (running, natation, tennis, cyclisme…) ;</li>
              <li>sportifs de compétition en période de préparation ou après compétition ;</li>
              <li>athlètes en rééducation après une blessure ;</li>
              <li>personnes reprenant le sport après une période d'arrêt ;</li>
              <li>enfants et adolescents en croissance pratiquant un sport intensif.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Comment se déroule une séance ?</h2>
            <p>
              La consultation débute par un bilan postural et fonctionnel : observation de la posture, des
              amplitudes de mouvement, des zones de tension. L'ostéopathe identifie les restrictions prioritaires
              à lever en lien avec la pratique sportive du patient.
            </p>
            <p>
              Les techniques utilisées sont douces et adaptées à l'état physique du moment — qu'il s'agisse d'une
              séance de récupération post-compétition ou d'un bilan préventif en cours de saison.
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
              L'ostéopathie du sport est un outil précieux pour tout sportif souhaitant performer durablement,
              récupérer plus vite et réduire son risque de blessure. Associée à la kinésithérapie et à une bonne
              hygiène de vie, elle constitue un pilier d'une préparation physique complète et équilibrée.
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
            Sportif ? Optimisez votre récupération.
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Francis MOMBO, ostéopathe D.O. et kinésithérapeute, met son expérience du sport de haut niveau
            au service de vos performances à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.
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
