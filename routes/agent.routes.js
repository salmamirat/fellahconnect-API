const express = require("express");
const router = express.Router();

const agentController = require("../controllers/agent.controller");
const { authenticate } = require("../middlewares/auth.middleware");

router.post("/chat", authenticate, agentController.chat);

module.exports = router;