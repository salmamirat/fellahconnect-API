const { Marche, PrixMarche } = require("../models");

/**
 * Create a new marche
 */
exports.create = async (data) => {
  return await Marche.create(data);
};

/**
 * Get all marches with their prix
 */
exports.findAll = async () => {
  return await Marche.findAll({
    include: [PrixMarche],
  });
};

/**
 * Get a single marche by ID with prix
 */
exports.findById = async (id) => {
  return await Marche.findByPk(id, {
    include: [PrixMarche],
  });
};

/**
 * Update a marche
 */
exports.update = async (id, data) => {
  const marche = await Marche.findByPk(id);
  if (!marche) return null;
  await marche.update(data);
  return marche;
};

/**
 * Delete a marche
 */
exports.remove = async (id) => {
  const marche = await Marche.findByPk(id);
  if (!marche) return null;
  await marche.destroy();
  return true;
};
