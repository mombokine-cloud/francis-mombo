'use client';

import { useState, useRef, useCallback } from "react";

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
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const pauseAll = useCallback(() => {
    videoRefs.current.forEach((v) => { if (v) { v.pause(); } });
  }, []);

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    pauseAll();
    setDirection(dir);
    setCurrent(index);
  }, [pauseAll]);

  const prev = () => goTo((current - 1 + videos.length) % videos.length, 'left');
  const next = () => goTo((current + 1) % videos.length, 'right');

  return (
    <div className="mb-14">
      {/* Label */}
      <p className="text-sm font-semibold uppercase tracking-widest mb-5 text-center" style={{ color: "#E8A020" }}>
        Vidéos témoignages
      </p>

      <div className="relative">
        {/* Carte vidéo */}
        <div className="overflow-hidden rounded-2xl shadow-sm bg-black" style={{ aspectRatio: "16/9", maxWidth: "760px", margin: "0 auto" }}>
          {videos.map((video, i) => (
            <div
              key={video.src}
              className="absolute inset-0 transition-opacity duration-300"
              style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
              aria-hidden={i !== current}
            >
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={video.src}
                controls
                preload={i === 0 ? "metadata" : "none"}
                playsInline
                onPlay={pauseAll}
                className="w-full h-full object-contain bg-black"
                aria-label={`${video.title} — ${video.subtitle}`}
              />
            </div>
          ))}
          {/* Fallback height pour le positionnement absolu */}
          <div style={{ paddingBottom: "56.25%" }} />
        </div>

        {/* Flèche gauche */}
        <button
          onClick={prev}
          aria-label="Vidéo précédente"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 transition-all duration-150 hover:scale-105 active:scale-95"
          style={{ width: 44, height: 44, touchAction: "manipulation", flexShrink: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B2035" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Flèche droite */}
        <button
          onClick={next}
          aria-label="Vidéo suivante"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 transition-all duration-150 hover:scale-105 active:scale-95"
          style={{ width: 44, height: 44, touchAction: "manipulation", flexShrink: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B2035" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Titre & sous-titre de la vidéo active */}
      <div className="text-center mt-4 min-h-[44px]">
        <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
          {videos[current].title}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{videos[current].subtitle}</p>
      </div>

      {/* Points de navigation */}
      <div className="flex items-center justify-center gap-2 mt-3" role="tablist" aria-label="Sélectionner une vidéo">
        {videos.map((video, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Vidéo ${i + 1} : ${video.title}`}
            onClick={() => goTo(i, i > current ? 'right' : 'left')}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? "#D4336E" : "#e5e7eb",
              touchAction: "manipulation",
              minWidth: 8,
            }}
          />
        ))}
      </div>

      {/* Compteur */}
      <p className="text-center text-xs text-gray-400 mt-2">
        {current + 1} / {videos.length}
      </p>
    </div>
  );
}
