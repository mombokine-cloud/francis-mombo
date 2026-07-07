import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ostéopathe en urgence à Montpellier : torticolis, blocage, lombalgie aiguë",
  description:
    "Vous avez un dos bloqué, un torticolis ou une douleur aiguë ? Francis MOMBO, ostéopathe à Castelnau-le-Lez, prend en charge les urgences ostéopathiques rapidement.",
  keywords: [
    "ostéopathe urgence Montpellier",
    "dos bloqué ostéopathe",
    "torticolis ostéopathe Castelnau-le-Lez",
    "lombalgie aiguë ostéopathie",
    "rendez-vous ostéopathe urgent",
    "déblocage dos Montpellier",
  ],
  alternates: { canonical: "https://www.mombofrancis.com/osteopathie-urgences" },
  openGraph: {
    title: "Ostéopathe en urgence à Montpellier : torticolis, blocage, lombalgie aiguë",
    description: "Dos bloqué, torticolis, douleur aiguë ? Consultation ostéopathique urgente à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.",
    url: "https://www.mombofrancis.com/osteopathie-urgences",
    type: "article",
  },
};

const faq = [
  { q: "Peut-on consulter en urgence sans rendez-vous ?", a: "Nous essayons de proposer des créneaux en urgence selon les disponibilités. Contactez le cabinet par téléphone au 06 50 14 91 92 ou via Doctolib pour un rendez-vous rapide." },
  { q: "Faut-il consulter un médecin avant l'ostéopathe en cas de douleur aiguë ?", a: "En cas de traumatisme important, de douleur avec signes neurologiques (fourmillements, perte de force) ou de fièvre associée, un avis médical préalable est recommandé." },
  { q: "Combien de séances faut-il pour un blocage ?", a: "Dans la plupart des cas, 1 à 2 séances suffisent pour lever un blocage aigu. Un suivi peut être proposé selon la cause et les antécédents." },
  { q: "L'ostéopathie est-elle efficace pour les torticolis ?", a: "Oui, le torticolis est l'une des indications les plus fréquentes et les plus efficacement traitées par l'ostéopathie." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Urgences</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ostéopathie en urgence à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Un dos bloqué, un torticolis, une douleur aiguë qui vous empêche de bouger ? Francis MOMBO propose des consultations en urgence à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers pour vous soulager rapidement.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />
        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Quand consulter en urgence ?</h2>
            <p>Certaines douleurs nécessitent une prise en charge rapide. L'ostéopathie peut intervenir en urgence pour :</p>
            <ul className="article-list">
              <li>lombalgie aiguë (dos bloqué, lumbago) ;</li>
              <li>torticolis aigu ;</li>
              <li>blocage cervical ou dorsal suite à un faux mouvement ;</li>
              <li>douleur après un effort, une chute ou un choc ;</li>
              <li>sciatique ou cruralgie débutante ;</li>
              <li>douleur intercostale (point de côté persistant).</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Le dos bloqué : causes et prise en charge</h2>
            <p>Le dos bloqué (ou lumbago) survient souvent après un faux mouvement, un effort de soulèvement ou simplement au réveil. La douleur est vive, localisée dans le bas du dos, et peut rendre tout mouvement difficile.</p>
            <p>L'ostéopathie intervient pour libérer les structures en tension, réduire le spasme musculaire et restaurer la mobilité. Dans la majorité des cas, une séance suffit à obtenir un soulagement significatif.</p>
          </section>

          <section>
            <h2 className="article-h2">Le torticolis : intervention rapide</h2>
            <p>Le torticolis se manifeste par une douleur cervicale soudaine avec limitation des mouvements de la tête. Il peut survenir après une nuit dans une mauvaise position, un courant d'air ou un mouvement brusque.</p>
            <p>L'ostéopathie est particulièrement efficace sur cette indication : les techniques douces de mobilisation cervicale et de travail myofascial permettent souvent de lever le blocage dès la première séance.</p>
          </section>

          <section>
            <h2 className="article-h2">Douleur aiguë après un effort ou une blessure</h2>
            <p>Suite à une activité sportive, un effort inhabituel ou une mauvaise posture prolongée, des douleurs aiguës peuvent s'installer. L'ostéopathie peut intervenir rapidement pour :</p>
            <ul className="article-list">
              <li>réduire l'inflammation fonctionnelle ;</li>
              <li>lever les tensions musculaires et fasciales ;</li>
              <li>améliorer la mobilité articulaire ;</li>
              <li>éviter l'installation de compensations durables.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Quand l'ostéopathie ne suffit pas</h2>
            <p>Certains signes doivent conduire à consulter un médecin en priorité avant de voir un ostéopathe :</p>
            <ul className="article-list">
              <li>douleur avec fièvre, frissons ou perte de poids ;</li>
              <li>traumatisme important (chute, accident) ;</li>
              <li>fourmillements, perte de force ou troubles urinaires associés ;</li>
              <li>douleur qui ne cède pas au repos.</li>
            </ul>
            <p>Dans ces cas, un bilan médical est indispensable avant toute manipulation.</p>
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
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Douleur aiguë ? Appelez ou réservez en ligne</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">06 50 14 91 92 — Castelnau-le-Lez & Saint-Mathieu-de-Tréviers</p>
          <a href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
          </a>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
