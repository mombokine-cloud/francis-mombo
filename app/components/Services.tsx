const services = [
  {
    id: "osteopathie",
    href: "/maladies-chroniques-osteopathie",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3 C10 3 5 8 5 14 C5 20 10 25 16 28 C22 25 27 20 27 14 C27 8 22 3 16 3Z" stroke="#D4336E" strokeWidth="1.8" fill="none"/>
        <path d="M16 8 L16 24 M10 14 L22 14" stroke="#D4336E" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Ostéopathie",
    description:
      "L'ostéopathie traite les douleurs musculosquelettiques, les tensions articulaires et les troubles fonctionnels par des techniques manuelles douces et précises. Elle s'adresse à tous — nourrissons, adultes, sportifs, femmes enceintes.",
    benefits: ["Douleurs de dos et cervicales", "Maux de tête et migraines", "Troubles digestifs", "Stress et fatigue chronique"],
  },
  {
    id: "sport",
    href: "/osteopathie-sport-montpellier",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#D4336E" strokeWidth="1.8" fill="none"/>
        <path d="M10 22 L16 10 L22 22" stroke="#D4336E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18 L20 18" stroke="#D4336E" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Ostéopathie du sport",
    description:
      "Spécialisée pour les sportifs de tous niveaux, cette approche cible les blessures sportives, optimise la performance et prévient les rechutes. Du sportif amateur au professionnel, retrouvez vos capacités maximales.",
    benefits: ["Entorses et tendinites", "Prévention des blessures", "Optimisation des performances", "Récupération post-effort"],
  },
  {
    id: "feminin",
    href: "/sante-femme-fertilite-endometriose",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="7" stroke="#D4336E" strokeWidth="1.8" fill="none"/>
        <path d="M16 18 L16 28 M12 24 L20 24" stroke="#D4336E" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Équilibre féminin",
    description:
      "Une approche douce et ciblée pour les femmes à toutes les étapes de leur vie : grossesse, post-partum, ménopause, troubles hormonaux. Le corps féminin mérite une attention spécifique et bienveillante.",
    benefits: ["Grossesse et post-partum", "Troubles menstruels", "Ménopause", "Équilibre hormonal"],
  },
  {
    id: "hypnose",
    href: null as string | null,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 C16 4 8 10 8 16 C8 22 11 26 16 28 C21 26 24 22 24 16 C24 10 16 4 16 4Z" stroke="#D4336E" strokeWidth="1.8" fill="none"/>
        <path d="M13 16 C13 14.3 14.3 13 16 13 C17.7 13 19 14.3 19 16 C19 17.7 17.7 19 16 19" stroke="#D4336E" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="1.5" fill="#D4336E"/>
      </svg>
    ),
    title: "Hypnose thérapeutique",
    description:
      "L'hypnose thérapeutique permet d'accéder aux ressources inconscientes pour dépasser les blocages, gérer la douleur, le stress et les phobies. Une technique complémentaire reconnue et sans risque.",
    benefits: ["Gestion du stress et anxiété", "Douleurs chroniques", "Troubles du sommeil", "Phobies et blocages"],
  },
];

const CardContent = ({ s }: { s: typeof services[0] }) => (
  <>
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200"
      style={{ background: "#fdeef3" }}
    >
      {s.icon}
    </div>

    <h3
      className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#D4336E] transition-colors"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      {s.title}
    </h3>

    <p className="text-gray-500 text-sm leading-relaxed mb-4">
      {s.description}
    </p>

    <ul className="space-y-1.5">
      {s.benefits.map((b) => (
        <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#D4336E" }}
          />
          {b}
        </li>
      ))}
    </ul>

    {s.href && (
      <p className="mt-4 text-xs font-semibold flex items-center gap-1" style={{ color: "#D4336E" }}>
        En savoir plus
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </p>
    )}
  </>
);

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #fff9fb 0%, #ffffff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Mes spécialités
          </p>
          <h2 className="section-title">
            Des soins adaptés à{" "}
            <span className="gradient-text">chaque besoin</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Une gamme complète de thérapies manuelles et complémentaires pour
            prendre soin de votre corps et de votre esprit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s) =>
            s.href ? (
              <a
                key={s.id}
                id={s.id}
                href={s.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-pink-100 hover:-translate-y-1 block"
              >
                <CardContent s={s} />
              </a>
            ) : (
              <div
                key={s.id}
                id={s.id}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-pink-100 hover:-translate-y-1"
              >
                <CardContent s={s} />
              </div>
            )
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
