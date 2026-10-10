import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";

export const metadata: Metadata = {
  title: "Plan du site - Francis MOMBO Ostéopathe Montpellier",
  description: "Plan du site de Francis MOMBO, ostéopathe D.O. et kinésithérapeute à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.",
  alternates: { canonical: `${siteUrl}/plan-du-site` },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "Cabinets & équipe",
    color: "#8B2035",
    pages: [
      { label: "Cabinet de Castelnau-le-Lez", href: "/osteopathe-castelnau-le-lez" },
      { label: "Cabinet de Saint-Mathieu-de-Tréviers", href: "/osteopathe-saint-mathieu-de-treviers" },
      { label: "Ostéopathe Montpellier", href: "/osteopathe-montpellier" },
      { label: "Ostéopathe Jacou", href: "/osteopathe-jacou" },
      { label: "Ostéopathe Le Crès", href: "/osteopathe-le-cres" },
      { label: "Ostéopathe Clapiers", href: "/osteopathe-clapiers" },
      { label: "Ostéopathe Vendargues", href: "/osteopathe-vendargues" },
      { label: "Ostéopathe Lattes", href: "/osteopathe-lattes" },
      { label: "Ostéopathe Pérols", href: "/osteopathe-perols" },
      { label: "Ostéopathe Saint-Jean-de-Védas", href: "/osteopathe-saint-jean-de-vedas" },
      { label: "Ostéopathe Juvignac", href: "/osteopathe-juvignac" },
      { label: "Ostéopathe Grabels", href: "/osteopathe-grabels" },
      { label: "Ostéopathe Prades-le-Lez", href: "/osteopathe-prades-le-lez" },
      { label: "Ostéopathe Saint-Gély-du-Fesc", href: "/osteopathe-saint-gely-du-fesc" },
      { label: "Ostéopathe Montferrier-sur-Lez", href: "/osteopathe-montferrier-sur-lez" },
      { label: "Ostéopathe Teyran", href: "/osteopathe-teyran" },
      { label: "Ostéopathe Assas", href: "/osteopathe-assas" },
      { label: "Ostéopathe Pignan", href: "/osteopathe-pignan" },
      { label: "Ostéopathe Fabrègues", href: "/osteopathe-fabreges" },
      { label: "Ostéopathe Lavérune", href: "/osteopathe-laverune" },
      { label: "Ostéopathe Les Matelles", href: "/osteopathe-les-matelles" },
      { label: "Ostéopathe Saint-Bauzille-de-Montmel", href: "/osteopathe-saint-bauzille-de-montmel" },
      { label: "Ostéopathe Claret", href: "/osteopathe-claret" },
      { label: "Ostéopathe Sauve", href: "/osteopathe-sauve" },
      { label: "Ostéopathe Quissac", href: "/osteopathe-quissac" },
      { label: "Mon équipe - Pauline Broussard", href: "/collaboratrices-osteopathie-castelnau" },
      { label: "Tarifs et remboursement", href: "/tarifs-osteopathe-montpellier" },
      { label: "FAQ ostéopathe Montpellier", href: "/faq-osteopathe-montpellier" },
    ],
  },
  {
    title: "Ostéopathie",
    color: "#D4336E",
    pages: [
      { label: "Maladies chroniques & ostéopathie", href: "/maladies-chroniques-osteopathie" },
      { label: "Douleurs chroniques", href: "/douleurs-chroniques-osteopathie" },
      { label: "Mal de dos : comprendre et prévenir", href: "/mal-de-dos-comprendre-prevenir" },
      { label: "Urgences ostéopathiques Montpellier", href: "/urgences-osteopathie-montpellier" },
      { label: "Ostéopathe HYROX & CrossFit Montpellier", href: "/osteopathe-hyrox-crossfit-montpellier" },
      { label: "Sports individuels - Tennis, Padel, Course, Escalade", href: "/sports-individuels-osteopathie-montpellier" },
      { label: "Kinésithérapeute Castelnau-le-Lez", href: "/kinesitherapeute-castelnau-le-lez" },
      { label: "Kinésithérapeute Saint-Mathieu-de-Tréviers", href: "/kinesitherapeute-saint-mathieu-de-treviers" },
      { label: "Ostéopathe pour Danseurs - Montpellier", href: "/osteopathe-danseur-danse-montpellier" },
      { label: "Ostéopathie du sport Montpellier", href: "/osteopathie-sport-montpellier" },
      { label: "Récupération sportive", href: "/recuperation-sportive-osteopathie" },
      { label: "Kiné & ostéo Montpellier", href: "/kine-osteo-montpellier" },
      { label: "Enfant & nourrisson", href: "/osteopathie-enfant-nourrisson" },
      { label: "Ostéopathie seniors Montpellier", href: "/osteopathie-seniors-montpellier" },
    ],
  },
  {
    title: "Santé féminine",
    color: "#D4336E",
    pages: [
      { label: "Santé féminine & fertilité & endométriose", href: "/sante-femme-fertilite-endometriose" },
      { label: "Ostéopathie santé de la femme", href: "/osteopathie-sante-femme" },
      { label: "Endométriose & ostéopathie", href: "/osteopathie-endometriose" },
      { label: "Grossesse & ostéopathie Montpellier", href: "/osteopathie-grossesse-montpellier" },
      { label: "Grossesse & équilibre féminin", href: "/osteopathie-grossesse-equilibre-feminin" },
    ],
  },
  {
    title: "Hypnose",
    color: "#E8A020",
    pages: [
      { label: "Hypnose thérapeutique Montpellier", href: "/hypnose-therapeutique-montpellier" },
      { label: "Hypnose & sport Montpellier", href: "/hypnose-sport-montpellier" },
      { label: "Hypnose thérapeutique", href: "/hypnose-therapeutique" },
      { label: "Hypnose du sport", href: "/hypnose-sport" },
    ],
  },
  {
    title: "MHSC · FFVB · Sport de haut niveau",
    color: "#8B2035",
    pages: [
      { label: "AfroBasket 2025 - Consultant Kiné Mali", href: "/afrobasket-2025-consultant-kine-mali" },
      { label: "Coupe de France 2022 - Kiné RC Strasbourg", href: "/coupe-de-france-2022-kine-rc-strasbourg" },
      { label: "9 saisons au MHSC VB", href: "/9-saisons-mhsc-volley-osteopathe" },
      { label: "Parcours FFVB - 5 missions (2013–2018)", href: "/parcours-ffvb-equipe-france-volley" },
      { label: "Jeux Méditerranéens 2013 - Médaille de bronze", href: "/jeux-mediterraneens-2013-kine-equipe-france-volley" },
      { label: "TQCE U20 - 2016", href: "/tqce-u20-2016-kine-equipe-france-volley" },
      { label: "TQCM U21 - 2017", href: "/tqcm-u21-2017-kine-equipe-france-volley" },
      { label: "TQCE Juniors - 2018", href: "/tqce-juniors-2018-kine-equipe-france-volley" },
      { label: "Euro U20 - 2018", href: "/euro-u20-2018-kine-equipe-france-volley" },
      { label: "Récupération sport haut niveau", href: "/recuperation-sport-haut-niveau-sommeil-alimentation" },
    ],
  },
  {
    title: "Témoignages & médias",
    color: "#E8A020",
    pages: [
      { label: "Témoignages vidéo patients", href: "/temoignages-video" },
    ],
  },
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
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>Navigation</p>
          <h1 className="font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 38px)" }}>
            Plan du site
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Toutes les pages de <strong>mombofrancis.com</strong> - ostéopathe D.O. &amp; kinésithérapeute à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.
          </p>
        </div>

        {/* Accueil */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-bold text-white px-5 py-3 rounded-xl text-sm transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Accueil - mombofrancis.com
          </Link>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-5 py-3" style={{ background: section.color }}>
                <p className="text-xs font-bold uppercase tracking-widest text-white opacity-90">{section.title}</p>
              </div>
              <ul className="divide-y divide-gray-50">
                {section.pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors duration-150 group"
                    >
                      <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">{page.label}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-400 font-mono hidden sm:block">{page.href}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-gray-500 transition-colors" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Liens externes */}
        <div className="mt-8 rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-5 py-3" style={{ background: "#6b7280" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white opacity-90">Liens externes</p>
          </div>
          <ul className="divide-y divide-gray-50">
            <li>
              <a
                href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors duration-150 group"
              >
                <span className="text-sm font-medium text-gray-800">Prise de rendez-vous - Doctolib</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-gray-500 transition-colors" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </li>
            <li>
              <a
                href="https://g.page/r/CSuZQhAb-49CEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors duration-150 group"
              >
                <span className="text-sm font-medium text-gray-800">Laisser un avis Google</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-gray-500 transition-colors" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.resalib.fr/praticien/132639-francis-mombo-osteopathe-saint-mathieu-de-treviers" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors duration-150 group">
                <span className="text-sm font-medium text-gray-800">Resalib - Saint-Mathieu-de-Tréviers</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-gray-500 transition-colors" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.mablouseblanche.fr/pro/A10005524185/docteur-mombo-lutete-francis-masseur-kinesitherapeute-castelnau-le-lez" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors duration-150 group">
                <span className="text-sm font-medium text-gray-800">Ma Blouse Blanche</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-gray-500 transition-colors" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </li>
            <li>
              <a href="https://lemedecin.fr/castelnau-le-lez/scm-kine-elysee/osteopathe/mombo-francis/46e18d97712ea5c7d054e1f66a3a7d0c/pro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors duration-150 group">
                <span className="text-sm font-medium text-gray-800">Le Médecin</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-gray-500 transition-colors" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </li>
            <li>
              <a href="https://lesmedecinesdouces.fr/etiopathe/castelnaulelez/1720-av-de-l-europe-1er-etage-bureau-b2/francis-mombo-osteopathe-sport-hypnose/therapeute/avis/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors duration-150 group">
                <span className="text-sm font-medium text-gray-800">Les Médecines Douces</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-gray-500 transition-colors" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.pagesjaunes.fr/pros/54237040" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors duration-150 group">
                <span className="text-sm font-medium text-gray-800">Pages Jaunes</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-gray-500 transition-colors" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
