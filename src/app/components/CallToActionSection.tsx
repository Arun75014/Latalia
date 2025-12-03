import Image from 'next/image';

export default function CallToActionSection() {
  return (
    <section className="relative bg-[#0A2436] text-white py-24 overflow-hidden">
      {/* Dégradé subtil premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3454] via-[#0a2e47] to-[#051a28] opacity-95" />

      {/* Light glow haute gamme */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4FC3F7]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c0d148]/10 blur-2xl rounded-full" />

      <div className="relative container mx-auto px-4 lg:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT – Luxe Title Zone */}
        <div className="space-y-6 md:pr-10">
          <div className="w-12 h-[2px] bg-[#4FC3F7] opacity-70"></div>

          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Un devis sur-mesure,  
            <span className="block mt-1 text-[#4FC3F7] font-extrabold">
              pensé pour votre bien-être
            </span>
          </h2>

          <p className="text-white/80 leading-relaxed max-w-md text-lg">
            Profitez d’une estimation personnalisée, réalisée par nos experts,
            alliant précision, transparence et excellence du service.
          </p>

          <p className="text-white/60 text-sm max-w-md">
            Adapté à votre logement, votre copropriété ou vos espaces professionnels.
          </p>

          {/* CTA PREMIER */}
          <a href="/devis">
            <button className="
              mt-6 px-8 py-3 
              bg-white text-[#0B3454] 
              font-semibold tracking-wide
              rounded-xl shadow-lg
              hover:bg-[#F2F9FF] hover:scale-[1.03]
              transition-all duration-300
            ">
              Obtenir un devis personnalisé
            </button>
          </a>
        </div>

        {/* RIGHT – WhatsApp Luxury Block */}
        <div className="flex flex-col items-center md:items-start space-y-4">

          {/* Icône WhatsApp premium */}
          <div className="
            w-20 h-20 rounded-3xl 
            bg-gradient-to-br from-[#4FC3F7] to-[#72d0fa]
            shadow-xl flex items-center justify-center
          ">
            <Image
              src="/Digital_Glyph_Green.svg"
              alt="WhatsApp"
              width={40}
              height={40}
            />
          </div>

          <h3 className="text-xl font-semibold text-white">
            Une question ? Besoin d’un conseil ?
          </h3>

          <p className="text-white/75 max-w-sm text-sm leading-relaxed">
            Notre équipe vous répond directement via WhatsApp.  
            Service fluide, humain et instantané — dans l’esprit Latalia.
          </p>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/33600000000"
            target="_blank"
            className="
              inline-flex items-center gap-2 
              mt-2 text-[#4FC3F7] font-medium
              hover:text-[#72d0fa] transition
            "
          >
            Contacter sur WhatsApp →
          </a>

          <p className="text-xs text-white/50">
            Réponse sous 24 à 48h.
          </p>
        </div>
      </div>
    </section>
  );
}
