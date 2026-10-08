import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathe Sports Individuels Montpellier — Tennis, Padel, Course, Escalade",
  description:
    "Francis MOMBO accompagne les sportifs individuels à Montpellier : tennis, padel (Champion de France 2026 jeune), course à pied, escalade. Prévention, préparation compétition, récupération. Cabinet Castelnau-le-Lez.",
  keywords: [
    "ostéopathe padel Montpellier",
    "ostéopathe tennis Montpellier",
    "kinésithérapeute padel Montpellier",
    "ostéopathe course à pied Montpellier",
    "ostéopathe escalade Montpellier",
    "kiné sports individuels Montpellier",
    "préparation compétition padel",
    "ostéopathie sport individuel haut niveau",
    "Francis MOMBO padel tennis",
    "kiné ostéo padel Castelnau",
    "champion France padel kiné",
  ],
  alternates: { canonical: `${siteUrl}/sports-individuels-osteopathie-montpellier` },
  openGraph: {
    title: "Ostéopathe Sports Individuels — Tennis, Padel, Course, Escalade · Montpellier",
    description: "Du loisir à l'international français. Francis MOMBO accompagne les sportifs individuels à Montpellier.",
    url: `${siteUrl}/sports-individuels-osteopathie-montpellier`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-sport-bw.webp`, width: 1200, height: 630, alt: "Ostéopathe sports individuels Montpellier" }],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Prise en charge des sports individuels — Du loisir à l'international français",
    description: "Accompagnement ostéopathique et kinésithérapique des sportifs individuels : tennis, padel, course à pied, escalade.",
    url: `${siteUrl}/sports-individuels-osteopathie-montpellier`,
    author: { "@type": "Person", name: "Francis MOMBO", url: siteUrl },
    publisher: { "@type": "Organization", name: "Francis MOMBO Ostéopathe", url: siteUrl },
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    image: `${siteUrl}/francis-sport-bw.webp`,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "L'ostéopathie est-elle utile pour les joueurs de padel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Le padel sollicite intensément les épaules (smash, vibora), les poignets (effets, amorties), les genoux et les chevilles (changements de direction rapides). L'ostéopathie prévient les tendinites, optimise la mobilité et améliore la vitesse de récupération entre les tournois.",
        },
      },
      {
        "@type": "Question",
        name: "À quelle fréquence un joueur de padel compétiteur doit-il consulter ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour un joueur en compétition régulière, une consultation mensuelle est recommandée en période de tournois. En phase d'affûtage avant un championnat important, une consultation 5 à 7 jours avant l'épreuve optimise la disponibilité physique.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de séances pour une blessure d'épaule au padel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour une tendinite d'épaule liée au padel, 2 à 4 séances suffisent généralement en phase aiguë, combinant ostéopathie et rééducation kinésithérapique. Le retour au jeu se fait progressivement, avec un travail spécifique sur le geste technique.",
        },
      },
      {
        "@type": "Question",
        name: "Francis MOMBO accompagne-t-il des joueurs de padel de haut niveau ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Francis MOMBO accompagne notamment une paire de joueurs de padel en catégorie jeune, championne de France 2026 et vice-championne d'Europe 2026. Fort de son expérience avec des équipes nationales (FFVB, équipe du Mali AfroBasket 2025), il applique les protocoles du haut niveau à chaque sportif.",
        },
      },
    ],
  },
];

const sports = [
  {
    id: "padel",
    label: "Padel",
    emoji: "🏓",
    img: "/sport-pro.webp",
    caption: "Padel · explosivité • rotation • endurance",
    accent: "#D4336E",
    palmares: true,
    desc: "Le padel sollicite en priorité les épaules (smash, vibora), les poignets (effets répétés), les chevilles et les genoux (changements de direction). La spécificité du mur et le jeu en binôme créent des contraintes rotatoires importantes sur le rachis.",
    blessures: ["Tendinite d'épaule (smash / vibora)", "Épicondylite latérale (revers)", "Entorse cheville (déplacements rapides)", "Douleurs lombaires (rotation axiale)"],
  },
  {
    id: "tennis",
    label: "Tennis",
    emoji: "🎾",
    img: "/francis-sport-bw.webp",
    caption: "Tennis · explosivité • appuis • mobilité",
    accent: "#E8A020",
    palmares: false,
    desc: "Le tennis génère des asymétries posturales importantes liées à la dominance du bras de frappe. La répétition du service sollicite l'épaule, le coude et le rachis cervical. L'ostéopathie rééquilibre ces chaînes musculaires et prévient le tennis elbow.",
    blessures: ["Tennis elbow (épicondylite)", "Tendinite rotulienne (déplacements)", "Douleurs cervicales (service)", "Syndrome de l'épaule du serveur"],
  },
  {
    id: "course",
    label: "Course à pied",
    emoji: "🏃",
    img: "/francis-sport-bw.webp",
    caption: "Course à pied · endurance • foulée • économie",
    accent: "#8B2035",
    palmares: false,
    desc: "La course à pied répète le même geste des milliers de fois — chaque déséquilibre postural se traduit en blessure de surmenage. L'ostéopathie analyse la foulée, libère les restrictions de hanche et d'iliosacré, et optimise l'économie de course.",
    blessures: ["Syndrome de la bandelette IT", "Périostite tibiale (tibial stress)", "Fasciite plantaire", "Tendinite achilléenne"],
  },
  {
    id: "escalade",
    label: "Escalade",
    emoji: "🧗",
    img: "/francis-sport-bw.webp",
    caption: "Escalade · doigts • épaule • gainage",
    accent: "#0a0a14",
    palmares: false,
    desc: "L'escalade sollicite les poulies des doigts et les tendons fléchisseurs de manière extrême. Les épaules travaillent en position de traction à bout de bras. L'ostéopathie traite les blessures de doigts, les conflits d'épaule et les douleurs lombaires liées au dévers.",
    blessures: ["Rupture ou inflammation de poulie", "Conflit sous-acromial", "Épicondylite médiale", "Douleurs lombaires (dévers, surplomb)"],
  },
];

const niveaux = [
  { label: "Amateur", desc: "progresser sans douleur" },
  { label: "Compétiteur", desc: "gérer les charges" },
  { label: "Haut niveau", desc: "affiner chaque détail" },
  { label: "International français", desc: "performer avec exigence" },
];

export default function Page() {
  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Retour au site
          </Link>
          <div className="flex items-center gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — style magazine */}
      <div className="relative" style={{ background: "#f7f4ef" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {/* Label */}
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
            Santé&nbsp;•&nbsp;Performance&nbsp;•&nbsp;Mouvement
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Texte */}
            <div>
              <h1 className="font-black uppercase leading-none text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(32px, 6vw, 58px)", letterSpacing: "-0.02em" }}>
                Prise en charge<br />
                <span style={{ color: "#D4336E" }}>des sports</span><br />
                individuels
              </h1>
              <p className="text-gray-500 text-lg italic mb-6" style={{ fontFamily: "Georgia, serif" }}>
                Du loisir à l&apos;international français
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
                Tennis, course à pied, escalade, padel et autres sports individuels sollicitent le corps de manière spécifique. L&apos;accompagnement ostéopathique s&apos;adapte au profil du sportif, à ses objectifs et à ses contraintes pour optimiser le mouvement, prévenir les blessures et soutenir une performance durable.
              </p>
              {/* Encadré palmarès padel */}
              <div className="rounded-xl p-5 mb-6" style={{ background: "linear-gradient(135deg, #1a0a10, #8B2035)", border: "1px solid rgba(212,51,110,0.4)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>🏆 Palmarès — Padel jeune</p>
                <p className="text-white font-black text-base leading-snug" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Champion de France 2026
                </p>
                <p className="text-white font-black text-base leading-snug">
                  Vice-Champion d&apos;Europe 2026
                </p>
                <p className="text-white/60 text-xs mt-1">Catégorie jeune · Paire accompagnée par Francis MOMBO</p>
              </div>
              {/* Encadré suivi longitudinal */}
              <div className="rounded-xl p-5" style={{ background: "#fff", border: "2px solid #E8A020" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Suivi longitudinal personnalisé</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Un accompagnement régulier pour ajuster les soins selon la charge, la saison, les objectifs, les compétitions et les sensations du sportif.
                </p>
              </div>
            </div>
            {/* Photo tennis */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src="/francis-sport-bw.webp" alt="Ostéopathe sports individuels Montpellier — Francis MOMBO" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="mt-2">
                <p className="text-xs text-gray-400 italic">Sports individuels</p>
                <p className="text-xs text-gray-400">explosivité • appuis • mobilité</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* 4 piliers */}
        <section className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Sports accompagnés</p>
          <p className="font-bold text-gray-800 text-sm mb-8">Tennis&nbsp;•&nbsp;Course à pied&nbsp;•&nbsp;Escalade&nbsp;•&nbsp;Padel&nbsp;•&nbsp;disciplines individuelles complémentaires</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { n: "01", titre: "Prévention des blessures", desc: "Repérer les déséquilibres, corriger les restrictions, améliorer la mobilité, les appuis et la stabilité pour réduire le risque de blessure.", color: "#D4336E" },
              { n: "02", titre: "Préparation à la compétition", desc: "Optimiser la disponibilité physique avant une échéance : relâchement des tensions, amplitude, puissance et confiance dans le geste.", color: "#E8A020" },
              { n: "03", titre: "Récupération et régénération", desc: "Favoriser le retour à l'équilibre après l'effort, diminuer la fatigue cumulée, relancer les tissus et améliorer la qualité du repos.", color: "#8B2035" },
              { n: "04", titre: "Performance durable", desc: "Construire un corps mobile, stable et résilient pour progresser avec régularité, sécurité et efficacité sur le long terme.", color: "#0a0a14" },
            ].map((p) => (
              <div key={p.n} className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black" style={{ background: p.color }}>
                  {p.n}
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{p.titre}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sports détaillés */}
        <section className="mb-16">
          <h2 className="font-black text-gray-900 text-2xl mb-8" style={{ fontFamily: "Figtree, sans-serif" }}>
            Les sports <span style={{ color: "#D4336E" }}>accompagnés</span> en détail
          </h2>
          <div className="space-y-12">
            {sports.map((s, i) => (
              <div key={s.id} className={`grid sm:grid-cols-2 gap-8 items-start ${i % 2 === 1 ? "sm:[direction:rtl]" : ""}`}>
                <div className={i % 2 === 1 ? "sm:[direction:ltr]" : ""}>
                  <div className="rounded-2xl overflow-hidden mb-3" style={{ aspectRatio: "4/3" }}>
                    <img src={s.img} alt={`Ostéopathe ${s.label} Montpellier — Francis MOMBO`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <p className="text-xs text-gray-400 italic">{s.caption}</p>
                </div>
                <div className={i % 2 === 1 ? "sm:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{s.emoji}</span>
                    <div>
                      <h3 className="font-black text-gray-900 text-xl" style={{ fontFamily: "Figtree, sans-serif" }}>{s.label}</h3>
                      {s.palmares && (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white" style={{ background: "#D4336E" }}>🏆 Champion de France 2026</span>
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white" style={{ background: "#8B2035" }}>🥈 Vice-Champion Europe 2026</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: s.accent }}>Blessures fréquentes</p>
                    <ul className="space-y-1">
                      {s.blessures.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: s.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Niveaux accompagnés */}
        <section className="mb-16">
          <div className="rounded-2xl p-8" style={{ background: "#f7f4ef" }}>
            <h2 className="font-black text-gray-900 text-lg mb-6" style={{ fontFamily: "Figtree, sans-serif" }}>
              Niveaux accompagnés
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {niveaux.map((n) => (
                <div key={n.label} className="bg-white rounded-xl p-4">
                  <p className="font-black text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>{n.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{n.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-bold text-gray-800 text-sm mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>Une approche globale et complémentaire</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                L&apos;ostéopathie s&apos;intègre dans une approche globale et complémentaire avec le kinésithérapeute, le préparateur physique, l&apos;entraîneur et le médecin afin d&apos;accompagner le sportif dans toutes les dimensions de son parcours.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-black text-gray-900 text-2xl mb-6" style={{ fontFamily: "Figtree, sans-serif" }}>FAQ</h2>
          <div className="space-y-4">
            {(jsonLd[1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.name}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Cabinet Castelnau-le-Lez · Sans ordonnance</p>
          <h3 className="text-xl font-black text-gray-900 mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>
            Prévenir. Préparer. Récupérer. Performer durablement.
          </h3>
          <p className="text-gray-400 text-xs mb-2">Corps&nbsp;•&nbsp;Mouvement&nbsp;•&nbsp;Équilibre&nbsp;•&nbsp;Performance</p>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            1720 avenue de l&apos;Europe, Castelnau-le-Lez · 06 50 14 91 92<br />
            Lundi – Samedi · 08h00 – 20h00
          </p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous sur Doctolib
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </main>
    </>
  );
}
