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

        {/* Photo grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Photo principale — Champion de France */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden" style={{ minHeight: "380px" }}>
            <img
              src="/francis-champion-france-2022.jpg"
              alt="Francis Mombo — Champion de France 2022 avec le MHSC VB"
              className="w-full h-full object-cover"
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
            </div>
          </div>

          {/* Colonne droite : 2 photos */}
          <div className="flex flex-col gap-4">
            {/* Équipe de France B */}
            <div className="relative rounded-2xl overflow-hidden flex-1" style={{ minHeight: "180px" }}>
              <img
                src="/equipe-france-b.jpg"
                alt="Francis Mombo avec l'Équipe de France de volley-ball"
                className="w-full h-full object-cover"
                style={{ minHeight: "180px" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">FFVB</p>
                <p className="font-bold text-white text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Équipe de France B
                </p>
              </div>
            </div>

            {/* Jeux Méditerranéens 2013 */}
            <div className="relative rounded-2xl overflow-hidden flex-1" style={{ minHeight: "180px" }}>
              <img
                src="/Jeux-med-2013.JPG"
                alt="Francis Mombo — Jeux Méditerranéens 2013, Mersin"
                className="w-full h-full object-cover"
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
              </div>
            </div>
          </div>
        </div>

        {/* Repères */}
        <div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px" }}
        >
          {[
            { icon: "🏆", label: "MHSC VB (2016–2025)", sub: "Kiné & ostéopathe officiel, 9 saisons" },
            { icon: "🥇", label: "Champion de France 2022", sub: "Supercoupe 2022 & 2024" },
            { icon: "🌍", label: "FFVB — Équipe de France", sub: "Championnats du Monde & Europe" },
            { icon: "🏅", label: "Jeux Méditerranéens 2013", sub: "Médaille de bronze — Mersin" },
          ].map((r) => (
            <div key={r.label} className="flex items-start gap-3">
              <span className="text-2xl">{r.icon}</span>
              <div>
                <p className="text-sm font-bold text-white" style={{ fontFamily: "Figtree, sans-serif" }}>{r.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{r.sub}</p>
              </div>
            </div>
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
