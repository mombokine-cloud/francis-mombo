import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Francis MOMBO Ostéopathe",
  description: "Politique de confidentialité et protection des données personnelles du cabinet Francis MOMBO, ostéopathe et kinésithérapeute à Montpellier.",
  alternates: { canonical: `${siteUrl}/politique-confidentialite` },
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Responsable du traitement",
    content: `Le responsable du traitement des données collectées via le site mombofrancis.com est :

Francis MOMBO - Ostéopathe D.O. & Kinésithérapeute
Cabinet Castelnau-le-Lez : 1720 avenue de l'Europe, 34170 Castelnau-le-Lez
Cabinet Saint-Mathieu-de-Tréviers : 5 avenue du Grand Chêne, 34270 Saint-Mathieu-de-Tréviers
Téléphone : 06 50 14 91 92
E-mail : contact@mombofrancis.com`,
  },
  {
    title: "2. Données collectées",
    content: `Le site collecte les données suivantes :

- Via le formulaire de contact : nom, prénom, adresse e-mail, numéro de téléphone (facultatif), message. Ces données sont utilisées uniquement pour répondre à votre demande.

- Via Doctolib (prise de rendez-vous) : les données de santé saisies lors de la prise de rendez-vous sont traitées par Doctolib SAS, hébergeur de données de santé certifié HDS. Francis MOMBO y accède en tant que professionnel de santé pour assurer le suivi médical.

- Données de navigation : adresse IP, pages visitées, durée de visite - collectées de manière anonyme à des fins statistiques (voir section Cookies).`,
  },
  {
    title: "3. Finalité des traitements",
    content: `Les données personnelles sont traitées pour les finalités suivantes :
- Répondre aux demandes envoyées via le formulaire de contact
- Assurer la prise en charge médicale des patients (via Doctolib)
- Améliorer le contenu et les performances du site (statistiques anonymes)
- Respecter les obligations légales applicables aux professionnels de santé`,
  },
  {
    title: "4. Base légale",
    content: `Les traitements sont fondés sur :
- L'intérêt légitime (formulaire de contact, statistiques anonymes)
- L'exécution d'un contrat de soins (dossier patient, prise de rendez-vous)
- Le respect d'obligations légales (conservation des dossiers médicaux 20 ans pour les majeurs, conformément à l'article R. 1112-7 du Code de la santé publique)`,
  },
  {
    title: "5. Destinataires des données",
    content: `Les données ne sont pas vendues ni cédées à des tiers. Elles peuvent être transmises à :
- Doctolib SAS (gestion des rendez-vous et dossiers patients) - hébergeur certifié HDS
- OVHcloud / Vercel (hébergement du site) - données anonymisées
- Les autorités compétentes en cas d'obligation légale`,
  },
  {
    title: "6. Durée de conservation",
    content: `- Formulaire de contact : données supprimées dans un délai de 12 mois après la dernière interaction
- Dossiers patients : 20 ans à compter de la dernière consultation (obligation légale)
- Données de navigation anonymes : 13 mois maximum`,
  },
  {
    title: "7. Vos droits",
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD - UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :
- Droit d'accès à vos données personnelles
- Droit de rectification des données inexactes
- Droit à l'effacement (« droit à l'oubli »)
- Droit à la limitation du traitement
- Droit à la portabilité
- Droit d'opposition

Pour exercer ces droits, contactez : contact@mombofrancis.com

Vous pouvez également adresser une réclamation à la CNIL : www.cnil.fr`,
  },
  {
    title: "8. Sécurité",
    content: `Le site utilise le protocole HTTPS (chiffrement SSL/TLS). Les communications par e-mail avec le cabinet transitent via un serveur sécurisé. Les données de santé sont hébergées exclusivement chez Doctolib, certifié Hébergeur de Données de Santé (HDS).`,
  },
  {
    title: "9. Modifications",
    content: `Cette politique peut être mise à jour pour refléter l'évolution des pratiques ou de la réglementation. La date de dernière mise à jour est indiquée en bas de page. En cas de modification substantielle, un avis sera affiché sur le site.`,
  },
];

export default function Page() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Retour au site
          </Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="mb-10">
          <span className="text-xs font-bold px-3 py-1 rounded-full text-white inline-block mb-4" style={{ background: "#D4336E" }}>Légal</span>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(26px, 5vw, 38px)" }}>
            Politique de confidentialité
          </h1>
          <p className="text-gray-500 text-sm">Dernière mise à jour : octobre 2026</p>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-black text-gray-900 mb-3 text-lg" style={{ fontFamily: "Figtree, sans-serif" }}>{s.title}</h2>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line bg-gray-50 rounded-xl p-5">
                {s.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-5 rounded-xl border-l-4 text-sm text-gray-600" style={{ background: "#fdeef3", borderLeftColor: "#D4336E" }}>
          Pour toute question relative à vos données personnelles :{" "}
          <a href="mailto:contact@mombofrancis.com" className="font-semibold underline" style={{ color: "#D4336E" }}>contact@mombofrancis.com</a>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/politique-cookies" className="text-sm font-semibold underline" style={{ color: "#D4336E" }}>
            Politique de cookies →
          </Link>
        </div>
      </main>
    </>
  );
}
