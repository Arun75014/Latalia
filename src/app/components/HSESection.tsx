/* components/HSESection.tsx */
"use client";

import Image from "next/image";

const brand = {
  teal: "#54beea",
  navy: "#10324F",
  rose: "#c0d148",
  deepBlue: "#003C55",
  bgSoft: "#F7FBFD",
};

/* -------------------------------------------------------------
   ✔ Données HSE selon le type
------------------------------------------------------------- */
const HSE_DATA: Record<
  string,
  {
    contract: {
      days: string;
      hours: string;
      company?: string;
      options: string[];
    };
    checklist: { label: string; hint?: string }[];
  }
> = {
  /* ------------------ BUREAUX ------------------ */
  "bureaux-commerciaux": {
    contract: {
      days: "Lun → Dim",
      hours: "7h00 – 21h00",
      company:
        "Lattana Nettoyage — SIRET 832 426 001 00018 — Assurance MAAF 175013322 X 001",
      options: [
        "Ponctuel : shampouinage moquette",
        "Vitrerie",
        "Débarras d’encombrants",
        "Réassort fournitures",
        "Cristallisation marbre",
        "Nettoyage canapé, fauteuils, tapis, chaise, rideaux",
        "Nettoyage haute pression",
        "Désinfection vapeur (120°)",
        "Lustrage parquet (huile d’entretien)",
      ],
    },
    checklist: [
      { label: "EPI requis", hint: "Blouse, gants, chasuble, pantalon, chaussures…" },
      { label: "Zones sensibles identifiées", hint: "Réunions, archives, informatique" },
      { label: "Local de stockage matériel défini", hint: "Ventilation, point d’eau, électricité" },
      { label: "Plan d’évacuation & issues connus", hint: "Point de rassemblement" },
    ],
  },

  /* ------------------ SALLE DE SPORT ------------------ */
  "salle-de-sport": {
    contract: {
      days: "Lun → Dim",
      hours: "7h00 – 21h00",
      options: [
        "Vitrerie",
        "Shampouinage moquette",
        "Débarras d’encombrants",
        "Réassort fournitures",
        "Cristallisation marbre",
        "Nettoyage canapé, fauteuils, tapis, chaise, rideaux",
        "Désinfection vapeur",
        "Nettoyage haute pression",
        "Lustrage parquet (huile d’entretien)",
      ],
    },
    checklist: [
      { label: "Zones sensibles identifiées", hint: "Archives, réunion, entraînement" },
      {
        label: "Plan d’évacuation & issues connus",
        hint: "Point de rassemblement",
      },
    ],
  },

  /* ------------------ PHARMACIE ------------------ */
  pharmacie: {
    contract: {
      days: "Lun → Dim",
      hours: "7h00 – 21h00",
      company:
        "Lattana Nettoyage — SIRET 832 426 001 00018 — Assurance MAAF 175013322 X 001",
      options: [
        "Vitrerie",
        "Shampouinage moquette",
        "Débarras",
        "Réassort fournitures",
        "Cristallisation marbre",
        "Désinfection vapeur",
        "Nettoyage haute pression",
        "Lustrage parquet (huile d’entretien)",
      ],
    },
    checklist: [
      {
        label: "EPI requis",
        hint:
          "Blouse, lunettes, gants ménage professionnels, chasuble, pantalon, chaussures",
      },
      {
        label: "Consignes Alarmes / SSI validées",
        hint: "Armement, désarmement, codes, zones",
      },
      {
        label: "Zones sensibles identifiées",
        hint: "Salle de test, arrière-boutique, salle de confidentialité",
      },
      {
        label: "Plan d’évacuation & issues connus",
        hint: "Point de rassemblement",
      },
    ],
  },

  /* ------------------ CABINET MEDICAL ------------------ */
  "cabinet-medical": {
    contract: {
      days: "Lun → Ven",
      hours: "7h00 – 21h00",
      options: [
        "Vitrerie",
        "Shampouinage moquette",
        "Débarras",
        "Réassort fournitures",
        "Cristallisation marbre",
        "Nettoyage haute pression",
        "Désinfection vapeur (120°)",
        "Lustrage parquet (huile d’entretien)",
      ],
    },
    checklist: [
      { label: "Accès / badges / clés transmis", hint: "Procédure remise/retour" },
      {
        label: "EPI requis",
        hint: "Blouse, gants, chasuble, pantalon, chaussures…",
      },
      {
        label: "Produits autorisés/interdits",
        hint: "Allergènes, parfums, solvants",
      },
      {
        label: "Tri & évacuation déchets",
        hint: "DIB, recyclables",
      },
      {
        label: "Contacts d’urgence affichés",
        hint: "Interne + prestataires critiques",
      },
      {
        label: "Consignes Alarmes / SSI validées",
        hint: "Codes, zones, armement/désarmement",
      },
      {
        label: "Zones sensibles identifiées",
        hint: "Archives, test, labo",
      },
      {
        label: "Plan d’évacuation & issues connus",
        hint: "Point de rassemblement",
      },
    ],
  },

  /* ------------------ PRÊT-À-PORTER ------------------ */
  "pret-a-porter": {
    contract: {
      days: "Lun → Ven",
      hours: "7h00 – 21h00",
      company:
        "Lattana Nettoyage — SIRET 832 426 001 00018 — Assurance MAAF 175013322 X 001",
      options: [
        "Vitrerie",
        "Shampouinage moquette",
        "Débarras",
        "Réassort fournitures",
        "Cristallisation marbre",
        "Nettoyage canapé, fauteuils, tapis, chaise, rideaux",
        "Nettoyage haute pression",
        "Désinfection vapeur 120°",
        "Lustrage parquet (huile d’entretien)",
      ],
    },
    checklist: [
      { label: "Accès / badges / clés transmis" },
      {
        label: "EPI requis",
        hint: "Blouse, gants, chasuble, pantalon, chaussures…",
      },
      {
        label: "Produits autorisés/interdits",
        hint: "Allergènes, parfums, solvants",
      },
      {
        label: "Tri & évacuation déchets",
        hint: "DIB, recyclables",
      },
      {
        label: "Contacts d’urgence affichés",
        hint: "Interne + prestataires critiques",
      },
      {
        label: "Consignes Alarmes / SSI validées",
        hint: "Codes, zones, armement/désarmement",
      },
      {
        label: "Zones sensibles identifiées",
        hint: "Showroom, stock, archives",
      },
      {
        label: "Plan d’évacuation & issues connus",
        hint: "Point de rassemblement",
      },
    ],
  },
};

/* -------------------------------------------------------------
   ✔ Composant principal
------------------------------------------------------------- */
export default function HSESection({ type }: { type: string }) {
  const data = HSE_DATA[type];

  if (!data) return null;

  return (
    <section className="py-16" style={{ backgroundColor: brand.bgSoft }}>
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-10 flex items-center gap-4">
          <Image
            src="/hse-icon.png"
            alt="Icône HSE premium"
            width={52}
            height={52}
            className="opacity-90"
          />
          <div>
            <h2 className="text-3xl font-bold" style={{ color: brand.navy }}>
              Contrat & Check-list HSE
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Paramètres contractuels & exigences Hygiène-Sécurité-Environnement
              liés à votre type de local.
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* ---------------- CONTRACT ---------------- */}
          <div className="lg:col-span-1 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
              Paramètres contractuels
            </h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center justify-between">
                <span>Jours de passage</span>
                <span
                  className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: brand.navy }}
                >
                  {data.contract.days}
                </span>
              </li>

              <li className="flex items-center justify-between">
                <span>Créneaux horaires</span>
                <span className="px-2 py-1 rounded-md border text-xs">
                  {data.contract.hours}
                </span>
              </li>

              {data.contract.company && (
                <li className="text-xs text-slate-600 pt-2">{data.contract.company}</li>
              )}
            </ul>

            {/* Options */}
            <div className="mt-6 rounded-xl border p-4 bg-white">
              <p className="text-sm font-semibold" style={{ color: brand.navy }}>
                Options possibles
              </p>
              <ul className="mt-2 text-sm text-slate-700 space-y-1">
                {data.contract.options.map((opt) => (
                  <li key={opt}>• {opt}</li>
                ))}
              </ul>
            </div>

            <a
              href="/signature-latalia"
              className="inline-block mt-6 px-5 py-3 rounded-md text-white font-semibold"
              style={{ backgroundColor: brand.deepBlue }}
            >
              Option « Client Healthy »
            </a>
          </div>

          {/* ---------------- CHECKLIST ---------------- */}
          <div className="lg:col-span-2 rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
              Check-list HSE (avant démarrage)
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {data.checklist.map((item) => (
                <label
                  key={item.label}
                  className="flex items-start gap-3 rounded-xl border px-4 py-3 hover:bg-slate-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-800">{item.label}</p>
                    {item.hint && (
                      <p className="text-xs text-slate-500">{item.hint}</p>
                    )}
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#F1F5F9", color: "#475569" }}
              >
                Checklist informative (à valider avant démarrage)
              </span>

              <a
                href="#devis"
                className="px-3 py-2 rounded-md text-sm font-semibold border hover:bg-slate-50"
              >
                Nous transmettre vos consignes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
