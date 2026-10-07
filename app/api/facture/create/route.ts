import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { put } from "@vercel/blob";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const ADMIN_KEY = process.env.FACTURE_ADMIN_KEY ?? "mombo-factures";
const SITE_URL  = "https://www.mombofrancis.com";
const GOOGLE_REVIEW = "https://g.page/r/CSuZQhAb-49CEBM/review";

// Dimensions identiques au générateur HTML existant (unités pt)
const W = 612, H = 858;
const Y_DATE      = 75;
const Y_ADELI     = 175;
const Y_LINE1     = 258;
const Y_LINE2     = 276;
const Y_ACQUITTEE = 312;

function toBottom(y: number) { return H - y; }

async function generatePDF(fields: {
  civilite: string; prenom: string; nom: string; date: string; lieu: string;
}): Promise<Uint8Array> {
  const { civilite, prenom, nom, date, lieu } = fields;

  const pdfDoc = await PDFDocument.create();
  const page   = pdfDoc.addPage([W, H]);

  // Background template
  const bgPath  = path.join(process.cwd(), "public", "template_bg.png");
  const bgBytes = fs.readFileSync(bgPath);
  const bgImg   = await pdfDoc.embedPng(bgBytes);
  page.drawImage(bgImg, { x: 0, y: 0, width: W, height: H });

  const fontR = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontB = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const black = rgb(0.1, 0.1, 0.1);

  // Effacer la zone numéro de facture (rectangle blanc) — même coordonnées que l'original
  page.drawRectangle({ x: 350, y: H - 83, width: 220, height: 28, color: rgb(1,1,1) });
  // Effacer la zone nom patient
  page.drawRectangle({ x: 40, y: toBottom(Y_LINE1) - 8, width: 540, height: 22, color: rgb(1,1,1) });

  // Date (alignée à droite à x=560)
  const dateSize = 11;
  const dateW    = fontR.widthOfTextAtSize(date, dateSize);
  page.drawText(date, { x: 560 - dateW, y: toBottom(Y_DATE), size: dateSize, font: fontR, color: black });

  // ADELI
  page.drawText("Adeli: 347016610", { x: 72, y: toBottom(Y_ADELI), size: 9, font: fontR, color: black });

  // Lieu (affiché discrètement sous l'ADELI)
  const lieuTexte = lieu === "Saint-Mathieu"
    ? "Cabinet Saint-Mathieu-de-Tréviers — 5 avenue du Grand Chêne, 34270"
    : "Cabinet Castelnau-le-Lez — 1720 avenue de l'Europe, 34170";
  page.drawText(lieuTexte, { x: 72, y: toBottom(Y_ADELI) - 14, size: 8, font: fontR, color: rgb(0.5,0.5,0.5) });

  // Ligne 1 — Civilité + Nom (centré)
  const fullName   = `${prenom} ${nom.toUpperCase()}`.trim();
  const civSize    = 11;
  const civW       = fontB.widthOfTextAtSize(civilite + " ", civSize);
  const nameW      = fontR.widthOfTextAtSize(fullName, civSize);
  const sx         = (W - civW - nameW) / 2;
  page.drawText(civilite + " ", { x: sx,       y: toBottom(Y_LINE1), size: civSize, font: fontB, color: black });
  page.drawText(fullName,        { x: sx + civW, y: toBottom(Y_LINE1), size: civSize, font: fontR, color: black });

  // Ligne 2 — Description (centrée)
  const desc  = "A bénéficié d'une séance d'ostéopathie d'un montant de 60€";
  const descW = fontR.widthOfTextAtSize(desc, civSize);
  page.drawText(desc, { x: (W - descW) / 2, y: toBottom(Y_LINE2), size: civSize, font: fontR, color: black });

  // Facture acquittée (centrée)
  const acq  = "Facture acquittée";
  const acqW = fontR.widthOfTextAtSize(acq, civSize);
  page.drawText(acq, { x: (W - acqW) / 2, y: toBottom(Y_ACQUITTEE), size: civSize, font: fontR, color: black });

  return pdfDoc.save();
}

export async function POST(req: NextRequest) {
  // Auth admin
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { civilite, prenom, nom, date, lieu, emailPatient } = await req.json();

  if (!prenom || !nom || !date || !emailPatient) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  const token    = crypto.randomUUID();
  const fileName = `Facture_${nom.toUpperCase()}_${prenom}_${date.replace(/\//g, "")}.pdf`;

  // Générer le PDF
  const pdfBytes = await generatePDF({ civilite, prenom, nom, date, lieu });

  // Stocker le PDF dans Vercel Blob
  const { url: pdfUrl } = await put(`factures/pdf-${token}.pdf`, Buffer.from(pdfBytes), {
    access: "public",
    contentType: "application/pdf",
  });

  // Stocker les métadonnées
  const meta = {
    token, civilite, prenom, nom, date, lieu, emailPatient,
    fileName, pdfUrl,
    createdAt: new Date().toISOString(),
    downloaded: false,
    downloadedAt: null as string | null,
  };
  await put(`factures/meta-${token}.json`, JSON.stringify(meta), {
    access: "public",
    contentType: "application/json",
  });

  // Envoyer email au patient
  const lienTelechargement = `${SITE_URL}/facture/${token}`;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Francis MOMBO — Ostéopathe" <${process.env.SMTP_USER}>`,
    to: emailPatient,
    subject: `Votre facture d'ostéopathie — ${date}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #D4336E, #8B2035); padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 800;">Votre facture est disponible</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Francis MOMBO — Ostéopathe &amp; Kinésithérapeute</p>
        </div>
        <div style="padding: 32px 24px; background: #fafafa; border: 1px solid #f0f0f0;">
          <p style="color: #333; font-size: 15px; margin: 0 0 20px;">Bonjour ${civilite} ${prenom} ${nom.toUpperCase()},</p>
          <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
            Votre facture pour la séance d'ostéopathie du <strong>${date}</strong> est disponible en téléchargement.<br/>
            Ce lien est valable <strong>2 jours</strong>.
          </p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="${lienTelechargement}" style="display: inline-block; background: linear-gradient(135deg, #D4336E, #8B2035); color: white; text-decoration: none; padding: 16px 32px; border-radius: 50px; font-weight: 700; font-size: 15px;">
              ⬇ Télécharger ma facture
            </a>
          </div>
          <p style="color: #aaa; font-size: 12px; text-align: center; margin: 0;">
            Si vous ne pouvez pas cliquer sur le bouton, copiez ce lien dans votre navigateur :<br/>
            <a href="${lienTelechargement}" style="color: #D4336E;">${lienTelechargement}</a>
          </p>
        </div>
        <div style="padding: 20px 24px; text-align: center; border-top: 1px solid #f0f0f0;">
          <p style="color: #bbb; font-size: 11px; margin: 0;">
            Cabinet Castelnau-le-Lez · 1720 av. de l'Europe · Cabinet Saint-Mathieu-de-Tréviers · 5 av. du Grand Chêne<br/>
            06 50 14 91 92 · <a href="mailto:contact@mombofrancis.com" style="color: #D4336E;">contact@mombofrancis.com</a>
          </p>
        </div>
      </div>`,
  });

  return NextResponse.json({
    success: true,
    token,
    lien: lienTelechargement,
    emailPatient,
  });
}

export { GOOGLE_REVIEW };
