import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Latalia Propreté",
  description:
    "Mentions légales du site Latalia Propreté : informations légales, éditeur, hébergement, propriété intellectuelle, données personnelles et contacts.",
  robots: "index, follow",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8 prose prose-slate max-w-3xl">

        <h1>Mentions légales</h1>

        <h2>1. Éditeur du site</h2>
        <p>
          <strong>Latalia Propreté</strong><br />
          Entreprise individuelle<br />
          49, rue Eugène Berthoud, 93400 Saint-Ouen-sur-Seine, France<br />
          Téléphone : 06 33 17 40 06<br />
          Email : latalia.proprete@gmail.com<br />
          SIRET : 832 426 001 00018<br />
          Responsable de publication : Lattan Vongpradith
        </p>

        <h2>2. Hébergeur</h2>
        <p>
          <strong>Hostinger International Ltd.</strong><br />
          61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
          Site : https://www.hostinger.com/
        </p>

        <h2>3. Propriété intellectuelle</h2>
        <p>
          Le contenu du site (textes, images, vidéos, graphismes, logos, structure, code)
          est la propriété exclusive de Latalia Propreté, sauf mentions contraires.
          Toute reproduction ou exploitation sans autorisation est interdite.
        </p>

        <h2>4. Données personnelles</h2>
        <p>
          Le site ne collecte aucune donnée personnelle autre que celles soumises via les formulaires.
          Aucune donnée n’est transmise ni vendue à des tiers.
        </p>
        <p>
          Conformément au RGPD, vous pouvez exercer vos droits d’accès, de modification et de suppression :
          <br />
          📧 <strong>latalia.proprete@gmail.com</strong>
        </p>

        <h2>5. Responsabilité</h2>
        <p>
          Latalia Propreté ne peut garantir l’exactitude complète des informations publiées.
          Le site peut inclure des liens externes, dont le contenu n’engage pas la responsabilité de l’éditeur.
        </p>

        <h2>6. Contact</h2>
        <p>
          Pour toute question :<br />
          📞 06 33 17 40 06<br />
          📧 latalia.proprete@gmail.com
        </p>

      </div>
    </main>
  );
}
