import { NextRequest, NextResponse } from "next/server";
import { list } from "@vercel/blob";
import { verifyFactureToken, TWO_DAYS_MS } from "@/lib/facture-token";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const payload = verifyFactureToken(token);
  if (!payload) return NextResponse.json({ valid: false });

  const age = Date.now() - payload.iat;
  if (age > TWO_DAYS_MS) return NextResponse.json({ valid: false, expired: true });

  // Vérifie si déjà téléchargé (existence d'un flag blob)
  const { blobs } = await list({ prefix: `factures/done-${payload.id}` });
  if (blobs.length > 0) return NextResponse.json({ valid: false, expired: true });

  return NextResponse.json({
    valid:    true,
    civilite: payload.civ,
    prenom:   payload.pre,
    nom:      payload.nom,
    date:     payload.dat,
    lieu:     payload.lie,
  });
}
