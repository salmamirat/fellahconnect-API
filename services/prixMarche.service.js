const { PrixMarche, Produit, Marche } = require("../models");
const { Op } = require("sequelize");

/**
 * Create a new prix marche
 */
exports.create = async (data) => {
  return await PrixMarche.create(data);
};

/**
 * Get all prix marches with produit and marche
 */
exports.findAll = async () => {
  return await PrixMarche.findAll({
    include: [Produit, Marche],
  });
};

/**
 * Get a single prix marche by ID with produit and marche
 */
exports.findById = async (id) => {
  return await PrixMarche.findByPk(id, {
    include: [Produit, Marche],
  });
};

/**
 * Find market prices by product name (used by AI agent tools)
 */
exports.findByNom = async (nomProduit) => {
  return await PrixMarche.findAll({
    include: [
      {
        model: Produit,
        where: {
          nom: { [Op.iLike]: `%${nomProduit}%` },
        },
      },
      Marche,
    ],
    order: [["datePrix", "DESC"]],
  });
};

/**
 * Update a prix marche
 */
exports.update = async (id, data) => {
  const prix = await PrixMarche.findByPk(id);
  if (!prix) return null;
  await prix.update(data);
  return prix;
};

/**
 * Delete a prix marche
 */
exports.remove = async (id) => {
  const prix = await PrixMarche.findByPk(id);
  if (!prix) return null;
  await prix.destroy();
  return true;
};
