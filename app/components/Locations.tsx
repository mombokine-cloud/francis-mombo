import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const cabinets = [
  {
    name: "Cabinet Castelnau-le-Lez",
    address: "1720, Avenue de l'Europe",
    city: "34170 Castelnau-le-Lez",
    phone: "06 50 14 91 92",
    hours: "Lun–Ven : 8h–19h",
    mapUrl: "https://maps.google.com/?q=1720+Avenue+de+l'Europe+34170+Castelnau-le-Lez",
    primary: true,
  },
  {
    name: "Cabinet Saint-Mathieu-de-Tréviers",
    address: "5, Avenue du Grand Chêne",
    city: "34270 Saint-Mathieu-de-Tréviers",
    phone: "06 50 14 91 92",
    hours: "Sur rendez-vous",
    mapUrl: "https://maps.google.com/?q=5+Avenue+du+Grand+Chene+34270+Saint-Mathieu-de-Treviers",
    primary: false,
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            Mes cabinets
          </p>
          <h2 className="section-title">
            Où me <span className="gradient-text">consulter</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Deux cabinets dans l'Hérault pour vous accueillir au plus près de chez vous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cabinets.map((c) => (
            <div
              key={c.name}
              className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border ${
                c.primary ? "border-pink-200" : "border-gray-100"
              }`}
            >
              {/* Map placeholder */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: c.primary
                    ? "linear-gradient(135deg, #fdeef3 0%, #fce8f0 100%)"
                    : "linear-gradient(135deg, #fff3e8 0%, #fdf0e0 100%)",
                }}
              >
                <MapPin
                  size={40}
                  style={{ color: c.primary ? "#D4336E" : "#E8A020" }}
                  className="opacity-40"
                />
                <a
                  href={c.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                  style={{ color: c.primary ? "#D4336E" : "#E8A020" }}
                >
                  <ExternalLink size={12} />
                  Voir sur la carte
                </a>
                {c.primary && (
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: "#D4336E" }}
                  >
                    Cabinet principal
                  </span>
                )}
              </div>

              <div className="p-6 bg-white space-y-4">
                <h3
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: "Figtree, sans-serif" }}
                >
                  {c.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: "#D4336E", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p className="text-gray-700 font-medium text-sm">{c.address}</p>
                      <p className="text-gray-500 text-sm">{c.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={16} style={{ color: "#D4336E", flexShrink: 0 }} />
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="text-sm font-semibold text-gray-700 hover:text-[#D4336E] transition-colors"
                    >
                      {c.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} style={{ color: "#D4336E", flexShrink: 0 }} />
                    <p className="text-sm text-gray-600">{c.hours}</p>
                  </div>
                </div>

                <a
                  href="https://www.doctolib.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: c.primary
                      ? "linear-gradient(135deg, #D4336E 0%, #8B2035 100%)"
                      : "linear-gradient(135deg, #E8A020 0%, #D4941A 100%)",
                    color: "white",
                    boxShadow: c.primary
                      ? "0 4px 15px rgba(212, 51, 110, 0.3)"
                      : "0 4px 15px rgba(232, 160, 32, 0.3)",
                  }}
                >
                  Prendre RDV dans ce cabinet
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "linear-gradient(135deg, #fdeef3 0%, #fff3e8 100%)" }}
        >
          <div>
            <p className="font-bold text-gray-900" style={{ fontFamily: "Figtree, sans-serif" }}>
              Rendez-vous sur Doctolib
            </p>
            <p className="text-sm text-gray-500">Consultations disponibles dans les deux cabinets</p>
          </div>
          <a
            href="https://www.doctolib.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            Réserver maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
