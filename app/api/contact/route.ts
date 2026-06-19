import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site Francis MOMBO" <${process.env.SMTP_USER}>`,
      to: "contact@mombofrancis.com",
      replyTo: email,
      subject: `Nouveau message de ${name} — francismombo.fr`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D4336E, #8B2035); padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Nouveau message depuis le site</h2>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">francismombo.fr</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 13px; width: 120px;">Nom</td>
                <td style="padding: 8px 0; font-weight: bold; color: #1a1a2e;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; color: #1a1a2e;"><a href="mailto:${email}" style="color: #D4336E;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 13px;">Téléphone</td>
                <td style="padding: 8px 0; color: #1a1a2e;">${phone}</td>
              </tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Message :</p>
            <p style="color: #1a1a2e; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="color: #ccc; font-size: 11px; text-align: center; margin-top: 16px;">
            Envoyé depuis francismombo.fr — Répondez directement à cet email pour contacter ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi. Veuillez réessayer." }, { status: 500 });
  }
}
