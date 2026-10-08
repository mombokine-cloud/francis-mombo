import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Manon DE RUL — Ostéopathe D.O. Nourrisson, Pédiatrie & Femme Enceinte | Castelnau-le-Lez",
  description:
    "Manon DE RUL, ostéopathe D.O. au cabinet de Castelnau-le-Lez (34170). Spécialisée nourrisson, pédiatrie, femme enceinte et techniques structurelles HVLA. Prise en charge douce et précise.",
  keywords: [
    "ostéopathe nourrisson Castelnau-le-Lez",
    "ostéopathie pédiatrique Montpellier",
    "ostéopathe femme enceinte Castelnau",
    "Manon DE RUL ostéopathe",
    "ostéopathie bébé Montpellier",
    "technique HVLA ostéopathie Montpellier",
    "ostéopathe structurel Castelnau-le-Lez",
    "ostéopathie grossesse Castelnau",
  ],
  alternates: { canonical: `${siteUrl}/osteopathe-manon-de-rul-castelnau` },
  openGraph: {
    title: "Manon DE RUL — Ostéopathe D.O. Nourrisson & Pédiatrie | Castelnau-le-Lez",
    description: "Ostéopathe D.O. spécialisée nourrisson, pédiatrie, femme enceinte et techniques structurelles HVLA. Cabinet de Castelnau-le-Lez.",
    url: `${siteUrl}/osteopathe-manon-de-rul-castelnau`,
    type: "profile",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manon DE RUL",
    jobTitle: "Ostéopathe D.O.",
    worksFor: {
      "@type": "MedicalBusiness",
      name: "Cabinet Francis MOMBO — Ostéopathie & Kinésithérapie",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1720 avenue de l'Europe",
        addressLocality: "Castelnau-le-Lez",
        postalCode: "34170",
        addressCountry: "FR",
      },
    },
    medicalSpecialty: ["Osteopathic", "Pediatric", "Obstetric"],
    sameAs: [doctolib],
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Manon DE RUL — Ostéopathe D.O. Castelnau-le-Lez",
    url: siteUrl,
    telephone: "+33650149192",
    medicalSpecialty: ["Osteopathic"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1720 avenue de l'Europe",
      addressLocality: "Castelnau-le-Lez",
      postalCode: "34170",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "20:00" },
    ],
    sameAs: [doctolib],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "À partir de quel âge peut-on amener son bébé chez l'ostéopathe ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dès les premiers jours de vie. Une consultation chez Manon DE RUL est recommandée dans les 4 à 8 semaines suivant la naissance, notamment après un accouchement long, une extraction instrumentale (forceps, ventouse) ou une présentation en siège. L'ostéopathie néonatale utilise des techniques exclusivement douces, sans aucune manipulation brusque.",
        },
      },
      {
        "@type": "Question",
        name: "Qu'est-ce que la technique HVLA en ostéopathie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La technique HVLA (High Velocity Low Amplitude) est une manipulation structurelle précise, rapide et de faible amplitude. Elle cible une articulation bloquée pour en restaurer la mobilité. Pratiquée par Manon DE RUL sur les patients adultes adaptés, elle est contre-indiquée chez le nourrisson et le très jeune enfant, pour qui des techniques fonctionnelles et myotensives sont utilisées à la place.",
        },
      },
      {
        "@type": "Question",
        name: "L'ostéopathie est-elle sans risque pendant la grossesse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, l'ostéopathie pendant la grossesse est sécurisée lorsqu'elle est pratiquée par un ostéopathe formé. Manon DE RUL adapte chaque séance au trimestre de grossesse et à l'état de la patiente. Les techniques HVLA sont évitées au profit de techniques douces myotensives et fasciales. Elle accompagne les douleurs lombaires, le SPP (douleur pelvienne), la sciatique et prépare le bassin à l'accouchement.",
        },
      },
      {
        "@type": "Question",
        name: "Manon DE RUL prend-elle les nourrissons sans ordonnance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. L'ostéopathie ne nécessite pas d'ordonnance médicale. Une lettre de votre pédiatre ou médecin traitant est la bienvenue mais non obligatoire. En cas de signes alarmants (fièvre, vomissements, pleurs inexpliqués persistants), Manon vous orientera vers le médecin adapté.",
        },
      },
    ],
  },
];

const specialites = [
  {
    icon: "👶",
    titre: "Nourrisson & néonatologie",
    color: "#fdeef3",
    accent: "#D4336E",
    texte: "La naissance est une épreuve mécanique intense pour le crâne, la colonne et le bassin du nourrisson. Forceps, ventouse, césarienne, présentation en siège : chaque accouchement laisse des traces tensionnelles que l'ostéopathie peut corriger dès les premières semaines de vie.",
    points: [
      "Torticolis congénital et asymétrie crânienne (plagiocéphalie)",
      "Troubles digestifs : coliques, reflux, régurgitations",
      "Difficultés d'allaitement (succion, prise du sein)",
      "Agitation, sommeil perturbé, pleurs inexpliqués",
      "Bilan systématique après naissance difficile",
    ],
  },
  {
    icon: "🧒",
    titre: "Pédiatrie — enfant & adolescent",
    color: "#fff3e8",
    accent: "#E8A020",
    texte: "De la petite enfance à l'adolescence, le corps en croissance subit des contraintes posturales, sportives et scolaires. L'ostéopathie pédiatrique de Manon DE RUL accompagne chaque étape du développement avec des techniques adaptées à l'âge et à la morphologie de l'enfant.",
    points: [
      "Troubles de la posture et scoliose fonctionnelle",
      "Douleurs de croissance (genoux, hanches, dos)",
      "Suivi orthodontique et ATM (articulation temporo-mandibulaire)",
      "Céphalées et migraines chez l'enfant",
      "Préparation sportive et prévention des blessures",
      "Énurésie et troubles fonctionnels digestifs",
    ],
  },
  {
    icon: "🤰",
    titre: "Femme enceinte",
    color: "#fdeef3",
    accent: "#8B2035",
    texte: "La grossesse transforme profondément la mécanique du bassin, du rachis et de la posture. Manon DE RUL accompagne les futures mamans à chaque trimestre avec des techniques exclusivement douces, pour soulager les douleurs et préparer le corps à l'accouchement.",
    points: [
      "Lombalgies, dorsalgies et sciatique de grossesse",
      "Syndrome de la ceinture pelvienne (SPP)",
      "Préparation ostéopathique à l'accouchement",
      "Équilibre du périnée et des ligaments utérins",
      "Suivi post-partum (retour en forme, cicatrice de césarienne)",
    ],
  },
  {
    icon: "⚡",
    titre: "Techniques structurelles HVLA",
    color: "#f0f4ff",
    accent: "#1a2a6c",
    texte: "La technique HVLA (High Velocity Low Amplitude) est une manipulation articulaire précise, rapide et ciblée. Réservée aux patients adultes sans contre-indication, elle permet de libérer un blocage articulaire en une fraction de seconde, avec un résultat immédiat sur la mobilité et la douleur.",
    points: [
      "Blocages vertébraux cervicaux, dorsaux et lombaires",
      "Articulations sacro-iliaques et bassin",
      "Récupération rapide après choc ou faux mouvement",
      "Complémentaire aux techniques myotensives et fasciales",
      "Évaluation systématique des contre-indications avant toute manipulation",
    ],
  },
];

export default function Page() {
  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
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

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a10 0%, #3d1020 55%, #8B2035 100%)", minHeight: 360 }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/grossesse-thumbnail.webp')", backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.18 }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.12)" }}>
              👶 Nourrisson · Pédiatrie
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#D4336E", color: "#fff" }}>
              🤰 Grossesse · HVLA
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-3" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 44px)" }}>
            Manon DE RUL
          </h1>
          <p className="font-semibold mb-4" style={{ color: "#E8A020", fontSize: "1.1rem" }}>
            Ostéopathe D.O. — Castelnau-le-Lez
          </p>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Spécialisée en ostéopathie du nourrisson, pédiatrique, de la femme enceinte et en techniques structurelles HVLA. Cabinet au 1720 avenue de l&apos;Europe, Castelnau-le-Lez (34170).
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Infos rapides */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {[
            { icon: "📍", label: "1720 avenue de l'Europe", sub: "Castelnau-le-Lez 34170" },
            { icon: "🕐", label: "Lundi — Samedi", sub: "08h00 → 20h00" },
            { icon: "🎓", label: "Ostéopathe D.O.", sub: "Diplôme d'ostéopathie" },
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

        {/* Intro */}
        <article className="space-y-14 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Une approche précise, douce et adaptée à chaque patient</h2>
            <p>
              Manon DE RUL, ostéopathe D.O., rejoint l&apos;équipe du cabinet Francis MOMBO à Castelnau-le-Lez avec une spécialisation marquée pour les <strong>populations vulnérables</strong> — nourrissons, enfants, femmes enceintes — et une maîtrise des <strong>techniques structurelles HVLA</strong> pour les patients adultes.
            </p>
            <p className="mt-3">
              Sa formation lui permet d&apos;alterner selon les besoins entre approche crânio-sacrée douce, techniques myotensives, travail fascial et manipulations structurelles, pour une prise en charge toujours adaptée au profil du patient.
            </p>
          </section>

          {/* Spécialités */}
          {specialites.map((s) => (
            <section key={s.titre}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{s.icon}</span>
                <h2 className="article-h2" style={{ margin: 0, border: "none", paddingBottom: 0 }}>{s.titre}</h2>
              </div>
              <div className="rounded-2xl p-6 mb-4" style={{ background: s.color }}>
                <p className="text-gray-700 text-sm leading-relaxed">{s.texte}</p>
              </div>
              <ul className="article-list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>
          ))}

          {/* FAQ */}
          <section>
            <h2 className="article-h2">Questions fréquentes</h2>
            <div className="space-y-4">
              {(jsonLd[2] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((item) => (
                <div key={item.name} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.name}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Équipe */}
          <section>
            <h2 className="article-h2">Manon au sein du cabinet Francis MOMBO</h2>
            <p>
              Manon DE RUL exerce au cabinet de <strong>Castelnau-le-Lez</strong> aux côtés de Francis MOMBO (kinésithérapeute, ostéopathe D.O., hypnose) et de Pauline BROUSSARD (ostéopathe D.O.). Le cabinet propose ainsi une prise en charge <strong>pluridisciplinaire et complémentaire</strong>, de la petite enfance au sport de haut niveau.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="/collaboratrices-osteopathie-castelnau" className="text-xs font-bold px-4 py-2 rounded-full border" style={{ borderColor: "#D4336E", color: "#D4336E" }}>
                Voir toute l&apos;équipe
              </Link>
              <Link href="/osteopathe-castelnau-le-lez" className="text-xs font-bold px-4 py-2 rounded-full border border-gray-200 text-gray-600">
                Le cabinet de Castelnau-le-Lez
              </Link>
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Castelnau-le-Lez · Sans ordonnance</p>
          <h3 className="text-xl font-black text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>
            Prendre rendez-vous avec Manon
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            1720 avenue de l&apos;Europe, 34170 Castelnau-le-Lez<br />
            Lundi – Samedi · 08h00 – 20h00
          </p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Réserver en ligne sur Doctolib
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </main>

      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
