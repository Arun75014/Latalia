/* src/app/services/entretien-copropriete/page.tsx */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/FooterSection';

/* 🎨 Palette centrale */
const brand = {
  teal: '#54beea',
  navy: '#10324F',
  rose: '#c0d148',
  deepBlue: '#003C55',
  bgSoft: '#F7FBFD',
};

export const metadata = {
  title: "Entretien de Copropriété à Paris & IDF | Latalia Propreté",
  description:
    "Nettoyage et entretien de copropriété : halls, escaliers, ascenseurs, containers, cours, caves. Services fiables pour syndics & résidences en Île-de-France.",
  keywords: [
    "entretien copropriété paris",
    "nettoyage copropriété",
    "société de propreté paris",
    "nettoyage escaliers immeuble",
    "entretien halls immeuble",
    "service syndic paris"
  ],
};

export default function EntretienCoproprietePage() {
  return (
    <>
      {/* ---------------- META SEO + OG + TWITTER ---------------- */}
      <Head>
        <title>Entretien de Copropriété à Paris & IDF | Latalia Propreté</title>
        <meta
          name="description"
          content="Nettoyage professionnel de copropriétés : halls, escaliers, ascenseurs, cours, containers, caves. Solutions fiables pour syndics & résidences en Île-de-France."
        />

        <link rel="canonical" href="https://www.latalia-proprete.fr/services/entretien-copropriete" />

        {/* OpenGraph */}
        <meta property="og:title" content="Entretien de Copropriété – Paris & IDF" />
        <meta
          property="og:description"
          content="Prestations complètes pour syndics et copropriétés : halls, escaliers, ascenseurs, containers, caves, cours. Devis rapide."
        />
        <meta property="og:image" content="/copro.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entretien de Copropriété – Paris & IDF" />
        <meta
          name="twitter:description"
          content="Nettoyage professionnel des copropriétés : halls, escaliers, ascenseurs, containers, caves…"
        />
        <meta name="twitter:image" content="/copro.jpg" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Entretien de copropriété",
              provider: {
                "@type": "Organization",
                name: "Latalia Propreté",
                url: "https://www.latalia-proprete.fr",
                telephone: "+33-000-000-000",
              },
              areaServed: "Île-de-France",
              description:
                "Nettoyage régulier des copropriétés : halls, escaliers, ascenseurs, containers, caves, cours et circulations.",
            }),
          }}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white">

        {/* ---------------- HERO ---------------- */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/copro.jpg"
              alt="Hall d’immeuble propre et entretenu – entretien de copropriété à Paris"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-white">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4"
              style={{ backgroundColor: brand.teal, color: brand.navy }}
            >
              Services de Propreté
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
              Entretien de copropriété à Paris & en Île-de-France
            </h1>

            <p className="mt-4 max-w-2xl text-white/90">
              Entretien complet des parties communes : halls, escaliers, ascenseurs, cours, containers,
              caves & circulations. Une prestation fiable, régulière, pensée pour les syndics et résidences.
            </p>

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

        {/* ---------------- USP ---------------- */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <RibbonItem color={brand.rose} text="Équipe fiable & protocole qualité constant" />
            <RibbonItem color={brand.teal} text="Produits professionnels & option naturelle" />
            <RibbonItem color={brand.navy} text="Passages adaptés au planning de la résidence" />
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* ---------------- PRESTATIONS INCLUSES ------------------------ */}
        {/* -------------------------------------------------------------- */}
        <section id="inclus" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Prestations incluses
              </h2>
              <p className="mt-2 text-slate-600">
                Nettoyage complet et régulier des espaces communs selon les besoins de l’immeuble.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <InclusionCard
                title="Zones d’accès & hall d’entrée"
                img="/zone-accueil.jpg"
                points={[
                  'Abords de l’immeuble, SAS d’entrée et hall',
                  'Portes vitrée, poignées, vitres accessibles'
                ]}
              />
              <InclusionCard
                title="Escaliers & paliers"
                img="/escaliers.jpeg"
                points={[
                  'Escaliers principaux et escaliers de service',
                  'Couvercles de caves et circulations attenantes'
                ]}
              />
              <InclusionCard
                title="Ascenseurs & containers"
                img="/containers-ascenseur.jpeg"
                points={[
                  'Cabines, parois, miroirs & boutons',
                  'Zone containers, sortie de poubelles'
                ]}
              />
              <InclusionCard
                title="Suivi & petites attentions"
                img="/ampoules.jpg"
                points={[
                  'Changement d’ampoules (si fourni)',
                  'Contrôle général lors des passages'
                ]}
              />
            </div>

            <p className="mt-4 text-xs text-slate-500">Prestations configurées selon l’immeuble.</p>
          </div>
        </section>

        {/* ---------------- NON INCLUS ---------------- */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-10" style={{ color: brand.navy }}>
              Non inclus (sur devis)
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Cristallisation du marbre',
                'Shampouinage moquette',
                'Lessivage des murs & plafonds',
                'Nettoyage haute pression',
                'Nettoyage caves & parkings',
                'Évacuation feuilles mortes',
                'Débouchage de canalisations',
                'Traitement nuisibles',
                'Débarras d’encombrants',
                'Matières dangereuses',
                'Pliage de cartons',
              ].map((t) => (
                <div key={t} className="rounded-xl border bg-white p-4">
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- REMARQUES + FRÉQUENCES ---------------- */}
        <section className="py-8" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
                Conditions & remarques
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li>Prises électriques nécessaires pour une aspiration optimale.</li>
                <li>Objets présents dans les escaliers non déplacés pour sécurité.</li>
                <li>Espace de rangement recommandé pour le matériel.</li>
                <li>Prestations non garanties en cas de travaux en cours.</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border bg-white">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                  Fréquences recommandées
                </h3>
                <p className="text-slate-600 mt-1">
                  Adaptées au flux de l’immeuble & à sa configuration.
                </p>
              </div>

              <div className="p-6 grid gap-4">
                <FreqRow label="Immeuble ≥ 3 étages" value="1× / semaine" />
                <FreqRow label="Immeuble 1–2 étages" value="1× / 15 jours" />
                <FreqRow label="Grand hall + nombreux passages" value="2× / semaine" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- GALERIE ---------------- */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Résultats en images
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {['/copro.jpg', '/escaliers.jpeg', '/containers-ascenseur.jpeg'].map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Nettoyage de copropriété – résultat avant/après"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CTA DEVIS ---------------- */}
        <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">
              <div className="rounded-2xl border bg-white p-6 md:p-8">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                  Demander un devis personnalisé
                </h3>

                <form className="mt-6 grid md:grid-cols-2 gap-4">
                  <input className="input" placeholder="Nom de la copropriété / Syndic" />
                  <input className="input" placeholder="Adresse / Ville" />
                  <input className="input" placeholder="Nombre d’étages" />
                  <input className="input" placeholder="Nombre d’ascenseurs" />
                  <input className="input" placeholder="Sas d’accès (oui/non)" />
                  <input className="input" placeholder="Cour / Courette (oui/non)" />
                  <textarea
                    className="input md:col-span-2"
                    placeholder="Instructions particulières"
                  />

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

            <aside className="rounded-2xl border bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-healthy-home.png"
                  alt="Option signature Latalia – produits naturels"
                  width={36}
                  height={36}
                />
                <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                  Option “Signature Latalia”
                </p>
              </div>

              <p className="mt-3 text-sm text-slate-700">
                Produits naturels faits maison : moins de solvants agressifs, meilleure tolérance
                et confort olfactif renforcé.
              </p>
            </aside>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Questions fréquentes
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Faq q="Pouvez-vous aspirer plutôt que balayer ?" a="Oui, lorsque des prises électriques sont accessibles." />
              <Faq q="Déplacez-vous les objets dans les escaliers ?" a="Pour des raisons de sécurité, nous ne déplaçons pas les objets." />
              <Faq q="Que se passe-t-il en cas de travaux ?" a="La prestation peut être reportée pour éviter poussières et risques." />
              <Faq q="Quelle fréquence recommandez-vous ?" a="Selon hauteur et flux : 1×/semaine dès 3 étages, 1×/15 jours pour les petites résidences." />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function RibbonItem({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <p className="text-slate-700">{text}</p>
    </div>
  );
}

function InclusionCard({
  title,
  points,
  img
}: {
  title: string;
  points: string[];
  img: string;
}) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white border">
      <div className="relative aspect-[16/9]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold" style={{ color: brand.navy }}>
          {title}
        </h4>

        <ul className="mt-3 space-y-2 text-slate-700">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span
                className="mt-[7px] h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: brand.teal }}
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function FreqRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border px-4 py-3 bg-white">
      <span className="font-medium text-slate-700">{label}</span>
      <span
        className="px-3 py-1 rounded-full text-sm font-semibold text-white"
        style={{ backgroundColor: brand.navy }}
      >
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
