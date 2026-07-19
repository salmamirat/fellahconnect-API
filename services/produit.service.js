const { Produit, PrixMarche, Recolte, Marche } = require("../models");

/**
 * Create a new produit
 */
exports.create = async (data) => {
  return await Produit.create(data);
};

/**
 * Get all produits with their prix and recoltes
 */
exports.findAll = async () => {
  return await Produit.findAll({
    include: [PrixMarche, Recolte],
  });
};

/**
 * Get a single produit by ID with prix and recoltes
 */
exports.findById = async (id) => {
  return await Produit.findByPk(id, {
    include: [PrixMarche, Recolte],
  });
};

/**
 * Get the best (highest) price for a produit across all markets
 */
exports.findBestPrice = async (produitId) => {
  return await PrixMarche.findOne({
    where: { produitId },
    order: [["prix", "DESC"]],
    include: [{ model: Marche }],
  });
};

/**
 * Update a produit
 */
exports.update = async (id, data) => {
  const produit = await Produit.findByPk(id);
  if (!produit) return null;
  await produit.update(data);
  return produit;
};

/**
 * Delete a produit
 */
exports.remove = async (id) => {
  const produit = await Produit.findByPk(id);
  if (!produit) return null;
  await produit.destroy();
  return true;
};
