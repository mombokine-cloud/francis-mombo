const timeline = [
  {
    year: "2005–2008",
    title: "Master en kinésithérapie",
    desc: "Haute-École Lier de Bruxelles — Formation complète avec spécialisation en rééducation fonctionnelle.",
    color: "#D4336E",
  },
  {
    year: "2009–2013",
    title: "Diplôme d'Ostéopathie (D.O.)",
    desc: "International Academy of Osteopathy — Approches structurelles, viscérales et crânio-sacrées.",
    color: "#E8A020",
  },
  {
    year: "2013",
    title: "Médaille de bronze — Jeux Méditerranéens",
    desc: "Mersin (Turquie) — Kiné de l'Équipe de France A de volley-ball lors des Jeux Méditerranéens.",
    color: "#D4336E",
  },
  {
    year: "2015",
    title: "Tournoi qualificatif Mondial — FFVB",
    desc: "Pologne — Accompagnement de l'Équipe de France de volley-ball pour les qualifications au Championnat du Monde.",
    color: "#E8A020",
  },
  {
    year: "2015–2019",
    title: "Hypnose médicale & thérapeutique",
    desc: "Certifications successives : Hypnose Médicale, Thérapie Brève, Hypnose et Douleur, Hypnose et Sport, Écoute Automatique.",
    color: "#8B2035",
  },
  {
    year: "2016–2025",
    title: "Kinésithérapeute & ostéopathe — MHSC VB",
    desc: "9 saisons au Montpellier HSC Volley-Ball : Champion de France 2022, Supercoupe 2022 & 2024, demi-finale CEV, 2 finales Coupe de France.",
    color: "#D4336E",
  },
  {
    year: "2022",
    title: "Champion de France",
    desc: "Titre de Champion de France de volley-ball avec le MHSC VB — couronnement de 6 ans d'accompagnement quotidien.",
    color: "#E8A020",
  },
  {
    year: "2025",
    title: "Consultant international — AfroBasket",
    desc: "Consultant Kiné Plus pour l'équipe du Mali, finaliste de la FIBA Women's AfroBasket 2025.",
    color: "#8B2035",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Parcours
          </p>
          <h2 className="section-title">
            20 ans d&apos;<span className="gradient-text">expérience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Du cabinet au sport professionnel international — un parcours d&apos;excellence au service des patients et des athlètes.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {[
            { icon: "🏆", label: "Champion de France 2022", sub: "MHSC VB" },
            { icon: "🌍", label: "Expérience internationale", sub: "FFVB · AfroBasket · Jeux Méditerranéens" },
            { icon: "🤝", label: "9 saisons au haut niveau", sub: "Montpellier HSC Volley-Ball" },
          ].map((h) => (
            <div key={h.label} className="rounded-2xl p-5 text-center shadow-sm border border-gray-100" style={{ background: "linear-gradient(135deg, #fdeef3 0%, #fff3e8 100%)" }}>
              <div className="text-3xl mb-2">{h.icon}</div>
              <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>{h.label}</p>
              <p className="text-xs text-gray-500 mt-1">{h.sub}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #D4336E 0%, #E8A020 100%)" }}
          />

          <div className="space-y-7">
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md" style={{ background: item.color }} />
                <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto"}`}>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#fdeef3", color: item.color }}>
                      {item.year}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 mt-2 mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MHSC photo reference */}
        <div className="mt-14 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="p-6" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d1a2e 100%)" }}>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">Presse</p>
            <p className="text-white font-bold text-base" style={{ fontFamily: "Figtree, sans-serif" }}>
              &ldquo;Sur pied pour préparer le prochain match&rdquo;
            </p>
            <p className="text-white/70 text-sm mt-1">
              Midi Libre — Les volleyeurs du MHSC profitent des soins de Francis Mombo pour la récupération.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
