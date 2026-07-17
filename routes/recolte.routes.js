const express = require("express");
const router = express.Router();

const recolteController = require("../controllers/recolte.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post("/", authenticate, authorize("admin", "agriculteur"), recolteController.createRecolte);

router.get("/", authenticate, recolteController.getAllRecoltes);

router.get("/:id", authenticate, recolteController.getRecolteById);

router.put("/:id", authenticate, authorize("admin", "agriculteur"), recolteController.updateRecolte);

router.delete("/:id", authenticate, authorize("admin"), recolteController.deleteRecolte);

module.exports = router;