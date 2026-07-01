import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Hypnose thérapeutique à Montpellier — stress, douleur, phobies, sommeil",
  description:
    "Francis MOMBO, hypnothérapeute à Montpellier et Castelnau-le-Lez, accompagne les patients pour gérer le stress, les douleurs chroniques, les phobies et les troubles du sommeil grâce à l'hypnose médicale.",
  keywords: [
    "hypnose thérapeutique Montpellier",
    "hypnothérapeute Montpellier",
    "hypnose médicale Montpellier",
    "hypnose stress anxiété Montpellier",
    "hypnose douleur chronique Montpellier",
    "hypnose phobies Montpellier",
    "hypnose troubles du sommeil Montpellier",
    "hypnothérapeute Castelnau-le-Lez",
  ],
  alternates: { canonical: `${siteUrl}/hypnose-therapeutique-montpellier` },
  openGraph: {
    title: "Hypnose thérapeutique à Montpellier — Francis MOMBO",
    description: "Hypnose médicale à Montpellier et Castelnau-le-Lez : stress, douleurs chroniques, phobies, troubles du sommeil, blocages émotionnels.",
    url: `${siteUrl}/hypnose-therapeutique-montpellier`,
    type: "article",
  },
};

const faq = [
  { q: "L'hypnose est-elle dangereuse ?", a: "Non. L'hypnose thérapeutique est un état de conscience modifié naturel, similaire à la rêverie. Le patient reste conscient, garde le contrôle et ne peut pas être forcé à faire quoi que ce soit contre sa volonté." },
  { q: "Combien de séances faut-il ?", a: "Cela dépend de l'objectif. Certains troubles (phobies simples, arrêt du tabac) peuvent être traités en 1 à 3 séances. Des problématiques plus profondes (douleur chronique, anxiété généralisée) nécessitent un suivi plus long." },
  { q: "Est-ce que tout le monde peut être hypnotisé ?", a: "La grande majorité des personnes peut bénéficier de l'hypnose. Le degré de suggestibilité varie, mais une bonne alliance thérapeutique et une motivation sincère suffisent dans la plupart des cas." },
  { q: "L'hypnose remplace-t-elle un suivi psychiatrique ou psychologique ?", a: "Non, elle s'inscrit en complément. Francis MOMBO oriente vers un professionnel de santé mentale si la situation le nécessite." },
  { q: "Peut-on combiner hypnose et ostéopathie dans la même séance ?", a: "Oui. Les deux approches sont complémentaires : l'ostéopathie libère les tensions corporelles, l'hypnose agit sur les dimensions psycho-émotionnelles. Francis MOMBO peut les intégrer selon les besoins." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Hypnose</span>
            <span className="text-xs text-gray-400">Hypnose thérapeutique · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Hypnose thérapeutique à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            L'hypnose thérapeutique est une approche complémentaire qui permet d'accéder aux ressources inconscientes pour dépasser des blocages, gérer la douleur, réduire le stress ou modifier des comportements limitants. Francis MOMBO est formé à l'hypnose médicale et à la thérapie brève orientée solution, et reçoit à Montpellier et Castelnau-le-Lez.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Qu'est-ce que l'hypnose thérapeutique ?</h2>
            <p>L'hypnose est un état de conscience modifié naturel — proche de la rêverie ou de la concentration profonde — dans lequel le patient reste conscient et garde le contrôle. Cet état favorise l'accès à l'inconscient, permettant de :</p>
            <ul className="article-list">
              <li>modifier des perceptions douloureuses ;</li>
              <li>désamorcer des réponses émotionnelles automatiques ;</li>
              <li>renforcer des ressources intérieures ;</li>
              <li>travailler sur des habitudes ou des comportements limitants.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Gestion du stress et de l'anxiété</h2>
            <p>L'anxiété chronique et le stress s'inscrivent dans le corps : tensions musculaires, troubles digestifs, fatigue, troubles du sommeil. L'hypnose agit sur la régulation du système nerveux autonome pour :</p>
            <ul className="article-list">
              <li>réduire l'hyperactivation du système nerveux sympathique ;</li>
              <li>installer des ancrages de calme et de sécurité intérieure ;</li>
              <li>modifier les schémas de pensée anxiogènes ;</li>
              <li>améliorer la gestion des situations de stress aigu.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Douleurs chroniques et hypnoanalgésie</h2>
            <p>L'hypnose est reconnue dans la littérature scientifique comme outil d'hypnoanalgésie. Elle est utilisée en milieu hospitalier pour la gestion de la douleur lors de soins, mais aussi en cabinet pour les douleurs chroniques :</p>
            <ul className="article-list">
              <li>fibromyalgie et douleurs diffuses ;</li>
              <li>migraines et céphalées de tension ;</li>
              <li>douleurs lombaires et cervicales chroniques ;</li>
              <li>douleurs liées à l'endométriose ;</li>
              <li>douleurs post-opératoires persistantes.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Troubles du sommeil</h2>
            <p>L'insomnie est souvent liée à une hyperactivation mentale au moment du coucher. L'hypnose peut aider à :</p>
            <ul className="article-list">
              <li>réduire les ruminations et les pensées intrusives ;</li>
              <li>installer des rituels hypnotiques d'endormissement ;</li>
              <li>améliorer la qualité des cycles de sommeil ;</li>
              <li>traiter les réveils nocturnes liés au stress.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Phobies et blocages émotionnels</h2>
            <p>Les phobies (peur du sang, des aiguilles, des espaces clos, de l'avion…) et les blocages émotionnels répondent bien à l'hypnose en thérapie brève. Les techniques utilisées permettent de :</p>
            <ul className="article-list">
              <li>désensibiliser la réponse émotionnelle associée au stimulus phobique ;</li>
              <li>reconstruire des associations positives ;</li>
              <li>travailler sur les expériences fondatrices du blocage.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Hypnose et performance sportive</h2>
            <p>L'hypnose est de plus en plus utilisée dans la préparation mentale des sportifs. Elle permet de travailler la concentration, la gestion du stress de compétition, la confiance en soi et la récupération psychologique.</p>
            <p className="mt-3">
              <Link href="/hypnose-sport-montpellier" className="font-semibold underline" style={{ color: "#D4336E" }}>
                Découvrir la page dédiée : Hypnose & performance sportive à Montpellier →
              </Link>
            </p>
          </section>

          <section>
            <h2 className="article-h2">Déroulement d'une séance</h2>
            <p>La séance débute par un entretien pour définir l'objectif thérapeutique. L'induction hypnotique est ensuite guidée par la voix de Francis MOMBO. Le travail thérapeutique se déroule dans cet état de conscience modifié, puis une phase de retour progressif clôture la séance. Durée : 45 à 60 minutes. Cabinet à Castelnau-le-Lez, à deux pas de Montpellier.</p>
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
            <Link href="/hypnose-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Hypnose & sport Montpellier</Link>
            <Link href="/maladies-chroniques-osteopathie" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Maladies chroniques</Link>
            <Link href="/osteopathie-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie du sport</Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Libérez votre potentiel intérieur</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Séances d'hypnose thérapeutique à Montpellier — cabinet de Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.</p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
