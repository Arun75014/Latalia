'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const testimonials = [
  {
    name: "Sarah M.",
    note: 5,
    text: "Un service irréprochable ! Équipe ponctuelle, professionnelle et très sympathique. Mon appartement n’a jamais été aussi propre.",
    image: "/testimonials/user1.jpg",
  },
  {
    name: "Alexandre T.",
    note: 5,
    text: "Fiables et efficaces. Le nettoyage des parties communes dans notre immeuble est enfin impeccable. Je recommande sans hésiter.",
    image: "/testimonials/user2.jpg",
  },
  {
    name: "Camille R.",
    note: 5,
    text: "J’ai opté pour le nettoyage matelas. Résultat incroyable ! Une vraie sensation de neuf. Merci à Latalia Propreté.",
    image: "/testimonials/user3.jpg",
  }
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-12 bg-[#F7FBFD]">
      <div className="container mx-auto px-4 lg:px-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-[#54beea] uppercase text-sm tracking-widest font-semibold">
            Témoignages clients
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B3454] mt-2">
            Ce que nos clients disent de nous
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mt-3">
            Découvrez les retours authentiques de clients satisfaits par nos prestations de nettoyage, 
            notre professionnalisme et notre service haut de gamme.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-slate-50 transition hidden md:flex"
          >
            <span className="text-xl text-[#0B3454]">‹</span>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-slate-50 transition hidden md:flex"
          >
            <span className="text-xl text-[#0B3454]">›</span>
          </button>

          {/* Slides */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-10">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="min-w-[90%] md:min-w-[40%] lg:min-w-[32%]"
                >
                  <div className="bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col justify-between 
                                  border border-slate-200 hover:shadow-2xl transition-all duration-300
                                  backdrop-blur-md">
                    
                    {/* Avatar */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg">
                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0B3454]">{t.name}</p>
                        <div className="flex">
                          {Array.from({ length: t.note }).map((_, i) => (
                            <span key={i} className="text-[#F5B100] text-lg">★</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-slate-700 text-[15px] leading-relaxed">
                      “{t.text}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <a
            href="#devis"
            className="inline-block bg-[#0B3454] text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-[#0e406a] transition"
          >
            Lire plus d’avis clients
          </a>
        </div>
      </div>
    </section>
  );
}
