"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const GOOGLE_REVIEW = "https://g.page/r/CSuZQhAb-49CEBM/review";
const DOCTOLIB = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

type State = "loading" | "ready" | "downloading" | "done" | "expired" | "error";

export default function FacturePage() {
  const { token } = useParams<{ token: string }>();
  const [state, setState] = useState<State>("loading");
  const [info, setInfo] = useState<{ civilite: string; prenom: string; nom: string; date: string; lieu: string } | null>(null);

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
    } catch {
      setState("error");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: "linear-gradient(135deg, #fdeef3 0%, #fff3e8 100%)" }}>
      <div className="w-full max-w-md">

        {/* Logo / en-tête */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
              <ellipse cx="14" cy="14" rx="10" ry="13" fill="#E8A020" opacity="0.85" />
              <ellipse cx="24" cy="14" rx="10" ry="13" fill="#D4336E" opacity="0.75" />
              <circle cx="14" cy="8" r="4" fill="#8B2035" opacity="0.8" />
            </svg>
            <span className="font-black text-gray-900 text-lg" style={{ fontFamily: "Figtree, sans-serif" }}>Francis MOMBO</span>
          </div>
          <p className="text-gray-500 text-sm">Ostéopathe · Kinésithérapeute · Montpellier</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Loading */}
          {state === "loading" && (
            <div className="p-10 text-center">
              <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-500 text-sm">Chargement de votre facture…</p>
            </div>
          )}

          {/* Prêt à télécharger */}
          {(state === "ready" || state === "downloading") && info && (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4336E" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div>
                  <h1 className="font-black text-gray-900" style={{ fontFamily: "Figtree, sans-serif" }}>Votre facture</h1>
                  <p className="text-gray-400 text-xs">Séance du {info.date}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Patient</span>
                  <span className="font-semibold text-gray-900">{info.civilite} {info.prenom} {info.nom.toUpperCase()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date</span>
                  <span className="font-semibold text-gray-900">{info.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Cabinet</span>
                  <span className="font-semibold text-gray-900">{info.lieu === "Saint-Mathieu" ? "Saint-Mathieu-de-Tréviers" : "Castelnau-le-Lez"}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-gray-200 pt-2 mt-2">
                  <span className="text-gray-500">Montant</span>
                  <span className="font-black text-gray-900 text-base">60 €</span>
                </div>
              </div>

              <button
                onClick={handleDownload}
                disabled={state === "downloading"}
                className="w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-3 transition-opacity"
                style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)", opacity: state === "downloading" ? 0.7 : 1 }}
              >
                {state === "downloading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Préparation…
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Télécharger ma facture
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Ce lien est valable 2 jours et à usage unique.
              </p>
            </div>
          )}

          {/* Téléchargé → demande d'avis */}
          {state === "done" && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4336E" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>

              <h2 className="font-black text-gray-900 text-xl mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>
                Facture téléchargée !
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Merci pour votre confiance. Si votre séance vous a aidé, votre avis compte énormément — il aide d'autres personnes à trouver les bons soins.
              </p>

              {/* Étoiles décoratives */}
              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#E8A020"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>

              <a
                href={GOOGLE_REVIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-sm mb-3"
                style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                Laisser un avis Google
              </a>

              <a
                href={DOCTOLIB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-semibold text-sm border-2 transition-colors"
                style={{ borderColor: "#D4336E", color: "#D4336E" }}
              >
                Reprendre rendez-vous sur Doctolib
              </a>

              <p className="text-xs text-gray-300 mt-6">
                mombofrancis.com · 06 50 14 91 92
              </p>
            </div>
          )}

          {/* Expiré */}
          {state === "expired" && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-gray-100">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h2 className="font-black text-gray-900 text-xl mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>Lien expiré</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Ce lien n'est plus disponible (usage unique ou délai de 2 jours dépassé).<br/>
                Contactez le cabinet pour recevoir un nouveau lien.
              </p>
              <a href="tel:0650149192" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
                Appeler le cabinet
              </a>
            </div>
          )}

          {/* Erreur */}
          {state === "error" && (
            <div className="p-8 text-center">
              <p className="text-gray-500 text-sm">Une erreur est survenue. Contactez le cabinet.</p>
              <a href="tel:0650149192" className="mt-4 inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
                06 50 14 91 92
              </a>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
