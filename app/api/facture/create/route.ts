import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createFactureToken } from "@/lib/facture-token";

const ADMIN_KEY = process.env.FACTURE_ADMIN_KEY ?? "mombo-factures";
const SITE_URL  = "https://www.mombofrancis.com";

export async function POST(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { civilite, prenom, nom, date, lieu, emailPatient } = await req.json();

  if (!prenom || !nom || !date || !emailPatient) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  const id    = crypto.randomUUID();
  const token = createFactureToken({
    id, civ: civilite, pre: prenom, nom, dat: date, lie: lieu, eml: emailPatient,
    iat: Date.now(),
  });

  const lienTelechargement = `${SITE_URL}/facture/${token}`;

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST || "ssl0.ovh.net",
    port:   Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth:   { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from:    `"Francis MOMBO — Ostéopathe" <${process.env.SMTP_USER}>`,
    to:      emailPatient,
    subject: `Votre facture d'ostéopathie — ${date}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #D4336E, #8B2035); padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 800;">Votre facture est disponible</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Francis MOMBO — Ostéopathe &amp; Kinésithérapeute</p>
        </div>
        <div style="padding: 32px 24px; background: #fafafa; border: 1px solid #f0f0f0;">
          <p style="color: #333; font-size: 15px; margin: 0 0 16px;">Bonjour ${civilite} ${prenom} ${nom.toUpperCase()},</p>
          <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
            Votre facture pour la séance d'ostéopathie du <strong>${date}</strong> est disponible en téléchargement.<br/>
            Ce lien est valable <strong>2 jours</strong> et à usage unique.
          </p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="${lienTelechargement}" style="display: inline-block; background: linear-gradient(135deg, #D4336E, #8B2035); color: white; text-decoration: none; padding: 16px 32px; border-radius: 50px; font-weight: 700; font-size: 15px;">
              ⬇ Télécharger ma facture
            </a>
          </div>
          <p style="color: #aaa; font-size: 12px; text-align: center; margin: 0;">
            Lien direct : <a href="${lienTelechargement}" style="color: #D4336E;">${lienTelechargement}</a>
          </p>
        </div>

        <!-- Avis Google -->
        <div style="padding: 28px 24px; background: #fff8f0; border-left: 4px solid #E8A020; margin: 0 0 0 0;">
          <p style="color: #333; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Votre avis nous aide énormément 🙏</p>
          <p style="color: #666; font-size: 13px; line-height: 1.6; margin: 0 0 16px;">
            Si votre séance vous a aidé, 30 secondes suffisent pour laisser un avis Google — cela aide d'autres personnes à trouver les bons soins.
          </p>
          <div style="text-align: center;">
            <a href="https://g.page/r/CSuZQhAb-49CEBM/review"
               style="display: inline-block; background: #E8A020; color: white; text-decoration: none; padding: 12px 28px; border-radius: 50px; font-weight: 700; font-size: 14px;">
              ⭐ Laisser un avis Google
            </a>
          </div>
        </div>

        <div style="padding: 24px; text-align: center; border-top: 1px solid #f0f0f0;">
          <a href="https://www.mombofrancis.com"
             style="display: inline-block; border: 2px solid #D4336E; color: #D4336E; text-decoration: none; padding: 10px 24px; border-radius: 50px; font-weight: 700; font-size: 13px; margin-bottom: 16px;">
            🌐 mombofrancis.com
          </a>
          <p style="color: #bbb; font-size: 11px; margin: 0;">
            Cabinet Castelnau-le-Lez · 1720 av. de l'Europe · Cabinet Saint-Mathieu-de-Tréviers · 5 av. du Grand Chêne<br/>
            06 50 14 91 92 · contact@mombofrancis.com
          </p>
        </div>
      </div>`,
  });

  return NextResponse.json({ success: true, token, lien: lienTelechargement, emailPatient });
}
