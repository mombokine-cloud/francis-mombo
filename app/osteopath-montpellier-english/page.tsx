import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "English-Speaking Osteopath Montpellier | Francis MOMBO D.O.",
  description:
    "Looking for an English-speaking osteopath in Montpellier? Francis MOMBO D.O. speaks English and treats back pain, neck pain, sports injuries and more. Book online via Doctolib.",
  keywords: [
    "english speaking osteopath Montpellier",
    "osteopath Montpellier english",
    "osteopathy Montpellier english",
    "back pain Montpellier",
    "neck pain osteopath Montpellier",
    "sports osteopath Montpellier",
    "osteopath Castelnau-le-Lez",
    "English doctor Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/osteopath-montpellier-english` },
  openGraph: {
    title: "English-Speaking Osteopath Montpellier | Francis MOMBO",
    description: "Francis MOMBO D.O. is an English-speaking osteopath in Montpellier. Book online via Doctolib.",
    url: `${siteUrl}/osteopath-montpellier-english`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.webp`, width: 1200, height: 630, alt: "English-speaking osteopath Montpellier Francis MOMBO" }],
  },
};

const faq = [
  {
    q: "Do you speak English during consultations?",
    a: "Yes. Francis MOMBO speaks English fluently and conducts full consultations in English. You can explain your symptoms, ask questions, and follow your treatment in your language.",
  },
  {
    q: "What conditions do you treat?",
    a: "Back pain, neck pain, sciatica, headaches, sports injuries, postural problems, joint pain, pregnancy-related pain and more. Francis MOMBO holds both an osteopathy D.O. and a physiotherapy degree.",
  },
  {
    q: "Do I need a referral or prescription?",
    a: "No referral or prescription is needed. You can book directly online via Doctolib or call 06 50 14 91 92.",
  },
  {
    q: "Where are the clinics located?",
    a: "Two locations: Castelnau-le-Lez (1720, Avenue de l'Europe - 5 min from Montpellier city centre) and Saint-Mathieu-de-Tréviers (5, Avenue du Grand Chêne). Both are easily accessible by car.",
  },
  {
    q: "Is osteopathy covered by French health insurance?",
    a: "Osteopathy is not covered by the French national health insurance (Sécurité Sociale), but most French complementary health insurance plans (mutuelles) and many international/expat insurance policies reimburse part or all of the consultation fee.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Francis MOMBO - Osteopath & Physiotherapist Montpellier",
    url: siteUrl,
    telephone: "+33650149192",
    image: `${siteUrl}/francis-hero.webp`,
    description: "English-speaking osteopath in Montpellier. D.O. and physiotherapist. Sports osteopathy, back pain, neck pain, pregnancy care.",
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

export default function OsteopathMontpellierEnglish() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Back to site
          </Link>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Book online
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2a1a3e 50%, #8B2035 100%)", minHeight: 280 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              🇬🇧 English spoken
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E8A020", color: "#fff" }}>
              D.O. Osteopath · Physiotherapist
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(24px, 5vw, 38px)" }}>
            English-Speaking Osteopath<br />
            <span style={{ color: "#E8A020" }}>in Montpellier</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-xl mb-8">
            Back pain, neck pain, sports injuries — get treated in English by a qualified osteopath and physiotherapist near Montpellier.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#D4336E", color: "#fff" }}>
              Book an appointment
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
          <span className="text-3xl">🇬🇧</span>
          <div>
            <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Fully fluent in English</p>
            <p className="text-gray-600 text-sm">Francis MOMBO conducts consultations in English. No need to struggle with medical vocabulary — explain your symptoms, your history and your questions in your own language.</p>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              About Francis MOMBO
            </h2>
            <p>Francis MOMBO holds a <strong>Doctor of Osteopathy (D.O.)</strong> and a <strong>physiotherapy degree</strong>, with over 10 years of clinical experience. He has worked as official physiotherapist and osteopath for professional sports teams including MHSC Volley-Ball, the French Volleyball Federation (FFVB), and as a consultant for the Mali national basketball team at AfroBasket 2025.</p>
            <p className="mt-3">His clinics are located in <strong>Castelnau-le-Lez</strong> (5 min from Montpellier city centre) and <strong>Saint-Mathieu-de-Tréviers</strong>. Appointments available Monday to Friday, 8am–7pm.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              What can osteopathy treat?
            </h2>
            <ul className="space-y-2">
              {[
                "Acute and chronic back pain (lumbago, sciatica)",
                "Neck pain and stiff neck (torticollis)",
                "Headaches and migraines",
                "Sports injuries and performance optimisation",
                "Postural imbalances",
                "Joint pain (shoulder, hip, knee, ankle)",
                "Pregnancy-related musculoskeletal pain",
                "Stress and tension-related complaints",
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
              Languages available
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { flag: "🇫🇷", lang: "French" },
                { flag: "🇬🇧", lang: "English" },
                { flag: "🇪🇸", lang: "Spanish" },
                { flag: "🇧🇷", lang: "Portuguese" },
                { flag: "🇮🇹", lang: "Italian" },
              ].map((l) => (
                <div key={l.lang} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 text-sm font-medium text-gray-700">
                  <span>{l.flag}</span> {l.lang}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              FAQ
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
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO · D.O. Osteopath · Physiotherapist</p>
          <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Ready to book your appointment?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Montpellier area - Castelnau-le-Lez &amp; Saint-Mathieu-de-Tréviers. No prescription needed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#E8A020", color: "#1a1a2e" }}>
              Book online (Doctolib)
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
