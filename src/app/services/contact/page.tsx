/* src/app/contact/page.tsx */
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

export default function ContactPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white">

      {/* --------------------------------------------------- */}
      {/* 🌟 HERO CONTACT */}
      {/* --------------------------------------------------- */}
      <section className="relative h-[380px] lg:h-[450px] flex items-center isolate">
        <Image
          src="/cuisine-salle-de-bain.jpg"
          alt="Contact Latalia Propreté"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white">
          <p
            className="inline-block px-4 py-1 rounded-full mb-4 text-sm font-semibold tracking-wider"
            style={{ backgroundColor: brand.teal, color: brand.navy }}
          >
            Nous contacter
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight max-w-2xl">
            Parlons de votre projet de nettoyage
          </h1>
          <p className="mt-4 max-w-xl text-white/90">
            Une question, un devis ou un besoin urgent ? Notre équipe est disponible pour vous répondre et vous accompagner.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------- */}
      {/* 🟦 BANDEAU CONTACT RAPIDE */}
      {/* --------------------------------------------------- */}
      <section className="py-10 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-slate-600 mb-4">
            Nous sommes ici pour vous aider — choisissez votre canal préféré :
          </p>

          <div className="grid sm:grid-cols-3 gap-6">

            {/* Téléphone */}
            <a
              href="tel:+33600000000"
              className="group flex items-center gap-4 px-5 py-4 bg-white border rounded-2xl shadow-sm hover:shadow-md hover:border-[#c0d148] transition"
            >
              <div className="h-12 w-12 rounded-full bg-[#F0FAFF] flex items-center justify-center">
                <Image src="/phone.png" width={26} height={26} alt="Téléphone" />
              </div>
              <div>
                <p className="font-semibold text-[#0B3454]">Appelez-nous</p>
                <p className="text-sm text-slate-500 group-hover:text-slate-600">
                  +33 6 00 00 00 00
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/33600000000"
              target="_blank"
              className="group flex items-center gap-4 px-5 py-4 bg-white border rounded-2xl shadow-sm hover:shadow-md hover:border-[#54beea] transition"
            >
              <div className="h-12 w-12 rounded-full bg-[#E9FDF6] flex items-center justify-center">
                <Image src="/Digital_Glyph_Green.svg" width={26} height={26} alt="WhatsApp" />
              </div>
              <div>
                <p className="font-semibold text-[#0B3454]">WhatsApp</p>
                <p className="text-sm text-slate-500 group-hover:text-slate-600">
                  Réponse rapide
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@latalia-proprete.fr"
              className="group flex items-center gap-4 px-5 py-4 bg-white border rounded-2xl shadow-sm hover:shadow-md hover:border-[#54beea] transition"
            >
              <div className="h-12 w-12 rounded-full bg-[#FFF7E9] flex items-center justify-center">
                <Image src="/mail.png" width={26} height={26} alt="Email" />
              </div>
              <div>
                <p className="font-semibold text-[#0B3454]">Email</p>
                <p className="text-sm text-slate-500 group-hover:text-slate-600">
                  contact@latalia-proprete.fr
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------- */}
      {/* 📝 FORMULAIRE DE CONTACT PREMIUM */}
      {/* --------------------------------------------------- */}
      <section className="py-20" style={{ backgroundColor: brand.bgSoft }}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <div className="rounded-3xl bg-white p-8 shadow-md border">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brand.navy }}>
              Envoyer un message
            </h2>
            <p className="text-slate-600 mb-8">
              Dites-nous ce dont vous avez besoin : nous revenons vers vous sous 48h.
            </p>

            <form className="grid gap-5">

              <input
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#54beea]/40"
                placeholder="Nom et prénom"
              />

              <input
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#54beea]/40"
                placeholder="Email"
              />

              <input
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#54beea]/40"
                placeholder="Téléphone"
              />

              <select
                className="w-full rounded-xl border px-4 py-3 outline-none text-slate-600 focus:ring-2 focus:ring-[#54beea]/40"
              >
                <option>Choisir un service</option>
                <option>Nettoyage appartement</option>
                <option>Entretien copropriété</option>
                <option>Nettoyage vitres</option>
                <option>Shampouinage tapis</option>
                <option>Débarras encombrants</option>
              </select>

              <textarea
                rows={5}
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#54beea]/40"
                placeholder="Votre message"
              />

              <button
                type="submit"
                className="w-full rounded-xl px-5 py-3 font-semibold text-white"
                style={{ backgroundColor: brand.deepBlue }}
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Infos & image */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: brand.navy }}>
                Nos coordonnées
              </h3>

              <ul className="space-y-5 text-slate-700">
                <li>
                  <span className="font-semibold">Téléphone :</span> +33 6 00 00 00 00
                </li>
                <li>
                  <span className="font-semibold">Email :</span> contact@latalia-proprete.fr
                </li>
                <li>
                  <span className="font-semibold">Secteur d’intervention :</span> Paris & Île-de-France
                </li>
                <li>
                  <span className="font-semibold">Horaires :</span> 7j/7 — 7h à 21h
                </li>
              </ul>
            </div>

            <div className="relative h-72 rounded-3xl overflow-hidden shadow-lg mt-10">
              <Image
                src="/images/contact-map.jpg"
                alt="Carte d'intervention Latalia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------- */}
      {/* ✨ CTA FINAL */}
      {/* --------------------------------------------------- */}
      <section className="py-20 bg-[#0B3454] text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Besoin d’un devis rapide ?
        </h2>
        <p className="mt-2 text-white/80">
          Notre équipe vous répond sous 48h.
        </p>
        <Link
          href="/devis"
          className="inline-block mt-6 px-8 py-3 rounded-xl font-semibold text-[#0B3454]"
          style={{ backgroundColor: brand.teal }}
        >
          Demander un devis
        </Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
    </>
  );
}
