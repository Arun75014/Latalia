'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // dropdown desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // accordéon mobile
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash : '#home-services'
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () =>
      setCurrentHash(window.location.hash || '#home-services');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [servicesOpen]);

  const [locauxOpen, setLocauxOpen] = useState(false);

  useEffect(() => {
    if (!servicesOpen) setLocauxOpen(false);
  }, [servicesOpen]);

  // ================== Données ==================
  const itemsBefore = [{ href: '/', label: 'Accueil' }];

  const locauxTypes = [
    { href: '/services/entretien-locaux/bureaux-commerciaux', label: 'Bureaux commerciaux' },
    { href: '/services/entretien-locaux/salle-de-sport',       label: 'Salle de sport' },
    { href: '/services/entretien-locaux/pharmacie',            label: 'Pharmacie' },
    { href: '/services/entretien-locaux/cabinet-medical',      label: 'Cabinet médical' },
    { href: '/services/entretien-locaux/pret-a-porter',        label: 'Prêt-à-porter' },
  ];

  const mainServices = [
    { href: '/services/entretien-copropriete', label: 'Entretien copropriété' },
    { href: '/services/nettoyage-appartement', label: 'Nettoyage appartement' },
    { href: '/services/gestion-containers', label: 'Gestion containers' },
    { href: '/services/entretien-locaux', label: 'Entretien locaux' },
    { href: '/services/nettoyage-matelas', label: 'Nettoyage matelas' },
    { href: '/services/nettoyage-tapis', label: 'Nettoyage tapis' },
    { href: '/services/packages', label: 'Packages & contrats' },
  ];

  const specialized = [
    { href: '/services/nettoyage-vitres', label: 'Nettoyage vitres' },
    { href: '/services/debarras-encombrants', label: 'Débarras encombrants' },
    { href: '/services/nettoyage-haute-pression', label: 'Haute pression' },
    { href: '/services/cristallisation-marbre', label: 'Cristallisation marbre' },
  ];

  const itemsAfter = [
    { href: '/services/contact', label: 'Contact' },
  ];

  const linkCls = (href: string) =>
    `transition-colors ${
      currentHash === href ? 'text-[#54beea]' : 'hover:text-[#c0d148]'
    }`;
useEffect(() => {
  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, [open]);

  // ================== Render ==================
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <Image src="/logo-healthy-home.png" alt="Logo" width={56} height={56} />
          <span className="hidden sm:inline">Nettoyage & Propreté®</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium mr-54">
          {/* Items avant */}
          {itemsBefore.map(({ href, label }) => (
            <Link key={href} href={href} className={linkCls(href)}>
              {label}
            </Link>
          ))}

          {/* Nos Services (dropdown) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((s) => !s)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`inline-flex items-center ${
                servicesOpen ? 'text-[#54beea]' : 'hover:text-[#c0d148]'
              } transition-colors`}
            >
              Nos Services
              <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute left-1/2 -translate-x-1/2 w-[720px] rounded-2xl border border-slate-200 bg-white shadow-xl"
              >
                <div className="grid grid-cols-2 gap-6 pt-8 pl-4">
                  {/* Prestations principales */}
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#54beea] uppercase mb-3">
                      Prestations principales
                    </p>
                    <ul className="space-y-2">
                      {mainServices.map((it) => {
                        const isLocaux = it.href === '/services/entretien-locaux';
                        if (!isLocaux) {
                          return (
                            <li key={it.href}>
                              <Link
                                href={it.href}
                                onClick={() => {
                                  setLocauxOpen(false);
                                  setServicesOpen(false);
                                }}
                                className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-[#c0d148] transition"
                              >
                                <span>{it.label}</span>
                              </Link>
                            </li>
                          );
                        }

                        // Entretien locaux avec sous-menu
                        return (
                          <li key={it.href} className="relative">
                            <button
                              type="button"
                              aria-expanded={locauxOpen}
                              onClick={(e) => {
                                e.preventDefault();
                                setLocauxOpen((s) => !s);
                              }}
                              className={`w-full text-left flex items-center justify-between rounded-lg px-3 py-2 transition
                                ${
                                  locauxOpen
                                    ? 'bg-slate-50 text-[#54beea]'
                                    : 'hover:bg-slate-50 hover:text-[#c0d148]'
                                }`}
                            >
                              <span>{it.label}</span>
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  locauxOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {locauxOpen && (
                              <div
                                className="absolute left-full top-0 ml-3 z-50 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl p-3"
                                onMouseLeave={() => setLocauxOpen(false)}
                              >
                                <p className="px-2 pb-2 text-xs font-semibold tracking-wider text-[#54beea] uppercase">
                                  Types de locaux
                                </p>
                                <ul className="space-y-1">
                                  {locauxTypes.map((sub) => (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50 hover:text-[#c0d148] transition"
                                        onClick={() => {
                                          setLocauxOpen(false);
                                          setServicesOpen(false);
                                        }}
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Spécialisés */}
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#54beea] uppercase mb-3">
                      Spécialisés
                    </p>
                    <ul className="space-y-2">
                      {specialized.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-[#c0d148] transition"
                          >
                            <span>{it.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer dropdown */}
                <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-700">
                    Besoin d’un conseil ? On vous répond sous 48h.
                  </p>
                  <Link
                    href="#contact"
                    className="px-4 py-2 rounded-md bg-[#003C55] text-white text-sm font-semibold hover:bg-[#c0d148] transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Items après */}
          {itemsAfter.map(({ href, label }) => (
            <Link key={href} href={href} className={linkCls(href)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded hover:bg-slate-100"
          onClick={() => {
            setOpen(true);
            setMobileServicesOpen(false);
          }}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile full-screen menu */}
{/* Mobile full-screen menu */}
{open && (
  <div className="fixed inset-0 z-[60] md:hidden">

    {/* Background */}
    <div
      className="absolute inset-0 bg-black/20"
      onClick={() => setOpen(false)}
    />

    {/* Full panel */}
    <aside className="relative z-[70] h-screen w-full bg-white flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-4 border-b">
        <button
          aria-label="Fermer le menu"
          className="p-2 rounded hover:bg-slate-100"
          onClick={() => setOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-1">
          <Image
            src="/logo-healthy-home.png"
            alt="Latalia Propreté"
            width={80}
            height={80}
          />
          <span className="text-sm font-semibold">Nettoyage & Propreté®</span>
        </div>

        <div className="w-[40px]" />
      </div>

      {/* Scrollable area */}
      <nav className="flex-1 px-6 py-6 space-y-6 overflow-y-auto">

        {/* Accueil */}
        {itemsBefore.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block text-base font-medium hover:text-[#c0d148]"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}

        {/* Accordéon */}
        <div className="border-t border-slate-200 pt-4">
          <button
            className="w-full flex items-center justify-between text-left text-base font-medium hover:text-[#c0d148]"
            onClick={() => setMobileServicesOpen(s => !s)}
            aria-expanded={mobileServicesOpen}
          >
            Nos Services
            <ChevronDown
              size={18}
              className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="mt-3 space-y-4">

              {/* Prestations principales */}
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#54beea] uppercase mb-2">
                  Prestations principales
                </p>
                <ul className="space-y-1">
                  {mainServices.map(it => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="block rounded-md px-2 hover:bg-slate-50"
                        onClick={() => setOpen(false)}
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spécialisés */}
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#54beea] uppercase mb-2">
                  Spécialisés
                </p>
                <ul className="space-y-1">
                  {specialized.map(it => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="block rounded-md px-2 hover:bg-slate-50"
                        onClick={() => setOpen(false)}
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </div>

        {/* Autres liens */}
        {itemsAfter.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block text-base font-medium hover:text-[#c0d148]"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  </div>
)}

    </header>
  );
}
  