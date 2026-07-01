import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.mombofrancis.com";
const doctolib = "https://www.doctolib.fr/osteopathe/castelnau-le-lez/francis-mombo";

export const metadata: Metadata = {
  title: "Urgence Ostéopathe Montpellier – Castelnau-le-Lez | Francis MOMBO",
  description:
    "Urgence ostéopathe à Montpellier et Castelnau-le-Lez. Dos bloqué, torticolis, lombalgie aiguë, sciatique soudaine : RDV disponible sur Doctolib. Cabinet ouvert lun–ven 8h–19h.",
  keywords: [
    "urgence ostéopathe Montpellier",
    "dos bloqué ostéopathe Montpellier",
    "torticolis ostéopathe Castelnau",
    "lombalgie aiguë Montpellier",
    "ostéopathe rapide Montpellier",
    "sciatique urgence Montpellier",
    "blocage articulaire ostéopathe",
    "ostéopathe disponible Castelnau-le-Lez",
  ],
  alternates: { canonical: `${siteUrl}/urgences-osteopathie-montpellier` },
  openGraph: {
    title: "Urgence Ostéopathe Montpellier | Francis MOMBO",
    description: "Dos bloqué, torticolis, lombalgie aiguë à Montpellier et Castelnau-le-Lez. RDV disponible sur Doctolib.",
    url: `${siteUrl}/urgences-osteopathie-montpellier`,
    type: "article",
    images: [{ url: `${siteUrl}/francis-hero.png`, width: 1200, height: 630, alt: "Urgence ostéopathe Montpellier Francis MOMBO" }],
  },
};

const faqItems = [
  { q: "Puis-je obtenir un RDV le jour même pour une urgence ?", a: "La prise de rendez-vous se fait via Doctolib, disponible 24h/24. Selon les disponibilités, des créneaux peuvent être accessibles rapidement, y compris dans la journée. Vérifiez les créneaux disponibles en ligne." },
  { q: "Qu'est-ce qu'une urgence ostéopathique ?", a: "Une urgence ostéopathique désigne une douleur aiguë soudaine et invalidante : dos bloqué au réveil, torticolis, lombalgie aiguë après un faux mouvement, sciatique récente. Ce ne sont pas des urgences médicales au sens strict — si vous avez des signes neurologiques importants (perte de sensibilité, incontinence), consultez un médecin en urgence." },
  { q: "Faut-il une ordonnance pour une consultation en urgence ?", a: "Non. L'ostéopathie ne nécessite pas d'ordonnance. Vous pouvez prendre rendez-vous directement sur Doctolib ou par téléphone." },
  { q: "Est-ce que l'ostéopathie peut aggraver ma douleur aiguë ?", a: "Une séance bien conduite ne doit pas aggraver la douleur. Francis MOMBO adapte toujours les techniques à l'état aigu du patient — en évitant les manipulations brusques et en privilégiant les approches douces." },
  { q: "Que faire en attendant le rendez-vous ?", a: "Évitez le repos complet prolongé. Des mouvements doux, la chaleur locale (sauf inflammation récente) et une position antalgique peuvent aider. Votre ostéopathe vous donnera des conseils précis lors de la consultation." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function UrgencesOsteopathie() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#D4336E" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Retour au site
          </Link>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>RDV Doctolib</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "#D4336E" }}>Urgence</span>
            <span className="text-xs text-gray-400">Ostéopathie · Montpellier · Castelnau-le-Lez</span>
          </div>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Figtree, sans-serif", fontSize: "clamp(28px, 5vw, 42px)" }}>Urgence ostéopathe à Montpellier</h1>
          <p className="text-gray-500 text-lg leading-relaxed">Dos bloqué au réveil, torticolis soudain, lombalgie aiguë après un faux mouvement, sciatique qui apparaît brusquement — ces situations nécessitent une prise en charge rapide. Francis MOMBO reçoit au cabinet de Castelnau-le-Lez du lundi au vendredi, avec prise de rendez-vous en ligne sur Doctolib.</p>
        </div>
        <div className="h-px bg-gray-100 mb-10" />

        <article className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="article-h2">Qu'est-ce qu'une urgence ostéopathique ?</h2>
            <p>Une urgence ostéopathique correspond à une douleur aiguë, soudaine et invalidante qui empêche de se mouvoir normalement. Il ne s'agit pas d'une urgence médicale au sens strict — si vous présentez des signes neurologiques graves (perte de sensibilité, incontinence, paralysie), consultez immédiatement un médecin ou les urgences hospitalières.</p>
            <p>Les situations qui justifient une consultation rapide chez l'ostéopathe incluent :</p>
            <ul className="article-list">
              <li>dos bloqué au réveil ou après un faux mouvement ;</li>
              <li>torticolis aigu avec impossibilité de tourner la tête ;</li>
              <li>lombalgie aiguë soudaine (lumbago) ;</li>
              <li>sciatique récente avec douleur intense dans la fesse et la jambe ;</li>
              <li>blocage articulaire après un effort ou un geste brutal ;</li>
              <li>point de côté persistant ou douleur thoracique d'origine mécanique.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Comment prendre rendez-vous rapidement ?</h2>
            <p>La prise de rendez-vous s'effectue directement sur <strong>Doctolib</strong>, disponible 24h/24 et 7j/7. Selon les disponibilités, des créneaux peuvent être accessibles rapidement — parfois le jour même ou le lendemain.</p>
            <p>Le cabinet principal de Castelnau-le-Lez (1720 Avenue de l'Europe) est ouvert du lundi au vendredi de 8h à 19h. Francis MOMBO peut également orienter vers son second cabinet à Saint-Mathieu-de-Tréviers selon les disponibilités.</p>
            <p>Vous pouvez également appeler directement au <strong>06 50 14 91 92</strong> pour les situations urgentes.</p>
          </section>

          <section>
            <h2 className="article-h2">Dos bloqué : que faire ?</h2>
            <p>Le dos bloqué — ou lumbago aigu — est l'une des urgences ostéopathiques les plus fréquentes. Il survient souvent après un faux mouvement, un effort de soulèvement ou au réveil. La douleur est intense, localisée dans le bas du dos, et toute tentative de mouvement l'aggrave.</p>
            <p>Pendant l'attente du rendez-vous :</p>
            <ul className="article-list">
              <li>évitez le repos complet prolongé (quelques minutes en position antalgique suffisent) ;</li>
              <li>marchez doucement si possible ;</li>
              <li>appliquez une chaleur douce sur la zone (sauf si la douleur est brûlante ou très récente) ;</li>
              <li>évitez les mouvements brusques et les torsions.</li>
            </ul>
            <p>L'ostéopathe travaille sur les restrictions de mobilité, les tensions musculaires et les blocages articulaires qui entretiennent la douleur, pour permettre une reprise progressive des mouvements.</p>
          </section>

          <section>
            <h2 className="article-h2">Torticolis : prise en charge ostéopathique</h2>
            <p>Le torticolis aigu se manifeste par une douleur cervicale intense et une impossibilité à tourner ou incliner la tête dans une direction. Il peut apparaître au réveil (position de sommeil inadaptée) ou après un faux mouvement.</p>
            <p>L'ostéopathie intervient pour :</p>
            <ul className="article-list">
              <li>réduire les tensions musculaires cervicales ;</li>
              <li>restaurer la mobilité des vertèbres cervicales ;</li>
              <li>soulager la douleur par des techniques douces et adaptées ;</li>
              <li>donner des conseils posturaux pour éviter les récidives.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">Sciatique et névralgie : quand consulter ?</h2>
            <p>Une sciatique récente — douleur irradiant depuis le bas du dos vers la fesse, la cuisse et parfois jusqu'au pied — peut bénéficier d'une prise en charge ostéopathique, surtout lorsqu'elle est d'origine mécanique (compression discale, tensions musculaires).</p>
            <p>L'ostéopathie ne remplace pas l'avis médical, notamment en cas de sciatique sévère ou de signes neurologiques. Elle peut en revanche compléter la prise en charge médicale en travaillant sur les restrictions de mobilité et les compensations mécaniques qui aggravent la compression nerveuse.</p>
          </section>

          <section>
            <h2 className="article-h2">Ce qui se passe lors d'une séance en urgence</h2>
            <p>La consultation débute par un échange rapide pour évaluer la situation : nature de la douleur, facteur déclenchant, antécédents, signes associés. Un bilan clinique permet d'écarter les contre-indications et d'orienter la prise en charge.</p>
            <p>Les techniques utilisées en situation aiguë sont adaptées à l'état du patient :</p>
            <ul className="article-list">
              <li>techniques douces et progressives — pas de manipulation brusque ;</li>
              <li>travail sur les tensions musculaires et fasciales ;</li>
              <li>mobilisations articulaires douces ;</li>
              <li>conseils de posture et de reprise d'activité.</li>
            </ul>
          </section>

          <section>
            <h2 className="article-h2">FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Figtree, sans-serif" }}>{item.q}</p>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="article-h2">Conclusion</h2>
            <p>Face à une douleur aiguë invalidante, une consultation rapide chez l'ostéopathe permet souvent de retrouver de la mobilité en une ou deux séances. Francis MOMBO reçoit à Castelnau-le-Lez avec une prise en charge adaptée aux situations urgentes — sans manipulation brusque, avec une écoute attentive de votre état du moment.</p>
          </section>
        </article>

        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Voir aussi</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/osteopathie-sport-montpellier", label: "Ostéopathie du sport" },
              { href: "/douleurs-chroniques-osteopathie", label: "Douleurs chroniques" },
              { href: "/mal-de-dos-comprendre-prevenir", label: "Article : mal de dos" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #fdeef3, #fff3e8)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8A020" }}>Francis MOMBO</p>
          <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: "Figtree, sans-serif" }}>Dos bloqué ? Torticolis ? Agissez vite.</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Prenez rendez-vous sur Doctolib — disponible 24h/24. Cabinet à Castelnau-le-Lez, ouvert du lundi au vendredi de 8h à 19h.</p>
          <a href={doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #D4336E, #8B2035)" }}>Prendre rendez-vous sur Doctolib</a>
        </div>
      </main>

      <style>{`
        .article-h2 { font-family: Figtree, sans-serif; font-size: 1.25rem; font-weight: 800; color: #111; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 2px solid #fdeef3; }
        .article-list { list-style: none; padding: 0; margin: 0.75rem 0; }
        .article-list li { padding-left: 1.25rem; position: relative; margin-bottom: 0.4rem; font-size: 0.95rem; }
        .article-list li::before { content: ""; position: absolute; left: 0; top: 0.55em; width: 6px; height: 6px; border-radius: 50%; background: #D4336E; }
      `}</style>
    </>
  );
}
