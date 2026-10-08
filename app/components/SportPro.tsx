export default function SportPro() {
  return (
    <section
      id="sport-pro"
      className="py-20 lg:py-28"
      style={{ background: "#0d0d0d", color: "white" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: "#E8A020" }}>
            Santé · Performance · Accompagnement
          </p>
          <h2
            className="font-black uppercase leading-none"
            style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(32px, 6vw, 72px)", letterSpacing: "-0.02em" }}
          >
            Sport professionnel
            <br />
            <span style={{ color: "#D4336E" }}>et sport de haut niveau</span>
          </h2>
          <div className="mt-4 max-w-2xl">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-white">Francis Mombo</strong> — Masseur-kinésithérapeute, ostéopathe et
              praticien en hypnose. Depuis de nombreuses années, il accompagne les sportifs professionnels
              et les athlètes de haut niveau. En combinant kinésithérapie, ostéopathie et hypnose, il place
              la performance, la récupération et l&apos;équilibre au cœur d&apos;un accompagnement global et sur mesure.
            </p>
          </div>
        </div>

        {/* Photo grid — chaque photo est un CTA vers l'article correspondant */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Photo principale — Champion de France */}
          <a href="/9-saisons-mhsc-volley-osteopathe" className="lg:col-span-2 relative rounded-2xl overflow-hidden group block" style={{ minHeight: "380px" }}>
            <img
              src="/francis-champion-france-2022.webp"
              alt="Francis Mombo — Champion de France 2022 avec le MHSC VB"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ minHeight: "380px" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">MHSC VB</p>
              <p className="font-bold text-white text-base" style={{ fontFamily: "Figtree, sans-serif" }}>
                Champion de France 2022
              </p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1 group-hover:text-white transition-colors">
                Lire l'article
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </p>
            </div>
          </a>

          {/* Colonne droite : 2 photos */}
          <div className="flex flex-col gap-4">
            {/* Parcours FFVB */}
            <a href="/parcours-ffvb-equipe-france-volley" className="relative rounded-2xl overflow-hidden flex-1 group block" style={{ minHeight: "180px" }}>
              <img
                src="/equipe-france-b.webp"
                alt="Francis Mombo avec l'Équipe de France de volley-ball"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ minHeight: "180px" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">FFVB</p>
                <p className="font-bold text-white text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Parcours équipe de France
                </p>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1 group-hover:text-white transition-colors">
                  5 missions 2013–2018
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </p>
              </div>
            </a>

            {/* Jeux Méditerranéens 2013 */}
            <a href="/jeux-mediterraneens-2013-kine-equipe-france-volley" className="relative rounded-2xl overflow-hidden flex-1 group block" style={{ minHeight: "180px" }}>
              <img
                src="/Jeux-med-2013.webp"
                alt="Francis Mombo — Jeux Méditerranéens 2013, Mersin"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ minHeight: "180px" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">Mersin 2013</p>
                <p className="font-bold text-white text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Jeux Méditerranéens · Médaille de bronze
                </p>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1 group-hover:text-white transition-colors">
                  Lire l'article
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Repères — cliquables */}
        <div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px" }}
        >
          {[
            { icon: "🏆", label: "MHSC VB (2016–2025)", sub: "Kiné & ostéopathe officiel, 9 saisons", href: "/9-saisons-mhsc-volley-osteopathe" },
            { icon: "🥇", label: "Champion de France 2022", sub: "Supercoupe 2022 & 2024", href: "/9-saisons-mhsc-volley-osteopathe" },
            { icon: "🌍", label: "FFVB — Équipe de France", sub: "Championnats du Monde & Europe", href: "/parcours-ffvb-equipe-france-volley" },
            { icon: "🏅", label: "Jeux Méditerranéens 2013", sub: "Médaille de bronze — Mersin", href: "/jeux-mediterraneens-2013-kine-equipe-france-volley" },
            { icon: "🏋️", label: "HYROX & CrossFit", sub: "Préparation compétition · Prévention", href: "/osteopathe-hyrox-crossfit-montpellier" },
            { icon: "🏓", label: "Padel · Champion de France 2026", sub: "Vice-champion Europe 2026 jeune", href: "/sports-individuels-osteopathie-montpellier" },
            { icon: "🩰", label: "Accompagnement Danseurs", sub: "Kiné & ostéo · Art du mouvement", href: "/osteopathe-danseur-danse-montpellier" },
            { icon: "🏀", label: "AfroBasket 2025 — Mali", sub: "Consultant kiné · Finaliste Abidjan", href: "/afrobasket-2025-consultant-kine-mali" },
            { icon: "⚽", label: "Coupe de France 2022", sub: "Kiné RC Strasbourg · MHSC", href: "/coupe-de-france-2022-kine-rc-strasbourg" },
          ].map((r) => (
            <a key={r.label} href={r.href} className="flex items-start gap-3 hover:opacity-80 transition-opacity group">
              <span className="text-2xl">{r.icon}</span>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-[#D4336E] transition-colors" style={{ fontFamily: "Figtree, sans-serif" }}>{r.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{r.sub}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className="mt-10 text-center text-xl font-light italic text-gray-300 max-w-2xl mx-auto"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px" }}
        >
          &ldquo;Accompagner la performance, prévenir, récupérer et rééquilibrer.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
