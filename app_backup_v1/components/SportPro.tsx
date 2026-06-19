export default function SportPro() {
  return (
    <section
      id="sport-pro"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d0e1a 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#E8A020" }}>
              Sport professionnel & haut niveau
            </p>
            <h2 className="text-white" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.2 }}>
              Accompagner la performance,{" "}
              <span style={{ color: "#D4336E" }}>prévenir, récupérer</span>{" "}
              et rééquilibrer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Depuis de nombreuses années, Francis Mombo accompagne les sportifs professionnels
              et les athlètes de haut niveau. En combinant kinésithérapie, ostéopathie et hypnose,
              il place la performance, la récupération et l&apos;équilibre au cœur d&apos;un
              accompagnement global et sur mesure.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  title: "MHSC VB",
                  desc: "Kinésithérapeute & ostéopathe officiel — 9 saisons (2016–2025)",
                  highlight: "Champion de France 2022 · Supercoupe 2022 & 2024",
                },
                {
                  title: "FFVB",
                  desc: "Fédération Française de Volley-Ball — U16 à l'Équipe de France A",
                  highlight: "Médaille de bronze Jeux Méditerranéens 2013",
                },
                {
                  title: "International",
                  desc: "Consultant Kiné Plus — Équipe du Mali",
                  highlight: "FIBA Women's AfroBasket 2025 — Finaliste",
                },
                {
                  title: "Danseurs",
                  desc: "Accompagnement spécialisé des artistes et danseurs professionnels",
                  highlight: "Prévention · mobilité · longévité artistique",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-4"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="font-bold text-white text-sm mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  <p className="text-xs font-semibold mt-2" style={{ color: "#E8A020" }}>{item.highlight}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Right photos grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg col-span-2">
              <img
                src="/mhsc-vb.png"
                alt="Francis MOMBO avec le MHSC VB, Champion de France 2022"
                className="w-full h-56 object-cover object-top"
              />
              <p className="text-xs text-gray-400 text-center py-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                MHSC VB — Champion de France 2022
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/ffvb.png"
                alt="Équipe de France — Jeux Méditerranéens"
                className="w-full h-40 object-cover object-top"
              />
              <p className="text-xs text-gray-400 text-center py-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                FFVB — Équipe de France A
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/francis-sport.jpg"
                alt="Francis Mombo avec les volleyeurs du MHSC — Midi Libre"
                className="w-full h-40 object-cover"
              />
              <p className="text-xs text-gray-400 text-center py-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                Midi Libre — MHSC VB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
