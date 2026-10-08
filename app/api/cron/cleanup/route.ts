import { NextRequest, NextResponse } from "next/server";
import { list, del } from "@vercel/blob";

const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  // Supprime les flags "done-" de plus de 2 jours
  const { blobs } = await list({ prefix: "factures/done-" });
  const toDelete: string[] = [];

  for (const blob of blobs) {
    const age = Date.now() - new Date(blob.uploadedAt).getTime();
    if (age > TWO_DAYS_MS) toDelete.push(blob.url);
  }

  if (toDelete.length > 0) await del(toDelete);

  return NextResponse.json({ deleted: toDelete.length, at: new Date().toISOString() });
}
