import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";

export const metadata: Metadata = {
  title: "Témoignages vidéo — Patients de Francis MOMBO Ostéopathe Montpellier",
  description:
    "Regardez les témoignages vidéo des patients de Francis MOMBO, ostéopathe D.O. et kinésithérapeute à Montpellier. Ostéopathie viscérale, endométriose, sport de haut niveau, hypnose.",
  keywords: [
    "témoignage ostéopathe Montpellier",
    "avis patient ostéopathe",
    "vidéo témoignage ostéopathie",
    "Francis MOMBO avis",
    "ostéopathie viscérale témoignage",
    "hypnose ostéopathie résultats",
  ],
  alternates: { canonical: `${siteUrl}/temoignages-video` },
  openGraph: {
    title: "Témoignages vidéo — Francis MOMBO Ostéopathe Montpellier",
    description:
      "Vidéos témoignages de patients : ostéopathie viscérale, endométriose, sport de haut niveau, hypnose. Cabinet à Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.",
    url: `${siteUrl}/temoignages-video`,
    type: "website",
    images: [{ url: "/og-image.jpeg.png", width: 1200, height: 630 }],
  },
};

const videos = [
  {
    id: "andy",
    src: "/videos/temoignage-andy.mp4",
    title: "Témoignage Andy — Ancien joueur professionnel de volley-ball",
    description:
      "Andy, ancien joueur professionnel de volley-ball, témoigne de son suivi ostéopathique avec Francis MOMBO sur les terrains internationaux.",
    duration: "PT0M39S",
    uploadDate: "2025-06-01",
    thumbnail: "/og-image.jpeg.png",
  },
  {
    id: "viscerale",
    src: "/videos/temoignage-viscerale.mp4",
    title: "Témoignage — Ostéopathie viscérale",
    description:
      "Une patiente partage son expérience après des séances d'ostéopathie viscérale avec Francis MOMBO à Montpellier.",
    duration: "PT1M00S",
    uploadDate: "2025-06-01",
    thumbnail: "/og-image.jpeg.png",
  },
  {
    id: "patient",
    src: "/videos/temoignage-patient.mp4",
    title: "Témoignage patient — Cabinet Castelnau-le-Lez",
    description:
      "Un patient témoigne de son suivi ostéopathique au cabinet de Castelnau-le-Lez avec Francis MOMBO.",
    duration: "PT1M00S",
    uploadDate: "2025-06-01",
    thumbnail: "/og-image.jpeg.png",
  },
  {
    id: "endometriose",
    src: "/videos/temoignage-endometriose.mp4",
    title: "Témoignage — Endométriose & ostéopathie",
    description:
      "Une patiente atteinte d'endométriose témoigne des résultats obtenus grâce à l'ostéopathie et l'hypnose avec Francis MOMBO.",
    duration: "PT1M00S",
    uploadDate: "2025-06-15",
    thumbnail: "/og-image.jpeg.png",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Témoignages vidéo — Francis MOMBO Ostéopathe",
  url: `${siteUrl}/temoignages-video`,
  numberOfItems: videos.length,
  itemListElement: videos.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "VideoObject",
      name: v.title,
      description: v.description,
      contentUrl: `${siteUrl}${v.src}`,
      thumbnailUrl: `${siteUrl}${v.thumbnail}`,
      uploadDate: v.uploadDate,
      duration: v.duration,
      publisher: {
        "@type": "Organization",
        name: "Francis MOMBO — Ostéopathe & Kinésithérapeute",
        url: siteUrl,
      },
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Retour au site
          </Link>
          <a
            href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-4 py-2 rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
          >
            Prendre rendez-vous
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>
              Témoignages
            </span>
            <span className="text-xs text-gray-400">Vidéos patients · Montpellier</span>
          </div>
          <h1
            className="font-black text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Ils témoignent en vidéo
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Ostéopathie viscérale, endométriose, sport de haut niveau, hypnose — des patients racontent leur expérience avec Francis MOMBO en toute authenticité.
          </p>
        </div>

        <div className="space-y-10">
          {videos.map((video) => (
            <article key={video.id} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <video
                src={video.src}
                controls
                preload="metadata"
                playsInline
                className="w-full bg-black"
                style={{ aspectRatio: "16/9", display: "block" }}
                aria-label={video.title}
              />
              <div className="p-5 bg-white">
                <h2
                  className="font-black text-gray-900 text-base mb-1"
                  style={{ fontFamily: "Figtree, sans-serif" }}
                >
                  {video.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{video.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>
            Francis MOMBO
          </p>
          <h2
            className="text-xl font-black text-gray-900 mb-3"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Prendre rendez-vous
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Castelnau-le-Lez et Saint-Mathieu-de-Tréviers — disponible sur Doctolib.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold px-6 py-3 rounded-full text-white text-sm"
              style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
            >
              Réserver sur Doctolib
            </a>
            <a
              href="https://g.page/r/CSuZQhAb-49CEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold px-6 py-3 rounded-full text-sm border-2"
              style={{ borderColor: "#D4336E", color: "#D4336E" }}
            >
              Laisser un avis Google
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
