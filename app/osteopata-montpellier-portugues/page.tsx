import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Osteopata em Montpellier - Fala Português | Francis MOMBO D.O.",
  description:
    "Procura um osteopata que fale português em Montpellier? Francis MOMBO D.O. atende em português. Dor nas costas, pescoço, lesões desportivas. Marque consulta online no Doctolib.",
  keywords: [
    "osteopata Montpellier português",
    "osteopata Montpellier fala português",
    "osteopatia Montpellier",
    "dor nas costas Montpellier",
    "osteopata Castelnau-le-Lez",
    "fisioterapeuta Montpellier português",
    "osteopata lusófono Montpellier",
  ],
  alternates: { canonical: `${siteUrl}/osteopata-montpellier-portugues` },
  openGraph: {
    title: "Osteopata Montpellier - Fala Português | Francis MOMBO",
    description: "Francis MOMBO D.O. fala português. Osteopatia e fisioterapia em Montpellier. Marque online no Doctolib.",
    url: `${siteUrl}/osteopata-montpellier-portugues`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.webp`, width: 1200, height: 630, alt: "Osteopata Montpellier fala português Francis MOMBO" }],
  },
};

const faq = [
  {
    q: "A consulta pode ser feita em português?",
    a: "Sim. Francis MOMBO fala português com fluência e realiza consultas completas em português. Pode explicar os seus sintomas, o seu historial e fazer todas as suas perguntas no seu idioma.",
  },
  {
    q: "Que problemas trata a osteopatia?",
    a: "Dor nas costas, cervicalgias, ciática, cefaleias, lesões desportivas, problemas posturais, dor articular, dores na gravidez e muito mais. Francis MOMBO tem diploma de osteopatia D.O. e licenciatura em fisioterapia.",
  },
  {
    q: "Preciso de receita médica ou referenciação?",
    a: "Não. A osteopatia em França não requer receita nem referenciação médica. Pode marcar diretamente no Doctolib ou ligar para o 06 50 14 91 92.",
  },
  {
    q: "Onde ficam os consultórios?",
    a: "Dois locais: Castelnau-le-Lez (1720, Avenue de l'Europe - a 5 min do centro de Montpellier) e Saint-Mathieu-de-Tréviers (5, Avenue du Grand Chêne). Fácil acesso de carro.",
  },
  {
    q: "A osteopatia é comparticipada pelo seguro?",
    a: "A Sécurité Sociale francesa não cobre a osteopatia, mas a maioria das mutuais francesas e muitos seguros internacionais reembolsam parte ou a totalidade da consulta. Verifique a sua apólice.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Francis MOMBO - Osteopata e Fisioterapeuta Montpellier",
    url: siteUrl,
    telephone: "+33650149192",
    image: `${siteUrl}/francis-hero.webp`,
    description: "Osteopata lusófono em Montpellier. D.O. e fisioterapeuta. Osteopatia desportiva, dor nas costas, gravidez.",
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

export default function OsteopataMontpellierPortugues() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Voltar ao site
          </Link>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Marcar consulta
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2a1a3e 50%, #8B2035 100%)", minHeight: 280 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
              🇧🇷🇵🇹 Fala português
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E8A020", color: "#fff" }}>
              D.O. Osteopata · Fisioterapeuta
            </span>
          </div>
          <h1 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(24px, 5vw, 38px)" }}>
            Osteopata em Montpellier<br />
            <span style={{ color: "#E8A020" }}>que fala português</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-xl mb-8">
            Dor nas costas, cervicalgias, lesões desportivas - tratamento em português por um osteopata e fisioterapeuta qualificado perto de Montpellier.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#D4336E", color: "#fff" }}>
              Marcar consulta
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
          <span className="text-3xl">🇧🇷</span>
          <div>
            <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Consulta completa em português</p>
            <p className="text-gray-600 text-sm">Francis MOMBO fala português fluentemente. Não precisa de procurar as palavras em francês - explique os seus sintomas, o seu historial e as suas dúvidas com total à-vontade no seu idioma.</p>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              Sobre Francis MOMBO
            </h2>
            <p>Francis MOMBO tem o <strong>Diploma de Osteopatia (D.O.)</strong> e a licenciatura em <strong>fisioterapia</strong>, com mais de 10 anos de experiência clínica. Trabalhou como fisioterapeuta e osteopata oficial de equipas desportivas profissionais: MHSC Volley-Ball, a Federação Francesa de Voleibol (FFVB) e como consultor da seleção nacional de basquetebol do Mali no AfroBasket 2025.</p>
            <p className="mt-3">Os seus consultórios estão em <strong>Castelnau-le-Lez</strong> (a 5 min do centro de Montpellier) e em <strong>Saint-Mathieu-de-Tréviers</strong>. Atendimento de segunda a sexta, das 8h às 19h.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 pb-2 border-b-2" style={{ fontFamily: "Figtree, sans-serif", borderColor: "#fdeef3" }}>
              O que trata a osteopatia?
            </h2>
            <ul className="space-y-2">
              {[
                "Lombalgia aguda e crónica, ciática",
                "Cervicalgia e torcicolo",
                "Cefaleias e enxaquecas",
                "Lesões desportivas e otimização do desempenho",
                "Desequilíbrios posturais",
                "Dor articular (ombro, anca, joelho, tornozelo)",
                "Dores músculo-esqueléticas na gravidez",
                "Tensão e contracturas relacionadas com o stress",
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
              Idiomas disponíveis
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { flag: "🇫🇷", lang: "Francês" },
                { flag: "🇬🇧", lang: "Inglês" },
                { flag: "🇪🇸", lang: "Espanhol" },
                { flag: "🇧🇷", lang: "Português" },
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
              Perguntas frequentes
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
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO · D.O. Osteopata · Fisioterapeuta</p>
          <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>
            Pronto para marcar a sua consulta?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Zona de Montpellier - Castelnau-le-Lez e Saint-Mathieu-de-Tréviers. Sem receita médica.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm" style={{ background: "#E8A020", color: "#1a1a2e" }}>
              Marcar no Doctolib
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
