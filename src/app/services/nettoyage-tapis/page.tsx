/* src/app/services/nettoyage-tapis/page.tsx */
'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/FooterSection';
import Navbar from '@/app/components/Navbar';

/* ---- PALETTE ---- */
const brand = {
  teal: '#54beea',
  navy: '#10324F',
  rose: '#c0d148',
  deepBlue: '#003C55',
  bgSoft: '#F7FBFD',
};

export default function NettoyageTapisPage() {
  return (
    <>
      {/* 🔥 SEO MINIMAL POUR DÉPLOIEMENT */}
      <Head>
        <title>Nettoyage professionnel de tapis | Paris & Île-de-France | Latalia Propreté</title>

        <meta
          name="description"
          content="Nettoyage professionnel de tapis à Paris : aspiration HEPA, vapeur sèche, désinfection, inspection préalable. Sans risque pour les fibres. Devis rapide."
        />

        <meta
          name="keywords"
          content="nettoyage tapis paris, nettoyage tapis professionnel, vapeur sèche tapis, nettoyage moquette idf, latalia propreté"
        />

        <meta property="og:title" content="Nettoyage professionnel de tapis — Paris & IDF" />
        <meta
          property="og:description"
          content="Aspiration profonde, vapeur sèche, désinfection et inspection préalable. Service professionnel sans risque pour les fibres."
        />
        <meta property="og:image" content="/images/tapis-hero.jpg" />
        <meta property="og:type" content="service" />

        <link rel="canonical" href="https://latalia-proprete.fr/services/nettoyage-tapis" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/nettoyage-tapis.jpg"
              alt="Tapis professionnel nettoyé"
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
              Services de Nettoyage
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
              Nettoyage professionnel de tapis
            </h1>

            <p className="mt-4 max-w-2xl text-white/90">
              Aspiration profonde, vapeur sèche surchauffée, inspection préalable, sans risque pour les fibres.
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
            <Usp dotColor={brand.teal} text="Aspiration profonde et filtration HEPA" />
            <Usp dotColor={brand.rose} text="Traitement vapeur sèche surchauffée" />
            <Usp dotColor={brand.navy} text="Inspection du tissu avant intervention" />
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
                Nettoyage méticuleux avec solutions professionnelles et contrôle post-intervention.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <InclusionCard
                title="Préparation & Aspiration"
                points={[
                  'Évaluation/inspection du tissu',
                  'Aspiration avec filtration HEPA',
                ]}
                img="/nettoyage-tapis.jpg"
              />
              <InclusionCard
                title="Traitement désinfectant"
                points={[
                  'Vapeur sèche haute température',
                  'Présentation du filtre post-nettoyage',
                  'Évacuation responsable des déchets',
                ]}
                img="/desinfectant-tapis.jpg"
              />
            </div>
          </div>
        </section>

        {/* NON INCLUS */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Non inclus (ajoutables en option)
              </h2>
              <p className="mt-2 text-slate-600">
                Les éléments ci-dessous ne sont pas couverts par défaut et nécessitent un devis séparé.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Déplacement de mobilier',
                'Shampoing des moquettes',
                'Réparation de fibres endommagées',
                'Remplacement du tapis ou moquette',
              ].map((t) => (
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
                <li>Les taches ou décolorations ne sont pas garanties à 100%.</li>
                <li>L’odeur peut persister selon le tissu ou l’ancienneté des salissures.</li>
                <li>Durée de séchage estimée : 6 à 8 heures. Ne pas marcher sur le tapis.</li>
                <li>Un traitement à sec sera recommandé si la fibre est trop fragile.</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border bg-white">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                  Fréquences recommandées
                </h3>
                <p className="text-slate-600 mt-1">
                  Pour conserver des tapis sains et durables, un nettoyage semestriel est conseillé.
                </p>
              </div>
              <div className="p-6">
                <FreqRow label="Nettoyage professionnel" value="Tous les 6 mois" />
                <FreqRow label="Traitement vapeur sèche" value="À chaque intervention" />
              </div>
            </div>

          </div>
        </section>

        {/* FORMULAIRE DEVIS */}
        <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">
              <div className="rounded-2xl border bg-white p-6 md:p-8">
                <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                  Demander un devis personnalisé
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Précisez les éléments essentiels pour adapter l’intervention.
                </p>

                <form className="mt-6 grid md:grid-cols-2 gap-4">
                  <input className="input" placeholder="Code postal / Ville" />
                  <input className="input" placeholder="Dimensions du tapis (cm)" />
                  <input className="input" placeholder="Nombre de tapis" />
                  <input className="input" placeholder="Type de fibre (laine, synthétique…)" />
                  <textarea className="input md:col-span-2" placeholder="Commentaires / besoins spécifiques" />
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
                <Image src="/logo-healthy-home.png" alt="" width={36} height={36} />
                <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                  Option “Signature Latalia”
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-700">
                Produits naturels faits maison, moins d’exposition chimique, efficacité & confort olfactif.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Disponible en option ponctuelle ou intégrée au contrat.
              </p>
            </aside>

          </div>
        </section>

        {/* HSE PREMIUM */}
        <section className="py-12" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8">

            <header className="mb-10 flex items-center gap-4">
              <Image
                src="/hse-icon.png"
                alt="Icône HSE premium"
                width={48}
                height={48}
                className="opacity-90"
              />

              <div>
                <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                  Contrat & Check-list HSE Premium
                </h2>
                <p className="mt-1 text-slate-600 max-w-2xl">
                  Paramètres contractuels et obligations Hygiène-Sécurité-Environnement pour un service conforme, sécurisé et adapté à vos besoins.
                </p>
              </div>
            </header>

            <div className="grid lg:grid-cols-3 gap-10">

              {/* PARAMÈTRES */}
              <div className="lg:col-span-1 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
                  Paramètres contractuels
                </h3>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center justify-between">
                    <span>Jours de passage</span>
                    <span className="px-2 py-1 rounded-md border text-xs">Lun au Sam / Dim</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Créneaux horaires</span>
                    <span className="px-2 py-1 rounded-md border text-xs">8h–19h / 8h–13h</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>SIRET</span>
                    <span className="px-2 py-1 rounded-md border text-xs">832 426 001 00018</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Assurance</span>
                    <span className="px-2 py-1 rounded-md border text-xs">Maaf n°175013322 X 001</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border p-4 bg-white">
                  <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                    Options possibles
                  </p>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    <li>• Désinfection vapeur 120°</li>
                    <li>• Nettoyage du local</li>
                    <li>• Produits naturels <em>Signature Latalia</em></li>
                  </ul>
                </div>

                <a
                  href="#signature"
                  className="inline-block mt-6 px-5 py-3 rounded-md text-white font-semibold"
                  style={{ backgroundColor: brand.deepBlue }}
                >
                  Choisir l’option Healthy
                </a>
              </div>

              {/* CHECK-LIST */}
              <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: brand.navy }}>
                    Check-list HSE (avant démarrage)
                  </h3>
                  <small className="text-slate-500">Coche informative</small>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Accès / Badges / Clés transmis',
                    'Procédure remise / retour consignée',
                    'EPI requis : blouse, gants, chasuble, pantalon, chaussures',
                    'Produits autorisés / interdits : allergènes, solvants, parfums',
                    'Tri & évacuation des déchets : DIB, recyclables',
                    'Contacts d’urgence affichés',
                    'Consignes Alarmes / SSI validées (codes, zones)',
                    'Plan d’évacuation & issues connus',
                    'Point de rassemblement identifié',
                  ].map((label) => (
                    <label
                      key={label}
                      className="flex items-start gap-3 rounded-xl border px-4 py-3 hover:bg-slate-50 cursor-pointer"
                    >
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                      <span className="text-sm text-slate-700">{label}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#F1F5F9', color: '#475569' }}
                  >
                    Checklist à compléter avant le 1er passage
                  </span>
                  <a
                    href="#devis"
                    className="px-3 py-2 rounded-md text-sm font-semibold border hover:bg-slate-50"
                  >
                    Nous transmettre vos consignes
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Questions fréquentes
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Faq q="Les taches seront-elles totalement supprimées ?" a="Cela dépend du type de tâche et de l'ancienneté. Certaines traces peuvent persister malgré un nettoyage professionnel." />
              <Faq q="Puis-je marcher sur le tapis juste après ?" a="Il faut attendre 6 à 8h de séchage complet pour un résultat optimal." />
              <Faq q="Le traitement est-il adapté à tous les tissus ?" a="Nous inspectons chaque fibre. Si la vapeur est trop risquée, un nettoyage à sec sera recommandé." />
              <Faq q="Utilisez-vous des produits chimiques ?" a="Nos produits sont biodégradables et l’option 'Signature Latalia' permet d’éviter tout produit chimique." />
            </div>
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

function InclusionCard({ title, points, img }: { title: string; points: string[]; img: string }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white border">
      <div className="relative aspect-[16/9]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold" style={{ color: brand.navy }}>{title}</h4>
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
      <summary className="cursor-pointer list-none font-semibold flex justify-between text-slate-800">
        <span>{q}</span>
        <span className="ml-4 transition group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-slate-600">{a}</p>
    </details>
  );
}
