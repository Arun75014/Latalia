import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Latalia Propreté",
  description:
    "Politique de confidentialité conforme RGPD : traitement des données, formulaires, droits des utilisateurs, sécurité et absence de cookies marketing.",
  robots: "index, follow",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8 prose prose-slate max-w-3xl">

        <h1>Politique de Confidentialité</h1>
        <p>Date de mise à jour : 2025</p>

        <p>
          La présente Politique de Confidentialité décrit la manière dont Latalia Propreté
          collecte, utilise et protège les données personnelles des utilisateurs de son site,
          conformément au RGPD.
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>
          <strong>Latalia Propreté</strong><br />
          49, rue Eugène Berthoud, 93400 Saint-Ouen-sur-Seine<br />
          SIRET : 832 426 001 00018<br />
          Email : latalia.proprete@gmail.com<br />
          Téléphone : 06 33 17 40 06
        </p>

        <h2>2. Données collectées</h2>
        <p>
          Nous collectons uniquement les données nécessaires via les formulaires : nom, email,
          téléphone, adresse, informations pour devis et messages envoyés.
        </p>
        <p>
          Aucun cookie marketing, aucune analyse d’audience ou profilage n’est effectué.
        </p>

        <h2>3. Finalités</h2>
        <ul>
          <li>Traitement des demandes d’information</li>
          <li>Établissement de devis</li>
          <li>Suivi client</li>
          <li>Communication liée aux prestations</li>
        </ul>

        <h2>4. Base juridique</h2>
        <ul>
          <li>Exécution d’un contrat (art. 6-1-b)</li>
          <li>Consentement (formulaire volontaire)</li>
          <li>Intérêt légitime de l’entreprise</li>
        </ul>

        <h2>5. Durée de conservation</h2>
        <ul>
          <li>12 mois pour les demandes sans suite</li>
          <li>3 ans pour les relations clients</li>
          <li>10 ans pour les documents comptables</li>
        </ul>

        <h2>6. Destinataires</h2>
        <p>
          Les données ne sont jamais revendues. Elles sont accessibles uniquement à Latalia
          Propreté et aux prestataires techniques (hébergeur).
        </p>

        <h2>7. Sécurité</h2>
        <p>Nous assurons la protection de vos données : HTTPS, accès restreint, hébergement sécurisé.</p>

        <h2>8. Vos droits</h2>
        <p>
          Vous disposez des droits d’accès, rectification, suppression, portabilité, limitation
          et opposition.  
          Contact : <strong>latalia.proprete@gmail.com</strong>
        </p>

        <h2>9. Cookies</h2>
        <p>
          Le site n’utilise que des cookies strictement techniques. Aucun cookie publicitaire ni
          suivi d’audience n’est activé.
        </p>

        <h2>10. Modifications</h2>
        <p>Cette Politique peut être mise à jour à tout moment.</p>

        <h2>11. Contact</h2>
        <p>
          Pour toute question :<br />
          Email : <strong>latalia.proprete@gmail.com</strong><br />
          Téléphone : 06 33 17 40 06
        </p>

      </div>
    </main>
  );
}
