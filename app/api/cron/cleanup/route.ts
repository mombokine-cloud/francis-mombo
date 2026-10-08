import { NextRequest, NextResponse } from "next/server";
import { list, del } from "@vercel/blob";

const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;

export async function GET(req: NextRequest) {
  // Vérification cron secret
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { blobs } = await list({ prefix: "factures/meta-" });
  const toDelete: string[] = [];

  for (const blob of blobs) {
    try {
      const res  = await fetch(blob.url, { cache: "no-store" });
      if (!res.ok) { toDelete.push(blob.url); continue; }
      const meta = await res.json();
      const age  = Date.now() - new Date(meta.createdAt).getTime();
      if (age > TWO_DAYS_MS || meta.downloaded) {
        toDelete.push(blob.url);
        // Supprimer aussi le PDF associé
        const { blobs: pdfBlobs } = await list({ prefix: `factures/pdf-${meta.token}.pdf` });
        for (const pdf of pdfBlobs) toDelete.push(pdf.url);
      }
    } catch {
      // Ignorer les erreurs individuelles
    }
  }

  if (toDelete.length > 0) {
    await del(toDelete);
  }

  return NextResponse.json({ deleted: toDelete.length, at: new Date().toISOString() });
}
