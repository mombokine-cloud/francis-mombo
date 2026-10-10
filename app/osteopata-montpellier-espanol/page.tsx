import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Osteópata en Montpellier - Habla Español | Francis MOMBO D.O.",
  description:
    "¿Buscas un osteópata que hable español en Montpellier? Francis MOMBO D.O. habla español. Dolor de espalda, cuello, lesiones deportivas. Cita online en Doctolib.",
  keywords: [
    "osteópata Montpellier español",
    "osteopata Montpellier habla español",
    "osteopatía Montpellier",
    "dolor de espalda Montpellier",
    "osteópata Castelnau-le-Lez",
    "fisioterapeuta Montpellier español",
    "osteópata hispanohablante Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/osteopata-montpellier-espanol` },
  openGraph: {
    title: "Osteópata Montpellier - Habla Español | Francis MOMBO",
    description: "Francis MOMBO D.O. habla español. Osteopatía y fisioterapia en Montpellier. Reserva en Doctolib.",
    url: `${siteUrl}/osteopata-montpellier-espanol`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.webp`, width: 1200, height: 630, alt: "Osteópata Montpellier habla español Francis MOMBO" }],
  },
};

const faq = [
  {
    q: "¿Atiende en español?",
    a: "Sí. Francis MOMBO habla español con fluidez y realiza consultas completas en español. Puedes explicar tus síntomas, tu historial y hacer todas tus preguntas en tu idioma.",
  },
  {
    q: "¿Qué problemas trata la osteopatía?",
    a: "Dolor de espalda, cervicales, ciática, cefaleas, lesiones deportivas, problemas posturales, dolor articular, dolores del embarazo y más. Francis MOMBO tiene titulación en osteopatía D.O. y en fisioterapia.",
  },
  {
    q: "¿Necesito receta o derivación médica?",
    a: "No. La osteopatía en Francia no requiere receta ni derivación. Puedes reservar directamente en Doctolib o llamar al 06 50 14 91 92.",
  },
  {
    q: "¿Dónde están las consultas?",
    a: "Dos ubicaciones: Castelnau-le-Lez (1720, Avenue de l'Europe - a 5 min del centro de Montpellier) y Saint-Mathieu-de-Tréviers (5, Avenue du Grand Chêne). Fácil acceso en coche.",
  },
  {
    q: "¿La osteopatía está cubierta por el seguro?",
    a: "La Sécurité Sociale francesa no cubre la osteopatía, pero la mayoría de las mutuales francesas y muchos seguros internacionales reembolsan parte o la totalidad del coste. Consulta tu póliza.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Francis MOMBO - Osteópata y Fisioterapeuta Montpellier",
    url: siteUrl,
    telephone: "+33650149192",
    image: `${siteUrl}/francis-hero.webp`,
    description: "Osteópata hispanohablante en Montpellier. D.O. y fisioterapeuta. Osteopatía deportiva, dolor de espalda, embarazo.",
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

export default function OsteopataMontpellierEspanol() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Volver al sitio
          </Link>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Reservar cita
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2a1a3e 50%, #8B2035 100%)", minHeight: 280 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              🇪🇸 Se habla español
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E8A020", color: "#fff" }}>
              D.O. Osteópata · Fisioterapeuta
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(24px, 5vw, 38px)" }}>
            Osteópata en Montpellier<br />
            <span style={{ color: "#E8A020" }}>que habla español</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-xl mb-8">
            Dolor de espalda, cervicales, lesiones deportivas - tratamiento en español por un osteópata y fisioterapeuta cualificado cerca de Montpellier.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#D4336E", color: "#fff" }}>
              Reservar cita
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
          <span className="text-3xl">🇪🇸</span>
          <div>
            <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Consulta completa en español</p>
            <p className="text-gray-600 text-sm">Francis MOMBO habla español con fluidez. No es necesario buscar las palabras en francés - explica tus síntomas, tu historial y tus dudas con total comodidad en tu idioma.</p>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              Sobre Francis MOMBO
            </h2>
            <p>Francis MOMBO tiene el <strong>Diploma de Osteopatía (D.O.)</strong> y el título de <strong>fisioterapeuta</strong>, con más de 10 años de experiencia clínica. Ha trabajado como fisioterapeuta y osteópata oficial de equipos deportivos profesionales: MHSC Volley-Ball, la Federación Francesa de Voleibol (FFVB) y como consultor de la selección nacional de baloncesto de Mali en el AfroBasket 2025.</p>
            <p className="mt-3">Sus consultas están en <strong>Castelnau-le-Lez</strong> (a 5 min del centro de Montpellier) y en <strong>Saint-Mathieu-de-Tréviers</strong>. Atención de lunes a viernes, de 8h a 19h.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              ¿Qué trata la osteopatía?
            </h2>
            <ul className="space-y-2">
              {[
                "Lumbalgia aguda y crónica, ciática",
                "Cervicalgia y tortícolis",
                "Cefaleas y migrañas",
                "Lesiones deportivas y optimización del rendimiento",
                "Desequilibrios posturales",
                "Dolor articular (hombro, cadera, rodilla, tobillo)",
                "Dolores musculoesqueléticos durante el embarazo",
                "Tensión y contracturas relacionadas con el estrés",
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
              Idiomas disponibles
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { flag: "🇫🇷", lang: "Francés" },
                { flag: "🇬🇧", lang: "Inglés" },
                { flag: "🇪🇸", lang: "Español" },
                { flag: "🇧🇷", lang: "Portugués" },
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
              Preguntas frecuentes
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
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO · D.O. Osteópata · Fisioterapeuta</p>
          <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            ¿Listo para reservar tu cita?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Zona de Montpellier - Castelnau-le-Lez y Saint-Mathieu-de-Tréviers. Sin receta médica.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#E8A020", color: "#1a1a2e" }}>
              Reservar en Doctolib
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
