import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ostéopathie pour seniors à Montpellier — arthrose, équilibre, mobilité",
  description:
    "L'ostéopathie accompagne les seniors pour maintenir la mobilité, soulager les douleurs articulaires, améliorer l'équilibre et prévenir les chutes. Cabinet à Castelnau-le-Lez.",
  keywords: [
    "ostéopathe senior Montpellier",
    "ostéopathie arthrose Castelnau-le-Lez",
    "ostéopathe personnes âgées",
    "mobilité senior ostéopathie",
    "prévention chutes ostéopathe",
    "douleurs articulaires senior ostéopathie",
  ],
  alternates: { canonical: "https://www.mombofrancis.com/osteopathie-seniors" },
  openGraph: {
    title: "Ostéopathie pour seniors à Montpellier — arthrose, équilibre, mobilité",
    description: "Accompagnement ostéopathique des seniors : mobilité, douleurs articulaires, équilibre et prévention des chutes.",
    url: "https://www.mombofrancis.com/osteopathie-seniors",
    type: "article",
  },
};

const faq = [
  { q: "L'ostéopathie est-elle sans risque pour les seniors ?", a: "Oui, les techniques sont entièrement adaptées à la fragilité osseuse et articulaire des personnes âgées. Il n'y a pas de manipulation brusque chez les patients présentant de l'ostéoporose ou des pathologies articulaires sévères." },
  { q: "À quelle fréquence consulter ?", a: "En général, une consultation tous les 2 à 3 mois suffit pour maintenir la mobilité et prévenir les déséquilibres. La fréquence est adaptée selon l'état de santé et les objectifs." },
  { q: "L'ostéopathie peut-elle aider après une chute ou une fracture ?", a: "Oui, après consolidation osseuse, l'ostéopathie peut aider à récupérer la mobilité, traiter les compensations et accompagner la reprise de l'activité." },
  { q: "Peut-on consulter en cas de pose de prothèse de hanche ou de genou ?", a: "Oui, après cicatrisation complète. L'ostéopathie aide à rééquilibrer les chaînes mécaniques et à accompagner la rééducation post-opératoire." },
];

export default function Page() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Retour au site
          </Link>
          <a href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo" target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous
          </a>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>Séniors</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathie pour seniors à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Avec l'âge, le corps accumule des tensions, les articulations perdent en souplesse et la mobilité diminue progressivement. L'ostéopathie offre aux seniors une approche douce pour maintenir leur autonomie, soulager les douleurs et améliorer leur qualité de vie.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Pourquoi consulter un ostéopathe après 60 ans ?</h2>
            <p>Le vieillissement s'accompagne de modifications progressives : raideur articulaire, perte de souplesse, fragilité osseuse, modifications posturales. L'ostéopathie peut aider à :</p>
            <ul className="article-list">
              <li>maintenir la mobilité articulaire et musculaire ;</li>
              <li>soulager les douleurs liées à l'arthrose ;</li>
              <li>améliorer l'équilibre et la proprioception ;</li>
              <li>prévenir les chutes et leurs conséquences ;</li>
              <li>accompagner la récupération après une fracture ou une chirurgie.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Arthrose et douleurs articulaires</h2>
            <p>L'arthrose est la pathologie articulaire la plus fréquente chez les seniors. Elle touche principalement les genoux, les hanches, la colonne vertébrale et les mains. L'ostéopathie ne peut pas régénérer le cartilage, mais peut :</p>
            <ul className="article-list">
              <li>améliorer la mobilité des articulations adjacentes ;</li>
              <li>réduire les tensions musculaires compensatoires ;</li>
              <li>améliorer la vascularisation locale ;</li>
              <li>diminuer la douleur fonctionnelle au quotidien.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Équilibre et prévention des chutes</h2>
            <p>Les chutes sont une préoccupation majeure chez les personnes âgées. Elles résultent souvent d'une combinaison de facteurs : perte d'équilibre, raideur articulaire, troubles de la proprioception. L'ostéopathie peut contribuer à :</p>
            <ul className="article-list">
              <li>améliorer la mobilité du rachis et des membres inférieurs ;</li>
              <li>stimuler la proprioception et la coordination ;</li>
              <li>corriger les déséquilibres posturaux ;</li>
              <li>réduire les tensions qui perturbent l'axe d'équilibre.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Après une chirurgie orthopédique</h2>
            <p>Après une prothèse de hanche ou de genou, une fracture du col du fémur ou une autre intervention orthopédique, l'ostéopathie accompagne la rééducation en traitant les compensations mécaniques et en améliorant la récupération fonctionnelle globale.</p>
          </section>

          <section>
            <h2 className="article-h2">Techniques adaptées aux seniors</h2>
            <p>La prise en charge ostéopathique des seniors est toujours adaptée à l'état général du patient. Les techniques utilisées sont douces et privilégient :</p>
            <ul className="article-list">
              <li>les mobilisations articulaires passives et actives ;</li>
              <li>les techniques myofasciales et de détente ;</li>
              <li>l'approche viscérale douce ;</li>
              <li>les techniques crâniennes à visée neurologique.</li>
            </ul>
            <p>Aucune manipulation à haute vélocité n'est réalisée chez les patients présentant de l'ostéoporose avancée ou une fragilité osseuse.</p>
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

        <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Restez mobile, actif et autonome</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Consultations adaptées aux seniors à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.</p>
          <a href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
