import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Tarifs ostéopathe Montpellier — 60–70 € | Remboursement mutuelle",
  description:
    "Tarifs de consultation ostéopathique à Montpellier et Castelnau-le-Lez : 60 à 70 € pour adultes, enfants et nourrissons. Informations sur le remboursement mutuelle et les moyens de paiement.",
  keywords: [
    "tarif ostéopathe Montpellier",
    "prix ostéopathe Montpellier",
    "consultation ostéopathie prix",
    "remboursement ostéopathe mutuelle",
    "tarif ostéopathe Castelnau-le-Lez",
    "prix séance ostéopathie 2026",
  ],
  alternates: { canonical: `${siteUrl}/tarifs-osteopathe-montpellier` },
  openGraph: {
    title: "Tarifs ostéopathe Montpellier — Francis MOMBO",
    description: "60 à 70 € la consultation d'ostéopathie à Montpellier. Remboursement mutuelle, moyens de paiement et FAQ.",
    url: `${siteUrl}/tarifs-osteopathe-montpellier`,
    type: "article",
  },
};

const faq = [
  { q: "Combien coûte une consultation d'ostéopathie à Montpellier ?", a: "La consultation est de 60 € pour les adultes, 65 € pour les enfants et 70 € pour les nourrissons. Ce tarif couvre l'ensemble de la séance, bilan et traitement compris." },
  { q: "L'ostéopathie est-elle remboursée par la Sécurité sociale ?", a: "Non, l'ostéopathie n'est pas prise en charge par la Sécurité sociale. En revanche, de nombreuses mutuelles remboursent tout ou partie de la consultation sur présentation d'un reçu." },
  { q: "Comment se faire rembourser par sa mutuelle ?", a: "À l'issue de la consultation, un reçu nominatif vous est remis. Il suffit de le transmettre à votre mutuelle (courrier, application mobile ou espace en ligne). Le montant dépend de votre contrat." },
  { q: "Quels moyens de paiement sont acceptés ?", a: "Le cabinet accepte les règlements par carte bancaire, espèces et chèque. Le paiement s'effectue à l'issue de la consultation." },
  { q: "Le tarif est-il le même pour une consultation de kinésithérapie ?", a: "Non, les séances de kinésithérapie sont tarifées selon la nomenclature de la Sécurité sociale et remboursées sur prescription médicale. Renseignez-vous auprès du cabinet pour les tarifs kinésithérapie." },
  { q: "Y a-t-il un tarif différent pour les sportifs ou les seniors ?", a: "Non, le tarif est identique pour tous les profils : adultes, sportifs, femmes enceintes, seniors. Seul le tarif nourrisson (jusqu'à 18 mois) est légèrement différent." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#E8A020" }}>Tarifs</span>
            <span className="text-xs text-gray-400">Cabinet · Montpellier</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Tarifs et remboursement — ostéopathe à Montpellier
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Des tarifs clairs et transparents pour tous les profils. La consultation comprend le bilan clinique et le traitement ostéopathique, sans supplément.
          </p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        {/* Grille de tarifs */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Adulte", price: "60 €", sub: "Dès 18 ans" },
            { label: "Enfant", price: "65 €", sub: "2 à 17 ans" },
            { label: "Nourrisson", price: "70 €", sub: "0 à 18 mois" },
          ].map((t) => (
            <div key={t.label} className="rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{t.label}</p>
              <p className="text-4xl font-black text-gray-900 mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>{t.price}</p>
              <p className="text-xs text-gray-400">{t.sub}</p>
            </div>
          ))}
        </div>

        {/* Sécu vs Mutuelle */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="rounded-2xl p-6 border-2" style={{ borderColor: "#fca5a5", background: "#fff5f5" }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-sm flex-shrink-0">✕</span>
              <p className="font-bold text-gray-900" style={{ fontFamily: "Figtree, sans-serif" }}>Sécurité sociale</p>
            </div>
            <p className="text-sm text-gray-600">L'ostéopathie n'est <strong>pas remboursée</strong> par l'Assurance Maladie. Aucune prise en charge, même avec ordonnance.</p>
          </div>
          <div className="rounded-2xl p-6 border-2" style={{ borderColor: "#86efac", background: "#f0fdf4" }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">✓</span>
              <p className="font-bold text-gray-900" style={{ fontFamily: "Figtree, sans-serif" }}>Mutuelle</p>
            </div>
            <p className="text-sm text-gray-600">De nombreuses mutuelles remboursent <strong>15 à 60 €</strong> par séance. Vérifiez votre contrat sous la rubrique "médecines douces" ou "ostéopathie".</p>
          </div>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="article-h2">Comment obtenir le remboursement mutuelle ?</h2>
            <p>La démarche est simple :</p>
            <ul className="article-list">
              <li>à l'issue de la séance, un <strong>reçu nominatif</strong> vous est remis ;</li>
              <li>transmettez-le à votre mutuelle par courrier, application mobile ou espace adhérent en ligne ;</li>
              <li>le remboursement intervient généralement sous 5 à 10 jours ;</li>
              <li>le montant dépend de votre contrat (forfait annuel, plafond par séance, nombre de séances).</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">Conseil : vérifiez votre contrat sous la rubrique <em>«&nbsp;médecines douces&nbsp;»</em> ou <em>«&nbsp;ostéopathie&nbsp;»</em>.</p>
          </section>

          <section>
            <h2 className="article-h2">Moyens de paiement acceptés</h2>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              {[
                { icon: "💳", label: "Carte bancaire", sub: "Visa, Mastercard" },
                { icon: "💵", label: "Espèces", sub: "Paiement sur place" },
                { icon: "📝", label: "Chèque", sub: "À l'ordre de Francis MOMBO" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{m.label}</p>
                    <p className="text-xs text-gray-400">{m.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">FAQ — Tarifs et remboursements</h2>
            <div className="space-y-4">
              {faq.map(item => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.q}</p>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Double CTA */}
        <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Prendre rendez-vous</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Castelnau-le-Lez et Saint-Mathieu-de-Tréviers — paiement à l'issue de la consultation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Réserver sur Doctolib
            </a>
            <a href="tel:0650149192" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-sm border-2" style={{ borderColor: "#D4336E", color: "#D4336E" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              06 50 14 91 92
            </a>
          </div>
        </div>
      </main>
      <style>{`.article-h2{font-family:Figtree,sans-serif;font-size:1.25rem;font-weight:800;color:#111;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:2px solid #fdeef3}.article-list{list-style:none;padding:0;margin:.75rem 0}.article-list li{padding-left:1.25rem;position:relative;margin-bottom:.4rem;font-size:.95rem}.article-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#D4336E}`}</style>
    </>
  );
}
