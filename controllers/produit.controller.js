const { Produit, PrixMarche, Recolte } = require("../models");

exports.createProduit = async (req, res) => {
  try {
    const produit = await Produit.create(req.body);
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
    const produits = await Produit.findAll({ include: [PrixMarche, Recolte] });
    res.json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findByPk(req.params.id, { include: [PrixMarche, Recolte] });
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
    const prix = await PrixMarche.findOne({
      where: { produitId: req.params.id },
      order: [["prix", "DESC"]], // highest price = best for the farmer selling
      include: [{ model: require("../models").Marche }],
    });
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
    const produit = await Produit.findByPk(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    await produit.update(req.body);
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
    const produit = await Produit.findByPk(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    await produit.destroy();
    res.json({ message: "Produit supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};