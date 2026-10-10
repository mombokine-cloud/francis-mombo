import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Ostéopathe HYROX & CrossFit Montpellier - Francis MOMBO, Kiné D.O.",
  description:
    "Francis MOMBO, kinésithérapeute et ostéopathe D.O. à Montpellier, accompagne les athlètes HYROX et CrossFit : préparation compétition, prévention blessures, récupération, performance. Cabinet à Castelnau-le-Lez.",
  keywords: [
    "ostéopathe HYROX Montpellier",
    "kiné CrossFit Montpellier",
    "ostéopathie HYROX préparation",
    "kinésithérapeute CrossFit Montpellier",
    "blessure HYROX ostéopathie",
    "récupération HYROX crossfit",
    "ostéopathe sport fonctionnel Montpellier",
    "préparation compétition HYROX",
    "kiné hyrox castelnau montpellier",
    "blessure crossfit rééducation Montpellier",
    "ostéopathe functional fitness Montpellier",
    "Francis MOMBO HYROX",
  ],
  alternates: { canonical: `${siteUrl}/osteopathe-hyrox-crossfit-montpellier` },
  openGraph: {
    title: "Ostéopathe HYROX & CrossFit - Francis MOMBO, Montpellier",
    description: "Accompagnement kiné & ostéopathique des athlètes HYROX et CrossFit à Montpellier. Préparation, prévention, récupération, performance.",
    url: `${siteUrl}/osteopathe-hyrox-crossfit-montpellier`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-sport-bw.webp`, width: 1200, height: 630, alt: "Ostéopathe HYROX CrossFit Montpellier Francis MOMBO" }],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ostéopathe & Kiné pour athlètes HYROX et CrossFit à Montpellier",
    description: "Accompagnement des athlètes HYROX et CrossFit par Francis MOMBO, kinésithérapeute et ostéopathe D.O. à Castelnau-le-Lez.",
    url: `${siteUrl}/osteopathe-hyrox-crossfit-montpellier`,
    author: { "@type": "Person", name: "Francis MOMBO", url: siteUrl },
    publisher: { "@type": "Organization", name: "Francis MOMBO Ostéopathe", url: siteUrl },
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    image: `${siteUrl}/francis-sport-bw.webp`,
    mainEntityOfPage: `${siteUrl}/osteopathe-hyrox-crossfit-montpellier`,
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Francis MOMBO - Ostéopathe & Kinésithérapeute",
    url: siteUrl,
    telephone: "+33650149192",
    medicalSpecialty: ["Osteopathic", "PhysicalTherapy"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1720 Avenue de l'Europe",
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
        name: "Pourquoi consulter un ostéopathe quand on fait du HYROX ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le HYROX enchaîne course à pied et exercices fonctionnels lourds (sled push/pull, burpees over rowers, wall balls, sandbag lunges…). Cette combinaison génère des contraintes articulaires asymétriques et des restrictions de mobilité qui, non traitées, deviennent des facteurs de blessure. L'ostéopathie libère ces restrictions, optimise la posture sous charge et améliore l'économie de course.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles sont les blessures les plus fréquentes en HYROX et CrossFit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En HYROX : syndrome de la bandelette ilio-tibiale (course + squats), tendinite rotulienne (sled), douleurs lombaires (sandbag), syndrome fémoro-patellaire. En CrossFit : blessures d'épaule (snatch, clean & jerk, muscle-up), hernie discale (deadlift), tendinite achilléenne (double under), blessure au poignet (handstand). Francis MOMBO traite toutes ces pathologies en combinant kinésithérapie et ostéopathie.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps avant une compétition HYROX dois-je consulter ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Idéalement, commencez un suivi 8 à 12 semaines avant la compétition : une consultation mensuelle suffit si tout va bien. En phase d'affûtage (2 semaines avant), une consultation est recommandée pour optimiser la mobilité et libérer les tensions accumulées. Évitez une première consultation dans les 48h précédant l'épreuve.",
        },
      },
      {
        "@type": "Question",
        name: "L'hypnose peut-elle aider à la préparation mentale HYROX ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Francis MOMBO est également praticien en hypnose médicale. Les techniques d'hypnose et de visualisation sont utilisées pour gérer la douleur à l'effort, renforcer la confiance en compétition et optimiser la récupération mentale entre les stations. C'est un outil de préparation mentale utilisé au haut niveau sportif.",
        },
      },
      {
        "@type": "Question",
        name: "Où se situe le cabinet par rapport aux box CrossFit de Montpellier ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le cabinet est à Castelnau-le-Lez, à 5-10 minutes de la plupart des box CrossFit de la métropole montpelliéraine. Parking sur place. Consultations sans ordonnance du lundi au samedi de 8h à 20h.",
        },
      },
    ],
  },
];

const blessures = [
  { sport: "HYROX", zone: "Genou", cause: "Sled push/pull · Wall balls · Course", blessure: "Syndrome rotulien · Bandelette IT" },
  { sport: "HYROX", zone: "Lombaires", cause: "Sandbag lunges · Farmer carry", blessure: "Lombalgie · Hernie discale" },
  { sport: "HYROX", zone: "Cheville", cause: "Course 8 km · Transitions rapides", blessure: "Tendinite achilléenne · Entorse" },
  { sport: "CrossFit", zone: "Épaule", cause: "Snatch · Clean & jerk · Muscle-up", blessure: "Conflit sous-acromial · Coiffe" },
  { sport: "CrossFit", zone: "Poignet", cause: "Handstand · Front rack position", blessure: "Ténosynovite · Conflit radio-carpien" },
  { sport: "CrossFit", zone: "Dos", cause: "Deadlift · KB swing · GHD", blessure: "Hernie discale · Facettes articulaires" },
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
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a14 0%, #0d1a2e 50%, #1a2a0a 100%)", minHeight: 400 }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/francis-sport-bw.webp')", backgroundSize: "cover", backgroundPosition: "center 25%", opacity: 0.35 }} />
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.12)" }}>
              🏋️ HYROX · CrossFit · Functional Fitness
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#D4336E", color: "#fff" }}>
              Montpellier
            </span>
          </div>
          <h1 className="font-black text-white leading-none mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5.5vw, 48px)", letterSpacing: "-0.02em" }}>
            Ostéopathe & Kiné<br />
            <span style={{ color: "#E8A020" }}>HYROX · CrossFit</span><br />
            <span className="text-white/80" style={{ fontSize: "clamp(18px, 3.5vw, 28px)", fontWeight: 700 }}>Montpellier</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl mt-4">
            Préparation compétition · Prévention blessures · Récupération · Performance mentale
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Prendre rendez-vous
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="tel:+33650149192" className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors">
              06 50 14 91 92
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Accroche expérience */}
        <div className="rounded-2xl p-6 mb-12 flex items-start gap-5" style={{ background: "linear-gradient(135deg, #0a0a14, #1a2a0a)", border: "1px solid rgba(232,160,32,0.3)" }}>
          <span className="text-3xl flex-shrink-0">🏆</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Expérience terrain</p>
            <p className="text-white font-semibold text-sm leading-relaxed" style={{ fontFamily: "Figtree, sans-serif" }}>
              Francis MOMBO accompagne des athlètes dans leur préparation aux compétitions HYROX et CrossFit. Kinésithérapeute officiel du MHSC VB pendant 9 saisons et consultant auprès d'équipes nationales, il applique les protocoles du sport de haut niveau à votre entraînement.
            </p>
          </div>
        </div>

        <article className="space-y-12 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">HYROX & CrossFit : pourquoi ces sports exigent un suivi spécialisé</h2>
            <p>Le HYROX et le CrossFit partagent une caractéristique unique : ils combinent <strong>endurance cardiovasculaire</strong> et <strong>force fonctionnelle sous fatigue</strong>. Cette combinaison crée des contraintes biomécaniques que peu de praticiens connaissent réellement.</p>
            <p className="mt-3">En HYROX, les 8 km de course s'intercalent avec 8 stations (sled push de 152 kg, sandbag lunges, ski erg, wall balls…). Sous fatigue, la posture se dégrade, les compensations apparaissent - et les blessures s'installent progressivement, souvent sans signal d'alarme brutal.</p>
            <p className="mt-3">En CrossFit, les mouvements olympiques exécutés sous intensité - snatch, clean & jerk, handstand push-up - demandent une mobilité articulaire irréprochable. Un déficit de mobilité de hanche, d'épaule ou de cheville non corrigé devient une blessure certaine à mesure que les charges augmentent.</p>
          </section>

          <section>
            <h2 className="article-h2">Blessures fréquentes - HYROX & CrossFit</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-3">
                <thead>
                  <tr style={{ background: "#0a0a14" }}>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold uppercase tracking-widest rounded-tl-lg">Sport</th>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold uppercase tracking-widest">Zone</th>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold uppercase tracking-widest">Cause</th>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold uppercase tracking-widest rounded-tr-lg">Pathologie</th>
                  </tr>
                </thead>
                <tbody>
                  {blessures.map((b, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: b.sport === "HYROX" ? "#D4336E" : "#E8A020", color: b.sport === "HYROX" ? "#fff" : "#1a0a10" }}>
                          {b.sport}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-gray-900 text-xs">{b.zone}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{b.cause}</td>
                      <td className="px-4 py-3 text-gray-700 text-xs">{b.blessure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="article-h2">Le protocole de préparation compétition</h2>
            <p>Pour un athlète qui prépare un HYROX ou une competition CrossFit, Francis MOMBO propose un accompagnement structuré en 3 phases :</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-5">
              {[
                { phase: "Phase 1", titre: "Bilan de mobilité", semaines: "8–12 sem. avant", desc: "Évaluation complète des restrictions articulaires (hanche, épaule, cheville, thoracique). Identification des compensations posturales sous charge. Plan de travail personnalisé.", color: "#D4336E" },
                { phase: "Phase 2", titre: "Préparation & optimisation", semaines: "4–8 sem. avant", desc: "Séances régulières pour libérer les tensions accumulées à l'entraînement. Travail ostéopathique ciblé sur les zones de faiblesse. Intégration hypnose si préparation mentale souhaitée.", color: "#E8A020" },
                { phase: "Phase 3", titre: "Affûtage & récupération", semaines: "1–2 sem. avant / après", desc: "Consultation pré-compétition pour optimiser la disponibilité articulaire. Post-compétition : récupération accélérée, traitement des traumatismes résiduels.", color: "#8B2035" },
              ].map((p) => (
                <div key={p.phase} className="rounded-2xl p-5 border border-gray-100">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white mb-3 inline-block" style={{ background: p.color }}>
                    {p.phase}
                  </span>
                  <p className="font-black text-gray-900 text-sm mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>{p.titre}</p>
                  <p className="text-xs text-gray-400 mb-2">{p.semaines}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">Double expertise kiné + ostéo : l'avantage du haut niveau</h2>
            <p>La majorité des ostéopathes n'ont pas pratiqué le HYROX. La majorité des kinés ne connaissent pas l'ostéopathie fonctionnelle. Francis MOMBO combine les deux - et y ajoute une expérience réelle du terrain à haut niveau (MHSC VB Pro A, Équipe de France de volley, AfroBasket 2025) - pour des prises en charge qui vont au-delà du symptôme immédiat :</p>
            <ul className="article-list mt-4">
              <li><strong>Kinésithérapie</strong> - rééducation fonctionnelle, renforcement des zones déficitaires, retour à l'entraînement progressif ;</li>
              <li><strong>Ostéopathie</strong> - mobilité articulaire, équilibre postural, chaînes musculaires, récupération accélérée ;</li>
              <li><strong>Hypnose médicale</strong> - gestion de la douleur à l'effort, confiance en compétition, visualisation de la performance, récupération mentale.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Box CrossFit & events HYROX à Montpellier - qui consulte Francis MOMBO ?</h2>
            <p>Le cabinet de Castelnau-le-Lez est à 5–10 minutes des principales box CrossFit de la métropole montpelliéraine et des salles de préparation HYROX. Les consultations se font sans ordonnance, du lundi au samedi de 8h à 20h, avec des créneaux possibles en fin de journée pour les athlètes qui s'entraînent le matin.</p>
          </section>

          <section>
            <h2 className="article-h2">FAQ - Ostéopathie HYROX & CrossFit</h2>
            <div className="space-y-4">
              {(jsonLd[2] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((item) => (
                <div key={item.name} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.name}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Articles liés */}
          <section>
            <h2 className="article-h2">À lire aussi</h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {[
                { href: "/recuperation-sportive-osteopathie", label: "Récupération sportive & ostéopathie", tag: "Méthode", color: "#8B2035" },
                { href: "/osteopathie-sport-montpellier", label: "Ostéopathie du sport Montpellier", tag: "Sport", color: "#D4336E" },
                { href: "/hypnose-sport-montpellier", label: "Hypnose & performance sportive", tag: "Mental", color: "#E8A020" },
                { href: "/recuperation-sport-haut-niveau-sommeil-alimentation", label: "Récupération haut niveau : sommeil & alimentation", tag: "Nutrition", color: "#8B2035" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="group flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-pink-100 transition-all">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0" style={{ background: a.color }}>{a.tag}</span>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-[#D4336E] transition-colors leading-snug" style={{ fontFamily: "Figtree, sans-serif" }}>{a.label}</p>
                  <svg className="ml-auto flex-shrink-0 text-gray-300 group-hover:text-[#D4336E] transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0a0a14, #1a2a0a)", border: "1px solid rgba(232,160,32,0.25)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Castelnau-le-Lez - Sans ordonnance</p>
          <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Préparez votre prochain HYROX<br />
            <span style={{ color: "#E8A020" }}>avec un kiné de haut niveau</span>
          </h3>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
            1720 avenue de l'Europe, Castelnau-le-Lez · 06 50 14 91 92<br />
            Lundi – Samedi · 08h00 – 20h00
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Prendre rendez-vous sur Doctolib
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="tel:+33650149192" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm border border-white/20 hover:bg-white/10 transition-colors">
              Appeler le 06 50 14 91 92
            </a>
          </div>
        </div>
      </main>

      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #f0f0f0}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.5rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
