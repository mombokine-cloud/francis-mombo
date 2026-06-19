"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Qu'est-ce que l'ostéopathie ?",
    a: "L'ostéopathie est une médecine manuelle qui considère le corps dans sa globalité. L'ostéopathe identifie et traite les restrictions de mobilité des différentes structures du corps (muscles, articulations, viscères, crâne) pour soulager les douleurs et améliorer le fonctionnement général.",
  },
  {
    q: "Combien de séances sont nécessaires ?",
    a: "Cela dépend de votre situation. En général, 1 à 3 séances suffisent pour un problème aigu. Pour des pathologies chroniques ou un suivi préventif, des consultations régulières (tous les 3 à 6 mois) sont recommandées.",
  },
  {
    q: "L'ostéopathie est-elle remboursée ?",
    a: "L'ostéopathie n'est pas remboursée par l'Assurance Maladie, mais de nombreuses mutuelles participent aux frais. Renseignez-vous auprès de votre complémentaire santé pour connaître les modalités de remboursement.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Vous pouvez prendre rendez-vous directement via Doctolib (lien en haut de page), ou par téléphone au 06 50 14 91 92. Je suis disponible dans mes deux cabinets : Castelnau-le-Lez et Saint-Mathieu-de-Tréviers.",
  },
  {
    q: "L'ostéopathie est-elle douloureuse ?",
    a: "Les manipulations ostéopathiques sont généralement indolores. Vous pouvez ressentir de légères sensations lors des manipulations, et parfois une légère courbature dans les 24 à 48h suivant la séance, ce qui est tout à fait normal.",
  },
  {
    q: "À qui s'adresse l'hypnose thérapeutique ?",
    a: "L'hypnose thérapeutique s'adresse à toute personne souhaitant travailler sur le stress, l'anxiété, les douleurs chroniques, les phobies, les troubles du sommeil ou les blocages émotionnels. Elle est sans contre-indication et accessible à tous.",
  },
  {
    q: "Puis-je consulter pendant la grossesse ?",
    a: "Oui, l'ostéopathie est particulièrement bénéfique pendant la grossesse pour soulager les douleurs lombaires, les nausées, les tensions ligamentaires et préparer le bassin à l'accouchement. Elle est adaptée à chaque stade de la grossesse.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28" style={{ background: "#fff9fb" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#E8A020" }}>
            FAQ
          </p>
          <h2 className="section-title">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4336E] rounded-2xl cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base" style={{ fontFamily: "Figtree, sans-serif" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: "#D4336E",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
