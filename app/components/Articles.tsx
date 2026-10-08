import { ArrowRight, Clock } from "lucide-react";

const featured = [
  {
    category: "Presse",
    title: "Le MHSC VB profite des installations des footballeurs pour les soins",
    excerpt: "Midi Libre met en lumière le travail de Francis MOMBO auprès des volleyeurs du MHSC, qui utilisent les infrastructures des footballeurs pour leur récupération.",
    readTime: "3 min",
    date: "Oct. 2024",
    color: "#fff3e8",
    accent: "#E8A020",
    href: "https://www.midilibre.fr/2024/10/10/sur-pied-pour-preparer-le-prochain-match-les-volleyeurs-du-mhsc-profitent-des-installations-des-footballeurs-pour-les-soins-et-la-recuperation-12251773.php",
    external: true,
    image: "/midi-libre.webp",
  },
  {
    category: "Ostéopathie",
    title: "Le mal de dos : comprendre et prévenir",
    excerpt: "Le mal de dos touche 80% des Français. Causes, solutions ostéopathiques et conseils pour un dos en bonne santé.",
    readTime: "5 min",
    date: "Mai 2026",
    color: "#fdeef3",
    accent: "#D4336E",
    href: "/mal-de-dos-comprendre-prevenir",
    external: false,
    image: "/sante-femme-thumbnail.webp",
    hideBadge: true,
    imagePosition: "50% 50%",
  },
  {
    category: "Équilibre féminin",
    title: "Ostéopathie et grossesse : ce qu'il faut savoir",
    excerpt: "L'ostéopathie accompagne les futures mamans de façon douce et sécurisée pour un meilleur confort.",
    readTime: "6 min",
    date: "Avr. 2026",
    color: "#fdeef3",
    accent: "#8B2035",
    href: "/osteopathie-grossesse-equilibre-feminin",
    external: false,
    image: "/grossesse-thumbnail.webp",
    hideBadge: false,
    imagePosition: "50% 15%",
  },
];

const mhscArticles = [
  { href: "/osteopathe-hyrox-crossfit-montpellier", label: "HYROX & CrossFit Montpellier", tag: "HYROX", color: "#0a0a14" },
  { href: "/sports-individuels-osteopathie-montpellier", label: "Tennis · Padel · Course · Escalade", tag: "Sports indiv.", color: "#D4336E" },
  { href: "/osteopathe-danseur-danse-montpellier", label: "Accompagnement des Danseurs", tag: "Danse", color: "#D4336E" },
  { href: "/afrobasket-2025-consultant-kine-mali", label: "AfroBasket 2025 — Mali Finaliste", tag: "2025", color: "#E8A020" },
  { href: "/coupe-de-france-2022-kine-rc-strasbourg", label: "Coupe de France 2022 — RC Strasbourg", tag: "Football", color: "#0a1628" },
  { href: "/9-saisons-mhsc-volley-osteopathe", label: "9 saisons au MHSC VB", tag: "MHSC VB", color: "#8B2035" },
  { href: "/parcours-ffvb-equipe-france-volley", label: "Parcours FFVB (2013–2018)", tag: "FFVB", color: "#D4336E" },
  { href: "/jeux-mediterraneens-2013-kine-equipe-france-volley", label: "Jeux Méditerranéens 2013", tag: "2013", color: "#E8A020" },
  { href: "/tqce-u20-2016-kine-equipe-france-volley", label: "TQCE U20 — 2016", tag: "FFVB", color: "#D4336E" },
  { href: "/tqcm-u21-2017-kine-equipe-france-volley", label: "TQCM U21 — 2017", tag: "FFVB", color: "#D4336E" },
  { href: "/tqce-juniors-2018-kine-equipe-france-volley", label: "TQCE Juniors — 2018", tag: "FFVB", color: "#D4336E" },
  { href: "/euro-u20-2018-kine-equipe-france-volley", label: "Euro U20 — 2018", tag: "FFVB", color: "#D4336E" },
  { href: "/recuperation-sport-haut-niveau-sommeil-alimentation", label: "Récupération haut niveau", tag: "Méthode", color: "#8B2035" },
];

function ArticleCard({ a }: { a: typeof featured[0] }) {
  const inner = (
    <>
      <div className="h-36 relative overflow-hidden">
        {a.image ? (
          <img src={a.image} alt={a.title} className="w-full h-full object-cover" style={{ objectPosition: (a as { imagePosition?: string }).imagePosition ?? "50% 50%" }} />
        ) : (
          <div className="h-full" style={{ background: a.color }} />
        )}
        {!(a as { hideBadge?: boolean }).hideBadge && (
          <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: a.accent, color: "white" }}>
            {a.category}
          </span>
        )}
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
  );
  return (
    <article className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 bg-white">
      {a.external ? (
        <a href={a.href} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
      ) : (
        <a href={a.href} className="block">{inner}</a>
      )}
    </article>
  );
}

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
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {featured.map((a) => <ArticleCard key={a.href} a={a} />)}
        </div>

        {/* Tous les articles MHSC / FFVB */}
        <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d1a2e 100%)" }}>
            <span className="text-2xl">🏐</span>
            <div>
              <p className="text-white font-black text-base" style={{ fontFamily: "Figtree, sans-serif" }}>
                Sport de haut niveau — MHSC · FFVB
              </p>
              <p className="text-white/60 text-xs mt-0.5">9 saisons au MHSC VB · 5 missions équipe de France</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100">
            {mhscArticles.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="group bg-white px-4 py-4 hover:bg-pink-50 transition-colors flex flex-col gap-1.5"
              >
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white w-fit" style={{ background: a.color }}>
                  {a.tag}
                </span>
                <p className="text-xs font-semibold text-gray-800 group-hover:text-[#D4336E] transition-colors leading-snug" style={{ fontFamily: "Figtree, sans-serif" }}>
                  {a.label}
                </p>
                <ArrowRight size={12} className="text-gray-300 group-hover:text-[#D4336E] transition-colors mt-auto" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
