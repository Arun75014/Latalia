/* src/app/realisations/page.tsx */
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const brand = {
  teal: '#54beea',
  navy: '#10324F',
  rose: '#c0d148',
  deepBlue: '#003C55',
  bgSoft: '#F7FBFD',
};

const categories = ['Tous', 'Matelas', 'Tapis', 'Vitres', 'Débarras', 'Copropriété', 'Bureaux'];

const realisations = [
  { title: 'Nettoyage matelas – Studio Paris 13', img: '/images/real-matelas.jpg', tag: 'Matelas' },
  { title: 'Débarras cave & encombrants', img: '/images/real-debarras.jpg', tag: 'Débarras' },
  { title: 'Vitrines boutique – Neuilly', img: '/images/real-vitres.jpg', tag: 'Vitres' },
  { title: 'Entretien copropriété', img: '/images/real-copro.jpg', tag: 'Copropriété' },
  { title: 'Canapé tissu – 3 places', img: '/images/real-canape.jpg', tag: 'Matelas' },
];

export default function RealisationsPage() {
  const [filter, setFilter] = useState('Tous');

  const filtered =
    filter === 'Tous' ? realisations : realisations.filter((r) => r.tag === filter);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/real-hero.jpg"
            alt="Nos réalisations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-white">
          <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
            Nos réalisations
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Découvrez en images la qualité et le sérieux de nos interventions sur le terrain.
          </p>
        </div>
      </section>

      {/* FILTRES */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border font-medium text-sm transition ${
                filter === cat ? 'bg-blue-600 text-white' : 'text-slate-700'
              }`}
              style={{ borderColor: brand.deepBlue }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(({ title, img, tag }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={img} alt={title} fill className="object-cover scale-100 hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold text-white px-3 py-1 rounded-full mb-2" style={{ backgroundColor: brand.navy }}>
                  {tag}
                </span>
                <h4 className="text-md font-bold text-slate-800">{title}</h4>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: brand.navy }}>
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-center text-sm">
            {[
              ['Prise de contact', '/icons/contact.png'],
              ['Audit et devis', '/icons/devis.png'],
              ['Planification', '/icons/planification.png'],
              ['Intervention', '/icons/intervention.png'],
              ['Satisfaction client', '/icons/satisfaction.png'],
            ].map(([label, icon]) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-16 h-16 relative mb-3">
                  <Image src={icon} alt={label} fill className="object-contain" />
                </div>
                <p className="font-medium text-slate-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section className="py-20" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: brand.navy }}>Ce que nos clients disent</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700">
            {[
              'Intervention rapide et efficace, matelas comme neuf !',
              'Équipe très professionnelle pour le nettoyage de nos vitres.',
              'Service client irréprochable et résultats visibles.',
            ].map((txt, i) => (
              <blockquote key={i} className="bg-white border rounded-xl p-6 italic">
                “{txt}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
