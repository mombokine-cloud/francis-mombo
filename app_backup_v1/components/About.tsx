import { CheckCircle } from "lucide-react";

const credentials = [
  "Master en kinésithérapie — Haute-École Lier de Bruxelles (2005–2008)",
  "Diplôme d'Ostéopathie D.O. — International Academy of Osteopathy (2009–2013)",
  "Hypnose médicale, thérapie brève & hypnose du sport (2015–2019)",
  "Kiné & ostéopathe officiel — MHSC VB pendant 9 saisons (2016–2025)",
  "Kiné de la Fédération Française de Volley-Ball (FFVB)",
  "Médaille de bronze — Jeux Méditerranéens 2013 (Mersin)",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left visual */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div
                className="rounded-3xl overflow-hidden shadow-xl"
                style={{ minHeight: "400px", background: "linear-gradient(160deg, #fdeef3 0%, #fff3e8 100%)", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
              >
                <img
                  src="/francis-about.png"
                  alt="Francis MOMBO en consultation"
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ maxHeight: "320px" }}
                />
                {/* Fallback */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-xl" style={{ background: "linear-gradient(135deg, #D4336E 0%, #8B2035 100%)" }}>
                    FM
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Figtree, sans-serif" }}>Francis MOMBO</h3>
                  <p style={{ color: "#D4336E" }} className="font-semibold mt-1">Ostéopathe · Kinésithérapeute</p>
                  <p className="text-gray-500 text-sm mt-2 text-center italic">&ldquo;Une approche globale du corps, du mouvement et de l&apos;Équilibre.&rdquo;</p>
                </div>
              </div>

              {/* Sport pro badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 whitespace-nowrap">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#fdeef3" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4336E" strokeWidth="2">
                    <path d="M8 21l4-4 4 4M12 3v14"/>
                    <circle cx="12" cy="3" r="2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Sport professionnel</p>
                  <p className="font-bold text-sm text-gray-900">MHSC VB · FFVB · International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
                À propos
              </p>
              <h2 className="section-title mb-4">
                20 ans d&apos;expérience{" "}
                <span className="gradient-text">au plus haut niveau</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Francis MOMBO est masseur-kinésithérapeute, ostéopathe et praticien en hypnose.
              Depuis plus de 20 ans, il met son expertise au service de la performance, de la
              récupération et de l&apos;équilibre — du patient en cabinet jusqu&apos;aux sportifs
              professionnels de haut niveau.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Kiné et ostéopathe officiel du <strong>MHSC VB pendant 9 saisons</strong> (Champion de
              France 2022, Supercoupe 2022 &amp; 2024), il a également accompagné les équipes de la
              <strong> Fédération Française de Volley-Ball</strong> (FFVB) jusqu&apos;aux championnats du monde.
            </p>

            <blockquote className="border-l-4 pl-4 italic text-gray-500" style={{ borderColor: "#D4336E" }}>
              &ldquo;Allier le soin, l&apos;écoute et la performance au service du patient.&rdquo;
            </blockquote>

            <ul className="space-y-3 pt-2">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: "#D4336E", flexShrink: 0, marginTop: 2 }} />
                  <span className="text-gray-700 text-sm">{c}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Prendre rendez-vous sur Doctolib
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
