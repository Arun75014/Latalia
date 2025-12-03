'use client';

import Image from 'next/image';
import Link from 'next/link';

// --- Services avec photos ---
const allServices = [
  {
    label: 'Nettoyage appartement',
    href: '/services/nettoyage-appartement',
    image: '/nettoyage-appartement.jpg',
  },
  {
    label: 'Entretien copropriété',
    href: '/services/entretien-copropriete',
    image: '/coprop.jpg',
  },
  {
    label: 'Entretien locaux',
    href: '/services/entretien-locaux',
    image: '/locaux.jpeg',
  }
];

function getRandomServices() {
  const shuffled = [...allServices].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

export default function ExploreServicesSection() {
  const services = getRandomServices();

  return (
    <section className="py-12 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">

        {/* TITLE */}
        <div className="mb-12 text-right">
          <p className="text-[#00A1C6] uppercase text-xs tracking-widest font-semibold pr-8">
            LATALIA PROPRETÉ — IDF
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B3454] mt-2 pr-8">
            Explorez nos services<br />
            <span className="text-[#00A1C6]">de nettoyage en Île-de-France</span>
          </h2>
        </div>

        {/* 3 Services aléatoires */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="
                group relative rounded-2xl overflow-hidden 
                shadow-sm hover:shadow-xl border border-slate-200
                transition-all hover:-translate-y-1 bg-white
              "
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={service.image}
                  alt={`Service Latalia Propreté : ${service.label}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay haut de gamme */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent" />

                {/* Texte en overlay */}
                <div className="absolute top-4 left-4 flex flex-col">
                  <h3 className="text-white font-semibold text-xl drop-shadow-lg">
                    {service.label}
                  </h3>
                  <p className="text-white/80 text-xs mt-1 max-w-[160px]">
                    Intervention professionnelle en Île-de-France.
                  </p>
                </div>
              </div>

              {/* CTA inférieur */}
              <div className="p-4 flex justify-end">
                <span className="text-[#00A1C6] font-medium text-sm group-hover:underline">
                  Voir ce service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Soft wave decorative */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 opacity-[0.06] bg-[url('/wave.svg')] bg-repeat-x" />

        {/* CTA Voir tous les services */}
        <div className="flex justify-end mt-8 pr-8">
          <a
            href="/services"
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-[#003C55] rounded-full shadow-md hover:bg-[#c0d148] transition-colors"
          >
            Voir tous les services →
          </a>
        </div>
    </section>
  );
}
