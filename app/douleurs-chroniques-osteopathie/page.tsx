import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathie et Douleurs Chroniques Montpellier | Francis MOMBO",
  description:
    "Ostéopathie pour les douleurs chroniques à Montpellier et Castelnau-le-Lez : lombalgies chroniques, fibromyalgie, migraines de tension, douleurs neuropathiques. Approche globale et durable.",
  keywords: [
    "douleurs chroniques ostéopathie Montpellier",
    "ostéopathe lombalgies chroniques",
    "fibromyalgie ostéopathie Montpellier",
    "migraines tension ostéopathe",
    "douleurs persistantes ostéopathe Castelnau",
    "ostéopathie maladies chroniques Montpellier",
    "douleur chronique prise en charge",
    "hypnose douleur chronique Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/douleurs-chroniques-osteopathie` },
  openGraph: {
    title: "Ostéopathie et Douleurs Chroniques | Montpellier | Francis MOMBO",
    description: "Prise en charge des douleurs chroniques à Montpellier : lombalgies, fibromyalgie, migraines de tension. Ostéopathie et hypnose thérapeutique.",
    url: `${siteUrl}/douleurs-chroniques-osteopathie`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.png`, width: 1200, height: 630, alt: "Ostéopathie douleurs chroniques Montpellier" }],
  },
};

const faqItems = [
  { q: "L'ostéopathie peut-elle vraiment aider contre les douleurs chroniques ?", a: "L'ostéopathie ne guérit pas les maladies chroniques, mais elle peut contribuer à réduire l'intensité et la fréquence des douleurs, améliorer la mobilité et la qualité de vie, et traiter les tensions mécaniques qui amplifient la douleur. Elle s'intègre dans une approche globale et pluridisciplinaire." },
  { q: "Combien de séances sont nécessaires pour une douleur chronique ?", a: "Les douleurs chroniques nécessitent généralement un suivi régulier plutôt qu'une prise en charge ponctuelle. Un rythme de 1 à 2 séances par mois en phase active, puis une séance de maintenance tous les 2 à 3 mois, est souvent adapté. Le plan de soins est discuté dès la première consultation." },
  { q: "L'hypnose thérapeutique peut-elle compléter l'ostéopathie dans la douleur chronique ?", a: "Oui. Francis MOMBO pratique l'hypnose thérapeutique en complément de l'ostéopathie, notamment pour la gestion de la douleur, la réduction du stress et l'amélioration du sommeil — trois facteurs qui influencent directement l'intensité de la douleur chronique." },
  { q: "La fibromyalgie peut-elle être traitée par ostéopathie ?", a: "L'ostéopathie n'est pas un traitement de la fibromyalgie. Elle peut cependant contribuer à soulager certaines tensions musculaires, améliorer le sommeil et réduire l'hyperalgésie locale dans le cadre d'un suivi pluridisciplinaire." },
  { q: "Est-ce douloureux pour quelqu'un qui souffre déjà beaucoup ?", a: "Non. En cas de douleur chronique, les techniques utilisées sont adaptées à la sensibilité du patient — légères, progressives et sans manipulation brusque. L'objectif est d'apporter du confort, pas d'aggraver l'inconfort." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function DouleursChroniqueOsteopathie() {
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Douleurs chroniques</span>
            <span className="text-xs text-gray-400">Ostéopathie · Hypnose · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>Ostéopathie et douleurs chroniques à Montpellier</h1>
          <p className="text-gray-500 text-lg leading-relaxed">Les douleurs chroniques — qui durent plus de 3 mois — affectent profondément la qualité de vie. L'ostéopathie, combinée si nécessaire à l'hypnose thérapeutique, offre une approche globale pour accompagner durablement les patients souffrant de lombalgies persistantes, de fibromyalgie, de migraines chroniques ou de douleurs neuropathiques.</p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Qu'est-ce qu'une douleur chronique ?</h2>
            <p>On parle de douleur chronique lorsqu'une douleur persiste au-delà de 3 mois, ou au-delà du temps de guérison habituel d'une lésion. Contrairement à la douleur aiguë qui est un signal d'alarme, la douleur chronique perd sa fonction protectrice et devient une pathologie à part entière, influencée par des facteurs mécaniques, neurologiques, psychologiques et comportementaux.</p>
            <p>Les douleurs chroniques les plus fréquentes pouvant bénéficier d'une approche ostéopathique incluent :</p>
            <ul className="article-list">
              <li>lombalgie chronique et cervicalgie chronique ;</li>
              <li>fibromyalgie ;</li>
              <li>migraines et céphalées chroniques de tension ;</li>
              <li>douleurs pelviennes chroniques ;</li>
              <li>névralgie cervico-brachiale et sciatique chronique ;</li>
              <li>douleurs liées à l'endométriose ;</li>
              <li>douleurs articulaires liées à l'arthrose.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Lombalgies chroniques : une prise en charge globale</h2>
            <p>La lombalgie chronique est l'une des causes les plus fréquentes de consultation en ostéopathie. Elle résulte souvent d'une combinaison de facteurs mécaniques (tensions musculaires, restrictions articulaires, déséquilibres posturaux), neurologiques et comportementaux (peur du mouvement, kinésiophobie).</p>
            <p>L'ostéopathie intervient pour :</p>
            <ul className="article-list">
              <li>réduire les tensions mécaniques locales et à distance ;</li>
              <li>améliorer la mobilité du rachis lombaire et du bassin ;</li>
              <li>traiter les compensations cervicales et dorsales ;</li>
              <li>rassurer sur la capacité du corps à bouger sans danger ;</li>
              <li>proposer des conseils de mouvement adaptés à la douleur chronique.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Fibromyalgie : l'accompagnement par l'ostéopathie</h2>
            <p>La fibromyalgie est un syndrome douloureux chronique diffus, associé à une fatigue intense, des troubles du sommeil et parfois des troubles cognitifs. L'ostéopathie n'est pas un traitement de la fibromyalgie, mais elle peut contribuer à :</p>
            <ul className="article-list">
              <li>réduire certaines tensions musculaires et fasciales ;</li>
              <li>améliorer le confort de sommeil en réduisant les tensions corporelles ;</li>
              <li>diminuer la sensibilité locale par des techniques douces ;</li>
              <li>soutenir le système nerveux autonome par des approches crânio-sacrées.</li>
            </ul>
            <p>L'hypnose thérapeutique peut compléter cette approche pour la gestion de la douleur, la réduction du stress et l'amélioration du sommeil.</p>
          </section>

          <section>
            <h2 className="article-h2">Migraines et céphalées chroniques</h2>
            <p>Les céphalées de tension chroniques et certaines migraines peuvent bénéficier d'une approche ostéopathique, notamment lorsqu'elles sont liées à des tensions cervicales, sous-occipitales ou temporo-mandibulaires. L'ostéopathie travaille sur :</p>
            <ul className="article-list">
              <li>les tensions musculaires cervicales et sous-occipitales ;</li>
              <li>la mobilité de l'articulation temporo-mandibulaire (ATM) ;</li>
              <li>les tensions crâniennes et les membranes de tension réciproque ;</li>
              <li>les déséquilibres posturaux qui génèrent des contraintes cervicales.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Hypnose thérapeutique et douleur chronique</h2>
            <p>Francis MOMBO pratique l'hypnose thérapeutique en complément de l'ostéopathie pour la prise en charge des douleurs chroniques. L'hypnose médicale est reconnue comme un outil efficace pour :</p>
            <ul className="article-list">
              <li>moduler la perception de la douleur (analgésie hypnotique) ;</li>
              <li>réduire l'anxiété et le stress liés à la douleur ;</li>
              <li>améliorer la qualité du sommeil ;</li>
              <li>travailler sur les représentations mentales de la douleur ;</li>
              <li>renforcer les ressources intérieures du patient face à la douleur.</li>
            </ul>
            <p>Les deux approches — ostéopathie et hypnose — peuvent être proposées dans la même séance ou lors de consultations séparées selon les besoins du patient.</p>
          </section>

          <section>
            <h2 className="article-h2">Douleurs articulaires et arthrose</h2>
            <p>L'arthrose est une pathologie dégénérative des cartilages articulaires. Si elle ne peut pas être "guérie" par l'ostéopathie, ses conséquences fonctionnelles (raideur, douleur, limitation du mouvement) peuvent être améliorées grâce à :</p>
            <ul className="article-list">
              <li>des mobilisations articulaires douces pour maintenir l'amplitude ;</li>
              <li>le travail sur les chaînes musculaires et les compensations posturales ;</li>
              <li>la réduction des tensions qui surchargent les articulations atteintes ;</li>
              <li>des conseils d'activité physique adaptée.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Une approche pluridisciplinaire</h2>
            <p>La prise en charge des douleurs chroniques est rarement efficace avec une seule approche thérapeutique. L'ostéopathie s'intègre dans un parcours qui peut inclure le suivi médical (médecin, rhumatologue, neurologue), la kinésithérapie, l'activité physique adaptée, la psychothérapie et les approches de gestion du stress. Francis MOMBO travaille en lien avec d'autres professionnels de santé pour assurer une cohérence de prise en charge.</p>
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
            <p>Vivre avec la douleur chronique est épuisant. L'ostéopathie, combinée à l'hypnose thérapeutique, offre une approche complémentaire pour améliorer le confort, la mobilité et la qualité de vie au quotidien. Francis MOMBO reçoit les patients souffrant de douleurs chroniques à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers, avec une écoute attentive et des techniques adaptées à chaque situation.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Voir aussi</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/urgences-osteopathie-montpellier", label: "Urgences ostéopathiques" },
              { href: "/osteopathie-seniors-montpellier", label: "Séniors" },
              { href: "/mal-de-dos-comprendre-prevenir", label: "Article : mal de dos" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Douleurs persistantes ? Agissons ensemble.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Ostéopathie et hypnose thérapeutique pour accompagner durablement les douleurs chroniques à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.</p>
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
