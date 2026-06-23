"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expérience", href: "#experience" },
  { label: "Localisations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex items-center">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="14" cy="14" rx="10" ry="13" fill="#E8A020" opacity="0.85" />
              <ellipse cx="24" cy="14" rx="10" ry="13" fill="#D4336E" opacity="0.75" />
              <circle cx="14" cy="8" r="4" fill="#8B2035" opacity="0.8" />
              <circle cx="24" cy="8" r="3" fill="#E8A020" opacity="0.7" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-bold text-gray-900 text-base tracking-tight block" style={{ fontFamily: 'Figtree, sans-serif' }}>
              Francis <span style={{ color: '#D4336E' }}>MOMBO</span>
            </span>
            <span className="text-xs text-gray-500 font-normal">Ostéopathe · Kinésithérapeute</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-[#D4336E] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:0650149192" className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#D4336E] transition-colors">
            <Phone size={15} />
            06 50 14 91 92
          </a>
          <a
            href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-gray-700 font-medium hover:bg-pink-50 hover:text-[#D4336E] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 flex flex-col gap-2">
            <a href="tel:0650149192" className="flex items-center gap-2 py-2.5 px-3 text-gray-700 font-semibold">
              <Phone size={15} />
              06 50 14 91 92
            </a>
            <a
              href="https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              Prendre RDV sur Doctolib
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
