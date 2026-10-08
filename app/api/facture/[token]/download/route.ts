import { NextRequest, NextResponse } from "next/server";
import { list, put } from "@vercel/blob";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { verifyFactureToken, TWO_DAYS_MS } from "@/lib/facture-token";
import fs from "fs";
import path from "path";

const W = 612, H = 858;
const Y_DATE = 75, Y_ADELI = 175, Y_LINE1 = 258, Y_LINE2 = 276, Y_ACQUITTEE = 312;
function toBottom(y: number) { return H - y; }

async function generatePDF(payload: { civ: string; pre: string; nom: string; dat: string; lie: string }) {
  const pdfDoc = await PDFDocument.create();
  const page   = pdfDoc.addPage([W, H]);

  const bgPath  = path.join(process.cwd(), "public", "template_bg.png");
  const bgBytes = fs.readFileSync(bgPath);
  const bgImg   = await pdfDoc.embedPng(bgBytes);
  page.drawImage(bgImg, { x: 0, y: 0, width: W, height: H });

  const fontR = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontB = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const black = rgb(0.1, 0.1, 0.1);

  page.drawRectangle({ x: 350, y: H - 83, width: 220, height: 28, color: rgb(1,1,1) });
  page.drawRectangle({ x: 40, y: toBottom(Y_LINE1) - 8, width: 540, height: 22, color: rgb(1,1,1) });

  const dateW = fontR.widthOfTextAtSize(payload.dat, 11);
  page.drawText(payload.dat, { x: 560 - dateW, y: toBottom(Y_DATE), size: 11, font: fontR, color: black });

  page.drawText("Adeli: 347016610", { x: 72, y: toBottom(Y_ADELI), size: 9, font: fontR, color: black });

  const lieuTexte = payload.lie === "Saint-Mathieu"
    ? "Cabinet Saint-Mathieu-de-Tréviers — 5 avenue du Grand Chêne, 34270"
    : "Cabinet Castelnau-le-Lez — 1720 avenue de l'Europe, 34170";
  page.drawText(lieuTexte, { x: 72, y: toBottom(Y_ADELI) - 14, size: 8, font: fontR, color: rgb(0.5,0.5,0.5) });

  const fullName = `${payload.pre} ${payload.nom.toUpperCase()}`.trim();
  const civW     = fontB.widthOfTextAtSize(payload.civ + " ", 11);
  const nameW    = fontR.widthOfTextAtSize(fullName, 11);
  const sx       = (W - civW - nameW) / 2;
  page.drawText(payload.civ + " ", { x: sx,       y: toBottom(Y_LINE1), size: 11, font: fontB, color: black });
  page.drawText(fullName,          { x: sx + civW, y: toBottom(Y_LINE1), size: 11, font: fontR, color: black });

  const desc  = "A bénéficié d'une séance d'ostéopathie d'un montant de 60€";
  const descW = fontR.widthOfTextAtSize(desc, 11);
  page.drawText(desc, { x: (W - descW) / 2, y: toBottom(Y_LINE2), size: 11, font: fontR, color: black });

  const acq  = "Facture acquittée";
  const acqW = fontR.widthOfTextAtSize(acq, 11);
  page.drawText(acq, { x: (W - acqW) / 2, y: toBottom(Y_ACQUITTEE), size: 11, font: fontR, color: black });

  return pdfDoc.save();
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const payload = verifyFactureToken(token);
  if (!payload) return new NextResponse("Lien invalide.", { status: 400 });

  const age = Date.now() - payload.iat;
  if (age > TWO_DAYS_MS) return new NextResponse("Ce lien a expiré.", { status: 410 });

  // Vérifier flag téléchargement
  const { blobs } = await list({ prefix: `factures/done-${payload.id}` });
  if (blobs.length > 0) return new NextResponse("Ce lien a déjà été utilisé.", { status: 410 });

  // Marquer comme téléchargé (flag minuscule)
  await put(`factures/done-${payload.id}`, "1", { access: "private", contentType: "text/plain" });

  // Générer le PDF à la volée
  const pdfBytes = await generatePDF(payload);
  const fileName = `Facture_${payload.nom.toUpperCase()}_${payload.pre}_${payload.dat.replace(/\//g,"")}.pdf`;

  return new NextResponse(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "no-store",
    },
  });
}
