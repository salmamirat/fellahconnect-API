const { Recolte, Parcelle, Produit } = require("../models");

/**
 * Create a new recolte
 */
exports.create = async (data) => {
  return await Recolte.create(data);
};

/**
 * Get all recoltes with their parcelle and produit
 */
exports.findAll = async () => {
  return await Recolte.findAll({
    include: [Parcelle, Produit],
  });
};

/**
 * Get a single recolte by ID with parcelle and produit
 */
exports.findById = async (id) => {
  return await Recolte.findByPk(id, {
    include: [Parcelle, Produit],
  });
};

/**
 * Update a recolte
 */
exports.update = async (id, data) => {
  const recolte = await Recolte.findByPk(id);
  if (!recolte) return null;
  await recolte.update(data);
  return recolte;
};

/**
 * Delete a recolte
 */
exports.remove = async (id) => {
  const recolte = await Recolte.findByPk(id);
  if (!recolte) return null;
  await recolte.destroy();
  return true;
};
