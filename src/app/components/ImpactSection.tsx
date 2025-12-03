import Image from 'next/image';

const stats = [
  {
    number: '90%',
    desc: 'C’est le pourcentage de temps que nous passons en intérieur',
  },
  {
    number: '7000',
    desc: 'Bactéries différentes présentent dans vos intérieurs',
  },
  {
    number: '205',
    desc: '205 prestations effectuées chaque mois chez nos client',
  },
  {
    number: '100%',
    desc: 'C’est le pourcentage de satisfaction qu’on tente de vous apporter',
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-[#D8E8F8] py-16" id="impact">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <Image src="/load-latalia.png" alt="Wave icon" width={64} height={24} className="mb-4" />
          <p className="uppercase tracking-widest mb-2 text-sm text-[#54beea]">
            LATALIA PROPRETÉ ET SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight max-w-xl text-[#10324F]">
            VOTRE ENVIRONNEMENT A UN IMPACT DIRECT SUR VOTRE SANTÉ ET VOTRE BIEN ÊTRE
          </h2>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-12">
          {stats.map(({ number, desc }) => (
            <div key={number} className="max-w-xs">
              <p className="text-5xl font-extrabold mb-2 text-[#c0d148]">{number}</p>
              <p className="text-sm leading-relaxed text-[#10324F]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
