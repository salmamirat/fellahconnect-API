const { Parcelle, Agriculteur, Recolte } = require("../models");

/**
 * Create a new parcelle
 */
exports.create = async (data) => {
  return await Parcelle.create(data);
};

/**
 * Get all parcelles with their agriculteur
 */
exports.findAll = async () => {
  return await Parcelle.findAll({
    include: [Agriculteur],
  });
};

/**
 * Get a single parcelle by ID with agriculteur and recoltes
 */
exports.findById = async (id) => {
  return await Parcelle.findByPk(id, {
    include: [Agriculteur, Recolte],
  });
};

/**
 * Update a parcelle
 */
exports.update = async (id, data) => {
  const parcelle = await Parcelle.findByPk(id);
  if (!parcelle) return null;
  await parcelle.update(data);
  return parcelle;
};

/**
 * Delete a parcelle
 */
exports.remove = async (id) => {
  const parcelle = await Parcelle.findByPk(id);
  if (!parcelle) return null;
  await parcelle.destroy();
  return true;
};
