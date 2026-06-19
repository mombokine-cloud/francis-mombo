import { Calendar, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fff9fb 0%, #fff3e8 50%, #fff 100%)",
      }}
    >
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4336E 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8A020 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "#fdeef3", color: "#D4336E" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#D4336E] animate-pulse" />
              Consultations disponibles · Doctolib
            </div>

            <h1 className="section-title">
              L&apos;ostéopathie{" "}
              <span className="gradient-text">au service de votre santé</span>
            </h1>

            <p className="section-subtitle">
              Francis MOMBO — masseur-kinésithérapeute, ostéopathe et praticien en hypnose.
              Une approche globale du corps, du mouvement et de l&apos;équilibre, forte de
              <strong> 20 ans d&apos;expérience</strong> au plus haut niveau.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.doctolib.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={18} />
                Prendre rendez-vous
              </a>
              <a href="#about" className="btn-secondary">
                Découvrir le parcours
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: "20 ans", label: "d'expérience" },
                { value: "9 saisons", label: "au MHSC VB" },
                { value: "⭐⭐⭐⭐⭐", label: "Avis Google" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold" style={{ color: "#D4336E" }}>
                    {s.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo + card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Main card with photo */}
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{ minHeight: "460px", position: "relative" }}
              >
                <img
                  src="/francis-hero.png"
                  alt="Francis MOMBO, ostéopathe"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "460px" }}
                />
                {/* Fallback gradient if no photo */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background: "linear-gradient(135deg, #8B2035 0%, #D4336E 50%, #E8A020 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "32px",
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <svg viewBox="0 0 400 460" className="absolute bottom-0 left-0 w-full" fill="none">
                      <path d="M0 280 C80 230 150 330 250 270 C330 220 370 290 400 280 L400 460 L0 460 Z" fill="rgba(255,255,255,0.08)" />
                      <path d="M0 330 C100 290 200 350 300 310 C360 285 390 320 400 330 L400 460 L0 460 Z" fill="rgba(255,255,255,0.06)" />
                    </svg>
                  </div>
                  <div className="relative z-10 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold" style={{ background: "rgba(255,255,255,0.2)" }}>
                        FM
                      </div>
                      <div>
                        <p className="font-bold text-xl leading-tight">Francis MOMBO</p>
                        <p className="text-sm opacity-80">Ostéopathe · Kinésithérapeute</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {["Ostéopathie", "Sport pro", "Équilibre féminin", "Hypnose"].map((s) => (
                        <div key={s} className="rounded-xl px-3 py-2 text-xs font-semibold text-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Overlay bottom gradient on real photo */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ background: "linear-gradient(0deg, rgba(139,32,53,0.9) 0%, transparent 100%)" }}>
                  <p className="font-bold text-lg">Francis MOMBO</p>
                  <p className="text-sm opacity-80">Ostéopathe · Kinésithérapeute · Hypnose</p>
                </div>
              </div>

              {/* Doctolib badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#fdeef3" }}>
                  <Calendar size={18} style={{ color: "#D4336E" }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Rendez-vous sur</p>
                  <p className="font-bold text-sm text-gray-900">Doctolib</p>
                </div>
              </div>

              {/* MHSC badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 text-center">
                <p className="text-xs text-gray-400">Kiné officiel</p>
                <p className="font-bold text-sm" style={{ color: "#D4336E" }}>MHSC VB</p>
                <p className="text-xs text-gray-500">9 saisons</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#about" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#D4336E] transition-colors" aria-label="Défiler">
            <span className="text-xs font-medium">Découvrir</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
