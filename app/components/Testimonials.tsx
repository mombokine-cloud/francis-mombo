const testimonials = [
  {
    name: "Isa H.",
    role: "Patiente fidèle depuis 13 ans",
    text: "Super ostéopathe, 13 ans que je suis suivie pour mon dos, et je ne changerais pour rien au monde. Un ostéopathe d'une grande compétence.",
    stars: 5,
  },
  {
    name: "Andrey D.",
    role: "Ancien joueur professionnel de volley-ball",
    text: "En tant qu'ancien joueur professionnel de volley-ball, j'ai travaillé avec de nombreux spécialistes à travers le monde. Francis se distingue par une expertise rare, une écoute attentive et des résultats concrets.",
    stars: 5,
  },
  {
    name: "julie m.",
    role: "Patiente hypnose, Montpellier",
    text: "J'ai consulté M. Mombo pour une sciatique chronique. Dès la première séance d'hypnose, les douleurs qui étaient présentes depuis des mois ont considérablement diminué. Incroyable.",
    stars: 5,
  },
  {
    name: "sonia f.",
    role: "Patiente hypnose",
    text: "En seulement 2 séances mon corps et mon esprit sont apaisés. Insomniaque depuis 5 ans, je dors maintenant paisiblement. Merci Francis.",
    stars: 5,
  },
  {
    name: "Maroussia B.",
    role: "Post-grossesse, Saint-Mathieu-de-Tréviers",
    text: "Dos bloqué, post grossesse, merci pour votre aide ! Au top ! Je reviendrai sans hésiter.",
    stars: 5,
  },
  {
    name: "Ludivine DK",
    role: "Patiente depuis 2019",
    text: "Je suis suivie par Francis depuis 2019 et je n'ai jamais rencontré un praticien aussi compétent et efficace. Une expertise rare, une vraie bienveillance.",
    stars: 5,
  },
  {
    name: "M H.",
    role: "Patient, Castelnau-le-Lez",
    text: "Un vrai sorcier ! Francis est quelqu'un d'extrêmement compétent avec un panel de techniques très différentes qui lui permet de s'adapter parfaitement à chaque patient.",
    stars: 5,
  },
  {
    name: "Globe_adventure",
    role: "Patient fidèle depuis 10 ans",
    text: "Mon ostéo depuis plus de 10 ans… et toujours au top ! À l'écoute, efficace, et on repart toujours en meilleure forme. Je recommande les yeux fermés !",
    stars: 5,
  },
  {
    name: "Elodie P.",
    role: "Nouvelle patiente, juin 2025",
    text: "Expérience très positive, n'ayant jamais eu recours à l'ostéopathie, minutieux dans les mouvements et à l'écoute. Je recommande monsieur Mombo pour son professionnalisme.",
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
          {/* Bandeau Google */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white rounded-2xl px-6 py-3 shadow-sm border border-gray-100">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 12 24 12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.5 0 10.4-2.1 14.1-5.4l-6.5-5.5C29.8 35 27 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.1C9.4 35.6 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6.5 5.5C37 38.2 44 33 44 24c0-1.3-.1-2.6-.4-3.9z"/>
            </svg>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="#E8A020">
                  <path d="M7 1l1.6 3.3L12 4.8l-2.5 2.4.6 3.4L7 9l-3.1 1.6.6-3.4L2 4.8l3.4-.5L7 1z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-gray-900 text-sm">5,0</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-500 text-sm">119 avis Google</span>
          </div>
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

        {/* CTA laisser un avis Google */}
        <div className="mt-12 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #fff 0%, #fdeef3 60%, #fff3e8 100%)", border: "1.5px solid #f3c6d6" }}>
          <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-8 sm:py-7">
            {/* Icône + texte */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                <svg width="22" height="22" viewBox="0 0 14 14" fill="#E8A020" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M7 1l1.6 3.3L12 4.8l-2.5 2.4.6 3.4L7 9l-3.1 1.6.6-3.4L2 4.8l3.4-.5L7 1z"/>
                </svg>
                <p className="font-black text-gray-900 text-lg leading-tight" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Votre avis compte
                </p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
                Vous êtes venu en consultation&nbsp;? Partagez votre expérience sur Google.
              </p>
              {/* Étoiles + score */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="15" height="15" viewBox="0 0 14 14" fill="#E8A020" aria-hidden="true">
                      <path d="M7 1l1.6 3.3L12 4.8l-2.5 2.4.6 3.4L7 9l-3.1 1.6.6-3.4L2 4.8l3.4-.5L7 1z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-800">5,0</span>
                <span className="text-gray-300 text-sm">·</span>
                <span className="text-sm text-gray-500">119 avis</span>
                <span className="text-gray-300 text-sm">·</span>
                <span className="text-sm font-semibold" style={{ color: "#D4336E" }}>Rejoignez-les !</span>
              </div>
            </div>
            {/* Bouton */}
            <div className="flex-shrink-0">
              <a
                href="https://g.page/r/CSuZQhAb-49CEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-full text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ background: "linear-gradient(135deg, #E8A020 0%, #D4336E 60%, #8B2035 100%)", touchAction: "manipulation", minHeight: "48px" }}
                aria-label="Laisser un avis Google pour Francis MOMBO (nouvelle fenêtre)"
              >
                <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path fill="white" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
                </svg>
                Laisser un avis Google
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
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
