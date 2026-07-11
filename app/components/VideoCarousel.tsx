'use client';

import { useState, useRef, useCallback, useEffect } from "react";

const videos = [
  {
    src: "/videos/temoignage-andy.mp4",
    title: "Témoignage Andy",
    subtitle: "Ancien joueur professionnel de volley-ball",
  },
  {
    src: "/videos/temoignage-viscerale.mp4",
    title: "Ostéopathie viscérale",
    subtitle: "Patiente, Montpellier",
  },
  {
    src: "/videos/temoignage-patient.mp4",
    title: "Témoignage patient",
    subtitle: "Cabinet Castelnau-le-Lez",
  },
  {
    src: "/videos/temoignage-endometriose.mp4",
    title: "Endométriose & ostéopathie",
    subtitle: "Patiente hypnose & ostéopathie",
  },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const pauseAll = useCallback(() => {
    videoRefs.current.forEach((v) => { if (v) v.pause(); });
  }, []);

  const goTo = useCallback((index: number) => {
    pauseAll();
    setCurrent(index);
  }, [pauseAll]);

  const prev = () => goTo((current - 1 + videos.length) % videos.length);
  const next = () => goTo((current + 1) % videos.length);

  // Autoplay quand la vidéo entre dans le viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
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

  // Lecture de la nouvelle vidéo après changement de slide
  useEffect(() => {
    const video = videoRefs.current[current];
    if (!video) return;
    video.currentTime = 0;
    video.muted = muted;
    // Autoplay uniquement si le container est visible
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (isVisible) video.play().catch(() => {});
  }, [current]);

  const toggleMute = () => {
    const video = videoRefs.current[current];
    if (!video) return;
    const newMuted = !muted;
    video.muted = newMuted;
    setMuted(newMuted);
  };

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
          {/* Conteneur vidéo responsive */}
          <div className="vc-aspect rounded-2xl overflow-hidden bg-black">
            {videos.map((video, i) => (
              <video
                key={video.src}
                ref={(el) => { videoRefs.current[i] = el; }}
                src={video.src}
                preload="metadata"
                playsInline
                muted={muted}
                loop
                aria-label={`${video.title} — ${video.subtitle}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: i === current ? "block" : "none",
                  objectFit: "cover",
                  background: "#000",
                }}
              />
            ))}

            {/* Bouton son */}
            <button
              onClick={toggleMute}
              aria-label={muted ? "Activer le son" : "Couper le son"}
              className="absolute bottom-4 right-4 z-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 transition-all hover:bg-black/70"
              style={{ width: 40, height: 40 }}
            >
              {muted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              )}
            </button>

            {/* Titre overlay sur mobile */}
            <div
              className="absolute bottom-0 left-0 right-0 sm:hidden px-4 pb-14 pt-8"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}
            >
              <p className="text-white font-bold text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
                {videos[current].title}
              </p>
              <p className="text-white/70 text-xs mt-0.5">{videos[current].subtitle}</p>
            </div>
          </div>

          {/* Flèches */}
          <button
            onClick={prev}
            aria-label="Vidéo précédente"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:scale-105 active:scale-95 transition-transform"
            style={{ width: 44, height: 44, flexShrink: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B2035" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Vidéo suivante"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:scale-105 active:scale-95 transition-transform"
            style={{ width: 44, height: 44, flexShrink: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B2035" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Titre desktop */}
        <div className="hidden sm:block text-center mt-4 min-h-[44px]">
          <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
            {videos[current].title}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{videos[current].subtitle}</p>
        </div>

        {/* Points de navigation */}
        <div className="flex items-center justify-center gap-2 mt-4" role="tablist" aria-label="Sélectionner une vidéo">
          {videos.map((video, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Vidéo ${i + 1} : ${video.title}`}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "#D4336E" : "#e5e7eb",
                minWidth: 8,
              }}
            />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-2">
          {current + 1} / {videos.length}
        </p>
      </div>
    </>
  );
}
