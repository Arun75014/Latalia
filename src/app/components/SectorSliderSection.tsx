'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

/* ---- DATA ---- */
const sectors = [
  { label: 'Appartement', image: '/appartement.jpg' },
  { label: 'Salles de sport', image: '/slle_de_sport.jpg' },
  { label: 'Commerce', image: '/entretien-commerce.jpg' },
  { label: 'Copropriété', image: '/copro.jpg' },
  { label: 'Pharmacies', image: '/entretien-pharma.webp' },
];

export default function SectorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ---- OPTIONAL AUTO SCROLL ---- */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* ---- MANUAL SCROLL ---- */
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white via-[#F7FBFD] to-white" id="secteurs-intervention">
      <div className="container mx-auto px-4 lg:px-10">

        {/* ---- HEADER SEO ---- */}
        <header className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B3454] tracking-tight">
            Secteurs d’intervention
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm">
            Nous intervenons dans une large gamme d’environnements à Paris & Île-de-France :
            particuliers, professionnels, établissements scolaires et sportifs.
            Une approche sur-mesure pour garantir hygiène, confort et bien-être — partout.
          </p>
        </header>

        {/* ---- CAROUSEL WRAPPER ---- */}
        <div className="relative">

          {/* ---- Left Button ---- */}
          <button
            onClick={() => scroll('left')}
            aria-label="Faire défiler vers la gauche"
            className="
              hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 
              w-12 h-12 rounded-full 
              bg-white/80 backdrop-blur-md shadow-lg 
              hover:shadow-xl hover:bg-white/90 
              transition-all duration-300
              items-center justify-center
              border border-slate-200
            "
          >
            ‹
          </button>

          {/* ---- HORIZONTAL SCROLL AREA ---- */}
          <div
            ref={scrollRef}
            className="
              flex gap-8 overflow-x-auto px-2 py-2 snap-x snap-mandatory
              scroll-smooth
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:'none']
              [scrollbar-width:'none']
            "
          >
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="
                  min-w-[260px] snap-start rounded-3xl overflow-hidden
                  shadow-lg hover:shadow-2xl 
                  bg-white/60 backdrop-blur-md border border-slate-200
                  transform hover:-translate-y-1 hover:scale-[1.02]
                  transition-all duration-500 ease-[cubic-bezier(.4,.15,.1,1)]
                "
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={sector.image}
                    alt={`Secteur d’intervention : ${sector.label}`}
                    fill
                    className="object-cover transition duration-700 ease-out hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <p className="text-[#0B3454] font-semibold tracking-wide">
                    {sector.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ---- Right Button ---- */}
          <button
            onClick={() => scroll('right')}
            aria-label="Faire défiler vers la droite"
            className="
              hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 
              w-12 h-12 rounded-full 
              bg-white/80 backdrop-blur-md shadow-lg 
              hover:shadow-xl hover:bg-white/90 
              transition-all duration-300
              items-center justify-center
              border border-slate-200
            "
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
}
