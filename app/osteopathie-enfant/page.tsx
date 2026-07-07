import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ostéopathie pour enfant et nourrisson à Montpellier — Castelnau-le-Lez",
  description:
    "Francis MOMBO, ostéopathe à Castelnau-le-Lez, prend en charge les nourrissons, enfants et adolescents : coliques, plagiocéphalie, troubles du sommeil, scoliose, sport.",
  keywords: [
    "ostéopathe enfant Montpellier",
    "ostéopathie nourrisson Castelnau-le-Lez",
    "ostéopathe bébé Montpellier",
    "coliques nourrisson ostéopathie",
    "plagiocéphalie ostéopathe",
    "ostéopathie adolescent sport",
    "scoliose enfant ostéopathie",
  ],
  alternates: { canonical: "https://www.mombofrancis.com/osteopathie-enfant" },
  openGraph: {
    title: "Ostéopathie pour enfant et nourrisson à Montpellier",
    description: "Prise en charge ostéopathique des nourrissons, enfants et adolescents à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.",
    url: "https://www.mombofrancis.com/osteopathie-enfant",
    type: "article",
  },
};

const faq = [
  { q: "À quel âge peut-on emmener son bébé chez l'ostéopathe ?", a: "Dès les premiers jours de vie. Une consultation précoce après l'accouchement permet d'identifier d'éventuelles tensions crâniennes ou cervicales liées à la naissance." },
  { q: "Les manipulations sont-elles douces pour les bébés ?", a: "Oui, les techniques utilisées chez le nourrisson sont très douces, sans manipulation brusque. Elles consistent principalement en un travail de décompression crânienne et de mobilisation fasciale légère." },
  { q: "L'ostéopathie aide-t-elle contre les coliques ?", a: "Oui, l'ostéopathie peut réduire les tensions abdominales et améliorer la motilité digestive chez le nourrisson, ce qui soulage souvent les coliques." },
  { q: "Faut-il une ordonnance pour consulter ?", a: "Non, l'ostéopathie est accessible en accès direct, sans ordonnance médicale." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Enfant & Nourrisson</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathie pour enfant et nourrisson à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            De la naissance à l'adolescence, l'ostéopathie accompagne le développement de l'enfant, soulage les inconforts des premiers mois et prévient les déséquilibres liés à la croissance ou à la pratique sportive.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Ostéopathie du nourrisson (0 à 18 mois)</h2>
            <p>La naissance, même sans complication, soumet le crâne et la colonne du nouveau-né à des contraintes mécaniques importantes. Une consultation ostéopathique précoce peut aider à :</p>
            <ul className="article-list">
              <li>libérer les tensions crâniennes suite à l'accouchement ;</li>
              <li>traiter la plagiocéphalie (tête plate) ;</li>
              <li>soulager les coliques, régurgitations et troubles digestifs ;</li>
              <li>corriger un torticolis congénital ;</li>
              <li>améliorer la qualité du sommeil ;</li>
              <li>accompagner les difficultés d'allaitement (succion, déglutition).</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Enfant en croissance (2 à 12 ans)</h2>
            <p>La croissance rapide peut générer des déséquilibres posturaux, des douleurs de croissance ou des troubles fonctionnels. L'ostéopathie peut accompagner :</p>
            <ul className="article-list">
              <li>les douleurs de croissance aux membres inférieurs ;</li>
              <li>les attitudes scoliotiques et déséquilibres posturaux ;</li>
              <li>les maux de tête récurrents ;</li>
              <li>les troubles de l'attention liés à des tensions crâniennes ;</li>
              <li>les douleurs abdominales fonctionnelles ;</li>
              <li>les blessures liées à la pratique sportive.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Adolescent et sport intensif</h2>
            <p>L'adolescence est une période de croissance rapide souvent associée à une pratique sportive intensive. Les contraintes mécaniques répétées sur un squelette en formation peuvent provoquer :</p>
            <ul className="article-list">
              <li>maladie d'Osgood-Schlatter (genou) ;</li>
              <li>maladie de Sever (talon) ;</li>
              <li>scoliose idiopathique de l'adolescent ;</li>
              <li>tendinopathies et surmenage articulaire ;</li>
              <li>douleurs lombaires liées à la croissance.</li>
            </ul>
            <p>Un suivi ostéopathique régulier permet d'accompagner la croissance, de détecter précocement les déséquilibres et de prévenir les blessures.</p>
          </section>

          <section>
            <h2 className="article-h2">Comment se déroule une consultation pour un enfant ?</h2>
            <p>La séance est adaptée à l'âge et au tempérament de l'enfant. Pour les nourrissons, les techniques sont très douces et souvent réalisées pendant que le bébé dort ou tète. Pour les enfants plus grands, le bilan est réalisé sous forme de jeu, dans un cadre rassurant. Les parents sont présents durant toute la consultation.</p>
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
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Prenez soin de votre enfant dès le départ</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Consultations nourrissons, enfants et adolescents à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.</p>
          <a href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
