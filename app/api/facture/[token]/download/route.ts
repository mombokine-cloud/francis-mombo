import { NextRequest, NextResponse } from "next/server";
import { list, put } from "@vercel/blob";

const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;

function blobFetch(url: string) {
  return fetch(url, { cache: "no-store" });
}

async function getMeta(token: string) {
  const { blobs } = await list({ prefix: `factures/meta-${token}.json` });
  if (!blobs.length) return null;
  const res = await blobFetch(blobs[0].url);
  if (!res.ok) return null;
  return res.json() as Promise<{
    token: string; civilite: string; prenom: string; nom: string;
    date: string; lieu: string; fileName: string; pdfUrl: string;
    createdAt: string; downloaded: boolean; downloadedAt: string | null;
  }>;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const meta = await getMeta(token);
  if (!meta) return new NextResponse("Facture introuvable.", { status: 404 });

  const age = Date.now() - new Date(meta.createdAt).getTime();
  if (age > TWO_DAYS_MS) return new NextResponse("Ce lien a expiré.", { status: 410 });
  if (meta.downloaded)   return new NextResponse("Ce lien a déjà été utilisé.", { status: 410 });

  // Marquer comme téléchargé
  const updatedMeta = { ...meta, downloaded: true, downloadedAt: new Date().toISOString() };
  await put(`factures/meta-${token}.json`, JSON.stringify(updatedMeta), {
    access: "private",
    contentType: "application/json",
  });

  // Servir le PDF
  const pdfRes = await blobFetch(meta.pdfUrl);
  if (!pdfRes.ok) return new NextResponse("Fichier introuvable.", { status: 404 });
  const pdfBuffer = await pdfRes.arrayBuffer();

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${meta.fileName}"`,
      "Cache-Control": "no-store",
    },
  });
}
