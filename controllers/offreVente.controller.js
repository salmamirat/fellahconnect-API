const { OffreVente, Recolte } = require("../models");

exports.createOffreVente = async (req, res) => {
  try {
    const offre = await OffreVente.create(req.body);
    res.status(201).json(offre);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.getAllOffresVente = async (req, res) => {
  try {
    const offres = await OffreVente.findAll({ include: [{ model: Recolte }] });
    res.json(offres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOffreVenteById = async (req, res) => {
  try {
    const offre = await OffreVente.findByPk(req.params.id, { include: [{ model: Recolte }] });
    if (!offre) {
      return res.status(404).json({ message: "Offre introuvable" });
    }
    res.json(offre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOffreVente = async (req, res) => {
  try {
    const offre = await OffreVente.findByPk(req.params.id);
    if (!offre) {
      return res.status(404).json({ message: "Offre introuvable" });
    }
    await offre.update(req.body);
    res.json(offre);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deleteOffreVente = async (req, res) => {
  try {
    const offre = await OffreVente.findByPk(req.params.id);
    if (!offre) {
      return res.status(404).json({ message: "Offre introuvable" });
    }
    await offre.destroy();
    res.json({ message: "Offre supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};