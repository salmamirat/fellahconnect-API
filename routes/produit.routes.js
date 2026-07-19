const express = require("express");
const router = express.Router();

const produitController = require("../controllers/produit.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");
const { validateCreateProduit, validateUpdateProduit } = require("../validators/produit.validator");

router.post("/", authenticate, authorize("admin"), validateCreateProduit, produitController.createProduit);

router.get("/", authenticate, produitController.getAllProduits);

router.get("/:id/best-price", authenticate, produitController.getMeilleurPrix);

router.get("/:id", authenticate, produitController.getProduitById);

router.put("/:id", authenticate, authorize("admin"), validateUpdateProduit, produitController.updateProduit);

router.delete("/:id", authenticate, authorize("admin"), produitController.deleteProduit);

module.exports = router;