import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";

export const metadata: Metadata = {
  title: "Politique de cookies - Francis MOMBO Ostéopathe",
  description: "Politique d'utilisation des cookies sur le site mombofrancis.com - cabinet d'ostéopathie et kinésithérapie à Montpellier.",
  alternates: { canonical: `${siteUrl}/politique-cookies` },
  robots: { index: false, follow: false },
};

const cookies = [
  {
    name: "Cookies strictement nécessaires",
    required: true,
    description: "Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.",
    examples: [
      { cookie: "__vercel_live_token", purpose: "Fonctionnement de l'hébergement Vercel", duration: "Session" },
      { cookie: "next-auth.session-token", purpose: "Gestion de session (si connecté)", duration: "Session" },
    ],
  },
  {
    name: "Cookies de performance et d'analyse",
    required: false,
    description: "Ces cookies permettent de mesurer la fréquentation du site et d'améliorer son contenu. Aucune donnée personnellement identifiable n'est collectée.",
    examples: [
      { cookie: "_ga, _ga_*", purpose: "Google Analytics - statistiques de visite anonymes", duration: "13 mois" },
    ],
  },
  {
    name: "Cookies tiers - Doctolib",
    required: false,
    description: "Lorsque vous cliquez sur le bouton Doctolib, vous êtes redirigé vers doctolib.fr qui peut déposer ses propres cookies, soumis à sa propre politique de confidentialité.",
    examples: [
      { cookie: "Cookies Doctolib", purpose: "Prise de rendez-vous en ligne", duration: "Variable" },
    ],
  },
  {
    name: "Cookies tiers - YouTube",
    required: false,
    description: "Les vidéos intégrées depuis YouTube (Google LLC) peuvent déposer des cookies à des fins publicitaires et statistiques. Ces cookies ne sont actifs que si vous lisez une vidéo.",
    examples: [
      { cookie: "VISITOR_INFO1_LIVE, YSC", purpose: "YouTube - lecture vidéo et statistiques", duration: "Session / 6 mois" },
    ],
  },
];

export default function Page() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Retour au site
          </Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="mb-10">
          <span className="text-xs font-bold px-3 py-1 rounded-full text-white inline-block mb-4" style={{ background: "#D4336E" }}>Légal</span>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 38px)" }}>
            Politique de cookies
          </h1>
          <p className="text-gray-500 text-sm">Dernière mise à jour : octobre 2026</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 text-sm text-amber-800 leading-relaxed">
          <strong>Ce site utilise des cookies.</strong> En naviguant sur mombofrancis.com, vous acceptez l'utilisation des cookies strictement nécessaires. Les cookies d'analyse et tiers ne sont activés qu'avec votre consentement explicite.
        </div>

        {/* Intro */}
        <section className="mb-10">
          <h2 className="font-black text-gray-900 mb-3 text-lg" style={{ fontFamily: "Figtree, sans-serif" }}>Qu'est-ce qu'un cookie ?</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet de mémoriser des informations sur votre navigation. Conformément à la directive ePrivacy et aux recommandations de la CNIL, les cookies non essentiels requièrent votre consentement préalable.
          </p>
        </section>

        {/* Tableau des cookies */}
        <div className="space-y-8">
          {cookies.map((cat) => (
            <section key={cat.name}>
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-black text-gray-900 text-lg" style={{ fontFamily: "Figtree, sans-serif" }}>{cat.name}</h2>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={cat.required
                    ? { background: "#fdeef3", color: "#8B2035" }
                    : { background: "#f3f4f6", color: "#6b7280" }}
                >
                  {cat.required ? "Obligatoire" : "Optionnel"}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>
              <div className="overflow-x-auto rounded-xl border border-gray-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 text-xs uppercase tracking-wide">Cookie</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 text-xs uppercase tracking-wide">Finalité</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 text-xs uppercase tracking-wide">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.examples.map((ex) => (
                      <tr key={ex.cookie} className="border-t border-gray-100">
                        <td className="px-4 py-3 text-gray-800 font-mono text-xs">{ex.cookie}</td>
                        <td className="px-4 py-3 text-gray-600 text-xs">{ex.purpose}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{ex.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        {/* Gestion */}
        <section className="mt-10">
          <h2 className="font-black text-gray-900 mb-3 text-lg" style={{ fontFamily: "Figtree, sans-serif" }}>Comment gérer vos cookies ?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Vous pouvez à tout moment modifier vos préférences en matière de cookies depuis les paramètres de votre navigateur :
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              { label: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
              { label: "Mozilla Firefox", url: "https://support.mozilla.org/fr/kb/activer-desactiver-cookies" },
              { label: "Safari (Mac/iOS)", url: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
              { label: "Microsoft Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406" },
            ].map((b) => (
              <li key={b.label} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#D4336E" }} />
                <a href={b.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#D4336E" }}>{b.label}</a>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-xs mt-4 leading-relaxed">
            La désactivation des cookies peut affecter certaines fonctionnalités du site (formulaire de contact, lecture de vidéos YouTube).
          </p>
        </section>

        <div className="mt-10 p-5 rounded-xl border-l-4 text-sm text-gray-600" style={{ background: "#fdeef3", borderLeftColor: "#D4336E" }}>
          Pour toute question : <a href="mailto:contact@mombofrancis.com" className="font-semibold underline" style={{ color: "#D4336E" }}>contact@mombofrancis.com</a>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/politique-confidentialite" className="text-sm font-semibold underline" style={{ color: "#D4336E" }}>
            Politique de confidentialité →
          </Link>
        </div>
      </main>
    </>
  );
}
