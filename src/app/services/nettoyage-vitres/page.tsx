'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/FooterSection';

const brand = {
  teal: '#54beea',
  navy: '#10324F',
  rose: '#c0d148',
  deepBlue: '#003C55',
  bgSoft: '#F7FBFD',
};

export default function NettoyageVitresPage() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/lavage-vitre.jpg"
            alt="Nettoyage de vitres professionnelles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-white">
          <span className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4" style={{ backgroundColor: brand.teal, color: brand.navy }}>
            Services de Nettoyage
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
            Nettoyage professionnel de vitres
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Intérieur et extérieur, mouilleur, raclette, sécurité assurée pour les hauteurs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#devis"
              className="px-5 py-3 rounded-md text-white font-semibold"
              style={{ backgroundColor: brand.deepBlue }}>
              Demander un devis
            </Link>
            <a
              href="#inclus"
              className="px-5 py-3 rounded-md font-semibold border"
              style={{ borderColor: 'white' }}>
              Voir les prestations
            </a>
          </div>
        </div>
      </section>

      {/* Inclus */}
      <section id="inclus" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8">
          <header className="mb-10">
            <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
              Prestations incluses
            </h2>
            <p className="mt-2 text-slate-600">
              Nettoyage complet intérieur / extérieur des vitres avec mouilleur et raclette.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <InclusionCard
              title="Méthodologie"
              points={[
                'Utilisation de mouilleur et raclette',
                'Nettoyage intérieur et extérieur des surfaces vitrées',
                'Adapté à tout type de vitrage classique'
              ]}
              img="/nettoyage-interieur.jpg"
            />
            <InclusionCard
              title="Sécurité et accessibilité"
              points={[
                'Utilisation de manches télescopiques pour grandes hauteurs',
                'Intervention seulement si accès sécurisé garanti',
                'Respect des normes d’intervention en hauteur'
              ]}
              img="/manche-telescopique.jpg"
            />
          </div>
        </div>
      </section>

      {/* Non inclus */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <header className="mb-10">
            <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
              Non inclus
            </h2>
            <p className="mt-2 text-slate-600">
              Les éléments suivants ne sont pas couverts par cette prestation.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {["Enlèvement des étiquettes", "Traces de colle ou peinture", "Nettoyage enseigne ou façade", "Déplacement de mobilier", "Déplacement d'affiches/vitrines"].map((t) => (
              <div key={t} className="rounded-xl border bg-white p-4">
                <p className="text-slate-700">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
              Conditions & remarques
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>Les vitres au-delà de la hauteur d’homme sont nettoyées à la perche télescopique.</li>
              <li>Les vitres doivent être accessibles et sécurisées pour intervention.</li>
              <li>Prestation non garantie si les conditions de sécurité ne sont pas remplies.</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-white">
            <div className="p-6 border-b">
              <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                Fréquence recommandée
              </h3>
              <p className="text-slate-600 mt-1">
                Pour un rendu optimal, un nettoyage régulier est conseillé.
              </p>
            </div>
            <div className="p-6">
              <FreqRow label="Entretien vitres" value="Minimum 1x/semaine" />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire devis */}
      <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-white p-6 md:p-8">
              <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                Demander un devis personnalisé
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Renseignez les éléments nécessaires pour planifier votre prestation.
              </p>

              <form className="mt-6 grid md:grid-cols-2 gap-4">
                <input className="input" placeholder="Code postal / Ville" />
                <input className="input" placeholder="Nombre de vitrages / rideaux" />
                <input className="input" placeholder="Dimensions approximatives (en cm)" />
                <textarea className="input md:col-span-2" placeholder="Commentaires / contraintes d’accès" />
                <button type="submit" className="md:col-span-2 px-5 py-3 rounded-md text-white font-semibold" style={{ backgroundColor: brand.deepBlue }}>
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>

          <aside className="rounded-2xl border bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image src="/logo-healthy-home.png" alt="logo latalia" width={36} height={36} />
              <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                Option &quot;Signature Latalia&quot;
              </p>
            </div>
            <p className="mt-3 text-sm text-slate-700">
              Produits biodégradables & moins d’exposition chimique pour plus de sécurité.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Disponible en option ponctuelle ou contrat régulier.
            </p>
          </aside>
        </div>
      </section>

<section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
  <div className="container mx-auto px-4 lg:px-8">

    {/* HEADER */}
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
          Contrat & Check-list HSE — Nettoyage Vitres
        </h2>
        <p className="mt-1 text-slate-600 max-w-2xl">
          Paramètres contractuels et exigences Hygiène-Sécurité-Environnement pour une prestation
          de nettoyage de vitres sécurisée, conforme et adaptée à votre bâtiment.
        </p>
      </div>
    </header>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* PARAMÈTRES CONTRACTUELS */}
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
            <span>Option possible</span>
            <span className="px-2 py-1 rounded-md border text-xs">Voir ci-dessous</span>
          </li>
        </ul>

        {/* Options */}
        <div className="mt-6 rounded-xl border p-4 bg-white">
          <p className="text-sm font-semibold" style={{ color: brand.navy }}>
            Options possibles
          </p>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            <li>• Désinfection vapeur 120°</li>
            <li>• Nettoyage haute pression</li>
            <li>• Nettoyage du local</li>
            <li>• Produits naturels <em>Signature Latalia</em> (option Healthy)</li>
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

      {/* CHECK-LIST HSE */}
      <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold" style={{ color: brand.navy }}>
            Check-list HSE (avant démarrage)
          </h3>
          <small className="text-slate-500">Coche informative</small>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Accès / Badges / Clés transmis",
            "Procédure remise / retour consignée",
            "EPI requis : blouse, gants, chasuble, pantalon, chaussures",
            "Produits autorisés / interdits : allergènes, solvants, parfums",
            "Tri & évacuation déchets clarifiés — DIB, recyclables",
            "Contacts d’urgence affichés (interne + prestataires)",
            "Consignes Alarmes / SSI validées (armement, codes, zones)",
            "Local de stockage matériel défini",
            "Ventilation, point d’eau, alimentation électrique",
            "Plan d’évacuation & issues connus",
            "Point de rassemblement",
          ].map((label) => (
            <label
              key={label}
              className="flex items-start gap-3 rounded-xl border px-4 py-3 hover:bg-slate-50 cursor-pointer"
            >
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">{label}</span>
            </label>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "#F1F5F9", color: "#475569" }}
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
 <Footer />
    </main>
    </>
  );
}

function InclusionCard({ title, points, img }: { title: string; points: string[]; img: string }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white border">
      <div className="relative aspect-[16/9]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold" style={{ color: '#10324F' }}>{title}</h4>
        <ul className="mt-3 space-y-2 text-slate-700">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#54beea' }} />
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
      <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#10324F' }}>
        {value}
      </span>
    </div>
  );
}
