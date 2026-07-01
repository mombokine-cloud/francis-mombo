import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "FAQ Ostéopathe Montpellier | Questions fréquentes | Francis MOMBO",
  description:
    "Toutes les réponses aux questions fréquentes sur l'ostéopathie à Montpellier : tarifs, remboursement, déroulement, nourrisson, grossesse, sport, hypnose. Francis MOMBO, cabinet à Castelnau-le-Lez.",
  keywords: [
    "questions ostéopathe Montpellier",
    "FAQ ostéopathie Montpellier",
    "combien coûte ostéopathe Montpellier",
    "remboursement ostéopathe mutuelle",
    "ostéopathe sans ordonnance",
    "déroulement séance ostéopathie",
    "ostéopathe nourrisson bébé",
    "ostéopathie grossesse",
  ],
  alternates: { canonical: `${siteUrl}/faq-osteopathe-montpellier` },
  openGraph: {
    title: "FAQ Ostéopathe Montpellier | Questions fréquentes | Francis MOMBO",
    description: "Toutes vos questions sur l'ostéopathie à Montpellier : tarifs, remboursement, séance, sport, nourrisson, hypnose. Réponses claires par Francis MOMBO.",
    url: `${siteUrl}/faq-osteopathe-montpellier`,
    type: "website",
    images: [{ url: `${siteUrl}/francis-hero.png`, width: 1200, height: 630, alt: "FAQ ostéopathe Montpellier Francis MOMBO" }],
  },
};

const categories = [
  {
    id: "general",
    label: "L'ostéopathie en général",
    emoji: "🦴",
    questions: [
      {
        q: "Qu'est-ce que l'ostéopathie ?",
        a: "L'ostéopathie est une médecine manuelle qui considère le corps dans sa globalité. L'ostéopathe identifie et traite les restrictions de mobilité des différentes structures du corps — muscles, articulations, viscères, crâne — pour soulager les douleurs et améliorer le fonctionnement général.",
      },
      {
        q: "Quelle est la différence entre ostéopathe et kinésithérapeute ?",
        a: "La kinésithérapie travaille sur la rééducation fonctionnelle — renforcement, mobilisation ciblée — souvent sur prescription médicale. L'ostéopathie s'intéresse aux restrictions de mobilité globales et à l'équilibre général du corps, en accès direct. Francis MOMBO cumule les deux diplômes, ce qui lui permet d'adapter sa prise en charge selon votre besoin.",
      },
      {
        q: "L'ostéopathie est-elle douloureuse ?",
        a: "Les techniques ostéopathiques sont généralement indolores. Vous pouvez ressentir de légères sensations lors de certaines mobilisations, et parfois une légère courbature dans les 24 à 48h suivant la séance — c'est normal et transitoire.",
      },
      {
        q: "Combien de séances sont nécessaires ?",
        a: "Pour un problème aigu (dos bloqué, torticolis), 1 à 2 séances suffisent souvent. Pour un suivi préventif ou une douleur chronique, un rythme de 2 à 4 séances par an est courant. Le plan est discuté dès la première consultation.",
      },
      {
        q: "Faut-il une ordonnance pour consulter un ostéopathe ?",
        a: "Non. L'ostéopathie est accessible en accès direct, sans prescription médicale. Vous pouvez prendre rendez-vous directement sur Doctolib ou par téléphone au 06 50 14 91 92.",
      },
      {
        q: "Comment se déroule une séance d'ostéopathie ?",
        a: "La séance débute par un entretien (antécédents, symptômes, mode de vie), suivi d'un bilan postural et clinique. Le traitement manuel dure 30 à 45 minutes. La séance se termine par des conseils personnalisés (posture, activité physique, reprise). Durée totale : 45 min à 1h.",
      },
    ],
  },
  {
    id: "tarifs",
    label: "Tarifs et remboursement",
    emoji: "💳",
    questions: [
      {
        q: "Quel est le tarif d'une séance d'ostéopathie à Castelnau-le-Lez ?",
        a: "La consultation est entre 60 et 70 €, quel que soit l'âge du patient (adulte, enfant, nourrisson). Paiement par carte bancaire, espèces ou chèque.",
      },
      {
        q: "L'ostéopathie est-elle remboursée par la Sécurité Sociale ?",
        a: "Non. L'ostéopathie n'est pas prise en charge par l'Assurance Maladie. En revanche, de nombreuses mutuelles remboursent entre 20 € et 50 € par séance dans le cadre d'un forfait médecines douces.",
      },
      {
        q: "Comment faire rembourser ma séance par ma mutuelle ?",
        a: "Une note d'honoraires vous est remise à la fin de chaque séance. Ce document suffit généralement pour votre demande de remboursement. Il mentionne le nom, la qualification D.O., la date et le montant. Renseignez-vous auprès de votre complémentaire santé avant la consultation.",
      },
      {
        q: "Y a-t-il un tarif réduit pour les enfants ou nourrissons ?",
        a: "Non, le tarif est identique pour tous les âges. La durée et les techniques sont adaptées, mais le tarif reste le même.",
      },
    ],
  },
  {
    id: "urgences",
    label: "Urgences et douleurs aiguës",
    emoji: "🚨",
    questions: [
      {
        q: "Peut-on avoir un rendez-vous en urgence pour un dos bloqué ?",
        a: "La prise de rendez-vous se fait via Doctolib, disponible 24h/24. Selon les disponibilités, des créneaux peuvent être accessibles rapidement, parfois le jour même. Vous pouvez également appeler directement le 06 50 14 91 92.",
      },
      {
        q: "Que faire en attendant le rendez-vous pour un dos bloqué ?",
        a: "Évitez le repos complet prolongé. Marchez doucement si possible, appliquez une chaleur douce sur la zone et évitez les mouvements brusques. Quelques minutes en position antalgique peuvent aider.",
      },
      {
        q: "L'ostéopathie peut-elle aider contre une sciatique ?",
        a: "Oui, notamment lorsque la sciatique est d'origine mécanique. L'ostéopathie travaille sur les restrictions de mobilité et les compensations qui compriment le nerf. En cas de sciatique sévère avec signes neurologiques (perte de sensibilité, paralysie), consultez un médecin en urgence.",
      },
      {
        q: "Quand ne pas consulter un ostéopathe — les contre-indications ?",
        a: "L'ostéopathie est contre-indiquée en cas de fracture récente, tumeur osseuse, infection aiguë, ou signes neurologiques graves. En cas de doute, Francis MOMBO vous oriente vers le professionnel de santé adapté.",
      },
    ],
  },
  {
    id: "nourrisson",
    label: "Nourrisson et enfant",
    emoji: "👶",
    questions: [
      {
        q: "À quel âge peut-on emmener son bébé chez l'ostéopathe ?",
        a: "Dès les premiers jours de vie. Une première consultation est souvent recommandée dans les semaines suivant la naissance, notamment après un accouchement difficile, une extraction instrumentale (forceps, ventouse) ou une naissance par césarienne.",
      },
      {
        q: "L'ostéopathie peut-elle aider contre les coliques du nourrisson ?",
        a: "L'ostéopathie peut contribuer à réduire certaines tensions mécaniques qui aggravent l'inconfort digestif. Elle ne remplace pas un avis pédiatrique, mais peut compléter la prise en charge des coliques fonctionnelles.",
      },
      {
        q: "Les manipulations sont-elles sans danger pour un bébé ?",
        a: "Oui. Les techniques utilisées chez le nourrisson sont extrêmement douces — légères pressions, mobilisations crâniennes — sans aucune manipulation brusque. La séance se déroule dans le calme, avec le bébé dans les bras d'un parent si nécessaire.",
      },
      {
        q: "Faut-il traiter une plagiocéphalie (tête plate) par ostéopathie ?",
        a: "L'ostéopathie peut accompagner la prise en charge des plagiocéphalies positionnelles, en complément des conseils de repositionnement. Elle est plus efficace si elle est initiée tôt (avant 6 mois). Elle ne remplace pas un suivi pédiatrique ou un casque orthopédique en cas de déformation sévère.",
      },
    ],
  },
  {
    id: "femme",
    label: "Femme, grossesse, fertilité",
    emoji: "🤰",
    questions: [
      {
        q: "Peut-on consulter un ostéopathe pendant la grossesse ?",
        a: "Oui, dès le premier trimestre. Les techniques sont adaptées à chaque stade — sans manipulation brusque. Une consultation au 2e et 3e trimestre est particulièrement bénéfique pour préparer le bassin à l'accouchement et soulager les douleurs lombaires, sciatiques et tensions pelviennes.",
      },
      {
        q: "Quand consulter après l'accouchement ?",
        a: "Idéalement entre 6 et 8 semaines après un accouchement par voie basse, ou après cicatrisation complète en cas de césarienne. Une séance aide à rééquilibrer le bassin et à accompagner la récupération post-partum.",
      },
      {
        q: "L'ostéopathie peut-elle aider dans un parcours de fertilité ou PMA ?",
        a: "Comme accompagnement complémentaire au suivi gynécologique. L'ostéopathie s'intéresse aux tensions abdomino-pelviennes et à la mobilité tissulaire. Elle ne remplace pas les traitements médicaux et n'est pas un traitement de l'infertilité.",
      },
      {
        q: "L'ostéopathie aide-t-elle contre les douleurs de règles ?",
        a: "Oui. L'ostéopathie peut réduire les tensions pelviennes qui amplifient les douleurs menstruelles, en travaillant sur la mobilité du sacrum, de l'utérus et des structures environnantes — sans substituer à un bilan gynécologique.",
      },
    ],
  },
  {
    id: "sport",
    label: "Sport et récupération",
    emoji: "🏃",
    questions: [
      {
        q: "À quelle fréquence un sportif doit-il consulter un ostéopathe ?",
        a: "Pour un sportif régulier, une séance tous les 2 à 3 mois en prévention est recommandée. En période de compétition intensive, une séance mensuelle peut être pertinente. Après une blessure, le suivi est adapté à la rééducation en cours.",
      },
      {
        q: "Peut-on consulter juste avant une compétition ?",
        a: "Idéalement 48 à 72h avant, pour laisser le corps intégrer les ajustements. Une séance trop proche d'une compétition peut parfois générer une légère fatigue passagère.",
      },
      {
        q: "L'ostéopathie aide-t-elle à récupérer après une blessure sportive ?",
        a: "Oui, en complément du traitement médical. L'ostéopathie accélère la récupération en levant les tensions compensatoires, en améliorant la circulation locale et en rétablissant la mobilité des zones environnantes.",
      },
      {
        q: "Faut-il arrêter le sport après une séance d'ostéopathie ?",
        a: "Pas nécessairement. Pour une séance de prévention ou de récupération légère, la reprise peut être immédiate. En cas de traitement d'une zone douloureuse, un repos relatif de 24h peut être recommandé.",
      },
    ],
  },
  {
    id: "hypnose",
    label: "Hypnose thérapeutique",
    emoji: "🧠",
    questions: [
      {
        q: "Est-ce que je vais perdre le contrôle sous hypnose ?",
        a: "Non. Contrairement aux représentations du spectacle, l'hypnose thérapeutique ne vous fait pas perdre conscience. Vous restez éveillé, conscient et maître de vous-même. L'état hypnotique ressemble à une concentration profonde — proche de ce que vous ressentez en lisant un livre captivant.",
      },
      {
        q: "L'hypnose est-elle efficace contre la douleur chronique ?",
        a: "Oui. L'hypnose médicale est reconnue comme un outil efficace de gestion de la douleur. Elle permet de modifier la perception de la douleur, de réduire l'anxiété qui l'amplifie et de renforcer les mécanismes naturels d'analgésie.",
      },
      {
        q: "L'hypnose du sport, c'est quoi ?",
        a: "C'est l'application de l'hypnose à la préparation mentale du sportif : gestion du stress de compétition, renforcement de la confiance, visualisation, récupération après blessure. Les séances sont adaptées au contexte sportif et peuvent inclure l'apprentissage de l'autohypnose.",
      },
      {
        q: "L'hypnose est-elle compatible avec un traitement médical ?",
        a: "Absolument. L'hypnose thérapeutique s'intègre naturellement en complément d'un suivi médical, d'une psychothérapie ou de l'ostéopathie. Francis MOMBO combine souvent les deux approches selon les besoins.",
      },
    ],
  },
];

// JSON-LD : toutes les questions agrégées
const allQuestions = categories.flatMap((cat) => cat.questions);
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQuestions.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqOsteopathe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Retour au site
          </Link>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
            Prendre rendez-vous
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">

        {/* Hero */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>FAQ</span>
            <span className="text-xs text-gray-400">{allQuestions.length} questions · Montpellier · Castelnau-le-Lez</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>
            Questions fréquentes
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Toutes les réponses aux questions que vous vous posez sur l'ostéopathie, les tarifs, le déroulement d'une séance, la prise en charge du nourrisson, de la femme enceinte, du sportif — et sur l'hypnose thérapeutique.
          </p>
        </div>

        {/* Navigation par catégorie */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              {cat.emoji} {cat.label}
            </a>
          ))}
        </div>

        <div className="h-px bg-gray-100 mb-10" />

        {/* Questions par catégorie */}
        <div className="space-y-14">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id}>
              <h2 className="article-h2">{cat.emoji} {cat.label}</h2>
              <div className="mt-4 space-y-3">
                {cat.questions.map((item) => (
                  <details key={item.q} className="group bg-gray-50 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900 text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>
                      <span>{item.q}</span>
                      <svg className="shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Liens services */}
        <div className="mt-14 p-6 bg-gray-50 rounded-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Approfondir par spécialité</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { href: "/urgences-osteopathie-montpellier", label: "Urgences ostéopathiques" },
              { href: "/osteopathie-sport-montpellier", label: "Ostéopathie du sport" },
              { href: "/osteopathie-sante-femme", label: "Santé de la femme" },
              { href: "/osteopathie-enfant-nourrisson", label: "Enfant et nourrisson" },
              { href: "/douleurs-chroniques-osteopathie", label: "Douleurs chroniques" },
              { href: "/osteopathie-seniors-montpellier", label: "Séniors" },
              { href: "/hypnose-therapeutique-montpellier", label: "Hypnose thérapeutique" },
              { href: "/hypnose-sport-montpellier", label: "Hypnose du sport" },
              { href: "/tarifs-osteopathe-montpellier", label: "Tarifs et remboursement" },
              { href: "/osteopathe-castelnau-le-lez", label: "Cabinet Castelnau-le-Lez" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-pink-600 transition-colors py-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Vous avez d'autres questions ?</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Appelez le cabinet ou prenez rendez-vous directement sur Doctolib — Francis MOMBO répondra à vos questions lors de la consultation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>
              Prendre rendez-vous sur Doctolib
            </a>
            <a href="tel:+33650149192" className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-sm border-2" style={{ borderColor: "#D4336E", color: "#D4336E" }}>
              06 50 14 91 92
            </a>
          </div>
        </div>
      </main>

      <style>{`
        .article-h2 { font-family: Figtree, sans-serif; font-size: 1.25rem; font-weight: 800; color: #111; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 2px solid #fdeef3; }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  );
}
