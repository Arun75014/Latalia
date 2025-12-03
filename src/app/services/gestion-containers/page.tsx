/* src/app/services/gestion-containers/page.tsx */
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

export default function GestionContainersPage() {
  return (
    <>
      {/* 🔥 SEO OPTI */}
      <Head>
        <title>Gestion des containers — Sortie & Rentrée des bacs | Paris & IDF | Latalia Propreté</title>

        <meta
          name="description"
          content="Service professionnel de gestion des containers à Paris & Île-de-France : sortie et rentrée des bacs, tri sélectif conforme, nettoyage local poubelles, affichage, suivi incidents."
        />

        <meta
          name="keywords"
          content="gestion des containers, sortie des bacs, rentrée des bacs, local poubelles, tri selectif Paris, gestion poubelles IDF, société de nettoyage Paris"
        />

        <meta property="og:title" content="Gestion des containers — Paris & IDF | Latalia Propreté" />
        <meta
          property="og:description"
          content="Gestion fiable des bacs : sortie/rentrée selon mairie, tri respecté, local entretenu, désodorisation et affichage pour résidents. Paris & Île-de-France."
        />
        <meta property="og:image" content="/bennes_bis.jpeg" />
        <meta property="og:type" content="service" />

        <link rel="canonical" href="https://latalia-proprete.fr/services/gestion-containers" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/bennes_bis.jpeg"
              alt="Gestion des containers et sortie des bacs à Paris"
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
              Gestion des containers – Paris & IDF
            </h1>

            <p className="mt-4 max-w-2xl text-white/90">
              Sortie & rentrée des bacs selon les tournées municipales, maintien d’un local propre,
              tri respecté et communication résidents. Service fiable, ponctuel et discret.
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
            <Usp dotColor={brand.rose} text="Respect strict des jours & horaires de collecte" />
            <Usp dotColor={brand.teal} text="Local & bacs tenus propres (désodorisation possible)" />
            <Usp dotColor={brand.navy} text="Suivi du tri & affichage visible pour résidents" />
          </div>
        </section>

        {/* INCLUS */}
        <section id="inclus" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Prestations incluses
              </h2>
              <p className="mt-2 text-slate-600">
                Un cycle complet pour des containers gérés sans frictions et un local toujours propre.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <InclusionCard
                title="Sortie & rentrée des bacs"
                points={[
                  'Sortie des bacs aux jours/horaires de collecte',
                  'Rentrée immédiate après passage municipal',
                ]}
                img="/bennes_bis.jpeg"
              />
              <InclusionCard
                title="Tri & contrôle"
                points={[
                  'Respect strict des consignes de tri',
                  'Répartition manuelle si nécessaire',
                ]}
                img="/tri.png"
              />
              <InclusionCard
                title="Local poubelles / zones de roulage"
                points={[
                  'Balayage / aspiration des zones',
                  'Désodorisation ponctuelle & aération',
                ]}
                img="/bennes.jpeg"
              />
              <InclusionCard
                title="Information & suivi"
                points={[
                  'Affichage jours de collecte',
                  'Remontée d’incidents (bacs cassés, débordement)',
                ]}
                img="/suivi-containers.jpg"
              />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Ces prestations constituent la base du service de gestion des bacs et du local associé.
            </p>
          </div>
        </section>

        {/* NON INCLUS */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>Non inclus (ajoutables en option)</h2>
              <p className="mt-2 text-slate-600">
                Interventions nécessitant matériel ou compétences spécifiques.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Lavage haute pression des sols',
                'Désinfection approfondie des bacs',
                'Traitement anti-nuisibles',
                'Évacuation d’encombrants',
                'Matières dangereuses / biologiques',
                'Collectes hors planning municipal',
                'Débouchage de caniveau',
              ].map((t) => (
                <div key={t} className="rounded-xl border bg-white p-4">
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONDITIONS + FRÉQUENCES */}
        <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>Conditions & remarques</h3>
              <ul className="space-y-3 text-slate-700">
                <li>Accès local requis (badge/clé fourni par syndic).</li>
                <li>Respect du règlement municipal du tri & collecte.</li>
                <li>Volumes exceptionnels = prévenir à l’avance.</li>
                <li>Aucun déplacement possible si accès obstrué/dangereux.</li>
                <li>Horaires adaptés au règlement intérieur de l’immeuble.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>Fréquences recommandées</h3>
              </div>

              <div className="p-6 grid gap-4">
                <FreqRow label="Bacs OM" value="Selon mairie (souvent 2× / semaine)" />
                <FreqRow label="Recyclables / Verre" value="1× à 2× / semaine" />
                <FreqRow label="Nettoyage local" value="1× à 4× / mois" />
                <FreqRow label="Désodorisation" value="Mensuel / à la demande" />
              </div>
            </div>
          </div>
        </section>

        {/* GALERIE */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>Résultats en images</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {['/images/containers-g1.jpg', '/images/containers-g2.jpg', '/images/containers-g3.jpg'].map((src) => (
                <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={src}
                    alt="Gestion des containers — avant/après"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* DEVIS */}
        <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
            <DevisForm />
            <SignatureSidebar />
          </div>
        </section>

        {/* CALENDRIER MUNICIPAL */}
        <CalendrierMunicipal />

        {/* HSE */}
        <HSESectionContainers />

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>Questions fréquentes</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Faq q="Gérez-vous les jours fériés ?" a="Oui, adaptation selon le planning de collecte de la ville." />
              <Faq q="Pliez-vous les cartons ?" a="Oui, dans la limite des volumes raisonnables." />
              <Faq q="Lavez-vous l’intérieur des bacs ?" a="Oui, en option (désinfection complète)." />
              <Faq q="Intervenez-vous tôt ?" a="Oui, selon règles de l’immeuble et de la mairie." />
            </div>
          </div>
        </section>

        <footer><Footer /></footer>
      </main>
    </>
  );
}

/* ----------------- Sous-composants ----------------- */

function Usp({ dotColor, text }: { dotColor: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dotColor }} />
      <p className="text-slate-700">{text}</p>
    </div>
  );
}

function InclusionCard({ title, points, img }: { title: string; points: string[]; img: string }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white border">
      <div className="relative aspect-[16/9]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold" style={{ color: brand.navy }}>{title}</h4>

        <ul className="mt-3 text-slate-700 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brand.teal }} />
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
      <span className="px-3 py-1 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: brand.navy }}>
        {value}
      </span>
    </div>
  );
}

function CalendarRow({
  label,
  color,
  days,
}: {
  label: string;
  color: string;
  days: number[];
}) {
  return (
    <tr className="border-b">
      <td className="p-3 font-medium text-slate-700">{label}</td>
      {days.map((d, i) => (
        <td key={i} className="p-3 text-center">
          {d === 1 && <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: color }} />}
        </td>
      ))}
    </tr>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border p-5 bg-white">
      <summary className="cursor-pointer list-none font-semibold flex justify-between">
        <span>{q}</span>
        <span className="transition group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-slate-600">{a}</p>
    </details>
  );
}

/* 🧩 Devis Form */
function DevisForm() {
  return (
    <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8">
      <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
        Demander un devis personnalisé
      </h3>

      <form className="mt-6 grid md:grid-cols-2 gap-4">
        <input className="input" placeholder="Adresse / Ville" />
        <input className="input" placeholder="Nombre de foyers" />
        <input className="input" placeholder="Bacs OM" />
        <input className="input" placeholder="Bacs Recyclables" />
        <input className="input" placeholder="Bacs Verre / Bio" />
        <input className="input" placeholder="Jours de collecte" />
        <textarea className="input md:col-span-2" placeholder="Accès, contraintes horaires…" />

        <button
          type="submit"
          className="md:col-span-2 px-5 py-3 rounded-md text-white font-semibold"
          style={{ backgroundColor: brand.deepBlue }}
        >
          Envoyer ma demande
        </button>
      </form>
    </div>
  );
}

/* 🧩 Sidebar Signature Latalia */
function SignatureSidebar() {
  return (
    <aside className="rounded-2xl border bg-white p-6 md:p-8">
      <div className="flex items-center gap-3">
        <Image src="/logo-healthy-home.png" alt="Signature Latalia" width={36} height={36} />
        <p className="text-sm font-semibold" style={{ color: brand.navy }}>Option Signature Latalia</p>
      </div>
      <p className="mt-3 text-sm text-slate-700">
        Alternative plus saine : produits naturels faits maison, meilleure gestion olfactive du local,
        exposition réduite aux détergents agressifs.
      </p>
    </aside>
  );
}

/* 🧩 Calendrier municipal */
function CalendrierMunicipal() {
  return (
    <section className="py-16 bg-white border-t border-b" style={{ backgroundColor: brand.bgSoft }}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-8" style={{ color: brand.navy }}>
          Contrat & Calendrier municipal
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
              Jours de collecte — exemple ville / arrondissement
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    {['Flux', 'L', 'M', 'M', 'J', 'V', 'S', 'D'].map((h) => (
                      <th key={h} className="p-3 text-left text-slate-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <CalendarRow label="Ordures ménagères" color={brand.rose} days={[1, 0, 1, 0, 1, 0, 0]} />
                  <CalendarRow label="Recyclables" color={brand.teal} days={[0, 1, 0, 1, 0, 0, 0]} />
                  <CalendarRow label="Verre" color={brand.navy} days={[0, 0, 1, 0, 0, 0, 0]} />
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500">Planning adaptable selon mairie et syndic.</p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
              Informations contractuelles
            </h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Sortie & rentrée aux jours municipaux.</li>
              <li>• Nettoyage du local possible.</li>
              <li>• Suivi bacs cassés / débordements.</li>
              <li>• Désodorisation (option Signature Latalia).</li>
              <li>• Interventions additionnelles sur demande.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🧩 HSE Section spécifique Containers */
function HSESectionContainers() {
  return (
    <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-10 flex items-center gap-4">
          <Image src="/hse-icon.png" alt="Icône HSE premium" width={48} height={48} />
          <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
            Contrat & Check-list HSE
          </h2>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
              Paramètres contractuels
            </h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex justify-between">
                <span>Jours de passage</span>
                <span className="px-2 py-1 rounded-full text-xs text-white" style={{ backgroundColor: brand.navy }}>
                  Lun → Dim
                </span>
              </li>

              <li className="flex justify-between">
                <span>Créneaux horaires</span>
                <span className="px-2 py-1 rounded-md border text-xs text-center">
                  6h30 → 21h00
                </span>
              </li>

              <li className="flex justify-between">
                <span>Entreprise</span>
                <span className="text-xs leading-tight border px-2 py-1 rounded-md">
                  Lattana Nettoyage<br />
                  SIRET 832 426 001 00018<br />
                  Assurance MAAF 175013322 X 001
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
              Check-list HSE (avant démarrage)
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Accès / Badges / Clés transmis', 'Procédure consignée'],
                ['EPI requis', 'Gants, chasuble, chaussures…'],
                ['Consignes SSI', 'Alarmes, armement, zones'],
                ['Tri & déchets', 'DIB, recyclables'],
                ['Produits autorisés/interdits', 'Allergènes, solvants'],
                ['Zones sensibles identifiées', 'Local poubelles, cour'],
                ['Contacts d’urgence', 'Affichés dans local'],
              ].map(([label, hint]) => (
                <label key={label} className="flex gap-3 rounded-xl border px-4 py-3 cursor-pointer hover:bg-slate-50">
                  <input type="checkbox" className="mt-1 h-4 w-4" />
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
