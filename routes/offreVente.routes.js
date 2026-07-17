const express = require("express");
const router = express.Router();

const offreVenteController = require("../controllers/offreVente.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post("/", authenticate, authorize("admin", "farmer"), offreVenteController.createOffreVente);

router.get("/", authenticate, offreVenteController.getAllOffresVente);

router.get("/:id", authenticate, offreVenteController.getOffreVenteById);

router.put("/:id", authenticate, authorize("admin", "farmer"), offreVenteController.updateOffreVente);

router.delete("/:id", authenticate, authorize("admin"), offreVenteController.deleteOffreVente);

module.exports = router;