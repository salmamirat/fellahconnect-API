const parcelleService = require("../services/parcelle.service");

exports.createParcelle = async (req, res) => {
  try {
    const parcelle = await parcelleService.create(req.body);
    res.status(201).json(parcelle);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.getAllParcelles = async (req, res) => {
  try {
    const data = await parcelleService.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getParcelleById = async (req, res) => {
  try {
    const parcelle = await parcelleService.findById(req.params.id);
    if (!parcelle) {
      return res.status(404).json({ message: "Parcelle introuvable" });
    }
    res.json(parcelle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateParcelle = async (req, res) => {
  try {
    const parcelle = await parcelleService.update(req.params.id, req.body);
    if (!parcelle) {
      return res.status(404).json({ message: "Parcelle introuvable" });
    }
    res.json(parcelle);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deleteParcelle = async (req, res) => {
  try {
    const result = await parcelleService.remove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Parcelle introuvable" });
    }
    res.json({ message: "Parcelle supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};