import Link from "next/link";

export const MHSC_ARTICLES = [
  {
    href: "/9-saisons-mhsc-volley-osteopathe",
    label: "9 saisons au MHSC VB",
    desc: "Ce que le sport de haut niveau m'a appris",
    tag: "MHSC VB",
    color: "#8B2035",
    emoji: "🏆",
  },
  {
    href: "/parcours-ffvb-equipe-france-volley",
    label: "Parcours FFVB",
    desc: "5 missions avec l'équipe de France (2013–2018)",
    tag: "FFVB",
    color: "#D4336E",
    emoji: "🌍",
  },
  {
    href: "/jeux-mediterraneens-2013-kine-equipe-france-volley",
    label: "Jeux Méditerranéens 2013",
    desc: "Médaille de bronze — Mersin, Turquie",
    tag: "2013",
    color: "#E8A020",
    emoji: "🥉",
  },
  {
    href: "/tqce-u20-2016-kine-equipe-france-volley",
    label: "TQCE U20 — 2016",
    desc: "Qualification Europe avec l'équipe de France U20",
    tag: "FFVB 2016",
    color: "#D4336E",
    emoji: "🏐",
  },
  {
    href: "/tqcm-u21-2017-kine-equipe-france-volley",
    label: "TQCM U21 — 2017",
    desc: "Qualification Monde — victoire finale vs Bulgarie",
    tag: "FFVB 2017",
    color: "#D4336E",
    emoji: "🏐",
  },
  {
    href: "/tqce-juniors-2018-kine-equipe-france-volley",
    label: "TQCE Juniors — 2018",
    desc: "Qualification Euro U20 — Monténégro",
    tag: "FFVB 2018",
    color: "#D4336E",
    emoji: "🏐",
  },
  {
    href: "/euro-u20-2018-kine-equipe-france-volley",
    label: "Euro U20 — 2018",
    desc: "Championnat d'Europe des moins de 20 ans",
    tag: "FFVB 2018",
    color: "#D4336E",
    emoji: "🌟",
  },
  {
    href: "/recuperation-sport-haut-niveau-sommeil-alimentation",
    label: "Récupération haut niveau",
    desc: "Sommeil, alimentation & ostéopathie",
    tag: "Méthode",
    color: "#8B2035",
    emoji: "💤",
  },
];

export default function RelatedArticles({ current }: { current: string }) {
  const filtered = MHSC_ARTICLES.filter((a) => a.href !== current);

  return (
    <div className="mt-12 mb-4">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#8B2035" }}>
          MHSC · FFVB
        </span>
        <p className="text-sm font-semibold text-gray-700" style={{ fontFamily: "Figtree, sans-serif" }}>
          Autres articles sur l'expérience sport de haut niveau
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filtered.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-100 transition-all"
          >
            <span className="text-xl flex-shrink-0 mt-0.5">{a.emoji}</span>
            <div className="min-w-0">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full text-white inline-block mb-1"
                style={{ background: a.color }}
              >
                {a.tag}
              </span>
              <p className="font-bold text-gray-900 text-xs leading-snug group-hover:text-[#D4336E] transition-colors" style={{ fontFamily: "Figtree, sans-serif" }}>
                {a.label}
              </p>
              <p className="text-gray-400 text-xs mt-0.5 leading-snug">{a.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
