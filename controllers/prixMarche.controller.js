const prixMarcheService = require("../services/prixMarche.service");

exports.createPrixMarche = async (req, res) => {
  try {
    const prix = await prixMarcheService.create(req.body);
    res.status(201).json(prix);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPrixMarches = async (req, res) => {
  try {
    const prix = await prixMarcheService.findAll();
    res.json(prix);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPrixMarcheById = async (req, res) => {
  try {
    const prix = await prixMarcheService.findById(req.params.id);
    if (!prix) {
      return res.status(404).json({ message: "Prix marché introuvable" });
    }
    res.json(prix);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePrixMarche = async (req, res) => {
  try {
    const prix = await prixMarcheService.update(req.params.id, req.body);
    if (!prix) {
      return res.status(404).json({ message: "Prix marché introuvable" });
    }
    res.json(prix);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deletePrixMarche = async (req, res) => {
  try {
    const result = await prixMarcheService.remove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Prix marché introuvable" });
    }
    res.json({ message: "Prix supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};