const recolteService = require("../services/recolte.service");

exports.createRecolte = async (req, res) => {
  try {
    const recolte = await recolteService.create(req.body);
    res.status(201).json(recolte);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.getAllRecoltes = async (req, res) => {
  try {
    const recoltes = await recolteService.findAll();
    res.json(recoltes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecolteById = async (req, res) => {
  try {
    const recolte = await recolteService.findById(req.params.id);
    if (!recolte) {
      return res.status(404).json({ message: "Récolte introuvable" });
    }
    res.json(recolte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRecolte = async (req, res) => {
  try {
    const recolte = await recolteService.update(req.params.id, req.body);
    if (!recolte) {
      return res.status(404).json({ message: "Récolte introuvable" });
    }
    res.json(recolte);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRecolte = async (req, res) => {
  try {
    const result = await recolteService.remove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Récolte introuvable" });
    }
    res.json({ message: "Récolte supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};