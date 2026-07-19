const marcheService = require("../services/marche.service");

exports.createMarche = async (req, res) => {
  try {
    const marche = await marcheService.create(req.body);
    res.status(201).json(marche);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.getAllMarches = async (req, res) => {
  try {
    const marches = await marcheService.findAll();
    res.json(marches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMarcheById = async (req, res) => {
  try {
    const marche = await marcheService.findById(req.params.id);
    if (!marche) {
      return res.status(404).json({ message: "Marché introuvable" });
    }
    res.json(marche);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMarche = async (req, res) => {
  try {
    const marche = await marcheService.update(req.params.id, req.body);
    if (!marche) {
      return res.status(404).json({ message: "Marché introuvable" });
    }
    res.json(marche);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMarche = async (req, res) => {
  try {
    const result = await marcheService.remove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Marché introuvable" });
    }
    res.json({ message: "Marché supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};