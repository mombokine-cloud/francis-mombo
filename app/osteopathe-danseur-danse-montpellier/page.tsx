import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathe pour Danseurs — Francis MOMBO, Kiné D.O. Montpellier",
  description:
    "Francis MOMBO, kinésithérapeute et ostéopathe D.O. à Montpellier, accompagne les danseurs et danseuses professionnels : blessures, prévention, récupération, performance. Cabinet à Castelnau-le-Lez.",
  keywords: [
    "ostéopathe danseur Montpellier",
    "kiné danse classique Montpellier",
    "ostéopathie danse contemporaine",
    "kinésithérapeute danseur professionnel",
    "blessure danseur ostéopathie",
    "ostéopathe art du mouvement Montpellier",
    "prévention blessure danse",
    "kiné ostéo danseur Castelnau",
    "Francis MOMBO danseur",
  ],
  alternates: { canonical: `${siteUrl}/osteopathe-danseur-danse-montpellier` },
  openGraph: {
    title: "Ostéopathe pour Danseurs — Francis MOMBO, Montpellier",
    description: "Accompagnement kiné & ostéopathique des danseurs professionnels à Montpellier. Prévention, blessures, récupération, performance.",
    url: `${siteUrl}/osteopathe-danseur-danse-montpellier`,
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Francis MOMBO — Ostéopathe & Kinésithérapeute",
    url: siteUrl,
    telephone: "+33650149192",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1720 Avenue de l'Europe",
      addressLocality: "Castelnau-le-Lez",
      postalCode: "34170",
      addressCountry: "FR",
    },
    sameAs: [doctolib],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quelles sont les blessures les plus fréquentes chez les danseurs ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les danseurs souffrent principalement de tendinites (cheville, genou, hanche), d'entorses de cheville, de douleurs lombaires, de blessures de l'épaule et de fractures de stress. La répétition des gestes techniques et les exigences de souplesse extrême sollicitent les articulations de façon intense.",
        },
      },
      {
        "@type": "Question",
        name: "L'ostéopathie peut-elle améliorer les performances d'un danseur ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. En libérant les restrictions de mobilité articulaire, en rééquilibrant les tensions musculaires et en optimisant la posture globale, l'ostéopathie améliore l'amplitude des mouvements, réduit la fatigue et prévient les compensations qui mènent aux blessures.",
        },
      },
      {
        "@type": "Question",
        name: "À quelle fréquence un danseur professionnel devrait-il consulter ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En période d'entraînement intensif ou avant une création, une consultation mensuelle est recommandée. En dehors des périodes chargées, tous les 2 à 3 mois suffit pour un suivi préventif. En cas de douleur ou de blessure, une consultation rapide est toujours préférable.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est la différence entre un kiné et un ostéopathe pour un danseur ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le kiné traite la blessure : rééducation fonctionnelle, renforcement musculaire, récupération après traumatisme. L'ostéopathe travaille sur les restrictions de mobilité globale du corps, les compensations posturales et les causes profondes de la blessure. Francis MOMBO cumule les deux diplômes — une prise en charge complète en une seule consultation.",
        },
      },
    ],
  },
];

const services = [
  { label: "Ostéopathie du sport", href: "/osteopathie-sport-montpellier" },
  { label: "Récupération sportive", href: "/recuperation-sportive-osteopathie" },
  { label: "Douleurs chroniques", href: "/douleurs-chroniques-osteopathie" },
  { label: "Hypnose & performance", href: "/hypnose-sport-montpellier" },
  { label: "Maladies chroniques", href: "/maladies-chroniques-osteopathie" },
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

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

      {/* Hero avec photo de la danseuse */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a10 0%, #3d1020 50%, #8B2035 100%)", minHeight: 380 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/accompagnement-danseur-osteopathe.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.45,
        }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              🩰 Danse & Art du mouvement
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#D4336E", color: "#fff" }}>
              Montpellier
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 42px)" }}>
            Ostéopathe & Kiné<br />
            <span style={{ color: "#E8A020" }}>pour Danseurs à Montpellier</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-xl">
            Prévention · Récupération · Performance · Blessures spécifiques à la danse
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Photo + intro */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img
              src="/danseur.webp"
              alt="Accompagnement ostéopathique d'une danseuse — Francis MOMBO, Montpellier"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>Francis MOMBO</p>
            <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight" style={{ fontFamily: "Figtree, sans-serif" }}>
              Le corps du danseur mérite une prise en charge spécialisée
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              La danse place le corps dans des situations biomécaniques extrêmes : amplitude articulaire poussée à ses limites, répétition de gestes techniques, charge physique intense dissimulée sous une apparente légèreté. Francis MOMBO, kinésithérapeute et ostéopathe D.O. avec une expérience du haut niveau sportif, comprend ces exigences particulières.
            </p>
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Prendre rendez-vous
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Les spécificités du corps du danseur</h2>
            <p>Le danseur professionnel — classique, contemporain, hip-hop, flamenco — expose son corps à des contraintes que la plupart des sportifs ne connaissent pas :</p>
            <ul className="article-list">
              <li><strong>Hypermobilité articulaire</strong> — les articulations sont poussées au-delà de leur amplitude physiologique normale, créant des instabilités ;</li>
              <li><strong>Charge asymétrique</strong> — la répétition de figures d'un seul côté génère des déséquilibres posturaux progressifs ;</li>
              <li><strong>Port de charge</strong> — les portés en danse classique ou contemporaine sollicitent les épaules, les lombaires et les genoux de façon intense ;</li>
              <li><strong>Chaussures contraignantes</strong> — les pointes en danse classique concentrent les forces sur les orteils et l'avant-pied ;</li>
              <li><strong>Dissimulation de la douleur</strong> — la culture de la danse pousse souvent à continuer malgré la douleur, retardant la prise en charge.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Blessures fréquentes et prise en charge ostéopathique</h2>
            <p>Francis MOMBO intervient sur l'ensemble des pathologies spécifiques aux danseurs :</p>
            <ul className="article-list">
              <li><strong>Tendinites</strong> — tendon d'Achille, rotulien, tibial postérieur, coiffe des rotateurs ;</li>
              <li><strong>Entorses de cheville</strong> — très fréquentes aux réceptions, traitées en ostéopathie pour restaurer la mobilité et la proprioception ;</li>
              <li><strong>Douleurs lombaires</strong> — liées aux cambrés répétés et aux déséquilibres pelvi-lombaires ;</li>
              <li><strong>Syndrome de l'os naviculaire</strong> — fréquent chez les danseuses classiques en pointes ;</li>
              <li><strong>Conflits de hanche</strong> — liés à l'ouverture en rotation externe forcée ("en dehors") ;</li>
              <li><strong>Fractures de stress</strong> — métatarses, tibia, stress répétitif sur un os fragilisé.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">La double expertise kiné-ostéopathe : un avantage décisif</h2>
            <p>Francis MOMBO est l'un des rares praticiens à cumuler les deux titres — <strong>masseur-kinésithérapeute</strong> et <strong>ostéopathe D.O.</strong> — enrichis d'une formation en hypnose médicale. Pour un danseur, c'est un avantage concret :</p>
            <ul className="article-list">
              <li>diagnostic global intégrant posture, mobilité et douleur ;</li>
              <li>traitement de la blessure aiguë ET des causes profondes ;</li>
              <li>protocole de récupération accélérée entre les représentations ;</li>
              <li>préparation physique avant une création ou une tournée ;</li>
              <li>travail mental via l'hypnose pour gérer la pression de scène et la douleur chronique.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Montpellier, ville de danse</h2>
            <p>Montpellier est l'une des capitales françaises de la danse contemporaine — siège du <strong>Centre Chorégraphique National de Montpellier</strong>, de nombreuses compagnies professionnelles et d'une formation académique dense. Le cabinet de Castelnau-le-Lez, à quelques minutes du centre-ville, accueille les danseurs et danseuses professionnels et amateurs de toute l'agglomération.</p>
          </section>

          <section>
            <h2 className="article-h2">Autres spécialités disponibles</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
            <div className="space-y-4">
              {(jsonLd[1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((item) => (
                <div key={item.name} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.name}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Cabinet Castelnau-le-Lez</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Prenez soin de votre corps de danseur
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Consultation sans ordonnance — 1720 avenue de l'Europe, Castelnau-le-Lez · 06 50 14 91 92
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
