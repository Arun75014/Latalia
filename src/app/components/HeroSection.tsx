/* components/HeroSection.tsx */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center text-white"
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND */}
      <Image
        src="/hero-living-room.jpeg"
        alt="Nettoyage professionnel à domicile et dans les locaux à Paris – Latalia Propreté"
        fill
        priority
        quality={90}
        className="object-cover object-center -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent backdrop-blur-sm -z-10" />

      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-20">

        {/* LEFT TEXT */}
        <div className="flex-1 max-w-[65%] flex flex-col justify-center">
          <h1 id="hero-title" className="text-3xl md:text-5xl font-extrabold leading-snug drop-shadow-xl">
            Nettoyage professionnel à Paris & Île-de-France  
            <span className="text-[#54beea]"> — Services écologiques Healthy</span>
          </h1>

          <p className="mt-4 text-md md:text-lg max-w-2xl drop-shadow-md">
            Entreprise de nettoyage pour bureaux, copropriétés, commerces, salles de sport,
            cabinets médicaux et espaces de vie. Prestations fiables, professionnelles et
            disponibles en version écologique Healthy.
          </p>

          {/* STATS */}
          <div
  className="
    mt-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-md 
    px-6 py-4 w-fit

    /* Desktop → inchangé */
    flex flex-wrap gap-6

    /* Mobile → mode liste verticale élégante */
    max-md:w-full max-md:flex max-md:flex-col max-md:gap-3 max-md:px-4 max-md:py-5
  "
>

            <Stat number="61 000+" label="Clients satisfaits" />
            <Stat number="4.9/5*" label="Note Google" />
            <Stat number="7 000+" label="Avis clients" />
            <Stat number="Healthy" label="Option écologique" />
          </div>
        </div>

        {/* AIR QUALITY + GREEN BLOCK */}
        <div className="hidden lg:flex flex-col gap-6 w-[300px]">

          {/* ---- AIR QUALITY CARD (MODIFIÉ SELON TES DEMANDES) ---- */}
          <Card className="bg-[#F0FAFF] relative overflow-visible">
            <CardContent className="p-6 relative">

              <p className="text-lg font-semibold text-[#003C55]">
                Qualité de l’air à Paris
              </p>

              {/* AQI CENTRÉ, SOUS LE TITRE */}
              <div className="w-full flex justify-center mt-2 mb-6">
                <CircleAQI value={115} />
              </div>

              {/* LIEN ABSOLU À DROITE */}
              <Link
                href="/qualite-air"
                className="absolute bottom-3 right-4 text-xs text-blue-700 underline hover:text-blue-900"
              >
                En savoir plus →
              </Link>
            </CardContent>
          </Card>

          {/* GREEN CARD */}
          <Card className="overflow-hidden relative text-white h-[140px]">
            <div className="absolute inset-0 bg-[#F0FAFF]" />
            <CardContent className="relative z-10 p-4 flex flex-col justify-center h-full">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                <p className="text-md font-semibold font-semibold text-[#003C55]">+3 clients Healthy ce mois-ci</p>
              </div>
              <p className="text-sm mt-1 font-semibold text-[#003C55]">Découvrez notre nettoyage sain & naturel</p>
              <p className="text-xs underline mt-1 font-semibold text-[#003C55]">En savoir plus →</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}

/* --------------------- SUB COMPONENTS --------------------- */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div
      className="
        flex flex-col items-start

        /* Desktop */
        min-w-[100px]

        /* Mobile → espacement + séparateur subtil */
        max-md:w-full max-md:pb-3 max-md:border-b max-md:border-white/40 last:max-md:border-b-0
      "
    >
      <p className="text-lg md:text-xl font-semibold text-[#003C55]">{number}</p>
      <p className="text-xs text-gray-700">{label}</p>
    </div>
  );
}


function CircleAQI({ value }: { value: number }) {
  const strokeColor =
    value <= 50 ? '#00cc66'
    : value <= 100 ? '#ffcc00'
    : value <= 150 ? '#ff9933'
    : value <= 200 ? '#ff3300'
    : '#990000';

  const percentage = (value / 500) * 100;

  return (
    <svg width="70" height="70" viewBox="0 0 36 36">
      <path
        stroke="#eee"
        strokeWidth="2"
        fill="none"
        d="
          M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831
        "
      />
      <path
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeDasharray={`${percentage}, 100`}
        d="
          M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
        "
      />
      <text x="18" y="20.35" textAnchor="middle" className="text-xs font-bold">
        {value}
      </text>
    </svg>
  );
}
