'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function SignatureLataliaSection() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (!embla) return;
    const interval = setInterval(() => embla.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [embla]);

  return (
    <section
      id="signature-latalia"
      className="py-4 bg-[#FFFFFF]"
    >
      <div className="container mx-auto px-4 pb-12 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* CAROUSEL */}
        <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
          <div className="flex">

            {/* Slide 1 – Image */}
            <div className="flex-[0_0_100%] relative h-[330px]">
              <Image
                src="/latalia-proprete-signature.jpg"
                alt="Produits naturels Signature Latalia"
                fill
                className="object-cover"
              />
            </div>

            {/* Slide 2 – Vidéo */}
            {/* <div className="flex-[0_0_100%] relative h-[330px] bg-black">
              <video
                src="/videos/cleaning-natural.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div> */}

            {/* Slide 3 – Image */}
            {/* <div className="flex-[0_0_100%] relative h-[330px]">
              <Image
                src="/images/healthy-cleaning-2.jpg"
                alt="Nettoyage écologique Latalia"
                fill
                className="object-cover"
              />
            </div> */}

          </div>
        </div>

        {/* TEXTE SEO */}
        <div>
          <header>
            <h2
              className="text-3xl font-bold mb-4 leading-tight"
              style={{ color: '#003C55' }}
            >
              Prestations <span className="text-[#54beea]">Signature Latalia</span> :
              un nettoyage naturel & responsable
            </h2>
          </header>

          <p className="text-slate-700 leading-relaxed mb-4">
            Chez <strong>Latalia Propreté</strong>, nous prenons soin de votre
            environnement, de votre santé et de celle de nos équipes. Nos
            prestations <strong>Healthy</strong> allient efficacité,
            respect de la planète et qualité de l&apos;air intérieur.
          </p>

          <p className="text-slate-700 leading-relaxed mb-4">
            Engagés pour un <strong>développement durable</strong>, nous proposons
            l’alternative exclusive <em>« Signature Latalia »</em> : les mêmes 
            prestations professionnelles, réalisées avec nos propres mélanges naturels,
            fabriqués par nos soins.
          </p>

          <p className="text-slate-700 leading-relaxed mb-4">
            Nos compositions saines, à base d’ingrédients naturels et performants,
            limitent l’exposition aux substances toxiques, protègent votre santé,
            réduisent l’impact environnemental et préservent la qualité de l’air dans
            vos espaces de vie ou de travail.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            Chaque espace étant unique, nous personnalisons nos mélanges avec des
            <strong> huiles essentielles naturelles</strong> : lavande relaxante,
            citron désinfectant, eucalyptus purifiant, etc.
          </p>

          <a
            href="/services/packages"
            className="inline-block mt-4 px-6 py-3 rounded-full text-white bg-[#003C55] font-semibold shadow-md transition-all hover:bg-[#c0d148] transition-colors"
          >
            Découvrir l’option Signature Latalia →
          </a>
        </div>
      </div>
    </section>
  );
}
