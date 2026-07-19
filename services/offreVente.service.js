const { OffreVente, Recolte, Parcelle, Produit } = require("../models");

/**
 * Create a new offre de vente
 */
exports.create = async (data) => {
  return await OffreVente.create(data);
};

/**
 * Get all offres de vente with their recolte
 */
exports.findAll = async () => {
  return await OffreVente.findAll({
    include: [
      {
        model: Recolte,
        include: [Parcelle, Produit],
      },
    ],
  });
};

/**
 * Get a single offre de vente by ID with recolte details
 */
exports.findById = async (id) => {
  return await OffreVente.findByPk(id, {
    include: [
      {
        model: Recolte,
        include: [Parcelle, Produit],
      },
    ],
  });
};

/**
 * Update an offre de vente
 */
exports.update = async (id, data) => {
  const offre = await OffreVente.findByPk(id);
  if (!offre) return null;
  await offre.update(data);
  return offre;
};

/**
 * Delete an offre de vente
 */
exports.remove = async (id) => {
  const offre = await OffreVente.findByPk(id);
  if (!offre) return null;
  await offre.destroy();
  return true;
};
