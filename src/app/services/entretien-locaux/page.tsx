/* src/app/services/entretien-locaux/page.tsx */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const brand = {
  teal: '#54beea',
  navy: '#10324F',
  rose: '#c0d148',
  deepBlue: '#003C55',
  bgSoft: '#F7FBFD',
};

export default function EntretienLocauxPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/locaux-hero.jpg"
            alt="Plateau de bureaux propre et lumineux"
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
            Entretien de locaux professionnels – Paris & IDF
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Bureaux, open-spaces, salles de réunion, espaces communs : un environnement sain
            et accueillant pour vos équipes et vos visiteurs, selon un planning adapté.
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

      {/* Ruban USP */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <Usp dotColor={brand.rose} text="Protocoles qualité & traçabilité des passages" />
          <Usp dotColor={brand.teal} text="Option produits naturels – Signature Latalia" />
          <Usp dotColor={brand.navy} text="Créneaux adaptés (avant/ou après horaires)" />
        </div>
      </section>

    {/* TYPES DE LOCAUX — sélection */}
    <section className="py-14">
    <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: brand.navy }}>
            Choisir votre type de local
        </h2>
        <p className="text-slate-600 mt-2">
            Des protocoles adaptés selon l’activité : bureaux commerciaux, salles de sport, pharmacies, cabinets médicaux, prêt-à-porter.
        </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {[
            { slug: 'bureaux-commerciaux', label: 'Bureaux commerciaux', img: '/images/type-bureaux.jpg' },
            { slug: 'salle-de-sport', label: 'Salle de sport', img: '/images/type-sport.jpg' },
            { slug: 'pharmacie', label: 'Pharmacie', img: '/images/type-pharmacie.jpg' },
            { slug: 'cabinet-medical', label: 'Cabinet médical', img: '/images/type-medical.jpg' },
            { slug: 'pret-a-porter', label: 'Prêt-à-porter', img: '/images/type-fashion.jpg' },
        ].map((t) => (
            <a
            key={t.slug}
            href={`/services/entretien-locaux/${t.slug}`}
            className="group relative overflow-hidden rounded-2xl border bg-white"
            >
            <div className="relative aspect-[4/3]">
                <Image src={t.img} alt={t.label} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: '#54beea', color: '#10324F' }}>
                Local spécifique
                </span>
                <h3 className="mt-2 text-white text-base font-semibold">{t.label}</h3>
            </div>
            </a>
        ))}
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
              Un socle complet pour des locaux propres au quotidien, modulable selon vos espaces.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <InclusionCard
              title="Espaces de travail"
              points={[
                'Dépoussiérage plans & mobiliers accessibles',
                'Points de contact : poignées, interrupteurs, rampes',
              ]}
              img="/images/locaux-bureaux.jpg"
            />
            <InclusionCard
              title="Salles de réunion / accueil"
              points={[
                'Tables, chaises, écrans (extérieur), vitrines & comptoirs',
                'Nettoyage des traces & finitions de présentation',
              ]}
              img="/images/locaux-salle-reunion.jpg"
            />
            <InclusionCard
              title="Circulations & sols"
              points={[
                'Aspiration/balayage puis nettoyage adapté au revêtement',
                'Escaliers & paliers, plinthes et recoins soignés',
              ]}
              img="/images/locaux-sols.jpg"
            />
            <InclusionCard
              title="Sanitaires"
              points={[
                'WC/urinoirs, lavabos, miroirs – nettoyage & désinfection',
                'Consommables (si fournis) : recharge & vérification',
              ]}
              img="/images/locaux-sanitaires.jpg"
            />
            <InclusionCard
              title="Espace cuisine / pause"
              points={[
                'Plans, éviers, façades extérieures & poignées',
                'Micro-ondes ext./int. léger (si vidé), tables & chaises',
              ]}
              img="/images/locaux-cuisine.jpg"
            />
            <InclusionCard
              title="Vitreries accessibles"
              points={[
                'Vitrages intérieurs accessibles, cloisons vitrées',
                'Encadrements & poignées (hors vitrerie en hauteur)',
              ]}
              img="/images/locaux-vitres.jpg"
            />
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Le détail peut varier selon vos contraintes d’accès, d’horaires et de sécurité.
          </p>
        </div>
      </section>

      {/* Non inclus */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <header className="mb-10">
            <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
              Non inclus (ajoutables sur devis)
            </h2>
            <p className="mt-2 text-slate-600">
              Interventions spécialisées, ponctuelles ou avec matériel spécifique.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Vitrerie en hauteur / nacelle',
              'Cristallisation du marbre',
              'Shampouinage moquette',
              'Lessivage des murs & plafonds',
              'Remise en état après travaux',
              'Traitement anti-nuisibles',
              'Débarras d’encombrants',
              'Nettoyage parkings / caves',
              'Matières dangereuses/biologiques',
            ].map((t) => (
              <div key={t} className="rounded-xl border bg-white p-4">
                <p className="text-slate-700">{t}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Ces options peuvent être intégrées à votre contrat ou programmées ponctuellement.
          </p>
        </div>
      </section>

      {/* Remarques & Fréquences */}
      <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
              Conditions & remarques
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>Accès aux locaux, alarmes et consignes HSE communiqués.</li>
              <li>Électricité & eau disponibles aux points prévus.</li>
              <li>Objets sensibles : signalement requis (pas de déplacement par défaut).</li>
              <li>Pas de garantie de résultat si travaux en cours.</li>
              <li>Stockage du matériel dans un local dédié (si possible).</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-white">
            <div className="p-6 border-b">
              <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                Fréquences recommandées
              </h3>
              <p className="text-slate-600 mt-1">
                À ajuster selon le trafic, l’activité et les attentes de vos équipes/clients.
              </p>
            </div>
            <div className="p-6 grid gap-4">
              <FreqRow label="Bureaux & open-spaces" value="2× à 5× / semaine" />
              <FreqRow label="Sanitaires" value="1× à 2× / jour selon affluence" />
              <FreqRow label="Salles de réunion" value="À chaque utilisation / quotidien" />
              <FreqRow label="Vitreries accessibles" value="Mensuel / Trimestriel" />
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
            Résultats en images
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['/images/locaux-g1.jpg', '/images/locaux-g2.jpg', '/images/locaux-g3.jpg'].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={src} alt="Entretien de locaux – résultats" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis + Signature */}
      <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-white p-6 md:p-8">
              <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                Demander un devis personnalisé
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Précisez vos volumes & contraintes pour une proposition ajustée.
              </p>

              <form className="mt-6 grid md:grid-cols-2 gap-4">
                <input className="input" placeholder="Entreprise / Site" />
                <input className="input" placeholder="Adresse / Ville" />
                <input className="input" placeholder="Surface (m²) / Nombre de postes" />
                <input className="input" placeholder="Nombre de sanitaires" />
                <input className="input" placeholder="Jours & créneaux souhaités" />
                <input className="input" placeholder="Accès / Alarmes / Consignes" />
                <textarea className="input md:col-span-2" placeholder="Espaces spécifiques (cuisine, showroom, etc.)" />
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
              Même niveau d’exigence, avec des produits naturels élaborés par nos soins.
              Confort olfactif & réduction d’exposition aux substances agressives.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Disponible en contrat ou ponctuellement sur simple demande.
            </p>
          </aside>
        </div>
      </section>
{/* CONTRAT + CHECK-LIST HSE */}
<section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
  <div className="container mx-auto px-4 lg:px-8">
    <header className="mb-10">
      <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
        Contrat & Check-list HSE
      </h2>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Formalisez les points clés du contrat et vérifiez les exigences Hygiène-Sécurité-Environnement
        avant le démarrage des prestations.
      </p>
    </header>

    <div className="grid lg:grid-cols-3 gap-10">
      {/* CONTRAT — récap & options */}
      <div className="lg:col-span-1 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
        <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
          Paramètres contractuels
        </h3>

        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-center justify-between">
            <span>Jours de passage</span>
            <span className="px-2 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: brand.navy }}>
              L • M • M • J • V
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span>Créneau horaire</span>
            <span className="px-2 py-1 rounded-md border text-xs">Matin (7h–9h)</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Périmètre</span>
            <span className="px-2 py-1 rounded-md border text-xs">Bureaux, Salles, Sanitaires</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Vitrerie accessible</span>
            <span className="px-2 py-1 rounded-md border text-xs">Mensuel</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Consommables</span>
            <span className="px-2 py-1 rounded-md border text-xs">À la charge du client</span>
          </li>
        </ul>

        <div className="mt-6 rounded-xl border p-4 bg-white">
          <p className="text-sm font-semibold" style={{ color: brand.navy }}>
            Options possibles
          </p>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            <li>• Produits naturels <em>Signature Latalia</em></li>
            <li>• Shampouinage moquette ponctuel</li>
            <li>• Vitrerie en hauteur / nacelle</li>
            <li>• Débarras & urgences</li>
          </ul>
        </div>

        <a
          href="#devis"
          className="inline-block mt-6 px-5 py-3 rounded-md text-white font-semibold"
          style={{ backgroundColor: brand.deepBlue }}
        >
          Mettre à jour mon contrat
        </a>
      </div>

      {/* CHECK-LIST HSE */}
      <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold" style={{ color: brand.navy }}>
            Check-list HSE (avant démarrage)
          </h3>
          <small className="text-slate-500">État local (non sauvegardé)</small>
        </div>

        <HseChecklist />
      </div>
    </div>
  </div>
</section>

      {/* FAQ courte */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
            Questions fréquentes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Faq q="Intervenez-vous en horaires décalés ?" a="Oui, tôt le matin, en journée discrète ou le soir, selon vos contraintes." />
            <Faq q="Fournissez-vous les consommables ?" a="Sur demande : papier, savon, essuie-mains, sacs… avec suivi des stocks." />
            <Faq q="Gérez-vous les badges/clefs ?" a="Oui, via une procédure sécurisée validée en amont avec vos équipes." />
            <Faq q="Pouvez-vous traiter les urgences ?" a="Oui, nous prévoyons des passages exceptionnels en cas d’incident." />
          </div>
        </div>
      </section>
    </main>
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

function InclusionCard({
  title,
  points,
  img,
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

function HseChecklist() {
  const items: { key: string; label: string; hint?: string }[] = [
    { key: 'acces', label: 'Accès/Badges/Clés transmis', hint: 'Procédure remise/retour consignée' },
    { key: 'alarm', label: 'Consignes Alarmes/SSI validées', hint: 'Armement/désarmement, codes, zones' },
    { key: 'epi', label: 'EPI requis connus', hint: 'Gants, lunettes, chaussures S3…' },
    { key: 'zones', label: 'Zones sensibles identifiées', hint: 'Serveurs, labo, showroom, archives' },
    { key: 'produits', label: 'Produits autorisés/interdits précisés', hint: 'Allergènes, parfums, solvants' },
    { key: 'stock', label: 'Local de stockage matériel défini', hint: 'Ventilation, point d’eau, élec.' },
    { key: 'dechets', label: 'Tri & évacuation déchets clarifiés', hint: 'Bac DIB, recyclables, DASRI si besoin' },
    { key: 'evac', label: 'Plan d’évacuation & issues connus', hint: 'Points de rassemblement' },
    { key: 'contacts', label: 'Contacts d’urgence affichés', hint: 'Interne + prestataires critiques' },
  ];

  // état local (non persistant)
  const [state, setState] = useState<Record<string, boolean>>(
    Object.fromEntries(items.map(i => [i.key, false]))
  );

  const allDone = Object.values(state).every(Boolean);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it) => (
          <label
            key={it.key}
            className="flex items-start gap-3 rounded-xl border px-4 py-3 hover:bg-slate-50 cursor-pointer"
          >
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-slate-300"
              checked={state[it.key]}
              onChange={() => setState((s) => ({ ...s, [it.key]: !s[it.key] }))}
            />
            <div>
              <p className="text-sm font-medium text-slate-800">{it.label}</p>
              {it.hint && <p className="text-xs text-slate-500">{it.hint}</p>}
            </div>
          </label>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: allDone ? '#54beea' : '#F1F5F9',
              color: allDone ? 'white' : '#475569',
            }}
          >
            {allDone ? 'Checklist complète' : 'Checklist en cours'}
          </span>
          {!allDone && (
            <span className="text-xs text-slate-500">
              Coche les éléments restants pour finaliser.
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() =>
            setState(Object.fromEntries(items.map(i => [i.key, false])))
          }
          className="px-3 py-2 rounded-md text-sm font-semibold border hover:bg-slate-50"
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
}

