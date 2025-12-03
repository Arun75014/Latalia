'use client';

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

export default function PackagesPage() {
  return (
        <>
        <Navbar />
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-living-room.jpeg"
            alt="Packs de services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-white">
          <span
            className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4"
            style={{ backgroundColor: brand.teal, color: brand.navy }}
          >
            Nos formules sur mesure
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
            Découvrez nos packs adaptés à chaque besoin
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Des offres combinées à prix avantageux pour particuliers et professionnels.
          </p>
        </div>
      </section>

      {/* Ruban USP */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <Usp dotColor={brand.teal} text="Expérience client premium et sans stress" />
          <Usp dotColor={brand.rose} text="10 ans d'expérience dans le secteur" />
          <Usp dotColor={brand.navy} text="Professionnels certifiés et experts" />
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-10" style={{ color: brand.navy }}>
            Nos Packs disponibles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PackCard title="Pack Appartement" img="/appartement-pack.jpg" features={["Nettoyage complet", "Vitres incluses"]} />
            <PackCard title="Pack Copropriété" img="/copropriete.jpg" features={["Entretien des parties communes", "Gestion des containers"]} />
            <PackCard title="Pack Bureaux" img="/bureaux.png" features={["Entretien régulier", "Nettoyage des vitres"]} />
            <PackCard title="Pack Textile" img="/textiles.jpg" features={["Nettoyage & désinfection", "Jusqu'à 4 éléments : matelas, canapé, tapis, rideaux"]} />
          </div>
        </div>
      </section>

{/* COMMENT ÇA MARCHE — VERSION MODERNE SANS IMAGES */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 lg:px-8">
    
    <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: brand.navy }}>
      Comment ça marche ?
    </h2>

    <div className="relative max-w-3xl mx-auto">

      {/* Ligne verticale */}
      <div className="absolute left-5 top-0 h-full w-1 bg-slate-200 rounded-full md:left-1/2 md:-translate-x-1/2" />

      {[
        { title: "Prise de contact", desc: "Par téléphone, WhatsApp ou via notre formulaire. Réponse rapide garantie." },
        { title: "Audit & devis", desc: "Évaluation de vos besoins (sur place ou à distance) + devis détaillé." },
        { title: "Planification", desc: "Nous fixons ensemble le créneau le plus pratique." },
        { title: "Intervention", desc: "Notre équipe intervient avec matériel & produits adaptés (éco Healthy si demandé)." },
        { title: "Suivi & satisfaction", desc: "QR code de satisfaction + suivi continu pour garantir votre confort." },
      ].map((step, idx) => (
        <div key={idx} className="relative flex flex-col md:flex-row items-start gap-6 mb-12">

          {/* Badge numéroté */}
          <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full font-semibold text-white shadow-lg"
            style={{ backgroundColor: brand.teal }}>
            {idx + 1}
          </div>

          <div className="flex-1 md:ml-6">
            <h3 className="text-xl font-semibold text-slate-800">
              {step.title}
            </h3>
            <p className="mt-1 text-slate-600">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* À VENIR */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
            Une vidéo explicative bientôt disponible
          </h3>
          <p className="text-slate-600">Nous préparons une courte vidéo pour vous présenter nos services et processus en images.</p>
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

function PackCard({ title, img, features }: { title: string; img: string; features: string[] }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-bold mb-2" style={{ color: brand.navy }}>{title}</h4>
        <ul className="space-y-1 text-sm text-slate-700">
          {features.map((f) => <li key={f}>• {f}</li>)}
        </ul>
      </div>
    </div>
  );
}