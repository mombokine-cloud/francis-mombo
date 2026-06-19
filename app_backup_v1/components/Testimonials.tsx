const testimonials = [
  {
    name: "Marie L.",
    role: "Patiente, Castelnau-le-Lez",
    text: "Francis a résolu en deux séances des douleurs dorsales que je traînais depuis des mois. Son écoute et sa douceur m'ont immédiatement mis en confiance. Je recommande sans hésiter.",
    stars: 5,
  },
  {
    name: "Thomas R.",
    role: "Sportif amateur, Montpellier",
    text: "Après une blessure à l'épaule, Francis m'a remis sur pied en un temps record. Sa maîtrise de l'ostéopathie du sport est impressionnante. Je le consulte maintenant régulièrement en prévention.",
    stars: 5,
  },
  {
    name: "Sophie M.",
    role: "Maman, Saint-Mathieu-de-Tréviers",
    text: "J'ai consulté Francis pendant ma grossesse pour des douleurs lombaires. Son approche de l'équilibre féminin est remarquable — bienveillante, précise et vraiment efficace.",
    stars: 5,
  },
  {
    name: "Jean-Paul B.",
    role: "Retraité, Castelnau-le-Lez",
    text: "Grâce aux séances d'hypnose, j'ai enfin réussi à gérer mon anxiété chronique. Francis est un thérapeute complet et très professionnel. Merci du fond du cœur.",
    stars: 5,
  },
  {
    name: "Clara D.",
    role: "Étudiante, Montpellier",
    text: "Consultée pour des migraines à répétition, j'ai vu une amélioration dès la première séance. Francis explique très bien ce qu'il fait, on se sent vraiment entre de bonnes mains.",
    stars: 5,
  },
  {
    name: "Michel T.",
    role: "Coureur, Hérault",
    text: "Un ostéopathe du sport de haut niveau. Il a su cibler exactement mes problèmes de genou liés à la course. Très professionnel, très efficace. Cabinet impeccable.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#E8A020">
          <path d="M7 1l1.6 3.3L12 4.8l-2.5 2.4.6 3.4L7 9l-3.1 1.6.6-3.4L2 4.8l3.4-.5L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #fdeef3 0%, #fff3e8 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Témoignages
          </p>
          <h2 className="section-title">
            Ce que disent{" "}
            <span className="gradient-text">mes patients</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            La satisfaction de mes patients est ma plus belle récompense.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Stars count={t.stars} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #D4336E 0%, #8B2035 100%)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.doctolib.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Rejoindre mes patients satisfaits
          </a>
        </div>
      </div>
    </section>
  );
}
