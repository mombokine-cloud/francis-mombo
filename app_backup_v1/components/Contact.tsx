"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #fff9fb 0%, #fff3e8 50%, #fff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Contact
          </p>
          <h2 className="section-title">
            Prenez <span className="gradient-text">contact</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Une question ? Besoin d&apos;un renseignement ? Je suis là pour vous répondre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6 space-y-5"
              style={{ background: "linear-gradient(135deg, #D4336E 0%, #8B2035 100%)" }}
            >
              <h3 className="text-white font-bold text-xl" style={{ fontFamily: "Figtree, sans-serif" }}>
                Informations de contact
              </h3>

              {[
                { Icon: Phone, label: "Téléphone", value: "06 50 14 91 92", href: "tel:0650149192" },
                { Icon: Mail, label: "Email", value: "contact@francismombo.fr", href: "mailto:contact@francismombo.fr" },
                { Icon: MapPin, label: "Cabinet 1", value: "1720 Av. de l'Europe, Castelnau-le-Lez", href: "#locations" },
                { Icon: MapPin, label: "Cabinet 2", value: "5 Av. du Grand Chêne, St-Mathieu-de-Tréviers", href: "#locations" },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-white font-semibold text-sm group-hover:underline">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={20} style={{ color: "#D4336E" }} />
                <h3 className="font-bold text-gray-900" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Rendez-vous rapide
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                La façon la plus rapide de réserver est de passer par Doctolib — disponible 24h/24.
              </p>
              <a
                href="https://www.doctolib.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Réserver sur Doctolib
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#fdeef3" }}
                >
                  <Send size={24} style={{ color: "#D4336E" }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Message envoyé !
                </h3>
                <p className="text-gray-500 text-sm">Je vous répondrai dans les meilleurs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Figtree, sans-serif" }}>
                  Envoyer un message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Nom complet <span className="text-[#D4336E]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4336E] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="06 xx xx xx xx"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4336E] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email <span className="text-[#D4336E]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jean@exemple.fr"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4336E] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-[#D4336E]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre demande ou vos symptômes..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4336E] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
