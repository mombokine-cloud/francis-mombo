import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    category: "Presse",
    title: "Le MHSC VB profite des installations des footballeurs pour les soins",
    excerpt:
      "Midi Libre met en lumière le travail de Francis MOMBO auprès des volleyeurs du Montpellier Hérault Sport Club, qui utilisent les infrastructures des footballeurs pour leur récupération et leurs soins.",
    readTime: "3 min",
    date: "10 octobre 2024",
    color: "#fff3e8",
    accent: "#E8A020",
    href: "https://www.midilibre.fr/2024/10/10/sur-pied-pour-preparer-le-prochain-match-les-volleyeurs-du-mhsc-profitent-des-installations-des-footballeurs-pour-les-soins-et-la-recuperation-12251773.php",
    image: "/midi-libre.jpg",
  },
  {
    category: "Ostéopathie",
    title: "Le mal de dos : comprendre et prévenir",
    excerpt:
      "Le mal de dos touche 80% des Français au cours de leur vie. Découvrez les causes principales et les solutions ostéopathiques pour retrouver un dos en bonne santé.",
    readTime: "5 min",
    date: "12 juin 2025",
    color: "#fdeef3",
    accent: "#D4336E",
    href: "/mal-de-dos-comprendre-prevenir",
    image: null,
  },
  {
    category: "Sport",
    title: "Optimisez votre récupération sportive",
    excerpt:
      "L'ostéopathie du sport ne sert pas uniquement à traiter les blessures. Elle joue un rôle majeur dans la récupération et l'optimisation des performances sportives.",
    readTime: "4 min",
    date: "3 juin 2025",
    color: "#fdeef3",
    accent: "#8B2035",
    href: null,
    image: null,
  },
];

export default function Articles() {
  return (
    <section id="articles" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
              Blog santé
            </p>
            <h2 className="section-title">
              Derniers <span className="gradient-text">articles</span>
            </h2>
          </div>
          <a
            href="#articles"
            className="flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
            style={{ color: "#D4336E" }}
          >
            Tous les articles
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 bg-white"
            >
              {a.href ? (
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="h-36 relative overflow-hidden">
                    {a.image ? (
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="h-full flex items-center justify-center p-6" style={{ background: a.color }} />
                    )}
                    <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: a.accent, color: "white" }}>
                      {a.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#D4336E] transition-colors" style={{ fontFamily: "Figtree, sans-serif" }}>
                      {a.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{a.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-gray-400">{a.date}</span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock size={12} />
                        {a.readTime}
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <div className="h-36 flex items-center justify-center p-6" style={{ background: a.color }}>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: a.accent, color: "white" }}>
                      {a.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#D4336E] transition-colors" style={{ fontFamily: "Figtree, sans-serif" }}>
                      {a.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{a.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-gray-400">{a.date}</span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock size={12} />
                        {a.readTime}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
