import { NextRequest, NextResponse } from "next/server";
import { list } from "@vercel/blob";

const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const { blobs } = await list({ prefix: `factures/meta-${token}.json` });
  if (!blobs.length) return NextResponse.json({ valid: false });

  const res = await fetch(blobs[0].url, { cache: "no-store" });
  if (!res.ok) return NextResponse.json({ valid: false });

  const meta = await res.json();
  const age  = Date.now() - new Date(meta.createdAt).getTime();

  if (age > TWO_DAYS_MS || meta.downloaded) {
    return NextResponse.json({ valid: false, expired: true });
  }

  return NextResponse.json({
    valid: true,
    civilite: meta.civilite,
    prenom:   meta.prenom,
    nom:      meta.nom,
    date:     meta.date,
    lieu:     meta.lieu,
  });
}
