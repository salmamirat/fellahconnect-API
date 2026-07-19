const express = require("express");
const router = express.Router();

const marcheController = require("../controllers/marche.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");
const { validateCreateMarche, validateUpdateMarche } = require("../validators/marche.validator");

router.post("/", authenticate, authorize("admin"), validateCreateMarche, marcheController.createMarche);

router.get("/", authenticate, marcheController.getAllMarches);

router.get("/:id", authenticate, marcheController.getMarcheById);

router.put("/:id", authenticate, authorize("admin"), validateUpdateMarche, marcheController.updateMarche);

router.delete("/:id", authenticate, authorize("admin"), marcheController.deleteMarche);

module.exports = router;