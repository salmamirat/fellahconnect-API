const produitService = require("../services/produit.service");

exports.createProduit = async (req, res) => {
  try {
    const produit = await produitService.create(req.body);
    res.status(201).json(produit);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProduits = async (req, res) => {
  try {
    const produits = await produitService.findAll();
    res.json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProduitById = async (req, res) => {
  try {
    const produit = await produitService.findById(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    res.json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMeilleurPrix = async (req, res) => {
  try {
    const prix = await produitService.findBestPrice(req.params.id);
    if (!prix) {
      return res.status(404).json({ message: "Aucun prix trouvé" });
    }
    res.json(prix);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduit = async (req, res) => {
  try {
    const produit = await produitService.update(req.params.id, req.body);
    if (!produit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    res.json(produit);
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProduit = async (req, res) => {
  try {
    const result = await produitService.remove(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    res.json({ message: "Produit supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};