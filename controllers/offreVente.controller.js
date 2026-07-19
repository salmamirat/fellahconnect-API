const offreVenteService = require("../services/offreVente.service");

exports.createOffreVente = async (req, res) => {
  try {
    const offre = await offreVenteService.create(req.body);
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
    const offres = await offreVenteService.findAll();
    res.json(offres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOffreVenteById = async (req, res) => {
  try {
    const offre = await offreVenteService.findById(req.params.id);
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
    const offre = await offreVenteService.update(req.params.id, req.body);
    if (!offre) {
      return res.status(404).json({ message: "Offre introuvable" });
    }
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
    const result = await offreVenteService.remove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Offre introuvable" });
    }
    res.json({ message: "Offre supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};