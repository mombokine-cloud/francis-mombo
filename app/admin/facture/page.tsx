"use client";

import { useState, useEffect } from "react";

const ADMIN_KEY_STORAGE = "facture_admin_key";

type Step = "auth" | "form" | "sending" | "success" | "error";

export default function AdminFacturePage() {
  const [step, setStep]             = useState<Step>("auth");
  const [adminKey, setAdminKey]     = useState("");
  const [keyInput, setKeyInput]     = useState("");
  const [authError, setAuthError]   = useState(false);

  // Champs facture
  const [civilite, setCivilite]     = useState("Monsieur");
  const [prenom, setPrenom]         = useState("");
  const [nom, setNom]               = useState("");
  const [date, setDate]             = useState(() => new Date().toISOString().slice(0, 10));
  const [lieu, setLieu]             = useState("Castelnau");
  const [email, setEmail]           = useState("");

  const [result, setResult]         = useState<{ lien: string; emailPatient: string } | null>(null);
  const [errMsg, setErrMsg]         = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(ADMIN_KEY_STORAGE);
    if (saved) { setAdminKey(saved); setStep("form"); }
  }, []);

  function handleAuth() {
    if (!keyInput.trim()) { setAuthError(true); return; }
    localStorage.setItem(ADMIN_KEY_STORAGE, keyInput.trim());
    setAdminKey(keyInput.trim());
    setStep("form");
    setAuthError(false);
  }

  function formatDateFR(iso: string) {
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }

  async function handleSubmit() {
    if (!prenom.trim() || !nom.trim() || !date || !email.includes("@")) {
      setErrMsg("Veuillez remplir tous les champs obligatoires."); return;
    }
    setErrMsg(""); setStep("sending");

    try {
      const res = await fetch("/api/facture/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({ civilite, prenom, nom, date: formatDateFR(date), lieu, emailPatient: email }),
      });

      if (res.status === 401) {
        localStorage.removeItem(ADMIN_KEY_STORAGE);
        setStep("auth"); setAuthError(true); return;
      }

      const data = await res.json();
      if (!res.ok || !data.success) { setErrMsg(data.error || "Erreur"); setStep("form"); return; }

      setResult({ lien: data.lien, emailPatient: data.emailPatient });
      setStep("success");
    } catch {
      setErrMsg("Erreur réseau. Réessayez."); setStep("form");
    }
  }

  function reset() {
    setPrenom(""); setNom(""); setEmail("");
    setDate(new Date().toISOString().slice(0, 10));
    setCivilite("Monsieur"); setLieu("Castelnau");
    setResult(null); setStep("form");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: "#f0f2f5" }}>
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="font-black text-gray-900 text-xl" style={{ fontFamily: "Figtree, sans-serif" }}>
            Générateur de Factures
          </h1>
          <p className="text-gray-400 text-sm mt-1">Francis MOMBO · Espace privé</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* Auth */}
          {step === "auth" && (
            <div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Entrez votre clé d'accès pour accéder au générateur de factures.
              </p>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Clé d'accès</label>
              <input
                type="password"
                value={keyInput}
                onChange={e => setKeyInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleAuth()}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 border-2 rounded-xl text-sm outline-none transition-colors mb-2"
                style={{ borderColor: authError ? "#D4336E" : "#e5e7eb" }}
              />
              {authError && <p className="text-xs text-red-500 mb-3">Clé incorrecte.</p>}
              <button
                onClick={handleAuth}
                className="w-full py-3 rounded-xl font-bold text-white text-sm mt-2"
                style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
              >
                Accéder
              </button>
            </div>
          )}

          {/* Formulaire */}
          {(step === "form" || step === "sending") && (
            <div className="space-y-5">
              {/* Civilité */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Civilité</label>
                <div className="flex gap-3">
                  {["Monsieur", "Madame"].map(c => (
                    <button
                      key={c}
                      onClick={() => setCivilite(c)}
                      className="flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all"
                      style={{
                        borderColor: civilite === c ? "#D4336E" : "#e5e7eb",
                        background:  civilite === c ? "#fdeef3" : "#fafafa",
                        color:       civilite === c ? "#D4336E" : "#666",
                      }}
                    >{c}</button>
                  ))}
                </div>
              </div>

              {/* Prénom / Nom */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Prénom *</label>
                  <input value={prenom} onChange={e => setPrenom(e.target.value)} placeholder="Marie" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-pink-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Nom *</label>
                  <input value={nom} onChange={e => setNom(e.target.value)} placeholder="DUPONT" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-pink-400" />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Date de la séance *</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-pink-400" />
              </div>

              {/* Lieu */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Cabinet</label>
                <div className="flex gap-3">
                  {[{ val: "Castelnau", label: "Castelnau-le-Lez" }, { val: "Saint-Mathieu", label: "Saint-Mathieu" }].map(l => (
                    <button
                      key={l.val}
                      onClick={() => setLieu(l.val)}
                      className="flex-1 py-2.5 rounded-xl text-xs font-semibold border-2 transition-all"
                      style={{
                        borderColor: lieu === l.val ? "#D4336E" : "#e5e7eb",
                        background:  lieu === l.val ? "#fdeef3" : "#fafafa",
                        color:       lieu === l.val ? "#D4336E" : "#666",
                      }}
                    >{l.label}</button>
                  ))}
                </div>
              </div>

              {/* Email patient */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Email du patient *</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="patient@exemple.com" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-pink-400" />
              </div>

              {/* Résumé montant */}
              <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Montant séance d'ostéopathie</span>
                <span className="font-black text-gray-900">60 €</span>
              </div>

              {errMsg && <p className="text-xs text-red-500 text-center">{errMsg}</p>}

              <button
                onClick={handleSubmit}
                disabled={step === "sending"}
                className="w-full py-4 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-3 transition-opacity"
                style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)", opacity: step === "sending" ? 0.7 : 1 }}
              >
                {step === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Génération en cours…
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Générer et envoyer la facture
                  </>
                )}
              </button>

              <button onClick={() => { localStorage.removeItem(ADMIN_KEY_STORAGE); setStep("auth"); setKeyInput(""); }}
                className="w-full text-xs text-gray-300 hover:text-gray-400 transition-colors py-1">
                Se déconnecter
              </button>
            </div>
          )}

          {/* Succès */}
          {step === "success" && result && (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4336E" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h2 className="font-black text-gray-900 text-xl mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>Facture envoyée !</h2>
              <p className="text-gray-500 text-sm mb-6">Email envoyé à <strong>{result.emailPatient}</strong></p>

              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Lien généré</p>
                <a href={result.lien} target="_blank" rel="noopener noreferrer" className="text-xs break-all font-mono" style={{ color: "#D4336E" }}>{result.lien}</a>
              </div>

              <button
                onClick={reset}
                className="w-full py-3 rounded-2xl font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}
              >
                Nouvelle facture
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
