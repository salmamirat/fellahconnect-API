const express = require("express");
const router = express.Router();

const parcelleController = require("../controllers/parcelle.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");
const { validateCreateParcelle, validateUpdateParcelle } = require("../validators/parcelle.validator");

router.post("/", authenticate, authorize("admin", "farmer"), validateCreateParcelle, parcelleController.createParcelle);

router.get("/", authenticate, parcelleController.getAllParcelles);

router.get("/:id", authenticate, parcelleController.getParcelleById);

router.put("/:id", authenticate, authorize("admin", "farmer"), validateUpdateParcelle, parcelleController.updateParcelle);

router.delete("/:id", authenticate, authorize("admin"), parcelleController.deleteParcelle);

module.exports = router;