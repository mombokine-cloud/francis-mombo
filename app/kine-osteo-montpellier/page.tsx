import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Kiné et ostéo Montpellier — Francis MOMBO, masseur-kinésithérapeute D.O.",
  description:
    "Francis MOMBO cumule les titres de masseur-kinésithérapeute et ostéopathe D.O. à Montpellier (Castelnau-le-Lez). Double expertise unique pour traiter douleurs, blessures sportives et rééducation.",
  keywords: [
    "kiné ostéo Montpellier",
    "kinésithérapeute ostéopathe Montpellier",
    "masseur kinésithérapeute Montpellier",
    "kiné et ostéopathe Castelnau-le-Lez",
    "kiné sport Montpellier",
    "rééducation ostéopathie Montpellier",
    "kiné ostéo sport haut niveau",
    "Francis MOMBO kinésithérapeute",
  ],
  alternates: { canonical: `${siteUrl}/kine-osteo-montpellier` },
  openGraph: {
    title: "Kiné & ostéo Montpellier — Francis MOMBO",
    description: "Double expertise kinésithérapie + ostéopathie à Montpellier. Rééducation, blessures sportives, douleurs chroniques.",
    url: `${siteUrl}/kine-osteo-montpellier`,
    type: "article",
  },
};

const faq = [
  { q: "Quelle est la différence entre un kiné et un ostéopathe ?", a: "Le kinésithérapeute est un professionnel de santé dont les actes sont remboursés par la Sécurité sociale sur prescription médicale. Il réalise de la rééducation fonctionnelle (massages, électrothérapie, exercices). L'ostéopathe traite les douleurs par des manipulations globales du corps, sans prescription. Francis MOMBO cumule les deux titres, offrant une prise en charge complète." },
  { q: "Les séances de kinésithérapie sont-elles remboursées ?", a: "Oui. Les séances de kinésithérapie sont remboursées par l'Assurance Maladie sur prescription médicale, selon la nomenclature des actes. Les séances d'ostéopathie, elles, sont prises en charge par de nombreuses mutuelles." },
  { q: "Faut-il une ordonnance pour consulter ?", a: "Pour la kinésithérapie : oui, une prescription médicale est nécessaire. Pour l'ostéopathie : non, vous pouvez consulter directement sans ordonnance." },
  { q: "Francis MOMBO pratique-t-il la rééducation sportive ?", a: "Oui, c'est l'une de ses spécialités. Il a accompagné pendant 9 saisons le MHSC VB (Champion de France 2022) et les équipes de la FFVB. Il prend en charge entorses, tendinites, fractures de fatigue, post-opératoire, préparation et récupération sportive." },
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
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>Kiné & Ostéo</span>
            <span className="text-xs text-gray-400">Double expertise · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Kinésithérapeute et ostéopathe à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Francis MOMBO est l'un des rares praticiens de la région à cumuler les diplômes de masseur-kinésithérapeute et d'ostéopathe D.O. Une double expertise qui offre une prise en charge globale, du soin aigu à la rééducation fonctionnelle.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        {/* Bloc double compétence */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="rounded-2xl p-6 border border-gray-100">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4336E" }}>Kinésithérapie</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span style={{ color: "#D4336E" }}>—</span>Remboursé Sécurité sociale</li>
              <li className="flex gap-2"><span style={{ color: "#D4336E" }}>—</span>Sur prescription médicale</li>
              <li className="flex gap-2"><span style={{ color: "#D4336E" }}>—</span>Rééducation fonctionnelle</li>
              <li className="flex gap-2"><span style={{ color: "#D4336E" }}>—</span>Massages thérapeutiques</li>
              <li className="flex gap-2"><span style={{ color: "#D4336E" }}>—</span>Post-opératoire</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 border border-gray-100">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8B2035" }}>Ostéopathie</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span style={{ color: "#8B2035" }}>—</span>Sans prescription</li>
              <li className="flex gap-2"><span style={{ color: "#8B2035" }}>—</span>Remboursé mutuelle</li>
              <li className="flex gap-2"><span style={{ color: "#8B2035" }}>—</span>Approche globale du corps</li>
              <li className="flex gap-2"><span style={{ color: "#8B2035" }}>—</span>Manipulation structurelle</li>
              <li className="flex gap-2"><span style={{ color: "#8B2035" }}>—</span>Prévention et bien-être</li>
            </ul>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Un double titre rare dans la région</h2>
            <p>Peu de praticiens dans l'Hérault cumulent les deux diplômes. Cette double formation permet à Francis MOMBO de :</p>
            <ul className="article-list">
              <li>proposer une rééducation remboursée sur ordonnance ;</li>
              <li>compléter le traitement par des techniques ostéopathiques sans restriction ;</li>
              <li>adapter la prise en charge selon l'état aigu ou chronique du patient ;</li>
              <li>traiter aussi bien le sportif de haut niveau que le senior ou le nourrisson.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Rééducation et blessures sportives</h2>
            <p>Après 9 saisons au MHSC VB et auprès de la FFVB, Francis MOMBO maîtrise parfaitement la prise en charge des blessures du sportif :</p>
            <ul className="article-list">
              <li>entorses de cheville, genou et poignet ;</li>
              <li>tendinites et tendinopathies (épaule, coude, rotule, talon d'Achille) ;</li>
              <li>fractures de fatigue ;</li>
              <li>rééducation post-opératoire (ligaments, ménisques, épaule) ;</li>
              <li>retour au sport progressif et sécurisé.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Pour qui ?</h2>
            <p>La double compétence kiné + ostéo bénéficie à tous les profils :</p>
            <ul className="article-list">
              <li>sportifs amateurs et professionnels ;</li>
              <li>personnes souffrant de douleurs chroniques (dos, nuque, hanches) ;</li>
              <li>femmes enceintes et en post-partum ;</li>
              <li>nourrissons et enfants ;</li>
              <li>seniors en perte de mobilité.</li>
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

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Voir aussi</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/osteopathie-sport-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Ostéopathie du sport</Link>
            <Link href="/tarifs-osteopathe-montpellier" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Tarifs</Link>
            <Link href="/osteopathe-castelnau-le-lez" className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Cabinet Castelnau</Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Kinésithérapeute & ostéopathe D.O.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Castelnau-le-Lez et Saint-Mathieu-de-Tréviers — 20 ans d'expertise au plus haut niveau.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Réserver sur Doctolib
            </a>
            <a href="tel:0650149192" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-sm border-2" style={{ borderColor: "#D4336E", color: "#D4336E" }}>
              06 50 14 91 92
            </a>
          </div>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
