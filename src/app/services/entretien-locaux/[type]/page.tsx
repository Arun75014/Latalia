/* src/app/services/entretien-locaux/[type]/page.tsx */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/FooterSection';
import HSESection from "@/app/components/HSESection";

const DOMAIN = "https://www.latalia-proprete.fr";

const brand = {
  teal: '#54beea',
  navy: '#10324F',
  rose: '#c0d148',
  deepBlue: '#003C55',
  bgSoft: '#F7FBFD',
};

type TypeKey =
  | 'bureaux-commerciaux'
  | 'salle-de-sport'
  | 'pharmacie'
  | 'cabinet-medical'
  | 'pret-a-porter';

const TYPES: Record<
  TypeKey,
  {
    title: string;
    h1: string;
    description: string;
    hero: string;
    inclus: string[][];
    inclusionImages?: string[]; // ← 🔥 AJOUT
    extras?: string[];
    keywords: string[];
    gallery?: string[]; // ← 🔥 ajout
  }
> = {
  'bureaux-commerciaux': {
    title: 'Entretien bureaux commerciaux – Paris & IDF | Latalia Propreté',
    h1: 'Entretien de bureaux commerciaux',
    description:
      'Nettoyage professionnel de bureaux à Paris & Île-de-France : entretien postes, sols, sanitaires, vitrerie accessible, protocole qualité & créneaux adaptés.',
    hero: '/bureaux-commerciaux.png',
    inclus: [
      ['Open-spaces & postes', 'Dépoussiérage, points de contact, écrans extérieurs'],
      ['Salles de réunion & accueil', 'Tables, sièges, vitrines, comptoirs'],
      ['Sols & circulations', 'Aspiration/balayage + lavage adapté'],
      ['Sanitaires', 'Nettoyage + désinfection, recharges si fournies'],
      ['Espace cuisine/pause', 'Plans, éviers, micro-ondes (int. léger si vidé)'],
      ['Vitreries accessibles', 'Vitrages intérieurs, cloisons vitrées'],
    ],
      inclusionImages: [
    '/bureaux-commerciaux.png',
    '/salle_reunion.jpg',
    '/sols_circulation.jpg',
    '/sanitaire.jpg',
    '/espace-cuisine.jpg',
    '/vitrerie.jpg',
  ],
    extras: ['Shampouinage moquette', 'Vitrerie en hauteur', 'Débarras', 'Remise en état après travaux'],
    keywords: ['nettoyage bureaux Paris', 'entretien bureaux IDF', 'propreté open space', 'société de nettoyage bureaux'],
  },

  'salle-de-sport': {
    title: 'Entretien salle de sport – Paris & IDF | Latalia Propreté',
    h1: 'Entretien de salle de sport',
    description:
      'Nettoyage de salles de sport à Paris & IDF : désinfection machines, vestiaires, douches, sols sportifs. Hygiène renforcée & passages adaptés.',
    hero: '/nettoyage-salle-de-sport.jpg',
    inclus: [
      ['Plateau & machines', 'Désinfection points contact (poignées, consoles), bancs'],
      ['Sols sportifs', 'Nettoyage adapté aux revêtements (antidérapants, résines, caoutchouc)'],
      ['Vestiaires', 'Bancs, casiers ext., poignées'],
      ['Douches & sanitaires', 'Nettoyage + désinfection, anticalcaire zones humides'],
      ['Accueil & snack', 'Comptoirs, tables, vitrines'],
      ['Vitreries accessibles', 'Surfaces vitrées intérieures'],
    ],
      inclusionImages: [
    '/nettoyage-salle-de-sport.jpg',
    '/sols-sportifs.jpg',
    '/entretien-vestiaire.jpg',
    '/sanitaire.jpg',
    '/accueil-snack.jpg',
    '/vitrerie.jpg',
  ],
    extras: ['Désinfection vapeur', 'Vitrerie en hauteur', 'Gestion consommables', 'Traitement fongicide'],
    keywords: ['nettoyage salle de sport Paris', 'désinfection fitness', 'entretien salle musculation'],
  },

  pharmacie: {
    title: 'Entretien pharmacie – Paris & IDF | Latalia Propreté',
    h1: 'Entretien de pharmacie',
    description:
      'Nettoyage complet de pharmacie : surface de vente, vitrines, comptoirs, back-office, sanitaires. Propreté soignée & protocoles adaptés.',
    hero: '/nettoyage-pharmacie.jpeg',
    inclus: [
      ['Surface de vente', 'Comptoirs, étagères accessibles, présentoirs'],
      ['Back-office', 'Plans, rangements extérieurs, poignées, sols'],
      ['Zone attente & vitrine', 'Vitrines int., tables, chaises'],
      ['Sanitaires', 'Nettoyage + désinfection'],
      ['Sols', 'Balayage/aspiration + lavage adapté'],
      ['Vitreries accessibles', 'Cloisons vitrées intérieures'],
    ],
      inclusionImages: [
    '/nettoyage-pharmacie.jpeg',
    '/backoffice.jpg',
    '/attente-vitrine.jpg',
    '/sanitaire.jpg',
    '/sols.jpg',
    '/vitrerie.jpg',
  ],
    extras: ['Vitrerie extérieure', 'Shampouinage moquette', 'Gestion consommables', 'Remise en état après travaux'],
    keywords: ['nettoyage pharmacie Paris', 'entretien officine', 'propreté pharmacie IDF'],
  },

  'cabinet-medical': {
    title: 'Entretien cabinet médical – Paris & IDF | Latalia Propreté',
    h1: 'Entretien de cabinet médical',
    description:
      'Nettoyage de cabinets médicaux : salles d’examen, accueil, sanitaires. Hygiène stricte & protocoles renforcés.',
    hero: '/cabinet-medical.jpeg',
    inclus: [
      ['Salles d’examen', 'Plans, chaises, poignées, points de contact'],
      ['Accueil & attente', 'Comptoirs, tables, chaises'],
      ['Sanitaires', 'Désinfection renforcée'],
      ['Sols', 'Aspiration + lavage sécurisé'],
      ['Vitreries accessibles', 'Cloisons vitrées'],
      ['Désinfection ciblée', 'Points contacts élevés'],
    ],
      inclusionImages: [
    '/cabinet-medical.jpeg',
    '/cabinet-attente.jpg',
    '/sanitaire.jpg',
    '/cabinet-sol.jpg',
    '/vitrerie.jpg',
    '/desinfection.jpg',
  ],
    extras: ['Vitrerie en hauteur', 'Désinfection vapeur', 'Gestion consommables', 'Remise en état'],
    keywords: ['nettoyage médical Paris', 'entretien cabinet médical', 'désinfection cabinets médicaux'],
  },

  'pret-a-porter': {
    title: 'Entretien prêt-à-porter – Paris & IDF | Latalia Propreté',
    h1: 'Entretien de magasin prêt-à-porter',
    description:
      'Nettoyage de boutiques prêt-à-porter : surface de vente, cabines, vitrines, arrière-boutique. Horaires flexibles.',
    hero: '/pret-a-porter.jpg',
    inclus: [
      ['Surface de vente', 'Mobilier accessible, comptoirs, présentoirs'],
      ['Cabines', 'Miroirs, poignées, sols'],
      ['Réserve / arrière-boutique', 'Plans, rangements ext., sols'],
      ['Sanitaires', 'Nettoyage + désinfection'],
      ['Sols', 'Aspiration & lavage adapté'],
      ['Vitreries accessibles', 'Vitrines intérieures'],
    ],
      inclusionImages: [
    '/pret-a-porter.jpg',
    '/cabines.jpg',
    '/arriere-boutique.jpg',
    '/sanitaire.jpg',
    '/arriere-boutique-sol.jpg',
    '/vitrerie.jpg',
  ],
    extras: ['Shampouinage moquette', 'Vitrerie extérieure', 'Remise en état', 'Gestion consommables'],
    keywords: ['nettoyage magasin Paris', 'entretien prêt-à-porter', 'propreté boutiques'],
  },
};

export async function generateStaticParams() {
  return Object.keys(TYPES).map((k) => ({ type: k }));
}

export async function generateMetadata({ params }: { params: { type: TypeKey } }): Promise<Metadata> {
  const cfg = TYPES[params.type];
  if (!cfg)
    return {
      title: 'Entretien locaux – Latalia Propreté',
      robots: { index: true, follow: true },
    };

  const url = `${DOMAIN}/services/entretien-locaux/${params.type}`;

  return {
    title: cfg.title,
    description: cfg.description,
    keywords: cfg.keywords,
    alternates: { canonical: url },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: cfg.title,
      description: cfg.description,
      siteName: 'Latalia Propreté',
      locale: 'fr_FR',
      type: 'article',
      url,
      images: [{ url: cfg.hero }],
    },

    twitter: {
      card: 'summary_large_image',
      title: cfg.title,
      description: cfg.description,
      images: [cfg.hero],
    },
  };
}

export default function Page({ params }: { params: { type: TypeKey } }) {
  const cfg = TYPES[params.type];

  if (!cfg) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Type de local inconnu.</p>
      </main>
    );
  }

  // images génériques
  const inclusionImages = [
    '/images/locaux-bureaux.jpg',
    '/images/locaux-salle-reunion.jpg',
    '/images/locaux-sols.jpg',
    '/images/locaux-sanitaires.jpg',
    '/images/locaux-cuisine.jpg',
    '/images/locaux-vitres.jpg',
  ];

  const typeCards = [
    { slug: 'bureaux-commerciaux', label: 'Bureaux commerciaux', img: '/bureaux-commerciaux.png' },
    { slug: 'salle-de-sport', label: 'Salle de sport', img: '/nettoyage-salle-de-sport.jpg' },
    { slug: 'pharmacie', label: 'Pharmacie', img: '/nettoyage-pharmacie.jpeg' },
    { slug: 'cabinet-medical', label: 'Cabinet médical', img: '/cabinet-medical.jpeg' },
    { slug: 'pret-a-porter', label: 'Prêt-à-porter', img: '/pret-a-porter.jpg' },
  ];

  return (

    <>
      <Navbar />

      {/* HERO */}
      <main className="min-h-screen bg-white">
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image src={cfg.hero} alt={cfg.h1} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-white">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4"
              style={{ backgroundColor: brand.teal, color: brand.navy }}
            >
              Services de Propreté
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">{cfg.h1}</h1>
            <p className="mt-4 max-w-2xl text-white/90">{cfg.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#devis"
                className="px-5 py-3 rounded-md text-white font-semibold"
                style={{ backgroundColor: brand.deepBlue }}
              >
                Demander un devis
              </Link>
              <a
                href="#inclus"
                className="px-5 py-3 rounded-md font-semibold border"
                style={{ borderColor: 'white' }}
              >
                Voir les prestations
              </a>
            </div>
          </div>
        </section>

        {/* BREADCRUMB + JSON-LD */}
        <nav className="container mx-auto px-4 lg:px-8 mt-4 text-sm text-slate-600" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/services/entretien-locaux">Entretien locaux</Link></li>
            <li>/</li>
            <li className="text-slate-800 font-medium">{cfg.h1}</li>
          </ol>
        </nav>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: cfg.h1,
              description: cfg.description,
              areaServed: "Paris & Île-de-France",
              provider: {
                "@type": "Organization",
                name: "Latalia Propreté",
                url: DOMAIN,
              },
              serviceType: "CleaningService",
              offers: {
                "@type": "Offer",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: `${DOMAIN}/` },
                { "@type": "ListItem", position: 2, name: "Entretien locaux", item: `${DOMAIN}/services/entretien-locaux` },
                { "@type": "ListItem", position: 3, name: cfg.h1, item: `${DOMAIN}/services/entretien-locaux/${params.type}` },
              ],
            }),
          }}
        />

        {/* USP */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <Usp dotColor={brand.rose} text="Protocoles qualité & traçabilité" />
            <Usp dotColor={brand.teal} text="Option produits naturels — Signature Latalia" />
            <Usp dotColor={brand.navy} text="Créneaux flexibles (matin / soir)" />
          </div>
        </section>

        {/* TYPES */}
        <section className="py-14">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: brand.navy }}>
                Choisir votre type de local
              </h2>
              <p className="text-slate-600 mt-2">
                Protocole adapté selon l’activité : bureaux, sport, pharmacie, cabinet médical, prêt-à-porter.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {typeCards.map((t) => (
                <a key={t.slug} href={`/services/entretien-locaux/${t.slug}`} className="group relative overflow-hidden rounded-2xl border bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image src={t.img} alt={t.label} fill className="object-cover group-hover:scale-105 transition" />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: brand.teal, color: brand.navy }}>
                      Local spécifique
                    </span>
                    <h3 className="mt-2 text-white text-base font-semibold">{t.label}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUS */}
{/* INCLUS */}
<section id="inclus" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
  <div className="container mx-auto px-4 lg:px-8">
    <header className="mb-10">
      <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
        Prestations incluses
      </h2>
      <p className="mt-2 text-slate-600">
        Prestations essentielles adaptées à votre activité.
      </p>
    </header>

    <div className="grid md:grid-cols-2 gap-8">
      {cfg.inclus.map(([title, desc], i) => (
        <InclusionCard
          key={i}
          title={title}
          desc={desc}
          img={cfg.inclusionImages?.[i] ?? '/images/default-inclusion.jpg'}
        />
      ))}
    </div>
  </div>
</section>


        {/* EXTRAS */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>Non inclus (sur devis)</h2>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {(cfg.extras ?? []).map((t) => (
                <div key={t} className="rounded-xl border bg-white p-4">
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONDITIONS */}
        <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
                Conditions & remarques
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li>Accès & consignes HSE fournis avant intervention.</li>
                <li>Stockage matériel dans un local dédié.</li>
                <li>Pas de déplacement d’objets sensibles non signalés.</li>
                <li>Pas de garantie si travaux en cours.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>Fréquences recommandées</h3>
              </div>
              <div className="p-6 grid gap-4">
                {params.type === 'salle-de-sport' && (
                  <>
                    <FreqRow label="Machines & plateau" value="Quotidien" />
                    <FreqRow label="Douches" value="1× à 3× / jour" />
                  </>
                )}

                {params.type === 'pharmacie' && (
                  <>
                    <FreqRow label="Surface de vente" value="Quotidien" />
                    <FreqRow label="Vitrines intérieures" value="Hebdo" />
                  </>
                )}

                {params.type === 'cabinet-medical' && (
                  <>
                    <FreqRow label="Salles d’examen" value="Quotidien (renforcé)" />
                    <FreqRow label="Sanitaires" value="1× à 2× / jour" />
                  </>
                )}

                {params.type === 'pret-a-porter' && (
                  <>
                    <FreqRow label="Surface de vente" value="Quotidien" />
                    <FreqRow label="Cabines" value="Quotidien" />
                  </>
                )}

                {params.type === 'bureaux-commerciaux' && (
                  <>
                    <FreqRow label="Bureaux / open spaces" value="2× à 5× / semaine" />
                    <FreqRow label="Sanitaires" value="1× à 2× / jour" />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* GALERIE */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Résultats en images
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {['/images/locaux-g1.jpg', '/images/locaux-g2.jpg', '/images/locaux-g3.jpg'].map((src) => (
                <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src={src} alt="Exemple de résultats de nettoyage" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* DEVIS */}
        <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border bg-white p-6 md:p-8">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                  Demander un devis — {cfg.h1}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Décrivez vos besoins et contraintes pour une proposition ajustée.
                </p>

                <form className="mt-6 grid md:grid-cols-2 gap-4">
                  <input className="input" placeholder="Entreprise / Site" />
                  <input className="input" placeholder="Adresse / Ville" />
                  <input className="input" placeholder="Surface (m²)" />
                  <input className="input" placeholder="Espaces clés" />
                  <input className="input" placeholder="Jours & créneaux souhaités" />
                  <input className="input" placeholder="Accès / Alarmes" />
                  <textarea className="input md:col-span-2" placeholder="Commentaires" />
                  <button
                    type="submit"
                    className="md:col-span-2 px-5 py-3 rounded-md text-white font-semibold"
                    style={{ backgroundColor: brand.deepBlue }}
                  >
                    Envoyer ma demande
                  </button>
                </form>
              </div>
            </div>

            {/* Signature */}
            <aside className="rounded-2xl border bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Image src="/logo-healthy-home.png" alt="Logo Latalia Propreté" width={36} height={36} />
                <p className="text-sm font-semibold" style={{ color: brand.navy }}>Option “Signature Latalia”</p>
              </div>
              <p className="mt-3 text-sm text-slate-700">
                Produits naturels, confort olfactif & réduction d’exposition aux substances agressives.
              </p>
            </aside>
          </div>
        </section>

        {/* HSE */}
        <HSESection type={params.type} />

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>Questions fréquentes</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Faq q="Intervenez-vous en horaires décalés ?" a="Oui, tôt le matin, entre midi et deux ou en soirée selon vos contraintes." />
              <Faq q="Fournissez-vous les consommables ?" a="Oui, sur demande : papier, savon, essuie-mains, sacs." />
              <Faq q="Gérez-vous les badges/clefs ?" a="Oui, via une procédure sécurisée validée avec vos équipes." />
              <Faq q="Pouvez-vous intervenir en urgence ?" a="Oui, nous organisons des passages exceptionnels en cas d’incident." />
            </div>

            {/* FAQ JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Intervenez-vous en horaires décalés ?",
                      acceptedAnswer: { "@type": "Answer", text: "Oui, tôt le matin, entre midi et deux ou en soirée." }
                    },
                    {
                      "@type": "Question",
                      name: "Fournissez-vous les consommables ?",
                      acceptedAnswer: { "@type": "Answer", text: "Oui, sur demande : papier, savon, essuie-mains, sacs." }
                    },
                    {
                      "@type": "Question",
                      name: "Gérez-vous les badges/clefs ?",
                      acceptedAnswer: { "@type": "Answer", text: "Oui, via une procédure sécurisée validée en amont." }
                    },
                    {
                      "@type": "Question",
                      name: "Pouvez-vous intervenir en urgence ?",
                      acceptedAnswer: { "@type": "Answer", text: "Oui, nous réalisons des passages exceptionnels en cas d’incident." }
                    }
                  ]
                })
              }}
            />
          </div>
        </section>

        <footer><Footer /></footer>
      </main>
    </>
  );
}

/* ---------- Sous-composants ---------- */

function Usp({ dotColor, text }: { dotColor: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dotColor }} />
      <p className="text-slate-700">{text}</p>
    </div>
  );
}

function InclusionCard({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white border">
      <div className="relative aspect-[16/9]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold" style={{ color: brand.navy }}>{title}</h4>
        <p className="mt-2 text-slate-700">{desc}</p>
      </div>
    </article>
  );
}

function FreqRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border px-4 py-3 bg-white">
      <span className="font-medium text-slate-700">{label}</span>
      <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: brand.navy }}>
        {value}
      </span>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border p-5 bg-white">
      <summary className="cursor-pointer list-none font-semibold text-slate-800 flex items-center justify-between">
        <span>{q}</span>
        <span className="ml-4 transition group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-slate-600">{a}</p>
    </details>
  );
}
