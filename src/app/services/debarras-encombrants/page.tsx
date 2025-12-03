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

export default function DebarrasEncombrantsPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/debarras-encombrants.jpg"
            alt="Débarras encombrants"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-white">
          <span className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4" style={{ backgroundColor: brand.teal, color: brand.navy }}>
            Services de Débarras
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
            Débarras encombrants rapide et efficace
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Enlèvement de petits et gros volumes, mise en décharge, destruction de meubles accrochés.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#devis" className="px-5 py-3 rounded-md text-white font-semibold" style={{ backgroundColor: brand.deepBlue }}>
              Demander un devis
            </Link>
            <a href="#inclus" className="px-5 py-3 rounded-md font-semibold border" style={{ borderColor: 'white' }}>
              Voir les prestations
            </a>
          </div>
        </div>
      </section>

      {/* Ruban USP */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <Usp dotColor={brand.teal} text="Débarras rapide et sécurisé" />
          <Usp dotColor={brand.rose} text="Destruction de meubles inclus" />
          <Usp dotColor={brand.navy} text="Évacuation des déchets vers la décharge" />
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
              Débarras complet et encadré pour les particuliers et professionnels.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <InclusionCard
              title="Débarras sur mesure"
              points={[
                'Débarras d’encombrants petits et gros volumes',
                'Destruction des meubles fixés',
                'Mise en décharge réglementaire',
              ]}
              img="/debarras-encombrants.jpg"
            />
            <InclusionCard
              title="Équipe professionnelle"
              points={[
                'Respect des accès et des règles de copropriété',
                'Gestion responsable des déchets',
              ]}
              img="/respect-consignes.png"
            />
          </div>
        </div>
      </section>

      {/* Non inclus */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <header className="mb-10">
            <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
              Non inclus (ajoutables en option)
            </h2>
            <p className="mt-2 text-slate-600">
              Ces services nécessitent un devis ou une intervention complémentaire.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Nettoyage après débarras',
              'Montage ou réparation de meuble',
              'Élimination de matières dangereuses',
              'Traitement contre les nuisibles ou rongeurs',
            ].map((t) => (
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
              <li>Les accès doivent être dégagés pour le transport.</li>
              <li>Les encombrants doivent être déplaçables jusqu'au véhicule.</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-white">
            <div className="p-6 border-b">
              <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                Fréquences recommandées
              </h3>
              <p className="text-slate-600 mt-1">
                Nous intervenons à la demande pour vos besoins ponctuels ou réguliers.
              </p>
            </div>
            <div className="p-6">
              <FreqRow label="Débarras général" value="À la demande" />
              <FreqRow label="Gestion des encombrants" value="Selon le volume" />
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
                Précisez le type de local et la nature des encombrants.
              </p>

              <form className="mt-6 grid md:grid-cols-2 gap-4">
                <input className="input" placeholder="Code postal / Ville" />
                <input className="input" placeholder="Type de local (appartement, cave...)" />
                <input className="input" placeholder="Nombre de meubles ou éléments" />
                <input className="input" placeholder="Types d’encombrants (bois, gravats...)" />
                <textarea className="input md:col-span-2" placeholder="Commentaires / besoins spécifiques" />
                <button type="submit" className="md:col-span-2 px-5 py-3 rounded-md text-white font-semibold" style={{ backgroundColor: brand.deepBlue }}>
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
              Traitement sans produit chimique, sécurité renforcée pour l’environnement.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Disponible sur demande ou pour contrat récurrent.
            </p>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
            Questions fréquentes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Faq q="Déplacez-vous les meubles ?" a="Non, les meubles doivent être accessibles et prêts à être transportés." />
            <Faq q="Le nettoyage est-il compris ?" a="Le nettoyage après débarras n’est pas inclus sauf mention explicite." />
            <Faq q="Prenez-vous les gravats ou déchets dangereux ?" a="Oui, selon les volumes et sous conditions spécifiques, précisez-les dans votre devis." />
            <Faq q="Pouvez-vous intervenir rapidement ?" a="Oui, selon disponibilité, souvent sous 24 à 48h après confirmation." />
          </div>
        </div>
      </section>
      <Footer />
    </main>
    </>
  );
}

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
