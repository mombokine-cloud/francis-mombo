'use client';

import { useState, useRef, useCallback, useEffect } from "react";

type VideoItem =
  | { type: 'youtube'; id: string; title: string; subtitle: string }
  | { type: 'local'; src: string; title: string; subtitle: string };

const ALL_VIDEOS: VideoItem[] = [
  { type: 'youtube', id: '3xyeSDZ4z0E', title: "Témoignage Andy", subtitle: "Ancien joueur professionnel de volley-ball" },
  { type: 'youtube', id: 'rmguXWrn1S8', title: "Ostéopathie viscérale", subtitle: "Patiente, Montpellier" },
  { type: 'youtube', id: 'kKf8PbuJmHc', title: "Témoignage patient", subtitle: "Cabinet Castelnau-le-Lez" },
  { type: 'youtube', id: 'rgO3lnhlWOM', title: "Endométriose & ostéopathie", subtitle: "Patiente hypnose & ostéopathie" },
  { type: 'youtube', id: '0uRQszTv0bU', title: "Témoignage Hatika", subtitle: "Douleurs chroniques" },
  { type: 'youtube', id: 'DtxCcbXcwEE', title: "Témoignage Julie", subtitle: "Hypnose & sciatique" },
  { type: 'youtube', id: 'Ijid8zUrLkw', title: "Témoignage volleyeuse", subtitle: "Blessure sportive & ostéopathie" },
  { type: 'youtube', id: 'R1uBB6ynk0g', title: "Témoignage sportif", subtitle: "Suivi ostéopathique" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function VideoCarousel() {
  const [videos, setVideos] = useState<VideoItem[]>(ALL_VIDEOS);
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setVideos(shuffle(ALL_VIDEOS));
  }, []);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const pauseAllLocal = useCallback(() => {
    videoRefs.current.forEach((v) => { if (v) v.pause(); });
  }, []);

  const goTo = useCallback((index: number) => {
    pauseAllLocal();
    setCurrent(index);
  }, [pauseAllLocal]);

  const prev = () => goTo((current - 1 + videos.length) % videos.length);
  const next = () => goTo((current + 1) % videos.length);

  // Autoplay vidéos locales à l'entrée dans le viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const item = videos[current];
        if (item.type !== 'local') return;
        const video = videoRefs.current[current];
        if (!video) return;
        if (entry.isIntersecting) {
          video.muted = true;
          setMuted(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [current]);

  // Lecture après changement de slide (local uniquement)
  useEffect(() => {
    const item = videos[current];
    if (item.type !== 'local') return;
    const video = videoRefs.current[current];
    if (!video) return;
    video.currentTime = 0;
    video.muted = muted;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      video.play().catch(() => {});
    }
  }, [current]);

  const toggleMute = () => {
    const item = videos[current];
    if (item.type !== 'local') return;
    const video = videoRefs.current[current];
    if (!video) return;
    const newMuted = !muted;
    video.muted = newMuted;
    setMuted(newMuted);
  };

  const currentItem = videos[current];
  const isLocal = currentItem.type === 'local';

  // Index local (pour videoRefs, on ignore YouTube)
  const localIndex = (i: number) => videos.slice(0, i).filter(v => v.type === 'local').length;

  return (
    <>
      <style>{`
        .vc-aspect { position: relative; width: 100%; padding-bottom: 177.78%; }
        @media (min-width: 640px) { .vc-aspect { padding-bottom: 56.25%; } }
      `}</style>

      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest mb-5 text-center" style={{ color: "#E8A020" }}>
          Vidéos témoignages
        </p>

        <div className="relative" style={{ maxWidth: "760px", margin: "0 auto" }} ref={containerRef}>
          <div className="vc-aspect rounded-2xl overflow-hidden bg-black">

            {videos.map((video, i) => (
              <div
                key={i}
                style={{
                  position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                  display: i === current ? "block" : "none",
                }}
              >
                {video.type === 'youtube' ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                ) : (
                  <video
                    ref={(el) => { videoRefs.current[localIndex(i)] = el; }}
                    src={video.src}
                    preload="metadata"
                    playsInline
                    muted={muted}
                    loop
                    aria-label={`${video.title} - ${video.subtitle}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", background: "#000" }}
                  />
                )}
              </div>
            ))}

            {/* Bouton son (vidéos locales uniquement) */}
            {isLocal && (
              <button
                onClick={toggleMute}
                aria-label={muted ? "Activer le son" : "Couper le son"}
                className="absolute bottom-4 right-4 z-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 transition-all"
                style={{ width: 40, height: 40 }}
              >
                {muted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  </svg>
                )}
              </button>
            )}

            {/* Overlay titre mobile */}
            {isLocal && (
              <div
                className="absolute bottom-0 left-0 right-0 sm:hidden px-4 pb-14 pt-8"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}
              >
                <p className="text-white font-bold text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>{currentItem.title}</p>
                <p className="text-white/70 text-xs mt-0.5">{currentItem.subtitle}</p>
              </div>
            )}
          </div>

          {/* Flèche gauche */}
          <button onClick={prev} aria-label="Vidéo précédente"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:scale-105 active:scale-95 transition-transform"
            style={{ width: 44, height: 44 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B2035" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Flèche droite */}
          <button onClick={next} aria-label="Vidéo suivante"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:scale-105 active:scale-95 transition-transform"
            style={{ width: 44, height: 44 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B2035" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Titre desktop */}
        <div className="hidden sm:block text-center mt-4 min-h-[44px]">
          <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>{currentItem.title}</p>
          <p className="text-xs text-gray-400 mt-0.5">{currentItem.subtitle}</p>
        </div>

        {/* Points de navigation */}
        <div className="flex items-center justify-center gap-2 mt-4" role="tablist">
          {videos.map((_, i) => (
            <button key={i} role="tab" aria-selected={i === current} aria-label={`Vidéo ${i + 1}`}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-200"
              style={{ width: i === current ? 24 : 8, height: 8, background: i === current ? "#D4336E" : "#e5e7eb", minWidth: 8 }}
            />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-2">{current + 1} / {videos.length}</p>

        <div className="text-center mt-6">
          <a
            href="/temoignages-video"
            className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:text-white"
            style={{ borderColor: "#D4336E", color: "#D4336E" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#D4336E"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#D4336E"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/><polygon fill="white" points="9.6,15.6 15.8,12 9.6,8.4"/></svg>
            Voir tous les témoignages vidéo
          </a>
        </div>
      </div>
    </>
  );
}
