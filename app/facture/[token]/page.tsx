"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const GOOGLE_REVIEW = "https://g.page/r/CSuZQhAb-49CEBM/review";
const DOCTOLIB      = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";
const SITE_URL      = "https://www.mombofrancis.com";

type State = "loading" | "ready" | "downloading" | "done" | "expired" | "error";

interface PatientInfo {
  civilite: string; prenom: string; nom: string; date: string; lieu: string;
}

/* ─── Après-séance : articles à lire ─── */
const apresSeance = [
  {
    icon: "💧",
    title: "Boire beaucoup d'eau",
    body: "L'ostéopathie mobilise les tissus en profondeur. Hydrater les fascias et favorise l'élimination des toxines libérées.",
  },
  {
    icon: "😴",
    title: "Repos recommandé",
    body: "Évitez les efforts intenses les 24 heures suivant la séance. Votre corps intègre les corrections posturales.",
  },
  {
    icon: "🔥",
    title: "Légères courbatures ?",
    body: "Normales pendant 24 à 48 h. C'est le signe que votre corps travaille. Elles disparaissent spontanément.",
  },
  {
    icon: "📅",
    title: "Prochaine séance",
    body: "En préventif, une consultation tous les 3 à 6 mois suffit. En curatif, Francis vous conseille en fin de séance.",
  },
];

/* ─── Articles du site liés ─── */
const articles = [
  { href: "/mal-de-dos-comprendre-prevenir",        label: "Mal de dos : comprendre et prévenir" },
  { href: "/recuperation-sportive-osteopathie",      label: "Récupération sportive et ostéopathie" },
  { href: "/osteopathie-grossesse-equilibre-feminin",label: "Ostéopathie, grossesse & équilibre féminin" },
];

export default function FacturePage() {
  const { token } = useParams<{ token: string }>();
  const [state, setState]       = useState<State>("loading");
  const [info, setInfo]         = useState<PatientInfo | null>(null);
  const [reviewStep, setReview] = useState<0 | 1 | 2>(0); // 0=hidden 1=stars 2=done
  const [stars, setStars]       = useState(0);
  const [hoverStar, setHover]   = useState(0);
  const doneRef                 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/facture/${token}/status`)
      .then(r => r.json())
      .then(data => {
        if (!data.valid) { setState(data.expired ? "expired" : "error"); return; }
        setInfo({ civilite: data.civilite, prenom: data.prenom, nom: data.nom, date: data.date, lieu: data.lieu });
        setState("ready");
      })
      .catch(() => setState("error"));
  }, [token]);

  async function handleDownload() {
    setState("downloading");
    try {
      const res = await fetch(`/api/facture/${token}/download`);
      if (!res.ok) { setState("expired"); return; }
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement("a");
      const cd   = res.headers.get("content-disposition") ?? "";
      const name = cd.match(/filename="([^"]+)"/)?.[1] ?? "Facture_MOMBO.pdf";
      a.href = url; a.download = name; a.click();
      URL.revokeObjectURL(url);
      setState("done");
      setTimeout(() => { setReview(1); doneRef.current?.scrollIntoView({ behavior: "smooth" }); }, 600);
    } catch {
      setState("error");
    }
  }

  function handleStar(n: number) {
    setStars(n);
    if (n >= 4) {
      setTimeout(() => { window.open(GOOGLE_REVIEW, "_blank"); setReview(2); }, 300);
    } else {
      setReview(2);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#f7f8fa", fontFamily: "Figtree, system-ui, sans-serif" }}>

      {/* ── Header compact ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100" style={{ backdropFilter: "blur(8px)" }}>
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <Link href={SITE_URL} className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 38 38" fill="none">
              <ellipse cx="14" cy="14" rx="10" ry="13" fill="#E8A020" opacity="0.85"/>
              <ellipse cx="24" cy="14" rx="10" ry="13" fill="#D4336E" opacity="0.75"/>
              <circle cx="14" cy="8" r="4" fill="#8B2035" opacity="0.8"/>
            </svg>
            <div className="leading-tight">
              <p className="text-xs font-black text-gray-900">Francis MOMBO</p>
              <p className="text-xs text-gray-400" style={{ fontSize: 10 }}>Ostéopathe · Kinésithérapeute</p>
            </div>
          </Link>
          <a href={DOCTOLIB} target="_blank" rel="noopener noreferrer"
             className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
             style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            RDV Doctolib
          </a>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-8 space-y-5">

        {/* ── Loading ── */}
        {state === "loading" && (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <div className="w-10 h-10 rounded-full border-4 border-pink-100 border-t-pink-400 animate-spin mx-auto mb-4" />
            <p className="text-gray-400 text-sm">Chargement de votre facture…</p>
          </div>
        )}

        {/* ── Carte principale facture ── */}
        {(state === "ready" || state === "downloading" || state === "done") && info && (
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            {/* Bandeau coloré */}
            <div className="px-6 py-5" style={{ background: "linear-gradient(135deg, #D4336E 0%, #8B2035 100%)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-black text-base leading-tight">Votre facture est prête</p>
                  <p className="text-white/70 text-xs">Séance du {info.date}</p>
                </div>
              </div>
            </div>

            {/* Détails */}
            <div className="px-6 py-5">
              <div className="space-y-3 mb-5">
                {[
                  { label: "Patient",  value: `${info.civilite} ${info.prenom} ${info.nom.toUpperCase()}` },
                  { label: "Date",     value: info.date },
                  { label: "Cabinet",  value: info.lieu === "Saint-Mathieu" ? "Saint-Mathieu-de-Tréviers" : "Castelnau-le-Lez" },
                  { label: "Praticien",value: "Francis MOMBO · Ostéopathe D.O." },
                ].map(row => (
                  <div key={row.label} className="flex items-start justify-between gap-4">
                    <span className="text-gray-400 text-xs pt-0.5 flex-shrink-0 w-20">{row.label}</span>
                    <span className="text-gray-900 text-sm font-semibold text-right">{row.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-gray-400 text-xs">Montant acquitté</span>
                  <span className="font-black text-gray-900 text-xl">60 €</span>
                </div>
              </div>

              {/* Bouton téléchargement */}
              {(state === "ready" || state === "downloading") && (
                <button
                  onClick={handleDownload}
                  disabled={state === "downloading"}
                  className="w-full py-4 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-3 transition-all active:scale-95"
                  style={{ background: state === "downloading" ? "#e5e7eb" : "linear-gradient(135deg, #D4336E, #8B2035)", color: state === "downloading" ? "#9ca3af" : "white" }}
                >
                  {state === "downloading" ? (
                    <><div className="w-4 h-4 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"/>Préparation du PDF…</>
                  ) : (
                    <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Télécharger ma facture</>
                  )}
                </button>
              )}

              {/* Téléchargé */}
              {state === "done" && (
                <div className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Facture téléchargée
                </div>
              )}

              <p className="text-center text-xs text-gray-300 mt-3">Lien à usage unique · valable 2 jours</p>
            </div>
          </div>
        )}

        {/* ── Bloc avis (après téléchargement) ── */}
        {state === "done" && (
          <div ref={doneRef} className={`transition-all duration-500 ${reviewStep === 0 ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            {reviewStep === 1 && (
              <div className="bg-white rounded-3xl shadow-sm p-6 text-center">
                <p className="text-2xl mb-2">🙏</p>
                <h2 className="font-black text-gray-900 text-lg mb-1">Comment s'est passée votre séance ?</h2>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Votre retour aide d'autres patients à trouver les bons soins.
                </p>
                <div className="flex justify-center gap-3 mb-6">
                  {[1,2,3,4,5].map(n => (
                    <button key={n}
                      onClick={() => handleStar(n)}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      className="transition-transform hover:scale-110 active:scale-95"
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24"
                        fill={(hoverStar || stars) >= n ? "#E8A020" : "none"}
                        stroke={(hoverStar || stars) >= n ? "#E8A020" : "#d1d5db"}
                        strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400">Cliquez sur une étoile pour noter</p>
              </div>
            )}

            {reviewStep === 2 && (
              <div className="bg-white rounded-3xl shadow-sm p-6 text-center">
                <p className="text-3xl mb-3">{stars >= 4 ? "⭐" : "💬"}</p>
                <h2 className="font-black text-gray-900 text-lg mb-2">
                  {stars >= 4 ? "Merci pour votre confiance !" : "Merci pour votre retour"}
                </h2>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {stars >= 4
                    ? "Votre avis Google a été ouvert. Quelques secondes suffisent — ça compte énormément."
                    : "Votre retour est précieux. Pour toute question, le cabinet est joignable au 06 50 14 91 92."}
                </p>
                {stars >= 4 && (
                  <a href={GOOGLE_REVIEW} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-2xl text-white text-sm mb-4"
                     style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
                    Laisser mon avis Google →
                  </a>
                )}
                <div>
                  <a href={DOCTOLIB} target="_blank" rel="noopener noreferrer"
                     className="text-sm font-semibold underline" style={{ color: "#D4336E" }}>
                    Reprendre rendez-vous sur Doctolib
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Conseils après séance ── */}
        {state === "done" && (
          <div className="space-y-3">
            <h3 className="font-black text-gray-900 text-base px-1">Après votre séance</h3>
            {apresSeance.map(tip => (
              <div key={tip.title} className="bg-white rounded-2xl px-5 py-4 shadow-sm flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0 mt-0.5">{tip.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">{tip.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Articles liés ── */}
        {state === "done" && (
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">À lire sur le site</p>
            <div className="space-y-3">
              {articles.map(a => (
                <Link key={a.href} href={a.href}
                  className="flex items-center justify-between gap-3 group">
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition-colors leading-tight">{a.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4336E" strokeWidth="2.5" className="flex-shrink-0"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Contacts ── */}
        {state === "done" && (
          <div className="rounded-3xl p-5 flex gap-3" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
            <div className="flex-1">
              <p className="font-black text-gray-900 text-sm mb-1">Une question ?</p>
              <p className="text-gray-500 text-xs leading-relaxed">Cabinet Castelnau-le-Lez<br/>1720 av. de l'Europe · 34170</p>
            </div>
            <a href="tel:0650149192"
               className="self-center flex-shrink-0 font-bold px-4 py-2.5 rounded-2xl text-white text-xs"
               style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              06 50 14 91 92
            </a>
          </div>
        )}

        {/* ── Expiré ── */}
        {state === "expired" && (
          <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h2 className="font-black text-gray-900 text-xl mb-2">Lien expiré</h2>
            <p className="text-gray-500 text-sm mb-7 leading-relaxed max-w-xs mx-auto">
              Ce lien n'est plus disponible (usage unique ou délai de 2 jours dépassé).<br/>
              Contactez le cabinet pour recevoir un nouveau lien.
            </p>
            <a href="tel:0650149192"
               className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-2xl text-white text-sm"
               style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Appeler le cabinet
            </a>
          </div>
        )}

        {/* ── Erreur ── */}
        {state === "error" && (
          <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
            <p className="text-gray-500 text-sm mb-4">Facture introuvable. Contactez le cabinet.</p>
            <a href="tel:0650149192" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-2xl text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              06 50 14 91 92
            </a>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-gray-300 pb-4">
          © {new Date().getFullYear()} mombofrancis.com · <Link href="/politique-confidentialite" className="hover:text-gray-400">Confidentialité</Link>
        </p>

      </main>
    </div>
  );
}
