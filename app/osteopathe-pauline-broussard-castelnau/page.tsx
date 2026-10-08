import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/pauline-broussard-castelnau-le-lez";

export const metadata: Metadata = {
  title: "Pauline BROUSSARD — Ostéopathe D.O. Nourrisson, Santé Féminine & Sport | Castelnau-le-Lez",
  description:
    "Pauline BROUSSARD, ostéopathe D.O. au cabinet de Castelnau-le-Lez (34170). Approche douce et myofasciale, spécialisée nourrisson, santé féminine, sportifs et troubles musculo-squelettiques.",
  keywords: [
    "ostéopathe Castelnau-le-Lez",
    "Pauline Broussard ostéopathe",
    "ostéopathie nourrisson Castelnau",
    "ostéopathie santé féminine Montpellier",
    "ostéopathe sportif Castelnau",
    "ostéopathie myofasciale Montpellier",
    "ostéopathe doux Castelnau-le-Lez",
    "ostéopathie femme enceinte Castelnau",
  ],
  alternates: { canonical: `${siteUrl}/osteopathe-pauline-broussard-castelnau` },
  openGraph: {
    title: "Pauline BROUSSARD — Ostéopathe D.O. | Castelnau-le-Lez",
    description: "Ostéopathe D.O. approche douce et myofasciale, spécialisée nourrisson, santé féminine et sportifs. Cabinet de Castelnau-le-Lez.",
    url: `${siteUrl}/osteopathe-pauline-broussard-castelnau`,
    type: "profile",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pauline BROUSSARD",
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
    name: "Pauline BROUSSARD — Ostéopathe D.O. Castelnau-le-Lez",
    url: `${siteUrl}/osteopathe-pauline-broussard-castelnau`,
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
        name: "Quelle est l'approche de Pauline BROUSSARD en ostéopathie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pauline BROUSSARD adopte une approche douce, globale et personnalisée. Chaque séance commence par un bilan complet pour comprendre la mécanique du patient. Elle combine techniques musculo-squelettiques, myofasciales et fonctionnelles, adaptées à l'âge, au profil et aux besoins de chaque personne. Elle privilégie l'écoute et la douceur du geste, en particulier pour les nourrissons, les femmes enceintes et les patients fragiles.",
        },
      },
      {
        "@type": "Question",
        name: "Pauline BROUSSARD prend-elle en charge les nourrissons ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Pauline BROUSSARD accompagne les nourrissons dès les premières semaines de vie avec des techniques exclusivement douces et adaptées. Elle traite les torticolis congénitaux, les asymétries crâniennes (plagiocéphalie), les coliques et les difficultés d'allaitement. Aucune ordonnance médicale n'est nécessaire, mais un compte-rendu peut être transmis au pédiatre sur demande.",
        },
      },
      {
        "@type": "Question",
        name: "L'ostéopathie peut-elle aider les femmes souffrant de douleurs liées au cycle menstruel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. L'ostéopathie agit sur les tensions pelviennes, lombaires et abdominales souvent à l'origine des douleurs de règles (dysménorrhée), du syndrome prémenstruel ou des douleurs liées à l'endométriose. Pauline BROUSSARD propose une approche viscérale et myofasciale douce pour relâcher les tensions profondes du bassin et améliorer la mobilité des organes pelviens.",
        },
      },
      {
        "@type": "Question",
        name: "Pauline BROUSSARD suit-elle les sportifs ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Pauline accompagne sportifs amateurs et confirmés pour la prévention des blessures, la récupération après l'effort et la gestion des tensions chroniques liées à la pratique sportive. Elle travaille sur les chaînes musculaires, les fascias et l'équilibre postural pour optimiser les performances et réduire les compensations mécaniques sources de blessures.",
        },
      },
    ],
  },
];

const specialites = [
  {
    icon: "🌿",
    titre: "Approche douce & myofasciale",
    color: "#fdeef3",
    accent: "#D4336E",
    texte: "L'approche de Pauline BROUSSARD s'appuie sur des techniques douces, précises et non traumatisantes. Elle mobilise les fascias, les muscles et les articulations sans geste brusque, pour libérer les tensions profondes tout en respectant la sensibilité et l'histoire corporelle de chaque patient.",
    points: [
      "Techniques myofasciales et fonctionnelles douces",
      "Approche globale corps-posture-mobilité",
      "Adaptation au profil et à la tolérance de chaque patient",
      "Prise en charge des douleurs chroniques et des tensions anciennes",
      "Complémentaire à la kinésithérapie et aux soins médicaux",
    ],
  },
  {
    icon: "👶",
    titre: "Nourrisson & pédiatrie",
    color: "#fff3e8",
    accent: "#E8A020",
    texte: "Le nourrisson et l'enfant constituent une patientèle prioritaire pour Pauline. Elle utilise des techniques exclusivement douces pour corriger les tensions crâniennes, vertébrales et digestives consécutives à l'accouchement ou aux phases de croissance, sans jamais manipuler brutalement.",
    points: [
      "Bilan systématique après naissance difficile (forceps, ventouse, siège)",
      "Torticolis congénital et plagiocéphalie (asymétrie crânienne)",
      "Coliques, reflux et troubles digestifs du nourrisson",
      "Difficultés d'allaitement et de succion",
      "Douleurs de croissance, posture et scoliose fonctionnelle chez l'enfant",
    ],
  },
  {
    icon: "🌸",
    titre: "Santé féminine & cycle",
    color: "#fdeef3",
    accent: "#8B2035",
    texte: "Pauline BROUSSARD porte une attention particulière à la santé des femmes à toutes les étapes de leur vie. Elle propose une approche viscérale et myofasciale pour soulager les douleurs pelviennes, accompagner la grossesse et prendre en charge les inconforts liés au cycle menstruel.",
    points: [
      "Dysménorrhée et syndrome prémenstruel (SPM)",
      "Douleurs pelviennes liées à l'endométriose",
      "Suivi ostéopathique de la grossesse (lombalgies, SPP, sciatique)",
      "Préparation ostéopathique à l'accouchement",
      "Suivi post-partum et récupération périnéale",
    ],
  },
  {
    icon: "🏃",
    titre: "Sportifs & récupération",
    color: "#f0f4ff",
    accent: "#1a2a6c",
    texte: "L'ostéopathie du sport accompagne à la fois la performance et la longévité. Pauline travaille sur les chaînes musculaires, les fascias et l'équilibre postural pour prévenir les blessures, optimiser la récupération et corriger les compensations mécaniques qui freinent les sportifs.",
    points: [
      "Prévention des blessures et déséquilibres posturaux",
      "Récupération après compétition ou blessure",
      "Tensions cervicales, dorsales et lombaires du sportif",
      "Gestion des douleurs chroniques liées à la pratique",
      "Suivi des sportifs amateurs, en loisir comme en compétition",
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
        <div className="absolute inset-0" style={{ backgroundImage: "url('/Pauline_BROUSSARD_Osteopathe_Castelnau_Montpellier.webp')", backgroundSize: "cover", backgroundPosition: "center 20%", opacity: 0.18 }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.12)" }}>
              👶 Nourrisson · Pédiatrie
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#D4336E", color: "#fff" }}>
              🌸 Santé féminine · Sport
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-3" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 44px)" }}>
            Pauline BROUSSARD
          </h1>
          <p className="font-semibold mb-4" style={{ color: "#E8A020", fontSize: "1.1rem" }}>
            Ostéopathe D.O. — Castelnau-le-Lez
          </p>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Approche douce, myofasciale et personnalisée. Spécialisée en nourrisson, santé féminine, sportifs et troubles musculo-squelettiques. Cabinet au 1720 avenue de l&apos;Europe, Castelnau-le-Lez (34170).
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

        <article className="space-y-14 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Une ostéopathie douce, précise et adaptée à chaque patient</h2>
            <p>
              Pauline BROUSSARD, ostéopathe D.O., exerce au cabinet Francis MOMBO de Castelnau-le-Lez avec une approche centrée sur l&apos;<strong>écoute du corps</strong> et la <strong>douceur du geste</strong>. Chaque consultation débute par un bilan complet permettant d&apos;identifier les tensions, les compensations et les dysfonctions à l&apos;origine des symptômes.
            </p>
            <p className="mt-3">
              Sa formation lui permet de combiner techniques <strong>musculo-squelettiques</strong>, <strong>myofasciales</strong> et <strong>fonctionnelles</strong> pour une prise en charge globale — du nourrisson au sportif confirmé, en passant par les femmes à toutes les étapes de leur vie.
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
            <h2 className="article-h2">Pauline au sein du cabinet Francis MOMBO</h2>
            <p>
              Pauline BROUSSARD exerce au cabinet de <strong>Castelnau-le-Lez</strong> aux côtés de Francis MOMBO (kinésithérapeute, ostéopathe D.O., hypnose) et de Manon DE RUL (ostéopathe D.O., spécialiste nourrisson & HVLA). Le cabinet propose ainsi une prise en charge <strong>pluridisciplinaire et complémentaire</strong>, du nourrisson au sport de haut niveau.
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
            Prendre rendez-vous avec Pauline
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
