const express = require("express");
const router = express.Router();

const produitController = require("../controllers/produit.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post("/", authenticate, authorize("admin"), produitController.createProduit);

router.get("/", authenticate, produitController.getAllProduits);

router.get("/:id/meilleur-prix", authenticate, produitController.getMeilleurPrix);

router.get("/:id", authenticate, produitController.getProduitById);

router.put("/:id", authenticate, authorize("admin"), produitController.updateProduit);

router.delete("/:id", authenticate, authorize("admin"), produitController.deleteProduit);

module.exports = router;