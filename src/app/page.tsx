import Head from 'next/head';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import SignatureLataliaSection from './components/SignatureLataliaSection';
import ImpactSection from './components/ImpactSection';
import TopCategorySection from './components/TopCategorySection';
import HowItWorksSection from './components/HowItWorksSection';
import CallToActionSection from './components/CallToActionSection';
import SectorSliderSection from './components/SectorSliderSection';
import ManagerNoteSection from './components/ManagerNoteSection';
import TestimonialsSection from './components/TestimonalSection';
import FooterSection from './components/FooterSection';

export default function HomePage() {
  return (
    <>
      <Head>
        {/* ------------------------- META PRINCIPALES ------------------------- */}
        <title>
          Latalia Propreté | Nettoyage Professionnel & Services Hygiène – Paris & Île-de-France
        </title>

        <meta
          name="description"
          content="
          Latalia Propreté : nettoyage professionnel, entretien de locaux, copropriétés, bureaux,
          vitrerie, désinfection vapeur, nettoyage haute pression et services Signature Healthy.
          Interventions rapides à Paris & Île-de-France. Devis en 24h."
        />

        <meta
          name="keywords"
          content="
          nettoyage paris, entreprise nettoyage idf, nettoyage bureaux, entretien locaux,
          nettoyage copropriété, nettoyage professionnel paris, nettoyage naturel, désinfection vapeur,
          haute pression, cristallisation marbre, latalia propreté"
        />

        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.latalia-proprete.fr/" />

        {/* ---------------------------- OPEN GRAPH ---------------------------- */}
        <meta property="og:title" content="Latalia Propreté | Nettoyage Professionnel Paris & IDF" />
        <meta
          property="og:description"
          content="Entreprise de nettoyage professionnel : bureaux, copropriétés, magasins, vitrerie, désinfection vapeur et services Signature Healthy."
        />
        <meta property="og:url" content="https://www.latalia-proprete.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.latalia-proprete.fr/images/og-home.jpg" />
        <meta property="og:locale" content="fr_FR" />

        {/* ---------------------------- TWITTER CARD ---------------------------- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latalia Propreté | Nettoyage Professionnel Paris & IDF" />
        <meta
          name="twitter:description"
          content="Nettoyage de bureaux, copropriétés, magasins, vitrerie & services Signature Healthy."
        />
        <meta name="twitter:image" content="https://www.latalia-proprete.fr/images/og-home.jpg" />

        {/* -------------------------- STRUCTURED DATA -------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Latalia Propreté',
              image: 'https://www.latalia-proprete.fr/images/og-home.jpg',
              '@id': 'https://www.latalia-proprete.fr/',
              url: 'https://www.latalia-proprete.fr/',
              telephone: '+33 7 49 94 80 34',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Paris',
                addressLocality: 'Paris',
                postalCode: '75000',
                addressCountry: 'FR',
              },
              description:
                'Entreprise de nettoyage professionnel à Paris & Île-de-France : bureaux, copropriétés, magasins, vitrerie, désinfection vapeur, haute pression.',
              areaServed: ['Paris', 'Île-de-France'],
              sameAs: [
                'https://www.instagram.com/latalia.proprete/',
                'https://www.facebook.com/',
              ],
            }),
          }}
        />
      </Head>

      {/* ---------------------------- PAGE CONTENT ---------------------------- */}

      <Navbar />

      <main>
        <HeroSection />
        <ServicesGrid />
        <SignatureLataliaSection />
        <ImpactSection /> 
        <TopCategorySection />
        <HowItWorksSection />
        <CallToActionSection />
        <SectorSliderSection />
        {/* <ManagerNoteSection /> */}
        {/* <TestimonialsSection /> */}
        <FooterSection />
      </main>
    </>
  );
}
