import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Kinésithérapeute Castelnau-le-Lez — Francis MOMBO, Kiné D.O.",
  description:
    "Francis MOMBO, masseur-kinésithérapeute et ostéopathe D.O. à Castelnau-le-Lez. Rééducation, sport de haut niveau, récupération, douleurs chroniques. Cabinet au 1720 avenue de l'Europe.",
  keywords: [
    "kinésithérapeute Castelnau-le-Lez",
    "kiné Castelnau-le-Lez",
    "masseur kinésithérapeute Castelnau",
    "rééducation Castelnau-le-Lez",
    "kinésithérapeute sport Castelnau",
    "kiné ostéo Castelnau Montpellier",
    "Francis MOMBO kinésithérapeute",
    "kinésithérapie Hérault 34170",
  ],
  alternates: { canonical: `${siteUrl}/kinesitherapeute-castelnau-le-lez` },
  openGraph: {
    title: "Kinésithérapeute Castelnau-le-Lez — Francis MOMBO",
    description: "Masseur-kinésithérapeute et ostéopathe D.O. à Castelnau-le-Lez. Sport de haut niveau, rééducation, douleurs chroniques.",
    url: `${siteUrl}/kinesitherapeute-castelnau-le-lez`,
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Francis MOMBO — Kinésithérapeute & Ostéopathe",
  url: siteUrl,
  telephone: "+33650149192",
  medicalSpecialty: ["PhysicalTherapy", "Osteopathic"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1720 Avenue de l'Europe",
    addressLocality: "Castelnau-le-Lez",
    postalCode: "34170",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.6292, longitude: 3.9006 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "20:00" },
  ],
  sameAs: [doctolib],
};

const faqItems = [
  {
    q: "Faut-il une ordonnance pour consulter un kinésithérapeute ?",
    a: "En kinésithérapie classique remboursée, une prescription médicale est nécessaire. Cependant, pour les soins en ostéopathie réalisés par Francis MOMBO dans le cadre de sa pratique ostéopathique, aucune ordonnance n'est requise.",
  },
  {
    q: "Quelle est la différence entre un kiné et un ostéopathe ?",
    a: "Le kinésithérapeute traite par des exercices de rééducation, massages et techniques manuelles remboursées. L'ostéopathe travaille sur les restrictions de mobilité globale du corps. Francis MOMBO cumule les deux diplômes, permettant une prise en charge complète en une consultation.",
  },
  {
    q: "Le cabinet de Castelnau-le-Lez est-il bien desservi ?",
    a: "Oui, le cabinet est situé au 1720 avenue de l'Europe à Castelnau-le-Lez, à 5 minutes de Montpellier centre. Parking disponible sur place. Accessible depuis Jacou, Le Crès, Clapiers, Montferrier-sur-Lez.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      }) }} />

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

      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a0a10 60%, #8B2035 100%)", minHeight: 340 }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/francis-sport-bw.webp')", backgroundSize: "cover", backgroundPosition: "center 20%", opacity: 0.3 }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-18 sm:py-20">
          <div className="flex items-center gap-2 mb-5 flex-wrap pt-8">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              🩺 Kinésithérapie & Ostéopathie
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#D4336E", color: "#fff" }}>
              Castelnau-le-Lez
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 42px)" }}>
            Kinésithérapeute<br />
            <span style={{ color: "#E8A020" }}>à Castelnau-le-Lez</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-xl">
            Francis MOMBO — Masseur-kinésithérapeute · Ostéopathe D.O. · Hypnose médicale
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", label: "1720 avenue de l'Europe", sub: "Castelnau-le-Lez 34170" },
            { icon: "🕐", label: "Lundi — Samedi", sub: "08h00 → 20h00" },
            { icon: "📞", label: "06 50 14 91 92", sub: "ou Doctolib en ligne" },
          ].map((i) => (
            <div key={i.label} className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">{i.icon}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>{i.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{i.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Un kinésithérapeute spécialisé sport de haut niveau</h2>
            <p>Francis MOMBO est masseur-kinésithérapeute diplômé d'État, également ostéopathe D.O. et praticien en hypnose médicale. Son cabinet est installé à <strong>Castelnau-le-Lez</strong>, commune limitrophe de Montpellier au nord-est, à 5 minutes du centre-ville.</p>
            <p className="mt-3">Avec plus de 9 saisons comme kinésithérapeute officiel du MHSC VB (Montpellier Castelnau Volley-Ball) et 5 missions avec l'Équipe de France de volley-ball (FFVB), Francis MOMBO apporte à chaque patient une expertise forgée au plus haut niveau du sport professionnel.</p>
          </section>

          <section>
            <h2 className="article-h2">Prestations en kinésithérapie</h2>
            <ul className="article-list">
              <li><strong>Rééducation musculo-squelettique</strong> — entorses, fractures, opérations chirurgicales ;</li>
              <li><strong>Rééducation du dos</strong> — lombalgies, cervicalgies, hernie discale, sciatique ;</li>
              <li><strong>Kinésithérapie du sport</strong> — traumatismes sportifs, tendinites, blessures ligamentaires ;</li>
              <li><strong>Récupération après blessure</strong> — retour à l'entraînement progressif et sécurisé ;</li>
              <li><strong>Massages thérapeutiques</strong> — décontracturants, drainage lymphatique, cicatrices ;</li>
              <li><strong>Rééducation respiratoire</strong> — techniques de désencombrement bronchique.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">La double compétence kiné + ostéo : un atout majeur</h2>
            <p>Rares sont les praticiens qui cumulent les deux titres. Cette double expertise permet à Francis MOMBO de traiter la blessure <em>et</em> ses causes profondes en une seule consultation : la kinésithérapie pour la rééducation fonctionnelle, l'ostéopathie pour rétablir l'équilibre global du corps et prévenir les récidives.</p>
          </section>

          <section>
            <h2 className="article-h2">Zone de desserte — communes proches</h2>
            <p>Le cabinet accueille des patients de toute la métropole montpelliéraine :</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Montpellier","Jacou","Le Crès","Clapiers","Vendargues","Montferrier-sur-Lez","Teyran","Grabels","Prades-le-Lez","Saint-Gély-du-Fesc"].map((c) => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600">{c}</span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((f) => (
                <div key={f.q} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{f.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Castelnau-le-Lez — Sans ordonnance</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Prendre rendez-vous
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            1720 avenue de l'Europe, 1er étage bureau B2, 34170 Castelnau-le-Lez · 06 50 14 91 92
          </p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </main>

      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
