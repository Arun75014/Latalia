/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://www.latalia-proprete.fr";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,

  // Ne pas scanner les dossiers API
  exclude: ["/api/*"],

  // 🔥 Toutes tes pages statiques "services"
  additionalPaths: async (config) => {
    // Pages de services (statiques)
    const staticServices = [
      "/services/entretien-copropriete",
      "/services/nettoyage-appartement",
      "/services/gestion-containers",
      "/services/entretien-locaux",
      "/services/nettoyage-matelas",
      "/services/nettoyage-tapis",
      "/services/packages",
      "/services/nettoyage-vitres",
      "/services/debarras-encombrants",
      "/services/nettoyage-haute-pression",
      "/services/cristallisation-marbre",
      "/services/contact",
    ];

    // Pages dynamiques (entretien-locaux/[type])
    const locauxTypes = [
      "bureaux-commerciaux",
      "salle-de-sport",
      "pharmacie",
      "cabinet-medical",
      "pret-a-porter",
    ];

    const dynamicLocaux = locauxTypes.map((type) => ({
      loc: `/services/entretien-locaux/${type}`,
      changefreq: "weekly",
      priority: 0.8,
    }));

    return [
      ...staticServices.map((url) => ({
        loc: url,
        changefreq: "weekly",
        priority: 0.7,
      })),
      ...dynamicLocaux,
    ];
  },
};
