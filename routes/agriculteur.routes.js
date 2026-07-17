const express = require("express");
const router = express.Router();

const agriculteurController = require("../controllers/agriculteur.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post("/", authenticate, authorize("admin"), agriculteurController.createAgriculteur);

router.get("/", authenticate, agriculteurController.getAllAgriculteurs);

router.get("/:id", authenticate, agriculteurController.getAgriculteurById);

router.get("/:id/plots", authenticate, agriculteurController.getAgriculteurParcelles);

router.put("/:id", authenticate, authorize("admin"), agriculteurController.updateAgriculteur);

router.delete("/:id", authenticate, authorize("admin"), agriculteurController.deleteAgriculteur);

module.exports = router;