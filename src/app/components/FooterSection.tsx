import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-20 pb-12 relative">
      {/* Animated Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[2px] 
                      bg-gradient-to-r from-transparent via-[#54beea] to-transparent
                      animate-pulse shadow-sm rounded-full" />

      <div className="container mx-auto px-4 lg:px-10">

        {/* --- TOP SECTION : Title + Contact Cards --- */}
        <div className="grid lg:grid-cols-4 gap-10 items-center mb-16">

          {/* LEFT TEXT */}
          <div className="lg:col-span-1 text-left">
            <h3 className="text-xl font-semibold text-[#0B3454] mb-2">
              Nous sommes là pour vous aider !
              Contactez-nous via l’un de ces moyens.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Retrouvez-nous directement
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="lg:col-span-3 flex flex-col md:flex-row gap-6 justify-start">

            {/* CALL */}
            <div className="flex-1 min-w-[200px] bg-[#F7FBFD] rounded-xl p-4 flex items-center gap-4 
                            shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                <Image src="/phone.png" alt="Call" width={22} height={22} />
              </div>
              <div>
                <p className="font-semibold text-[#0B3454] text-sm">Appelez-nous</p>
                <p className="text-xs text-slate-500">01 84 80 00 00</p>
              </div>
            </div>

            {/* WHATSAPP */}
            <Link
              href="https://wa.me/33600000000"
              className="flex-1 min-w-[200px] bg-[#F7FBFD] rounded-xl p-4 flex items-center gap-4 
                         shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                <Image src="/Digital_Glyph_Green.svg" alt="WhatsApp" width={22} height={22} />
              </div>
              <div>
                <p className="font-semibold text-[#0B3454] text-sm">Support WhatsApp</p>
                <p className="text-xs text-slate-500">Réponse rapide</p>
              </div>
            </Link>

            {/* EMAIL */}
            <Link
              href="mailto:contact@latalia-proprete.com"
              className="flex-1 min-w-[200px] bg-[#F7FBFD] rounded-xl p-4 flex items-center gap-4 
                         shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                <Image src="/mail.png" alt="Email" width={22} height={22} />
              </div>
              <div>
                <p className="font-semibold text-[#0B3454] text-sm">Par mail</p>
                <p className="text-xs text-slate-500">Réponse sous 24–48h</p>
              </div>
            </Link>
          </div>
        </div>

        {/* --- MIDDLE SECTION : Quick Links --- */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center text-sm">
          {[
            "Entretien copropriété",
            "Nettoyage appartement",
            "Nettoyage matelas",
            "Nettoyage tapis",
            "Nettoyage vitres",
            "Débarras encombrants",
            "Gestion containers",
            "Packages & Contrats",
            "Blog",
            "FAQ",
            "À propos",
            "Carrières",
          ].map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#F7FBFD] rounded-full text-[#0B3454] 
                         hover:bg-[#eaf5f9] cursor-pointer transition border border-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <hr className="border-slate-200 mb-6" />

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* LOGO */}
          <Image
            src="/logo-healthy-home.png"
            width={160}
            height={60}
            alt="Latalia Logo"
            className="opacity-90"
          />

          {/* LEGAL */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <Link href="/conditions">Conditions Générales</Link>
            <span>•</span>
            <Link href="/politique-confidentialite">Politique de Confidentialité</Link>
            <span>•</span>
            <Link href="/cookies">Politique Cookies</Link>
            <span>•</span>
            <Link href="/mentions-legales">Mentions Légales</Link>
          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            {[
              { icon: "/facebook.png", link: "#" },
              { icon: "/instagram.svg", link: "#" },
              { icon: "/linkedin.png", link: "#" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="w-10 h-10 rounded-full bg-[#F7FBFD] flex items-center justify-center 
                           border border-slate-200 hover:bg-white transition"
              >
                <Image src={item.icon} alt="social icon" width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-slate-500 mt-10">
          © {new Date().getFullYear()} Latalia Propreté — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
