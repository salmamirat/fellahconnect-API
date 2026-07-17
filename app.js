const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { requestLogger } = require("./middlewares/logger.middleware");
const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/error.middleware");

const authRoutes = require("./routes/auth.routes");
const agentRoutes = require("./routes/agent.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "FellahConnect API is healthy",
    timestamp: new Date(),
  });
});

// Routes
app.use("/auth", authRoutes);
app.use("/agent", agentRoutes);

// Middlewares
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;