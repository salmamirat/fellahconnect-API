const prixService = require("../services/prixMarche.service");
const produitService = require("../services/produit.service");
const marcheService = require("../services/marche.service");
const agriculteurService = require("../services/agriculteur.service");
const recolteService = require("../services/recolte.service");

/**
 * OpenAI function-calling tool definitions
 */
const toolDefinitions = [
  {
    type: "function",
    name: "get_prix_produit",
    description: "Rechercher les prix du marché pour un produit agricole par son nom. Retourne les prix les plus récents dans les différents marchés.",
    parameters: {
      type: "object",
      properties: {
        nom_produit: {
          type: "string",
          description: "Le nom du produit agricole (ex: tomate, blé, olive)",
        },
      },
      required: ["nom_produit"],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    type: "function",
    name: "get_all_produits",
    description: "Lister tous les produits agricoles disponibles dans la base de données.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    type: "function",
    name: "get_all_marches",
    description: "Lister tous les marchés disponibles avec leurs informations (nom, ville, région).",
    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    type: "function",
    name: "get_meilleur_prix",
    description: "Trouver le meilleur prix (le plus élevé) pour un produit donné par son ID.",
    parameters: {
      type: "object",
      properties: {
        produit_id: {
          type: "number",
          description: "L'ID du produit",
        },
      },
      required: ["produit_id"],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    type: "function",
    name: "get_recoltes",
    description: "Lister toutes les récoltes enregistrées avec les détails des parcelles et produits.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
    strict: true,
  },
];

/**
 * Execute a tool call and return the result
 */
const executeTool = async (toolName, args) => {
  switch (toolName) {
    case "get_prix_produit":
      return await prixService.findByNom(args.nom_produit);

    case "get_all_produits":
      return await produitService.findAll();

    case "get_all_marches":
      return await marcheService.findAll();

    case "get_meilleur_prix":
      return await produitService.findBestPrice(args.produit_id);

    case "get_recoltes":
      return await recolteService.findAll();

    default:
      return { error: `Outil inconnu: ${toolName}` };
  }
};

module.exports = { toolDefinitions, executeTool };