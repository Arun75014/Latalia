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

export default function NettoyageMatelasPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/nettoyage-matelas.jpg"
              alt="Matelas en cours de nettoyage vapeur"
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
              Nettoyage profond de matelas – Paris & Île-de-France
            </h1>

            <p className="mt-4 max-w-2xl text-white/90">
              Élimination des acariens, poussières et allergènes avec vapeur surchauffée
              et lampe UV. Service complet incluant couette et oreillers.
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

        {/* INCLUS */}
        <section id="inclus" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Prestations incluses
              </h2>
              <p className="mt-2 text-slate-600">
                Un nettoyage complet, sans produits chimiques, avec une technologie vapeur et UV.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <InclusionCard
                title="Aspiration & élimination des allergènes"
                points={[
                  'Aspiration minutieuse du matelas',
                  'Élimination de la poussière, des acariens et cellules mortes',
                ]}
                img="/nettoyage-matelas.jpg"
              />

              <InclusionCard
                title="Technologie vapeur & lampe UV"
                points={[
                  'Désinfection par lampe UV',
                  'Nettoyage vapeur sèche surchauffée',
                ]}
                img="/uv-aspirateur.jpg"
              />

              <InclusionCard
                title="Nettoyage global"
                points={[
                  'Tous les côtés du matelas',
                  'Jusqu’à 4 oreillers, couette et cadre de lit inclus',
                ]}
                img="/nettoyage-global.jpg"
              />

              <InclusionCard
                title="Contrôle et déchets"
                points={[
                  'Filtre montré au client à l’extérieur',
                  'Déchets collectés et éliminés proprement',
                ]}
                img="/controle-dechet.png"
              />
            </div>
          </div>
        </section>

        {/* NON INCLUS */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Non inclus (en option sur devis)
              </h2>
              <p className="mt-2 text-slate-600">
                Prestations supplémentaires réalisables selon situation.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Traitement anti-punaises ou nuisibles',
                'Réparation ou remplacement d’accessoires',
                'Traitement détachant sur taches profondes',
                'Nettoyage surmatelas (supplément 19,00€)',
              ].map((t) => (
                <div key={t} className="rounded-xl border bg-white p-4">
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Nos spécialistes peuvent recommander des solutions spécifiques selon votre matelas.
            </p>
          </div>
        </section>

        {/* CONDITIONS & FRÉQUENCE */}
        <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
                Conditions & recommandations
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li>• Le traitement ne garantit pas l’élimination de toutes les taches ou décolorations.</li>
                <li>• Les draps/housses doivent être changés après intervention.</li>
                <li>• Nos équipes peuvent aider à la remise en place du lit si demandé.</li>
                <li>• Supplément surmatelas : 19,00€</li>
                <li>• Fréquence recommandée : 1 fois tous les 6 mois</li>
              </ul>
            </div>

            {/* Informations devis */}
            <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2" style={{ color: brand.navy }}>
                Informations devis
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Code postal de la localisation</li>
                <li>• Présence d’enfant (0+)</li>
                <li>• Type de matelas : 1 place, 2 places (140/160/180), King Size</li>
                <li>• Nettoyage 1 ou 2 faces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DEVIS */}
        <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
            {/* Formulaire */}
            <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8">
              <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                Demander un devis personnalisé
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Renseignez les critères essentiels pour estimer l’intervention sur votre matelas.
              </p>

              <form className="mt-6 grid md:grid-cols-2 gap-4">
                <input className="input" placeholder="Adresse / Ville" />
                <input className="input" placeholder="Taille du matelas (ex: 140x190)" />
                <input className="input" placeholder="Nombre de matelas à nettoyer" />
                <input className="input" placeholder="Nombre d’oreillers / coussins à inclure" />
                <input className="input" placeholder="Type de logement / accès (escaliers, badge…)" />
                <input className="input" placeholder="Inclure couette / surmatelas ?" />
                <textarea
                  className="input md:col-span-2"
                  placeholder="Commentaires / besoins particuliers"
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

            {/* Signature Latalia */}
            <aside className="rounded-2xl border bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Image src="/logo-healthy-home.png" alt="" width={36} height={36} />
                <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                  Option “Signature Latalia”
                </p>
              </div>

              <p className="mt-3 text-sm text-slate-700">
                Des produits naturels, sains et efficaces pour une alternative respectueuse de votre santé
                et de l’environnement.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Disponible sur demande au moment du devis ou dans le contrat d’entretien.
              </p>
            </aside>
          </div>
        </section>

        {/* CONTRAT & CHECK-LIST HSE */}
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
                  Contrat & Check-list HSE
                </h2>
                <p className="text-slate-600 text-sm max-w-2xl mt-1">
                  Paramètres contractuels et éléments Hygiène — Sécurité — Environnement
                  à vérifier avant le démarrage de la prestation.
                </p>
              </div>
            </header>

            <div className="grid lg:grid-cols-3 gap-10">
              {/* Paramètres contrat */}
              <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
                  Paramètres contractuels
                </h3>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center justify-between">
                    <span>Jours de passage</span>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: brand.navy }}
                    >
                      Lun → Sam / Dim
                    </span>
                  </li>

                  <li className="flex items-center justify-between">
                    <span>Créneaux horaires</span>
                    <span className="px-2 py-1 rounded-md border text-xs text-center leading-tight">
                      8h00 → 19h00
                      <br />
                      ou 8h00 → 13h00
                    </span>
                  </li>

                  <li className="flex items-center justify-between">
                    <span>Entreprise</span>
                    <span className="px-2 py-1 rounded-md border text-xs text-right leading-tight">
                      Lattana Nettoyage
                      <br />
                      SIRET : 832 426 001 00018
                      <br />
                      MAAF : 175013322 X 001
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border p-4 bg-white">
                  <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                    Options possibles
                  </p>

                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    <li>• Désinfection vapeur (120°)</li>
                    <li>• Nettoyage du local</li>
                  </ul>

                  <a
                    href="/signature-latalia"
                    className="text-xs underline block mt-3 text-[#0B3454]"
                  >
                    Choisir l’option “Client Healthy” →
                  </a>
                </div>

                <a
                  href="#devis"
                  className="inline-block mt-6 px-5 py-3 rounded-md text-white font-semibold"
                  style={{ backgroundColor: brand.deepBlue }}
                >
                  Mettre à jour mon contrat
                </a>
              </div>

              {/* Check-list HSE */}
              <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
                  Check-list HSE (avant démarrage)
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    ['Accès / Badges / Clés transmis', 'Procédure remise / retour consignée'],
                    ['EPI requis', 'Blouse, gants, chasuble, pantalon, chaussures…'],
                    ['Produits autorisés / interdits', 'Solvants, parfums, allergènes à préciser'],
                    ['Tri & évacuation des déchets', 'DIB, recyclables'],
                    ['Contacts d’urgence affichés', 'Interne + prestataires critiques'],
                    ['Consignes Alarmes / SSI validées', 'Armement, désarmement, codes, zones'],
                    ['Plan d’évacuation & issues connus', 'Point de rassemblement identifié'],
                  ].map(([label, hint]) => (
                    <label
                      key={label}
                      className="flex items-start gap-3 rounded-xl border px-4 py-3 hover:bg-slate-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-slate-300"
                      />
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
                    Checklist à valider avant la première prestation
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
              <Faq
                q="Peut-on nettoyer les deux faces du matelas ?"
                a="Oui, cela est possible avec un supplément modéré. Cela nécessite de retourner le matelas en toute sécurité lors de l’intervention."
              />
              <Faq
                q="Le nettoyage élimine-t-il les taches ?"
                a="Le traitement vapeur + UV réduit fortement les impuretés, mais certaines taches profondes ou anciennes peuvent subsister."
              />
              <Faq
                q="Utilisez-vous des produits chimiques ?"
                a="Non, la vapeur sèche surchauffée et la lampe UV suffisent à la désinfection. Aucun produit agressif n’est utilisé."
              />
              <Faq
                q="Le service inclut-il la couette ?"
                a="Oui, la couette, le cadre de lit et jusqu'à 4 oreillers peuvent être inclus sans frais additionnels."
              />
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

/* ---------- Sous-composants ---------- */

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

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border p-5 bg-white transition-shadow hover:shadow-sm">
      <summary className="cursor-pointer list-none font-semibold flex justify-between items-center text-slate-800">
        <span>{q}</span>
        <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-slate-600 leading-relaxed">{a}</p>
    </details>
  );
}

/* Tailwind helper (optionnel, dans globals.css)
.input{@apply w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#54beea]/40;}
*/
