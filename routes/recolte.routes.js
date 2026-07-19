const express = require("express");
const router = express.Router();

const recolteController = require("../controllers/recolte.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");
const { validateCreateRecolte, validateUpdateRecolte } = require("../validators/recolte.validator");

router.post("/", authenticate, authorize("admin", "farmer"), validateCreateRecolte, recolteController.createRecolte);

router.get("/", authenticate, recolteController.getAllRecoltes);

router.get("/:id", authenticate, recolteController.getRecolteById);

router.put("/:id", authenticate, authorize("admin", "farmer"), validateUpdateRecolte, recolteController.updateRecolte);

router.delete("/:id", authenticate, authorize("admin"), recolteController.deleteRecolte);

module.exports = router;