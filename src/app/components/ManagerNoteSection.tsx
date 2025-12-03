import Image from "next/image";

export default function ManagerNoteSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* ---- Photo du gérant ---- */}
        <div className="relative">
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/equipe_entretien.jpg"  // 👉 remplace par la vraie photo
              alt="Gérant de Latalia Propreté"
              fill
              className="object-cover"
            />
          </div>

          {/* Effet halo doux */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-10 bg-[#54beea]/20 blur-2xl rounded-full" />
        </div>

        {/* ---- Texte SEO ---- */}
        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-widest text-sm text-[#54beea] font-semibold mb-3">
            MOT DU GÉRANT
          </p>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B3454] leading-tight mb-6">
            Une équipe engagée pour votre bien-être
          </h2>

          <p className="text-slate-700 leading-relaxed text-[15px] mb-6">
            Chez <strong>Latalia Propreté</strong>, j’ai toujours souhaité bâtir une entreprise
            qui allie excellence, respect du client et bien-être des équipes. 
            Même en tant que gérant, je reste présent sur le terrain : cela me permet de
            comprendre les réalités du métier et d’assurer un suivi rigoureux de chaque prestation.
          </p>

          <p className="text-slate-700 leading-relaxed text-[15px] mb-6">
            Je veille à offrir à mes collaborateurs un environnement de travail sécurisé,
            ergonomique et motivant. Une équipe bien préparée et respectée,
            c’est la garantie d’un nettoyage de qualité, d’un service fiable et d’une relation client irréprochable.
          </p>

          {/* Petit + */}
          <div className="mt-6 p-5 bg-[#F7FBFD] border border-slate-200 rounded-2xl shadow-sm">
            <p className="text-[#0B3454] font-semibold text-lg mb-2 flex items-center gap-2">
              <span className="text-[#54beea] text-2xl">👍</span>
              Le petit plus ?
            </p>
            <p className="text-slate-700 text-[14px] leading-relaxed">
              Vous avez besoin d’un réassort de matériel, d’arroser vos plantes,
              ou d’une intervention de dernière minute ?  
              <strong>Latalia Propreté</strong> met à votre disposition des professionnels formés
              pour répondre à ces demandes spécifiques avec la même qualité de service.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8">
            <p className="font-semibold text-[#0B3454] text-lg">Lattana V.</p>
            <p className="text-slate-500 text-sm">Gérante – Latalia Propreté</p>
          </div>
        </div>
      </div>
    </section>
  );
}
