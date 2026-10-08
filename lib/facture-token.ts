import { createHmac } from "crypto";

export interface FacturePayload {
  id:       string;   // UUID unique
  civ:      string;   // civilite
  pre:      string;   // prenom
  nom:      string;   // nom
  dat:      string;   // date (dd/mm/yyyy)
  lie:      string;   // lieu
  eml:      string;   // emailPatient
  iat:      number;   // createdAt timestamp ms
}

function secret() {
  return process.env.FACTURE_SECRET ?? "dev-facture-secret-change-me";
}

export function createFactureToken(payload: FacturePayload): string {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig  = createHmac("sha256", secret()).update(data).digest("hex");
  return `${data}.${sig}`;
}

export function verifyFactureToken(token: string): FacturePayload | null {
  const dot = token.lastIndexOf(".");
  if (dot === -1) return null;
  const data = token.slice(0, dot);
  const sig  = token.slice(dot + 1);
  const expected = createHmac("sha256", secret()).update(data).digest("hex");
  if (sig !== expected) return null;
  try {
    return JSON.parse(Buffer.from(data, "base64url").toString()) as FacturePayload;
  } catch {
    return null;
  }
}

export const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;
