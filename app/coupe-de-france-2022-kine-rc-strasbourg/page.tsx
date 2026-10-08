import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "../components/RelatedArticles";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Coupe de France 2022 — Kiné RC Strasbourg · MHSC | Francis MOMBO",
  description:
    "Francis MOMBO, kinésithérapeute et ostéopathe D.O., assure le suivi kiné du RC Strasbourg lors du match de Coupe de France contre le MHSC le 2 janvier 2022. Une expérience unique au carrefour du football professionnel.",
  keywords: [
    "kiné RC Strasbourg",
    "Coupe de France 2022 MHSC Strasbourg",
    "kinésithérapeute football professionnel Montpellier",
    "Francis MOMBO kiné football",
    "kiné Ligue 1 Montpellier",
    "kinésithérapeute sport de haut niveau Montpellier",
    "ostéopathe football professionnel",
  ],
  alternates: { canonical: `${siteUrl}/coupe-de-france-2022-kine-rc-strasbourg` },
  openGraph: {
    title: "Coupe de France 2022 — Francis MOMBO, kiné du RC Strasbourg",
    description:
      "Match MHSC / RC Strasbourg — Coupe de France, 2 janvier 2022. Francis MOMBO assure le suivi kinésithérapeute de l'équipe alsacienne lors de ce déplacement.",
    url: `${siteUrl}/coupe-de-france-2022-kine-rc-strasbourg`,
    type: "article",
    images: [{ url: "/og-image.jpeg.png", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Comment Francis MOMBO a-t-il accompagné le RC Strasbourg ?",
    a: "Lors du match de Coupe de France 2022 opposant le MHSC au RC Strasbourg (2 janvier 2022), Francis MOMBO a assuré le suivi kinésithérapeute de l'équipe alsacienne sur place. Un rôle de consultant kiné au cœur du football professionnel de Ligue 1.",
  },
  {
    q: "Quel lien Francis MOMBO a-t-il avec le MHSC football ?",
    a: "Francis MOMBO est kinésithérapeute et ostéopathe officiel du MHSC VB (la section volley-ball du club montpelliérain). À ce titre, il évolue dans l'environnement du MHSC et partage les infrastructures du club. Son expertise en kinésithérapie sportive de haut niveau l'amène naturellement à des consultations ponctuelles au-delà du volley-ball.",
  },
  {
    q: "Le RC Strasbourg a-t-il gagné ce match ?",
    a: "La Coupe de France est une compétition à élimination directe où chaque match est décisif. Ce qui compte pour le staff kiné : que les joueurs soient en capacité optimale de performance et qu'ils rentrent sans blessure supplémentaire — quel que soit le résultat final.",
  },
  {
    q: "Francis MOMBO suit-il d'autres sports que le volley-ball ?",
    a: "Oui. Au-delà de ses 9 saisons avec le MHSC VB et ses 5 missions avec la FFVB, Francis MOMBO a étendu son expertise à d'autres disciplines : basketball africain (consultant kiné équipe du Mali — AfroBasket 2025), football professionnel (RC Strasbourg, Coupe de France 2022). Une polyvalence qui enrichit sa pratique quotidienne au cabinet.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Coupe de France 2022 — MHSC / RC Strasbourg : Francis MOMBO, kinésithérapeute de l'équipe alsacienne",
    datePublished: "2022-01-02",
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
    url: `${siteUrl}/coupe-de-france-2022-kine-rc-strasbourg`,
    about: {
      "@type": "Event",
      name: "Coupe de France 2022 — MHSC / RC Strasbourg",
      startDate: "2022-01-02",
      location: { "@type": "Place", name: "Montpellier", addressCountry: "FR" },
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
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a2a4a 50%, #8B2035 100%)", minHeight: 300 }}>
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: "url('/coupe_de_france_2022_MHSC_RCSTRASBOURG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              ⚽ Coupe de France 2022
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              📅 2 janvier 2022
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E8A020", color: "#fff" }}>
              RC Strasbourg · Ligue 1
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(24px, 5vw, 38px)" }}>
            MHSC / RC Strasbourg<br />
            <span style={{ color: "#E8A020" }}>Kinésithérapeute RC Strasbourg — Coupe de France</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-2xl">
            Suivi kiné de l'équipe alsacienne · Football Ligue 1 · Montpellier
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Photos */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          <div className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "4/3" }}>
            <img
              src="/coupe_de_france_2022_MHSC_RCSTRASBOURG.webp"
              alt="Match MHSC / RC Strasbourg — Coupe de France 2022"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "4/3" }}>
            <img
              src="/mhsc_strasbourg.webp"
              alt="Francis MOMBO avec le staff du RC Strasbourg — Coupe de France 2022"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Un rôle inédit au carrefour du football professionnel</h2>
            <p>Le 2 janvier 2022, le MHSC reçoit le <strong>RC Strasbourg Alsace</strong> en Coupe de France. Pour cette rencontre de Ligue 1 jouée à Montpellier, Francis MOMBO est sollicité pour assurer le <strong>suivi kinésithérapeute de l'équipe alsacienne</strong> lors de son déplacement.</p>
            <p>Une mission qui illustre la confiance que les clubs professionnels accordent à son expertise, bien au-delà de son terrain habituel du volley-ball.</p>
          </section>

          <section>
            <h2 className="article-h2">Un environnement familier : les installations du MHSC</h2>
            <p>En tant que kinésithérapeute et ostéopathe officiel du <strong>MHSC VB</strong>, Francis MOMBO évolue au quotidien dans les infrastructures du club montpelliérain — infrastructures partagées entre les sections football et volley-ball. C'est dans ce contexte qu'il est naturellement intégré au dispositif médical pour ce match de Coupe de France.</p>
            <ul className="article-list">
              <li>accès aux salles de soin et de récupération du stade ;</li>
              <li>connaissance des protocoles de prise en charge en match ;</li>
              <li>coordination avec le staff médical du club visiteur ;</li>
              <li>gestion des incidents musculaires et articulaires en temps réel.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">La kinésithérapie lors d'un match professionnel</h2>
            <p>Dans un club de Ligue 1, le kiné de match joue un rôle central :</p>
            <ul className="article-list">
              <li><strong>Avant le match</strong> — préparation musculaire, activation, strapping préventif ;</li>
              <li><strong>À la mi-temps</strong> — gestion des douleurs, ajustements ostéopathiques rapides, décision médicale sur la poursuite du jeu ;</li>
              <li><strong>Après le match</strong> — bilan des chocs et traumatismes, premiers soins, protocole de récupération pour le trajet retour.</li>
            </ul>
            <p>Dans les compétitions à enjeu, chaque minute compte. Le kiné doit être rapide, précis et capable d'évaluer sous pression.</p>
          </section>

          <section>
            <h2 className="article-h2">Une expertise multi-sports</h2>
            <p>Cette intervention confirme la polyvalence de Francis MOMBO dans le sport de haut niveau : <strong>volley-ball</strong> (MHSC VB, FFVB), <strong>football</strong> (RC Strasbourg, Coupe de France 2022), <strong>basketball</strong> (équipe du Mali, AfroBasket 2025). Chaque discipline apporte ses propres spécificités biomécaniques — des apprentissages qui enrichissent directement la prise en charge au cabinet.</p>
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

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0a1628, #8B2035)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO · Kiné · Ostéopathe D.O.</p>
          <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Votre corps mérite une prise en charge de niveau pro
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Cabinet à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers — consultation sans ordonnance.
          </p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#E8A020", color: "#0a1628" }}>
            Prendre rendez-vous sur Doctolib
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <RelatedArticles current="/coupe-de-france-2022-kine-rc-strasbourg" />
      </main>

      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
