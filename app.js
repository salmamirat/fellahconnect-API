const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple healthcheck route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "FellahConnect API is healthy",
    timestamp: new Date(),
  });
});

module.exports = app;
