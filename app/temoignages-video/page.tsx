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

const youtubeShorts = [
  {
    id: "Ijid8zUrLkw",
    title: "Témoignage volleyeuse — Blessure sportive & ostéopathie",
    description: "Une volleyeuse témoigne de sa prise en charge ostéopathique à Montpellier après une blessure sportive.",
    uploadDate: "2026-10-07",
  },
  {
    id: "RysAXR-0uz0",
    title: "Témoignage d'un sportif professionnel après une séance d'ostéopathie",
    description: "Un sportif professionnel partage son ressenti après une séance d'ostéopathie avec Francis MOMBO à Castelnau-le-Lez.",
    uploadDate: "2026-10-07",
  },
];

const youtubeEducatif = [
  {
    id: "R1uBB6ynk0g",
    title: "Pourquoi ça craque en ostéopathie ?",
    description: "Francis MOMBO explique le phénomène de craquement articulaire lors des manipulations ostéopathiques — ce que c'est, pourquoi ça se produit, et si c'est utile.",
    uploadDate: "2026-10-07",
  },
  {
    id: "OjRbKbrRlPY",
    title: "Manipulations cervicales : non, ce n'est pas comme dans les films",
    description: "Francis MOMBO démystifie les manipulations cervicales en ostéopathie — une technique précise, douce et contrôlée, très éloignée des représentations que l'on voit au cinéma.",
    uploadDate: "2026-10-07",
  },
];

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
  numberOfItems: videos.length + youtubeShorts.length + youtubeEducatif.length,
  itemListElement: [
    ...youtubeShorts.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: v.description,
        url: `https://www.youtube.com/shorts/${v.id}`,
        thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
        uploadDate: v.uploadDate,
        publisher: {
          "@type": "Organization",
          name: "Francis MOMBO — Ostéopathe & Kinésithérapeute",
          url: siteUrl,
        },
      },
    })),
    ...youtubeEducatif.map((v, i) => ({
      "@type": "ListItem",
      position: youtubeShorts.length + i + 1,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: v.description,
        url: `https://www.youtube.com/shorts/${v.id}`,
        thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
        uploadDate: v.uploadDate,
        publisher: {
          "@type": "Organization",
          name: "Francis MOMBO — Ostéopathe & Kinésithérapeute",
          url: siteUrl,
        },
      },
    })),
    ...videos.map((v, i) => ({
      "@type": "ListItem",
      position: youtubeShorts.length + youtubeEducatif.length + i + 1,
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

        {/* YouTube Shorts */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#D4336E"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/><polygon fill="white" points="9.6,15.6 15.8,12 9.6,8.4"/></svg>
            <p className="text-sm font-bold text-gray-700" style={{ fontFamily: "Figtree, sans-serif" }}>Nouvelles vidéos YouTube</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {youtubeShorts.map((short) => (
              <article key={short.id} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}`}
                    title={short.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h2 className="font-black text-gray-900 text-sm mb-1" style={{ fontFamily: "Figtree, sans-serif" }}>{short.title}</h2>
                  <p className="text-gray-500 text-xs leading-relaxed">{short.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href="https://www.youtube.com/@momboosteo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold hover:underline" style={{ color: "#D4336E" }}>
              Voir toutes les vidéos sur YouTube
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>

        {/* Vidéos éducatives */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-sm font-bold text-gray-700" style={{ fontFamily: "Figtree, sans-serif" }}>Comprendre l'ostéopathie</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {youtubeEducatif.map((short) => (
              <article key={short.id} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}`}
                    title={short.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-xs font-bold px-2 py-1 rounded-full text-white mb-2 inline-block" style={{ background: "#E8A020" }}>Explication</span>
                  <h2 className="font-black text-gray-900 text-sm mb-1 mt-1" style={{ fontFamily: "Figtree, sans-serif" }}>{short.title}</h2>
                  <p className="text-gray-500 text-xs leading-relaxed">{short.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-100 mb-10" />

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
