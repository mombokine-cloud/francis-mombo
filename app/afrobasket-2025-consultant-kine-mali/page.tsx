import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "../components/RelatedArticles";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";
const fibaSource = "https://www.fiba.basketball/en/womensafrobasket/2025";

export const metadata: Metadata = {
  title: "AfroBasket 2025 — Consultant Kiné · Équipe du Mali | Francis MOMBO",
  description:
    "Francis MOMBO, kinésithérapeute et ostéopathe D.O., consultant kiné auprès de l'équipe féminine du Mali au FIBA Women's AfroBasket 2025 (Abidjan). Optimisation de la performance, gestion de la cryothérapie. Le Mali termine finaliste.",
  keywords: [
    "AfroBasket 2025 kiné",
    "consultant kinésithérapeute basketball Afrique",
    "FIBA AfroBasket 2025 Mali",
    "kiné sport haut niveau Montpellier",
    "Francis MOMBO AfroBasket",
    "cryothérapie sport de haut niveau",
    "kinésithérapeute performance sportive",
    "consultant kiné basketball",
    "ostéopathe sport international Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/afrobasket-2025-consultant-kine-mali` },
  openGraph: {
    title: "AfroBasket 2025 — Francis MOMBO, consultant kiné de l'équipe du Mali",
    description:
      "Consultant kiné auprès de l'équipe féminine du Mali au FIBA Women's AfroBasket 2025. Le Mali termine finaliste. Retour sur une mission de performance et cryothérapie à Abidjan.",
    url: `${siteUrl}/afrobasket-2025-consultant-kine-mali`,
    type: "article",
    images: [{ url: "/og-image.jpeg.png", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Quel était le rôle de Francis MOMBO lors de l'AfroBasket 2025 ?",
    a: "Francis MOMBO a été consultant kinésithérapeute auprès de l'équipe féminine du Mali lors du FIBA Women's AfroBasket 2025, organisé à Abidjan (Côte d'Ivoire). Sa mission couvrait l'optimisation de la performance physique des joueuses et la gestion des protocoles de cryothérapie entre les matchs.",
  },
  {
    q: "Comment Francis MOMBO a-t-il rejoint l'équipe du Mali ?",
    a: "La consultation a été demandée par le kinésithérapeute basé à Abidjan, sur le lieu même de la compétition. Ce partenariat illustre la reconnaissance du savoir-faire de Francis MOMBO dans la gestion de la récupération et de la performance au plus haut niveau africain.",
  },
  {
    q: "Qu'est-ce que la cryothérapie dans le sport de haut niveau ?",
    a: "La cryothérapie consiste à exposer les muscles et articulations à des températures très basses (généralement entre -110°C et -160°C en cryothérapie corps entier, ou localement par application de froid) pour accélérer la récupération, réduire l'inflammation et préparer les athlètes au match suivant. C'est un protocole standard dans les équipes professionnelles.",
  },
  {
    q: "Quel résultat a obtenu le Mali à l'AfroBasket 2025 ?",
    a: "L'équipe féminine du Mali a atteint la finale du FIBA Women's AfroBasket 2025, terminant au 2e rang de la compétition continentale africaine. Une performance exceptionnelle pour une équipe suivie par Francis MOMBO en tant que consultant kiné.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FIBA Women's AfroBasket 2025 — Francis MOMBO, consultant kinésithérapeute de l'équipe du Mali",
    datePublished: "2025-07-01",
    dateModified: "2026-10-08",
    author: {
      "@type": "Person",
      name: "Francis MOMBO",
      url: siteUrl,
      jobTitle: "Kinésithérapeute — Ostéopathe D.O.",
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: "Francis MOMBO — Cabinet d'ostéopathie & kinésithérapie",
      url: siteUrl,
    },
    url: `${siteUrl}/afrobasket-2025-consultant-kine-mali`,
    about: {
      "@type": "Event",
      name: "FIBA Women's AfroBasket 2025",
      location: { "@type": "Place", name: "Abidjan", addressCountry: "CI" },
      url: fibaSource,
      organizer: { "@type": "SportsOrganization", name: "FIBA Africa", url: "https://www.fiba.basketball" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
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

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a10 0%, #2d1020 40%, #8B2035 100%)", minHeight: 320 }}>
        {/* Photo de compétition — remplacer src par votre photo AfroBasket */}
        {/* Pour ajouter vos photos : déposez-les dans /public/ et remplacez l'URL ci-dessous */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('/equipe-france-b.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              🏀 AfroBasket 2025
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              🌍 Abidjan · Côte d'Ivoire
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E8A020", color: "#fff" }}>
              🥈 Finaliste
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}>
            FIBA Women's AfroBasket 2025<br />
            <span style={{ color: "#E8A020" }}>Consultant Kiné — Équipe du Mali</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-2xl">
            Optimisation de la performance · Gestion de la cryothérapie · Récupération inter-matchs
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "4/3" }}>
            <img
              src="/afrobasket-mali-competition.webp"
              alt="FIBA Women's AfroBasket 2025 — Abidjan, Côte d'Ivoire"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "4/3" }}>
            <img
              src="/afrobasket-mali-equipe.webp"
              alt="Équipe féminine du Mali — FIBA Women's AfroBasket 2025"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-right text-xs text-gray-400 mb-8">
          © <a href="https://ouaga24.com" target="_blank" rel="noopener noreferrer" className="hover:underline">ouaga24.com</a>
        </p>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Une consultation venue d'Abidjan</h2>
            <p>En 2025, la consultation est venue directement du terrain : c'est le kinésithérapeute basé à Abidjan — lieu de la compétition — qui contacte Francis MOMBO pour renforcer le suivi physique de l'<strong>équipe nationale féminine de basketball du Mali</strong>, engagée dans le <strong>FIBA Women's AfroBasket 2025</strong>.</p>
            <p>Ce type de collaboration illustre la reconnaissance du savoir-faire de Francis MOMBO dans la gestion de la performance au plus haut niveau du sport africain : réputé pour son travail avec le MHSC VB et la FFVB, il est sollicité comme <strong>consultant kiné</strong> par des staffs internationaux qui cherchent une expertise spécifique.</p>
          </section>

          <section>
            <h2 className="article-h2">Mission : performance et cryothérapie</h2>
            <p>La mission de Francis MOMBO couvre deux axes complémentaires :</p>
            <ul className="article-list">
              <li><strong>Optimisation de la performance physique</strong> — évaluation musculaire des joueuses, ajustements ostéopathiques, gestion des tensions et des douleurs entre les matchs ;</li>
              <li><strong>Protocoles de cryothérapie</strong> — mise en place et supervision des séances de froid thérapeutique pour accélérer la récupération musculaire et réduire l'inflammation ;</li>
              <li><strong>Préparation inter-matchs</strong> — dans un tournoi à élimination directe où les matchs s'enchaînent sur plusieurs jours, la récupération devient un avantage concurrentiel décisif.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">La cryothérapie dans le sport de haut niveau</h2>
            <p>La cryothérapie — exposition à des températures très basses, localement ou sur le corps entier — est aujourd'hui un standard dans les clubs professionnels. Ses effets sur la récupération sont documentés :</p>
            <ul className="article-list">
              <li>réduction de l'inflammation musculaire post-effort ;</li>
              <li>diminution des courbatures et de la fatigue perçue ;</li>
              <li>amélioration de la qualité du sommeil de récupération ;</li>
              <li>maintien du tonus neuromusculaire entre deux compétitions rapprochées.</li>
            </ul>
            <p>Dans un tournoi comme l'AfroBasket — où l'équipe peut jouer 3 à 4 matchs en une semaine — la gestion du froid fait partie intégrante de la stratégie de performance.</p>
          </section>

          <section>
            <h2 className="article-h2">Le Mali finaliste — une performance historique</h2>
            <p>L'équipe féminine du Mali termine le FIBA Women's AfroBasket 2025 à la <strong>2e place de la compétition continentale africaine</strong>. Une performance de haut rang pour une équipe dont la condition physique a été soignée jusqu'en finale.</p>
            <p>Ce résultat s'inscrit dans la trajectoire internationale croissante du basketball malien, porté par des joueuses évoluant dans des championnats professionnels, et d'un staff technique et médical de plus en plus structuré.</p>
          </section>

          <section>
            <h2 className="article-h2">Un parcours international continu</h2>
            <p>L'AfroBasket 2025 s'ajoute à un parcours international déjà dense : après <strong>5 missions avec la Fédération Française de Volley-Ball</strong> (2013–2018) et <strong>9 saisons comme kiné-ostéopathe officiel du MHSC VB</strong>, Francis MOMBO continue d'exercer son expertise au plus haut niveau — désormais à l'échelle du continent africain.</p>
            <p>Chaque mission internationale enrichit la pratique au cabinet de <strong>Castelnau-le-Lez</strong> : précision du diagnostic, efficacité des protocoles de récupération, gestion de la performance sous contrainte de temps. Des compétences que Francis MOMBO met au service de tous ses patients, sportifs ou non.</p>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Source */}
        <div className="mt-8 rounded-xl border border-gray-100 px-5 py-4 flex items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2" className="flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p className="text-xs text-gray-500">
            Source officielle de la compétition :{" "}
            <a href={fibaSource} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: "#D4336E" }}>
              FIBA Women's AfroBasket 2025 — fiba.basketball
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #1a0a10, #8B2035)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO · Kiné · Ostéopathe D.O.</p>
          <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Bénéficiez d'une prise en charge de niveau international
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Les mêmes protocoles utilisés en compétition internationale — au cabinet de Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.
          </p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#E8A020", color: "#1a0a10" }}>
            Prendre rendez-vous sur Doctolib
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <RelatedArticles current="/afrobasket-2025-consultant-kine-mali" />
      </main>

      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
