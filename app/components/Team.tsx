export default function Team() {
  return (
    <section id="equipe" className="py-20 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Mon équipe
          </p>
          <h2 className="section-title">
            Deux ostéopathes,{" "}
            <span className="gradient-text">un même engagement</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Au cabinet de Castelnau-le-Lez, Francis MOMBO et Pauline BROUSSARD vous accompagnent avec la même exigence de soin.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Francis */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative" style={{ height: 280 }}>
              <img
                src="/Francis Mombo Ostéopathe kinésithérapeute hypnose Castelnau le Lez Saint Mathieu de Treviers.webp"
                alt="Francis MOMBO ostéopathe kinésithérapeute Castelnau-le-Lez"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 8%" }}
              />
              <div className="absolute inset-0 rounded-t-3xl" style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.2)" }} />
            </div>
            <div className="p-6">
              <h3 className="font-black text-gray-900 text-xl mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Francis MOMBO</h3>
              <p className="text-sm text-gray-500 mb-3">Kinésithérapeute · Ostéopathe D.O. · Hypnose</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                20 ans d'expérience, dont 9 saisons comme kiné-ostéopathe officiel du MHSC VB. Spécialisé dans le sport de haut niveau, les douleurs chroniques et l'hypnose thérapeutique.
              </p>
            </div>
          </div>

          {/* Manon */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative flex items-center justify-center" style={{ height: 280, background: "linear-gradient(135deg, #fdeef3 0%, #fff3e8 100%)" }}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)", fontFamily: "Figtree, sans-serif" }}>
                  MD
                </div>
                <p className="text-sm text-gray-400 italic">Photo à venir</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-black text-gray-900 text-xl mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Manon DE RUL</h3>
              <p className="text-sm text-gray-500 mb-3">Ostéopathe D.O. — Castelnau-le-Lez</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ostéopathe diplômée D.O., Manon rejoint l&apos;équipe au cabinet de Castelnau-le-Lez pour vous accompagner avec précision et douceur dans toutes vos problématiques ostéopathiques.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a href="/osteopathe-manon-de-rul-castelnau" className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: "#D4336E" }}>
                  Voir sa présentation
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                  Prendre rendez-vous
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Pauline */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative" style={{ height: 280 }}>
              <img
                src="/Pauline_BROUSSARD_Osteopathe_Castelnau_Montpellier.webp"
                alt="Pauline BROUSSARD ostéopathe Castelnau-le-Lez Montpellier"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 15%" }}
              />
              <div className="absolute inset-0 rounded-t-3xl" style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.15)" }} />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#E8A020" }}>Collaboratrice</p>
              <h3 className="font-black text-gray-900 text-xl mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>Pauline BROUSSARD</h3>
              <p className="text-sm text-gray-500 mb-3">Ostéopathe D.O. — Castelnau-le-Lez</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ostéopathe diplômée, Pauline vous accueille au cabinet de Castelnau-le-Lez avec douceur et précision, pour toutes vos problématiques musculo-squelettiques.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="/osteopathe-pauline-broussard-castelnau"
            className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
          >
            Voir le profil complet de Pauline
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
