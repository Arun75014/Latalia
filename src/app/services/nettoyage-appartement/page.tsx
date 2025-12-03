/* src/app/services/nettoyage-appartement/page.tsx */
'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/FooterSection';
import Navbar from '@/app/components/Navbar';

const brand = {
  teal: '#54beea',
  navy: '#10324F',
  rose: '#c0d148',
  deepBlue: '#003C55',
  bgSoft: '#F7FBFD',
};

export default function NettoyageAppartementPage() {
  return (
    <>
      {/* 🔥 SEO OPTIMISATION */}
      <Head>
        <title>Nettoyage d’Appartement Paris & Île-de-France | Latalia Propreté</title>

        <meta
          name="description"
          content="Service de nettoyage d’appartement à Paris & IDF : dépoussiérage, désinfection, sols, cuisine, sanitaires, balcon. Prestations professionnelles et option écologique Signature Latalia."
        />

        <meta
          name="keywords"
          content="nettoyage appartement Paris, femme de ménage Paris, ménage professionnel IDF, désinfection appartement, nettoyage écologique Paris"
        />

        <meta property="og:title" content="Nettoyage appartement – Paris & IDF | Latalia Propreté" />
        <meta
          property="og:description"
          content="Nettoyage complet et désinfection de votre appartement à Paris. Prestations professionnels + option Signature Latalia naturelle."
        />
        <meta property="og:image" content="/appartement.jpg" />
        <meta property="og:type" content="service" />

        <link rel="canonical" href="https://latalia-proprete.fr/services/nettoyage-appartement" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/appartement.jpg"
              alt="Nettoyage d’appartement professionnel à Paris – séjour propre et lumineux"
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
              Nettoyage d’appartement – Paris & IDF
            </h1>

            <p className="mt-4 max-w-2xl text-white/90">
              Nettoyage & désinfection complets, prestations soignées adaptées à votre mode de vie.
              Découvrez l’option <strong>Signature Latalia</strong> : des produits naturels, fabriqués maison.
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

        {/* USP */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <Usp dotColor={brand.rose} text="Protocoles qualité & équipe fiable" />
            <Usp dotColor={brand.teal} text="Option 100% naturelle : Signature Latalia" />
            <Usp dotColor={brand.navy} text="Planning flexible, finitions impeccables" />
          </div>
        </section>

        {/* INCLUS */}
        <section id="inclus" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Prestations incluses
              </h2>
              <p className="mt-2 text-slate-600">Nettoyage complet et désinfection des pièces principales.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <InclusionCard
                title="Chambres & salon"
                points={[
                  'Dépoussiérage, points de contact, surfaces visibles',
                  'Finitions soignées & réajustements',
                ]}
                img="/chambre-salon.jpg"
              />

              <InclusionCard
                title="Cuisine & salle à manger"
                points={[
                  'Plans de travail, éviers, robinetteries',
                  'Façades extérieures & désinfection poignées',
                ]}
                img="/cuisine-salle-de-bain.jpg"
              />

              <InclusionCard
                title="Salle de bain / WC"
                points={[
                  'WC, douche/baignoire, vasque, miroirs',
                  'Nettoyage + désinfection systématique',
                ]}
                img="/douche.jpg"
              />

              <InclusionCard
                title="Balcon"
                points={['Balayage/aspiration & lavage', 'Garde-corps & points de contact']}
                img="/balcon.jpg"
              />

              <InclusionCard
                title="Revêtements de sol"
                points={['Aspiration/balayage', 'Nettoyage adapté à chaque zone']}
                img="/revetement.jpg"
              />

              <InclusionCard
                title="Portes & fenêtres"
                points={['Poignées, cadres accessibles', 'Vitres intérieures accessibles']}
                img="/porte-fenetre.jpg"
              />
            </div>
          </div>
        </section>

        {/* NON INCLUS */}
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Non inclus (ajoutables en option)
              </h2>
              <p className="mt-2 text-slate-600">Prestations nécessitant matériel spécialisé.</p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Débarras encombrants',
                'Nettoyage cave',
                'Lessivage des murs',
                'Traces de peinture',
                'Électroménagers internes',
                'Nettoyage canapé / tapis / matelas',
                'Parasites & moisissures',
                'Shampouinage moquette',
                'Cristallisation marbre',
                'Matières dangereuses',
              ].map((t) => (
                <div key={t} className="rounded-xl border bg-white p-4">
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REMARQUES + FRÉQUENCE */}
        <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
                Conditions & remarques
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li>Electricité & eau indispensables.</li>
                <li>Inspection le jour J pour ajustement tarifaire si besoin.</li>
                <li>Placards & tiroirs non vidés sans demande préalable.</li>
                <li>Élimination des taches non garantie selon nature & ancienneté.</li>
                <li>Prestations non garanties en cas de travaux.</li>
                <li>Aide au déplacement des meubles : sans responsabilité.</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border bg-white">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                  Fréquence recommandée
                </h3>
              </div>
              <div className="p-6 grid gap-4">
                <FreqRow label="Usage standard" value="1× / 2–4 semaines" />
                <FreqRow label="Famille / animaux" value="1× / 1–2 semaines" />
                <FreqRow label="Avant/après événements" value="À la demande" />
              </div>
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Résultats en images
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {['/cuisine-salle-de-bain.jpg', '/douche.jpg'].map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Résultat de nettoyage d'appartement – avant/après"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEVIS */}
        <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border bg-white p-6 md:p-8">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                  Demander un devis personnalisé
                </h3>

                <form className="mt-6 grid md:grid-cols-2 gap-4">
                  <input className="input" placeholder="Adresse / Ville" />
                  <input className="input" placeholder="Surface (m²)" />
                  <input className="input" placeholder="Nombre de chambres" />
                  <input className="input" placeholder="Nombre de salles de bain" />
                  <input className="input" placeholder="Nombre de cuisines" />
                  <input className="input" placeholder="Nombre de WC" />
                  <textarea className="input md:col-span-2" placeholder="Instructions particulières" />

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
                <Image src="/logo-healthy-home.png" alt="Option Signature Latalia" width={36} height={36} />
                <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                  Option Signature Latalia
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-700">
                Produits naturels faits maison, moins d’exposition toxique, parfums d’huiles essentielles.
              </p>
            </aside>
          </div>
        </section>

        {/* === HSE SECTION (Gardée comme demandée) === */}
        <HSEAppartementSection />

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Questions fréquentes
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Faq q="Nettoyez-vous l’intérieur des placards ?" a="Uniquement sur demande préalable." />
              <Faq q="Les taches sont-elles garanties ?" a="Non, cela dépend de l’ancienneté & nature." />
              <Faq q="Déplacement de meubles ?" a="Oui, sur demande, sans responsabilité en cas de dommage." />
              <Faq q="Produits naturels disponibles ?" a="Oui via l’option Signature Latalia." />
            </div>
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

/* ---------- COMPOSANTS ---------- */

function Usp({ dotColor, text }: { dotColor: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dotColor }} />
      <p className="text-slate-700">{text}</p>
    </div>
  );
}

interface InclusionProps {
  title: string;
  points: string[];
  img: string;
}

function InclusionCard({ title, points, img }: InclusionProps) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white border">
      <div className="relative aspect-[16/9]">
        <Image src={img} alt={`Prestation : ${title}`} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold" style={{ color: brand.navy }}>
          {title}
        </h4>

        <ul className="mt-3 space-y-2 text-slate-700">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brand.teal }} />
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

/* ---------- HSE SUBCOMPONENT ---------- */

function HSEAppartementSection() {
  return (
    <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
      <div className="container mx-auto px-4 lg:px-8">

        <header className="mb-10 flex items-center gap-4">
          <Image src="/hse-icon.png" alt="Icône HSE premium" width={48} height={48} />
          <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
            Contrat & Check-list HSE
          </h2>
        </header>

        <p className="text-slate-600 max-w-2xl mb-6">
          Paramètres contractuels et exigences Hygiène — Sécurité — Environnement à valider avant démarrage.
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
              Paramètres contractuels
            </h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex justify-between">
                <span>Jours de passage</span>
                <span className="px-2 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: brand.navy }}>
                  Lun → Sam / Dim
                </span>
              </li>

              <li className="flex justify-between">
                <span>Créneaux horaires</span>
                <span className="px-2 py-1 rounded-md border text-xs text-center">
                  8h–19h<br />8h–13h
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border p-4">
              <p className="text-sm font-semibold" style={{ color: brand.navy }}>Options possibles</p>
              <ul className="mt-2 text-sm space-y-1">
                <li>• Shampouinage moquette</li>
                <li>• Vitrerie</li>
                <li>• Débarras d’encombrants</li>
                <li>• Cristallisation marbre</li>
                <li>• Nettoyage canapé / tapis / rideaux</li>
                <li>• Nettoyage haute pression</li>
                <li>• Désinfection vapeur (120°)</li>
                <li>• Lustrage parquet</li>
              </ul>

              <a href="/signature-latalia" className="text-xs underline block mt-3 text-[#0B3454]">
                Option “Client Healthy” →
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
              Check-list HSE (avant démarrage)
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Accès / Badges / Clés transmis', 'Procédure remise / retour consignée'],
                ['EPI requis', 'Blouse, gants, chasuble, chaussures…'],
                ['Produits autorisés / interdits', 'Allergènes, solvants, parfums'],
                ['Tri & évacuation déchets', 'DIB, recyclables'],
                ['Contacts d’urgence affichés', 'Interne + prestataires'],
                ['Consignes Alarmes / SSI', 'Armement, désarmement, zones'],
                ['Zones sensibles identifiées', 'SDB, cuisine, sanitaires'],
                ['Plan d’évacuation connu', 'Point de rassemblement'],
              ].map(([label, hint]) => (
                <label key={label} className="flex items-start gap-3 rounded-xl border px-4 py-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-slate-500">{hint}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
