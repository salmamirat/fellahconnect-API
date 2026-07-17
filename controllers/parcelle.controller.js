const { Parcelle, Agriculteur, Recolte } = require("../models");

exports.createParcelle = async (req, res) => {
  try {
    const parcelle = await Parcelle.create(req.body);
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
    const data = await Parcelle.findAll({ include: [Agriculteur] });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getParcelleById = async (req, res) => {
  try {
    const parcelle = await Parcelle.findByPk(req.params.id, { include: [Agriculteur, Recolte] });
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
    const parcelle = await Parcelle.findByPk(req.params.id);
    if (!parcelle) {
      return res.status(404).json({ message: "Introuvable" });
    }
    await parcelle.update(req.body);
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
    const parcelle = await Parcelle.findByPk(req.params.id);
    if (!parcelle) {
      return res.status(404).json({ message: "Introuvable" });
    }
    await parcelle.destroy();
    res.json({ message: "Supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};