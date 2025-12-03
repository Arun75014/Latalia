/* src/app/services/cristallisation-marbre/page.tsx */
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

export const metadata = {
  title: 'Cristallisation Marbre – Paris & IDF | Latalia Propreté',
  description:
    "Cristallisation de marbre (non naturel) à Paris & Île-de-France : remise en brillance, protection et rénovation légère avec monobrosse et produit cristallisant.",
  keywords: [
    'cristallisation marbre',
    'rénovation marbre Paris',
    'sol marbre cristallisation',
    'lustrage marbre IDF',
    'entretien marbre professionnel',
  ],
};

export default function CristallisationMarbrePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">

        {/* -------------------------------------------------------------------------- */}
        {/* HERO */}
        {/* -------------------------------------------------------------------------- */}

        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/cristallisation-de-marbre.jpg"
              alt="Cristallisation du marbre à Paris et IDF"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-white">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4"
              style={{ backgroundColor: brand.teal, color: brand.navy }}
            >
              Entretien Spécialisé
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
              Cristallisation du Marbre – Paris & Île-de-France
            </h1>

            <p className="mt-4 max-w-2xl text-white/90">
              Rénovation légère, remise en brillance et protection de vos sols en marbre
              grâce à la cristallisation professionnelle (monobrosse, inox ou produit cristallisant).
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

        {/* -------------------------------------------------------------------------- */}
        {/* USP */}
        {/* -------------------------------------------------------------------------- */}

        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <Usp dotColor={brand.rose} text="Brillance renforcée & effet miroir" />
            <Usp dotColor={brand.teal} text="Technique professionnelle non abrasive" />
            <Usp dotColor={brand.navy} text="Intervention rapide Paris & IDF" />
          </div>
        </section>

        {/* -------------------------------------------------------------------------- */}
        {/* INCLUS */}
        {/* -------------------------------------------------------------------------- */}

        <section id="inclus" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Prestations incluses
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Remise en brillance du marbre grâce à la technique professionnelle de cristallisation.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <InclusionCard
                title="Aspiration ou balayage"
                desc="Retrait préalable des poussières et particules pour préparer la cristallisation."
                img="/aspiration.jpeg"
              />

              <InclusionCard
                title="Cristallisation du marbre"
                desc="Monobrosse équipée d’un disque inox ou application de produit cristallisant selon le type de marbre."
                img="/inox-marbre.jpg"
              />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Compatible uniquement pour **marbre non naturel**.
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------------------------- */}
        {/* NON INCLUS */}
        {/* -------------------------------------------------------------------------- */}

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Non inclus (ajoutables sur devis)
              </h2>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Ponçage du marbre',
                'Désinfection vapeur 120°',
                'Élimination parasites / rongeurs',
                'Matières dangereuses / biologiques',
                'Débarras d’encombrants',
              ].map((t) => (
                <div key={t} className="rounded-xl border bg-white p-4">
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------------- */}
        {/* REMARQUES & FRÉQUENCE */}
        {/* -------------------------------------------------------------------------- */}

        <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
                Conditions & remarques
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li>Nous ne déplaçons aucun objet présent sur les zones à nettoyer.</li>
                <li>Selon l’ancienneté ou l’état des taches, une élimination complète n’est pas garantie.</li>
                <li>Prestations non réalisables si des travaux sont en cours dans les parties communes.</li>
                <li>L’équipe peut aider à déplacer les meubles, mais sans responsabilité en cas de dommage.</li>
              </ul>

              <p className="mt-4 text-sm text-slate-700 font-semibold">
                Fréquence recommandée : tous les **3 à 6 mois**
              </p>

              <p className="mt-4 text-sm text-slate-600">
                Conseil : nettoyer le marbre régulièrement avec eau tiède + savon doux,
                puis essuyer. Retirer immédiatement les taches (bicarbonate, acide citrique…).
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border bg-white p-6">
              <Image
                src="/images/marbre-brillance.jpg"
                alt="Résultat de cristallisation du marbre"
                width={800}
                height={600}
                className="rounded-xl object-cover"
              />
            </div>

          </div>
        </section>

        {/* -------------------------------------------------------------------------- */}
        {/* FORMULAIRE DEVIS */}
        {/* -------------------------------------------------------------------------- */}

        <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">

            {/* FORM */}
            <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8">
              <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                Demander un devis — Cristallisation du marbre
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Indiquez votre surface et son état : réponse rapide sous 24h–48h.
              </p>

              <form className="mt-6 grid md:grid-cols-2 gap-4">

                <input className="input" placeholder="Localisation" />
                <input className="input" placeholder="Lieu (copropriété, local, appartement…)" />
                <input className="input" placeholder="Surface totale (m²)" />
                <input className="input" placeholder="Présence de taches (oui/non)" />
                <textarea
                  className="input md:col-span-2"
                  placeholder="Informations supplémentaires, photos éventuelles…"
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

            {/* SIGNATURE LATALIA (désactivée ici) */}
            <aside className="rounded-2xl border bg-white p-6 md:p-8">
              <h4 className="font-semibold text-sm" style={{ color: brand.navy }}>
                Option “Client Healthy”
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Cette option n’est pas disponible pour la cristallisation du marbre.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Les produits utilisés sont professionnels et très spécifiques.
              </p>
            </aside>

          </div>
        </section>

        {/* -------------------------------------------------------------------------- */}
        {/* SECTION HSE INTÉGRÉE DIRECTEMENT */}
        {/* -------------------------------------------------------------------------- */}

        <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8">

            <header className="mb-10 flex items-center gap-4">
              <Image
                src="/hse-icon.png"
                alt="Icône HSE"
                width={48}
                height={48}
                className="opacity-90"
              />
              <div>
                <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                  Contrat & Check-list HSE — Cristallisation du marbre
                </h2>
                <p className="mt-2 text-slate-600 max-w-2xl">
                  Obligations contractuelles & validations sécurité avant intervention.
                </p>
              </div>
            </header>

            <div className="grid lg:grid-cols-3 gap-10">

              {/* Paramètres contractuels */}
              <div className="lg:col-span-1 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">

                <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
                  Paramètres contractuels
                </h3>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center justify-between">
                    <span>Jours de passage</span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: brand.navy }}>
                      Lun → Sam / Dim
                    </span>
                  </li>

                  <li className="flex items-center justify-between">
                    <span>Créneaux horaires</span>
                    <span className="px-2 py-1 rounded-md border text-xs">
                      8h00 → 19h00 • 8h00 → 13h00
                    </span>
                  </li>

                  <li className="flex items-center justify-between">
                    <span>SIRET / Assurance</span>
                    <span className="px-2 py-1 rounded-md border text-xs">
                      832 426 001 00018
                    </span>
                  </li>

                  <li className="flex items-center justify-between">
                    <span>Assurance</span>
                    <span className="px-2 py-1 rounded-md border text-xs">
                      MAAF n°175013322 X 001
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border p-4 bg-white">
                  <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                    Options possibles
                  </p>

                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    <li>• Désinfection vapeur 120°</li>
                    <li>• Matières dangereuses / biologiques</li>
                    <li>• Débarras d’encombrant</li>
                    <li>• Option “Client Healthy” : ❌ non disponible</li>
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

              {/* Check-list */}
              <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: brand.navy }}>
                    Check-list HSE (avant démarrage)
                  </h3>
                  <small className="text-slate-500">Coche informative</small>
                </div>

                <div className="grid md:grid-cols-2 gap-4">

                  {[
                    ['Accès / Badges / Clés transmis', 'Procédure remise/retour consignée'],
                    ['EPI requis', 'Blouse, gants, chasuble, pantalon, chaussures'],
                    ['Produits autorisés / interdits précisés', 'Allergènes, parfums, solvants'],
                    ['Tri & évacuation déchets clarifiés', 'DIB, recyclable'],
                    ['Contacts d’urgence affichés', 'Interne + prestataire critiques'],
                    ['Consignes Alarmes / SSI validées', 'Armement/désarmement, codes, zones'],
                    ['Local de stockage matériel défini', 'Ventilation, point d’eau, électricité'],
                    ['Plan d’évacuation & issues connus', 'Point de rassemblement'],
                  ].map(([label, hint]) => (
                    <label
                      key={label}
                      className="flex items-start gap-3 rounded-xl border px-4 py-3 hover:bg-slate-50 cursor-pointer"
                    >
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                      <div>
                        <p className="text-sm font-medium text-slate-800">{label}</p>
                        <p className="text-xs text-slate-500">{hint}</p>
                      </div>
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

        {/* -------------------------------------------------------------------------- */}
        {/* FAQ */}
        {/* -------------------------------------------------------------------------- */}

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">

            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Questions fréquentes
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <Faq
                q="La cristallisation remplace-t-elle le ponçage ?"
                a="Non, elle ravive et protège le marbre mais ne supprime pas les rayures profondes ou les défauts structurels."
              />

              <Faq
                q="Peut-on cristalliser un marbre très taché ?"
                a="Une amélioration est possible, mais l’élimination totale dépend de l’ancienneté et de la nature de la tache."
              />

              <Faq
                q="Est-ce que cette technique rend le sol glissant ?"
                a="Non, la cristallisation augmente la brillance tout en préservant l'adhérence du marbre."
              />

              <Faq
                q="Dois-je être présent pendant l’intervention ?"
                a="Non, à condition que l’accès et les consignes HSE soient validés en amont."
              />

            </div>
          </div>
        </section>

        <Footer />

      </main>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Components */
/* -------------------------------------------------------------------------- */

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
        <h4 className="text-lg font-semibold" style={{ color: brand.navy }}>
          {title}
        </h4>
        <p className="mt-2 text-slate-700">{desc}</p>
      </div>
    </article>
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
