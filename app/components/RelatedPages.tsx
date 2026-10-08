import Link from "next/link";

type Category = "osteo" | "feminin";

const OSTEO_PAGES = [
  { href: "/maladies-chroniques-osteopathie", label: "Maladies chroniques", desc: "Fibromyalgie, douleurs, stress", emoji: "🩺" },
  { href: "/osteopathie-sport-montpellier", label: "Ostéopathie du sport", desc: "Performance & blessures sportives", emoji: "🏅" },
  { href: "/douleurs-chroniques-osteopathie", label: "Douleurs chroniques", desc: "Prise en charge sur le long terme", emoji: "💊" },
  { href: "/mal-de-dos-comprendre-prevenir", label: "Mal de dos", desc: "Comprendre et prévenir", emoji: "🦴" },
  { href: "/urgences-osteopathie-montpellier", label: "Urgences ostéopathie", desc: "Consultation rapide à Montpellier", emoji: "⚡" },
  { href: "/recuperation-sportive-osteopathie", label: "Récupération sportive", desc: "Récupérer plus vite, mieux", emoji: "🔄" },
  { href: "/kine-osteo-montpellier", label: "Kiné & ostéo", desc: "Double expertise à Montpellier", emoji: "🤲" },
  { href: "/osteopathie-enfant-nourrisson", label: "Enfant & nourrisson", desc: "Dès la naissance", emoji: "👶" },
  { href: "/osteopathie-seniors-montpellier", label: "Seniors", desc: "Mobilité & qualité de vie", emoji: "🌿" },
];

const FEMININ_PAGES = [
  { href: "/sante-femme-fertilite-endometriose", label: "Santé féminine & fertilité", desc: "Endométriose, cycles, fertilité", emoji: "🌸" },
  { href: "/osteopathie-endometriose", label: "Endométriose", desc: "Douleurs pelviennes & ostéopathie", emoji: "💜" },
  { href: "/osteopathie-grossesse-montpellier", label: "Grossesse", desc: "Suivi ostéopathique à Montpellier", emoji: "🤰" },
  { href: "/osteopathie-grossesse-equilibre-feminin", label: "Grossesse & équilibre féminin", desc: "Corps & hormones en harmonie", emoji: "⚖️" },
  { href: "/osteopathie-sante-femme", label: "Ostéopathie santé femme", desc: "Ménopause, hormones, bien-être", emoji: "🌺" },
];

export default function RelatedPages({ category, current }: { category: Category; current: string }) {
  const pages = category === "osteo" ? OSTEO_PAGES : FEMININ_PAGES;
  const filtered = pages.filter((p) => p.href !== current);
  const label = category === "osteo" ? "Ostéopathie" : "Santé de la femme";
  const color = category === "osteo" ? "#D4336E" : "#8B2035";

  return (
    <div className="mt-12 mb-4">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: color }}>{label}</span>
        <p className="text-sm font-semibold text-gray-700" style={{ fontFamily: "Figtree, sans-serif" }}>Autres pages dans cette catégorie</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filtered.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-100 transition-all"
          >
            <span className="text-xl flex-shrink-0 mt-0.5">{p.emoji}</span>
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-xs leading-snug group-hover:text-[#D4336E] transition-colors" style={{ fontFamily: "Figtree, sans-serif" }}>{p.label}</p>
              <p className="text-gray-400 text-xs mt-0.5 leading-snug">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
