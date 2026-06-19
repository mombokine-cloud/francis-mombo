import { Calendar, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#0d0d0d", color: "white" }}
    >
      {/* ── TOP BAR ── */}
      <div
        className="relative z-10 flex items-center justify-between px-6 sm:px-10 pt-6 pb-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-medium">
          Santé &amp; Performance
        </span>
        <div className="flex items-center gap-5">
          <a href="#contact" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
            {/* Instagram icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="mailto:contact@francismombo.fr" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={16} />
          </a>
          <a
            href="https://www.doctolib.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90"
            style={{ background: "#D4336E", color: "white" }}
          >
            Doctolib
          </a>
        </div>
      </div>

      {/* ── MASTHEAD ── */}
      <div className="relative z-10 px-6 sm:px-10 pt-6 pb-2">
        <div
          className="flex items-center gap-4 mt-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "10px" }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400">
            Santé &amp; Équilibre
          </span>
          <span className="text-gray-700">/</span>
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400">2026</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#E8A020">
                <path d="M6 1l1.2 2.6L10 4.1l-2 2 .5 2.8L6 7.5 3.5 8.9l.5-2.8-2-2 2.8-.5L6 1z"/>
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">Avis Google</span>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className="relative z-10 flex flex-1 gap-0 px-6 sm:px-10 pb-8">
        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:flex flex-col justify-between w-44 pr-6 py-4" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
          <nav className="space-y-6">
            {[
              { label: "Prendre rendez-vous", href: "#contact" },
              { label: "Hypnose", href: "#services" },
              { label: "Castelnau-le-Lez", href: "#locations" },
              { label: "Saint-Mathieu-de-Tréviers", href: "#locations" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors leading-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div>
            <a
              href="tel:0650149192"
              className="text-xs text-gray-500 hover:text-white transition-colors tracking-wider"
            >
              06 50 14 91 92
            </a>
          </div>
        </aside>

        {/* CENTER — Photo */}
        <div className="relative flex-1 flex flex-col items-center justify-end lg:mx-8 min-h-[420px]">
          {/* Photo */}
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src="/francis-hero.png"
              alt="Francis MOMBO, ostéopathe"
              className="h-full object-contain object-bottom"
              style={{ maxHeight: "520px", filter: "grayscale(15%)" }}
            />
            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 40%, #0d0d0d 100%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{ background: "linear-gradient(0deg, #0d0d0d 0%, transparent 100%)" }}
            />
          </div>

          {/* Spacer to push photo to fill */}
          <div className="relative z-10 pb-2" />
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:flex flex-col justify-between w-52 pl-6 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Votre équilibre</p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#D4336E" }}>Mon engagement</p>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "18px" }}>
              <p className="font-black text-white" style={{ fontFamily: "Figtree, sans-serif", fontSize: "28px", lineHeight: 1 }}>20 ans</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">d'expérience</p>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "18px" }}>
              <p className="text-xs font-bold text-white uppercase tracking-wide leading-relaxed">
                Sport professionnel
              </p>
              <p className="text-xs text-gray-500 mt-0.5">et sport de haut niveau</p>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "18px" }}>
              <p className="text-xs text-gray-400 leading-relaxed">
                Une approche globale du corps et de l&apos;esprit
              </p>
            </div>
          </div>

          {/* Barcode decoratif */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 28 }, (_, i) => (
                <div
                  key={i}
                  className="rounded-sm"
                  style={{
                    width: i % 3 === 0 ? "3px" : "1.5px",
                    height: "28px",
                    background: "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-gray-600 tracking-widest">2026 · MOMBO · 0001</p>
          </div>
        </aside>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="relative z-10 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-xs text-gray-500 italic">
          L&apos;ostéopathie au service de votre santé
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.doctolib.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)", color: "white" }}
          >
            <Calendar size={13} />
            Prendre rendez-vous
          </a>
          <a
            href="#about"
            className="text-xs font-medium uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/20 text-gray-300 hover:border-white/50 hover:text-white transition-all"
          >
            Découvrir
          </a>
        </div>
      </div>
    </section>
  );
}
