import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Osteopata a Montpellier - Parla Italiano | Francis MOMBO D.O.",
  description:
    "Cerchi un osteopata che parli italiano a Montpellier? Francis MOMBO D.O. parla italiano. Mal di schiena, cervicale, infortuni sportivi. Prenota online su Doctolib.",
  keywords: [
    "osteopata Montpellier italiano",
    "osteopata Montpellier parla italiano",
    "osteopatia Montpellier",
    "mal di schiena Montpellier",
    "osteopata Castelnau-le-Lez",
    "fisioterapista Montpellier italiano",
    "osteopata italofono Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/osteopata-montpellier-italiano` },
  openGraph: {
    title: "Osteopata Montpellier - Parla Italiano | Francis MOMBO",
    description: "Francis MOMBO D.O. parla italiano. Osteopatia e fisioterapia a Montpellier. Prenota su Doctolib.",
    url: `${siteUrl}/osteopata-montpellier-italiano`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.webp`, width: 1200, height: 630, alt: "Osteopata Montpellier parla italiano Francis MOMBO" }],
  },
};

const faq = [
  {
    q: "La visita si svolge in italiano?",
    a: "Sì. Francis MOMBO parla italiano correntemente e conduce visite complete in italiano. Puoi spiegare i tuoi sintomi, la tua anamnesi e fare tutte le domande nella tua lingua.",
  },
  {
    q: "Quali problemi tratta l'osteopatia?",
    a: "Mal di schiena, cervicalgia, sciatalgia, cefalee, infortuni sportivi, problemi posturali, dolori articolari, dolori in gravidanza e molto altro. Francis MOMBO ha il Diploma di Osteopatia D.O. e la laurea in fisioterapia.",
  },
  {
    q: "Serve una ricetta o una richiesta medica?",
    a: "No. L'osteopatia in Francia non richiede ricetta né richiesta medica. Puoi prenotare direttamente su Doctolib o chiamare il 06 50 14 91 92.",
  },
  {
    q: "Dove si trovano gli studi?",
    a: "Due sedi: Castelnau-le-Lez (1720, Avenue de l'Europe - a 5 min dal centro di Montpellier) e Saint-Mathieu-de-Tréviers (5, Avenue du Grand Chêne). Facilmente raggiungibili in auto.",
  },
  {
    q: "L'osteopatia è rimborsata dall'assicurazione?",
    a: "La Sécurité Sociale francese non rimborsa l'osteopatia, ma la maggior parte delle mutue francesi e molte assicurazioni internazionali coprono parte o la totalità della visita. Verifica la tua polizza.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Francis MOMBO - Osteopata e Fisioterapista Montpellier",
    url: siteUrl,
    telephone: "+33650149192",
    image: `${siteUrl}/francis-hero.webp`,
    description: "Osteopata italofono a Montpellier. D.O. e fisioterapista. Osteopatia sportiva, mal di schiena, gravidanza.",
    address: { "@type": "PostalAddress", streetAddress: "1720, Avenue de l'Europe", addressLocality: "Castelnau-le-Lez", postalCode: "34170", addressCountry: "FR" },
    geo: { "@type": "GeoCoordinates", latitude: 43.6312, longitude: 3.9187 },
    availableLanguage: ["French", "English", "Spanish", "Portuguese", "Italian"],
    openingHours: "Mo-Fr 08:00-19:00",
    priceRange: "€€",
    sameAs: ["https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  },
];

export default function OsteopataMontpellierItaliano() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Torna al sito
          </Link>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prenota visita
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2a1a3e 50%, #8B2035 100%)", minHeight: 280 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              🇮🇹 Si parla italiano
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E8A020", color: "#fff" }}>
              D.O. Osteopata · Fisioterapista
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(24px, 5vw, 38px)" }}>
            Osteopata a Montpellier<br />
            <span style={{ color: "#E8A020" }}>che parla italiano</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-xl mb-8">
            Mal di schiena, cervicale, infortuni sportivi - trattamento in italiano da un osteopata e fisioterapista qualificato vicino a Montpellier.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#D4336E", color: "#fff" }}>
              Prenota visita
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="tel:0650149192" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-colors">
              📞 06 50 14 91 92
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Language badge */}
        <div className="mb-10 p-5 rounded-2xl border-2 flex items-start gap-4" style={{ borderColor: "#E8A020", background: "#fffbf0" }}>
          <span className="text-3xl">🇮🇹</span>
          <div>
            <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Visita completa in italiano</p>
            <p className="text-gray-600 text-sm">Francis MOMBO parla italiano correntemente. Non devi cercare le parole in francese - spiega i tuoi sintomi, la tua storia clinica e i tuoi dubbi con tutta la comodità della tua lingua.</p>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              Chi è Francis MOMBO
            </h2>
            <p>Francis MOMBO ha il <strong>Diploma di Osteopatia (D.O.)</strong> e la laurea in <strong>fisioterapia</strong>, con oltre 10 anni di esperienza clinica. Ha lavorato come fisioterapista e osteopata ufficiale di squadre sportive professionali: MHSC Volley-Ball, la Federazione Francese di Pallavolo (FFVB) e come consulente della nazionale di basket del Mali all'AfroBasket 2025.</p>
            <p className="mt-3">I suoi studi si trovano a <strong>Castelnau-le-Lez</strong> (a 5 min dal centro di Montpellier) e a <strong>Saint-Mathieu-de-Tréviers</strong>. Visite dal lunedi al venerdì, dalle 8 alle 19.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              Cosa tratta l'osteopatia?
            </h2>
            <ul className="space-y-2">
              {[
                "Lombalgia acuta e cronica, sciatalgia",
                "Cervicalgia e torcicollo",
                "Cefalee ed emicranie",
                "Infortuni sportivi e ottimizzazione della performance",
                "Squilibri posturali",
                "Dolori articolari (spalla, anca, ginocchio, caviglia)",
                "Dolori muscolo-scheletrici in gravidanza",
                "Tensioni e contratture da stress",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span style={{ color: "#D4336E", marginTop: 3 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              Lingue disponibili
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { flag: "🇫🇷", lang: "Francese" },
                { flag: "🇬🇧", lang: "Inglese" },
                { flag: "🇪🇸", lang: "Spagnolo" },
                { flag: "🇧🇷", lang: "Portoghese" },
                { flag: "🇮🇹", lang: "Italiano" },
              ].map((l) => (
                <div key={l.lang} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 text-sm font-medium text-gray-700">
                  <span>{l.flag}</span> {l.lang}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              Domande frequenti
            </h2>
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
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #1a1a2e, #8B2035)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO · D.O. Osteopata · Fisioterapista</p>
          <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Pronto a prenotare la tua visita?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Area Montpellier - Castelnau-le-Lez e Saint-Mathieu-de-Tréviers. Senza ricetta medica.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#E8A020", color: "#1a1a2e" }}>
              Prenota su Doctolib
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="tel:0650149192" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm border-2 border-white/40 text-white">
              📞 06 50 14 91 92
            </a>
          </div>
        </div>

      </main>
    </>
  );
}
