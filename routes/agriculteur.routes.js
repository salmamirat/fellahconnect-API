const express = require("express");
const router = express.Router();

const agriculteurController = require("../controllers/agriculteur.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");
const { validateCreateAgriculteur, validateUpdateAgriculteur } = require("../validators/agriculteur.validator");

router.post("/", authenticate, authorize("admin"), validateCreateAgriculteur, agriculteurController.createAgriculteur);

router.get("/", authenticate, agriculteurController.getAllAgriculteurs);

router.get("/:id", authenticate, agriculteurController.getAgriculteurById);

router.get("/:id/parcelles", authenticate, agriculteurController.getAgriculteurParcelles);

router.put("/:id", authenticate, authorize("admin"), validateUpdateAgriculteur, agriculteurController.updateAgriculteur);

router.delete("/:id", authenticate, authorize("admin"), agriculteurController.deleteAgriculteur);

module.exports = router;