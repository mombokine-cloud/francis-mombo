import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ostéopathie santé de la femme : fertilité, endométriose, cycles — Montpellier",
  description:
    "L'ostéopathie accompagne les femmes face à l'endométriose, les troubles de la fertilité, les douleurs de règles et les déséquilibres hormonaux. Cabinet à Castelnau-le-Lez.",
  keywords: [
    "ostéopathie endométriose Montpellier",
    "ostéopathe fertilité",
    "douleurs menstruelles ostéopathie",
    "santé de la femme ostéopathe Castelnau-le-Lez",
    "ostéopathie troubles gynécologiques",
    "SOPK ostéopathie",
    "ostéopathe femme Montpellier",
  ],
  alternates: { canonical: "https://www.mombofrancis.com/sante-femme-fertilite-endometriose" },
  openGraph: {
    title: "Ostéopathie santé de la femme : fertilité, endométriose, cycles — Montpellier",
    description: "Accompagnement ostéopathique des femmes : endométriose, fertilité, douleurs menstruelles, SOPK, ménopause.",
    url: "https://www.mombofrancis.com/sante-femme-fertilite-endometriose",
    type: "article",
  },
};

const faq = [
  { q: "L'ostéopathie peut-elle aider en cas d'endométriose ?", a: "L'ostéopathie ne traite pas l'endométriose en tant que telle, mais peut contribuer à réduire les douleurs pelviennes et les tensions liées à la maladie, en complément du suivi médical." },
  { q: "Peut-on consulter pendant les règles ?", a: "Oui, une consultation pendant les règles douloureuses peut être très utile. Les techniques utilisées sont adaptées à cet état." },
  { q: "L'ostéopathie aide-t-elle à tomber enceinte ?", a: "Elle ne remplace pas un bilan de fertilité médical, mais peut améliorer les conditions mécaniques et vasculaires pelviennes favorables à la conception, en complément d'un suivi spécialisé." },
  { q: "Combien de séances sont nécessaires ?", a: "Généralement 2 à 4 séances pour un premier bilan et une prise en charge initiale. Le rythme est ensuite adapté selon la pathologie et la réponse au traitement." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Santé de la femme</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathie et santé de la femme : fertilité, endométriose et cycles
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            L'ostéopathie offre un accompagnement doux et complémentaire pour les femmes confrontées à des troubles gynécologiques, des douleurs pelviennes chroniques ou des difficultés liées à la fertilité.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">L'ostéopathie et les douleurs menstruelles</h2>
            <p>Les douleurs de règles (dysménorrhée) touchent une grande partie des femmes. Elles peuvent être primaires — liées aux contractions utérines — ou secondaires, associées à une pathologie comme l'endométriose ou les fibromes.</p>
            <p>L'ostéopathie travaille sur les structures mécaniques qui peuvent amplifier ces douleurs :</p>
            <ul className="article-list">
              <li>tensions du sacrum et du bassin ;</li>
              <li>mobilité utérine et ligamentaire ;</li>
              <li>compression nerveuse locale ;</li>
              <li>tensions abdominales et diaphragmatiques ;</li>
              <li>déséquilibres posturaux globaux.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Endométriose : rôle de l'ostéopathie</h2>
            <p>L'endométriose est une maladie chronique qui provoque des douleurs pelviennes intenses, des adhérences et des tensions tissulaires profondes. L'ostéopathie ne traite pas la maladie elle-même, mais peut agir sur ses conséquences mécaniques :</p>
            <ul className="article-list">
              <li>libération des tensions pelviennes et viscérales ;</li>
              <li>amélioration de la vascularisation locale ;</li>
              <li>réduction des douleurs chroniques liées aux adhérences ;</li>
              <li>accompagnement avant et après chirurgie.</li>
            </ul>
            <p>Elle s'intègre dans une prise en charge pluridisciplinaire incluant le gynécologue, le médecin de la douleur et le kinésithérapeute périnéal.</p>
          </section>

          <section>
            <h2 className="article-h2">Fertilité et ostéopathie</h2>
            <p>Certaines restrictions mécaniques du bassin, de l'utérus ou des trompes peuvent influencer les conditions de la fertilité. L'ostéopathie peut améliorer :</p>
            <ul className="article-list">
              <li>la mobilité utérine et tubaire ;</li>
              <li>la vascularisation pelvienne ;</li>
              <li>la régulation du système nerveux autonome ;</li>
              <li>les tensions liées au stress et à l'anxiété.</li>
            </ul>
            <p>Elle est souvent proposée en complément d'un parcours PMA (FIV, insémination) pour optimiser les conditions mécaniques et réduire le stress associé.</p>
          </section>

          <section>
            <h2 className="article-h2">SOPK et déséquilibres hormonaux</h2>
            <p>Le syndrome des ovaires polykystiques (SOPK) entraîne des déséquilibres hormonaux, des cycles irréguliers et parfois des douleurs pelviennes. L'ostéopathie agit indirectement sur ces troubles en travaillant sur le système nerveux autonome, la mobilité viscérale et les tensions pelviennes chroniques.</p>
          </section>

          <section>
            <h2 className="article-h2">Ménopause et périménopause</h2>
            <p>La ménopause s'accompagne de nombreuses modifications corporelles : bouffées de chaleur, troubles du sommeil, douleurs articulaires, sécheresse et fragilité osseuse. L'ostéopathie peut contribuer à :</p>
            <ul className="article-list">
              <li>réduire les douleurs articulaires et musculaires ;</li>
              <li>améliorer la qualité du sommeil par un travail sur le système nerveux ;</li>
              <li>accompagner les transformations posturales liées à l'ostéoporose naissante.</li>
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
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Un accompagnement bienveillant et personnalisé</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Francis MOMBO reçoit les femmes dans ses cabinets de Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.</p>
          <a href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
