'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const brand = {
  teal: '#54beea',
  navy: '#10324F',
  rose: '#c0d148',
  deepBlue: '#003C55',
  bgSoft: '#F7FBFD',
};

export type InclusionCardItem = { title: string; points: string[]; img: string };
export type FaqItem = { q: string; a: string };

export default function ServiceTemplate({
  tag = 'Services de Propreté',
  hero,
  title,
  intro,
  ctaAnchor = '#devis',
  usps,
  inclus,
  exclusions,
  remarks,
  frequencies,
  gallery,
  form,
  signature,
  faqs,
  extraSections,          // ReactNode(s) en plus (ex: Calendrier municipal / Check-list HSE…)
  jsonLd,                 // objet JSON-LD optionnel
}: {
  tag?: string;
  hero: { src: string; alt: string };
  title: string;
  intro: string;
  ctaAnchor?: string;
  usps: string[];                           // 3 à 4 puces
  inclus: InclusionCardItem[];              // cartes (16/9 + liste)
  exclusions: string[];                     // puces
  remarks: string[];                        // puces
  frequencies: { label: string; value: string }[];
  gallery?: string[];
  form: {
    title: string;
    subtitle?: string;
    fields: string[];                       // placeholders
    submit: string;
  };
  signature?: {
    title: string;
    text: string;
    icon?: string;
  };
  faqs: FaqItem[];
  extraSections?: React.ReactNode;
  jsonLd?: Record<string, any>;
}) {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image src={hero.src} alt={hero.alt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-white">
          <span
            className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4"
            style={{ backgroundColor: brand.teal, color: brand.navy }}
          >
            {tag}
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">{intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={ctaAnchor}
              className="px-5 py-3 rounded-md text-white font-semibold"
              style={{ backgroundColor: brand.deepBlue }}
            >
              Demander un devis
            </Link>
            <a href="#inclus" className="px-5 py-3 rounded-md font-semibold border" style={{ borderColor: 'white' }}>
              Voir les prestations
            </a>
          </div>
        </div>
      </section>

      {/* RIBBON USP */}
      {!!usps?.length && (
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {usps.slice(0, 3).map((u, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: [brand.rose, brand.teal, brand.navy][i % 3] }} />
                <p className="text-slate-700">{u}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* INCLUS */}
      <section id="inclus" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8">
          <header className="mb-10">
            <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
              Prestations incluses
            </h2>
            <p className="mt-2 text-slate-600">
              Un socle complet, adapté à vos contraintes & à votre activité.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {inclus.map((c) => (
              <InclusionCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* NON INCLUS */}
      {!!exclusions?.length && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="mb-10">
              <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
                Non inclus (sur devis)
              </h2>
              <p className="mt-2 text-slate-600">
                Interventions spécialisées & ponctuelles avec matériel/équipe dédiés.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {exclusions.map((t) => (
                <div key={t} className="rounded-xl border bg-white p-4">
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REMARQUES + FREQUENCES */}
      {(remarks?.length || frequencies?.length) && (
        <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            {!!remarks?.length && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: brand.navy }}>
                  Conditions & remarques
                </h3>
                <ul className="space-y-3 text-slate-700">
                  {remarks.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            )}

            {!!frequencies?.length && (
              <div className="rounded-2xl overflow-hidden border bg-white">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                    Fréquences recommandées
                  </h3>
                  <p className="text-slate-600 mt-1">
                    À ajuster selon l’occupation, l’activité et les accès.
                  </p>
                </div>
                <div className="p-6 grid gap-4">
                  {frequencies.map((f) => <FreqRow key={f.label} {...f} />)}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* GALERIE */}
      {!!gallery?.length && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Résultats en images
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={src} alt="Illustration du service" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTIONS ADDITIONNELLES (calendrier, checklist, etc.) */}
      {extraSections}

      {/* CTA + SIGNATURE */}
      <section id="devis" className="py-16" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-white p-6 md:p-8">
              <h3 className="text-2xl font-bold" style={{ color: brand.navy }}>
                {form.title}
              </h3>
              {form.subtitle && <p className="mt-2 text-sm text-slate-600">{form.subtitle}</p>}

              <form className="mt-6 grid md:grid-cols-2 gap-4">
                {form.fields.map((ph, i) =>
                  ph.toLowerCase().includes('commentaire') || ph.toLowerCase().includes('instructions') ? (
                    <textarea key={i} className="input md:col-span-2" placeholder={ph} />
                  ) : (
                    <input key={i} className="input" placeholder={ph} />
                  )
                )}
                <button
                  type="submit"
                  className="md:col-span-2 px-5 py-3 rounded-md text-white font-semibold"
                  style={{ backgroundColor: brand.deepBlue }}
                >
                  {form.submit}
                </button>
              </form>
            </div>
          </div>

          {signature && (
            <aside className="rounded-2xl border bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Image src={signature.icon || '/logo-healthy-home.png'} alt="" width={36} height={36} />
                <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                  {signature.title}
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-700">{signature.text}</p>
            </aside>
          )}
        </div>
      </section>

      {/* FAQ */}
      {!!faqs?.length && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: brand.navy }}>
              Questions fréquentes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((f, i) => <Faq key={i} {...f} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/* --- Sous-composants --- */

function InclusionCard({ title, points, img }: InclusionCardItem) {
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
      <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: brand.navy }}>
        {value}
      </span>
    </div>
  );
}

function Faq({ q, a }: FaqItem) {
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
