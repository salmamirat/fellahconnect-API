const express = require("express");
const router = express.Router();

const prixMarcheController = require("../controllers/prixMarche.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post("/", authenticate, authorize("admin"), prixMarcheController.createPrixMarche);

router.get("/", authenticate, prixMarcheController.getAllPrixMarches);

router.get("/:id", authenticate, prixMarcheController.getPrixMarcheById);

router.put("/:id", authenticate, authorize("admin"), prixMarcheController.updatePrixMarche);

router.delete("/:id", authenticate, authorize("admin"), prixMarcheController.deletePrixMarche);

module.exports = router;