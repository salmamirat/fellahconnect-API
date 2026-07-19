const agriculteurService = require("../services/agriculteur.service");

exports.createAgriculteur = async (req, res) => {
  try {
    const agriculteur = await agriculteurService.create(req.body);
    res.status(201).json(agriculteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllAgriculteurs = async (req, res) => {
  try {
    const agriculteurs = await agriculteurService.findAll();
    res.json(agriculteurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAgriculteurById = async (req, res) => {
  try {
    const agriculteur = await agriculteurService.findById(req.params.id);
    if (!agriculteur) {
      return res.status(404).json({ message: "Agriculteur introuvable" });
    }
    res.json(agriculteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAgriculteurParcelles = async (req, res) => {
  try {
    const agriculteur = await agriculteurService.findWithParcelles(req.params.id);
    if (!agriculteur) {
      return res.status(404).json({ message: "Agriculteur introuvable" });
    }
    res.json(agriculteur.Parcelles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAgriculteur = async (req, res) => {
  try {
    const agriculteur = await agriculteurService.update(req.params.id, req.body);
    if (!agriculteur) {
      return res.status(404).json({ message: "Agriculteur introuvable" });
    }
    res.json(agriculteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAgriculteur = async (req, res) => {
  try {
    const result = await agriculteurService.remove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Agriculteur introuvable" });
    }
    res.json({ message: "Agriculteur supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};