'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Prise de contact',
    desc: 'Appelez-nous ou réservez en ligne votre service en quelques clics.',
    icon: '/contact.png',
  },
  {
    id: 2,
    title: 'Audit & Devis',
    desc: 'Nous analysons vos besoins et vous envoyons un devis transparent.',
    icon: '/devis.png',
  },
  {
    id: 3,
    title: 'Planification',
    desc: 'Choisissez la date et l’heure qui vous conviennent le mieux.',
    icon: '/planification.png',
  },
  {
    id: 4,
    title: 'Intervention',
    desc: 'Notre équipe certifiée réalise la prestation avec un matériel professionnel.',
    icon: '/intervention.png',
  },
  {
    id: 5,
    title: 'Suivi & Satisfaction',
    desc: 'Nous vérifions la qualité et restons disponibles pour toute question.',
    icon: '/satisfaction.png',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="process" className="py-4 bg-[#F7FBFD] pb-8">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl lg:text-4xl font-bold text-[#10324F]">
          Comment ça <span className="text-[#54beea]">marche&nbsp;?</span>
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Un processus simple, fluide et pensé pour vous offrir une expérience sereine et professionnelle du début à la fin.
        </p>

        {/* STEPS GRID */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 flex flex-col items-center text-center"
            >

              {/* Number badge */}
              <span className="absolute top-3 left-3 h-8 w-8 rounded-full bg-[#54beea]/10 text-[#10324F] font-bold flex items-center justify-center text-sm">
                {step.id}
              </span>

              {/* Icon */}
              <div className="h-20 w-20 flex items-center justify-center mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="drop-shadow-md"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-[#10324F]">{step.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{step.desc}</p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#54beea] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-white text-sm font-semibold rounded-full shadow-md transition-all bg-[#003C55] hover:bg-[#c0d148]"
          >
            Demander un devis gratuit →
          </a>
        </div>

      </div>
    </section>
  );
}
