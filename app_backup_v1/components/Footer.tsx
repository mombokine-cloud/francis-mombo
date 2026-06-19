import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1a1a2e", color: "white" }}>
      {/* Wave top */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full block" fill="#1a1a2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
                <ellipse cx="14" cy="14" rx="10" ry="13" fill="#E8A020" opacity="0.85" />
                <ellipse cx="24" cy="14" rx="10" ry="13" fill="#D4336E" opacity="0.75" />
                <circle cx="14" cy="8" r="4" fill="#8B2035" opacity="0.8" />
              </svg>
              <div>
                <p className="font-bold text-white text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Francis MOMBO
                </p>
                <p className="text-gray-400 text-xs">Ostéopathe · Kiné</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Des soins ostéopathiques de qualité, au service de votre santé et de votre bien-être.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide" style={{ color: "#D4336E" }}>
              Services
            </h4>
            <ul className="space-y-2">
              {["Ostéopathie", "Ostéopathie du sport", "Équilibre féminin", "Hypnose thérapeutique"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide" style={{ color: "#D4336E" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "À propos", href: "#about" },
                { label: "Expérience", href: "#experience" },
                { label: "Témoignages", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Articles", href: "#articles" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide" style={{ color: "#D4336E" }}>
              Cabinets
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin size={14} style={{ color: "#D4336E", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="text-gray-300 text-xs font-medium">Castelnau-le-Lez</p>
                  <p className="text-gray-500 text-xs">1720, Av. de l&apos;Europe — 34170</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} style={{ color: "#E8A020", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="text-gray-300 text-xs font-medium">Saint-Mathieu-de-Tréviers</p>
                  <p className="text-gray-500 text-xs">5, Av. du Grand Chêne — 34270</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} style={{ color: "#D4336E", flexShrink: 0 }} />
                <a href="tel:0650149192" className="text-gray-400 text-xs hover:text-white transition-colors font-semibold">
                  06 50 14 91 92
                </a>
              </li>
            </ul>

            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-full text-xs font-bold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #D4336E 0%, #8B2035 100%)" }}
            >
              Prendre RDV sur Doctolib
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {year} Francis MOMBO — Ostéopathe &amp; Kinésithérapeute. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-xs">
            Site réalisé avec ❤️ — Mentions légales
          </p>
        </div>
      </div>
    </footer>
  );
}
