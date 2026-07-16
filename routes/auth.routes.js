const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");
const { validateBody } = require("../middlewares/validation.middleware");

router.post("/register", validateBody(["nom", "email", "password"]), register);
router.post("/login", validateBody(["email", "password"]), login);

module.exports = router;