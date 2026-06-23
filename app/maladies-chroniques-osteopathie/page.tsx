import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ostéopathie et maladies chroniques à Montpellier — douleur, fibromyalgie, stress",
  description:
    "L'ostéopathie accompagne les personnes souffrant de maladies chroniques : fibromyalgie, douleurs chroniques, troubles du sommeil, stress, anxiété. Cabinet à Castelnau-le-Lez.",
  keywords: [
    "ostéopathie maladies chroniques Montpellier",
    "fibromyalgie ostéopathe",
    "douleurs chroniques ostéopathie",
    "ostéopathe stress anxiété",
    "troubles du sommeil ostéopathie",
    "ostéopathe Castelnau-le-Lez douleur chronique",
  ],
  alternates: { canonical: "https://mombofrancis.com/maladies-chroniques-osteopathie" },
  openGraph: {
    title: "Ostéopathie et maladies chroniques à Montpellier",
    description: "Accompagnement ostéopathique des douleurs chroniques, fibromyalgie, stress, troubles du sommeil à Montpellier.",
    url: "https://mombofrancis.com/maladies-chroniques-osteopathie",
    type: "article",
  },
};

const faq = [
  { q: "L'ostéopathie peut-elle guérir une maladie chronique ?", a: "Non, l'ostéopathie ne guérit pas les maladies chroniques. Elle peut contribuer à réduire certains symptômes, améliorer la qualité de vie et compléter le suivi médical." },
  { q: "Combien de séances sont nécessaires pour les douleurs chroniques ?", a: "Les maladies chroniques nécessitent généralement un suivi régulier sur le long terme. Les séances sont espacées selon l'évolution et les besoins de chaque patient." },
  { q: "L'ostéopathie est-elle compatible avec mes traitements médicaux ?", a: "Oui, l'ostéopathie est complémentaire aux traitements médicaux. Il est important d'informer votre ostéopathe de vos traitements en cours." },
  { q: "L'hypnose est-elle utile pour les douleurs chroniques ?", a: "Oui, l'hypnose thérapeutique est un outil reconnu dans la gestion de la douleur chronique. Francis MOMBO est formé à l'hypnose médicale et peut l'intégrer à la prise en charge." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Maladies chroniques</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathie et maladies chroniques
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Vivre avec une douleur chronique, une maladie de longue durée ou un stress persistant est épuisant. L'ostéopathie offre un accompagnement complémentaire pour améliorer le confort de vie, réduire certains symptômes et soutenir l'équilibre global du corps et de l'esprit.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Fibromyalgie et douleurs diffuses</h2>
            <p>La fibromyalgie se caractérise par des douleurs musculaires diffuses, une fatigue chronique et des troubles du sommeil. L'ostéopathie peut apporter un soulagement en :</p>
            <ul className="article-list">
              <li>réduisant les tensions musculaires et fasciales ;</li>
              <li>améliorant la circulation sanguine et lymphatique ;</li>
              <li>régulant le système nerveux autonome ;</li>
              <li>diminuant la sensibilité douloureuse par un travail doux et progressif.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Stress, anxiété et troubles du sommeil</h2>
            <p>Le stress chronique génère des tensions corporelles persistantes qui entretiennent le cercle vicieux douleur-stress. L'ostéopathie, combinée à l'hypnose médicale, peut :</p>
            <ul className="article-list">
              <li>libérer les tensions du diaphragme et du rachis liées au stress ;</li>
              <li>réguler le système nerveux autonome (parasympathique) ;</li>
              <li>améliorer la qualité du sommeil ;</li>
              <li>réduire les manifestations somatiques du stress (maux de tête, douleurs cervicales, troubles digestifs).</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Maladies rhumatismales (arthrose, polyarthrite)</h2>
            <p>Les maladies articulaires chroniques comme l'arthrose ou la polyarthrite rhumatoïde peuvent bénéficier d'un accompagnement ostéopathique adapté pour :</p>
            <ul className="article-list">
              <li>maintenir la mobilité articulaire résiduelle ;</li>
              <li>réduire les compensations douloureuses ;</li>
              <li>améliorer le confort de vie au quotidien ;</li>
              <li>prévenir l'aggravation des déséquilibres posturaux.</li>
            </ul>
            <p>Les techniques utilisées sont toujours adaptées à la fragilité articulaire du patient et ne comprennent pas de manipulations à haute vélocité en cas de contre-indication.</p>
          </section>

          <section>
            <h2 className="article-h2">Migraines et céphalées chroniques</h2>
            <p>Les migraines récurrentes et les céphalées de tension sont souvent associées à des tensions cervicales, crâniennes et du système nerveux autonome. L'ostéopathie peut réduire la fréquence et l'intensité des crises en travaillant sur ces tensions.</p>
          </section>

          <section>
            <h2 className="article-h2">L'hypnose médicale en complément</h2>
            <p>Francis MOMBO est formé à l'hypnose médicale et à la thérapie brève. Dans le cadre des maladies chroniques, l'hypnose peut être intégrée à la séance pour :</p>
            <ul className="article-list">
              <li>gérer la douleur chronique par modulation neurologique ;</li>
              <li>réduire l'anxiété et le stress associés ;</li>
              <li>améliorer le sommeil ;</li>
              <li>travailler sur les phobies ou blocages émotionnels.</li>
            </ul>
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
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Reprenez le contrôle de votre confort de vie</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Ostéopathie et hypnose médicale à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.</p>
          <a href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
