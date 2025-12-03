import { FC } from 'react';
import Image from 'next/image';

interface Service {
  icon: string;
  label: string;
  href: string;
}

const services: Service[] = [
  { icon: '/copro.png', label: 'Entretien copropriété', href: '/services/entretien-copropriete' },
  { icon: '/appart.png', label: 'Nettoyage appartement', href: '/services/nettoyage-appartement' },
  { icon: '/entretien-locaux.png', label: 'Entretien locaux', href: '/services/entretien-locaux' },
  { icon: '/matelas.png', label: 'Nettoyage matelas', href: '/services/nettoyage-matelas' },
  { icon: '/tapis.png', label: 'Nettoyage tapis', href: '/services/nettoyage-tapis' },
  { icon: '/debarras-encombrants.png', label: 'Débarras encombrants', href: '/services/debarras-encombrants' },
  { icon: '/vitres.png', label: 'Nettoyage vitres', href: '/services/nettoyage-vitres' },
  { icon: '/containers.png', label: 'Gestion containers', href: '/services/gestion-containers' },
];

const ServicesGrid: FC = () => {
  return (
    <section id="services" className="pb-8 mt-4 bg-gradient-to-b from-transparent via-white to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
          {services.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center justify-center gap-3 p-6 bg-white border border-slate-300 rounded-2xl shadow-sm hover:border-[#c0d148] hover:shadow-md transition-all text-center"
            >
              <Image src={icon} alt={label} width={48} height={48} />
              <span className="text-sm font-medium leading-tight">{label}</span>
            </a>
          ))}
        </div>

        {/* CTA Voir tous les services */}
        <div className="flex justify-end mt-8">
          <a
            href="/services/packages"
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-[#003C55] rounded-full shadow-md hover:bg-[#c0d148] transition-colors"
          >
            Voir les Packages →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
