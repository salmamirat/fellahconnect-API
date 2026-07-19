const { Agriculteur, User, Parcelle } = require("../models");

/**
 * Create a new agriculteur
 */
exports.create = async (data) => {
  return await Agriculteur.create(data);
};

/**
 * Get all agriculteurs with their associated user
 */
exports.findAll = async () => {
  return await Agriculteur.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "nom", "email"],
      },
    ],
  });
};

/**
 * Get a single agriculteur by ID with user and parcelles
 */
exports.findById = async (id) => {
  return await Agriculteur.findByPk(id, {
    include: [
      {
        model: User,
        attributes: ["id", "nom", "email"],
      },
      Parcelle,
    ],
  });
};

/**
 * Get all parcelles for a specific agriculteur
 */
exports.findWithParcelles = async (id) => {
  const agriculteur = await Agriculteur.findByPk(id, {
    include: [Parcelle],
  });
  return agriculteur;
};

/**
 * Update an agriculteur
 */
exports.update = async (id, data) => {
  const agriculteur = await Agriculteur.findByPk(id);
  if (!agriculteur) return null;
  await agriculteur.update(data);
  return agriculteur;
};

/**
 * Delete an agriculteur
 */
exports.remove = async (id) => {
  const agriculteur = await Agriculteur.findByPk(id);
  if (!agriculteur) return null;
  await agriculteur.destroy();
  return true;
};
