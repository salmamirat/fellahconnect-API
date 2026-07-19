const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { requestLogger } = require("./middlewares/logger.middleware");
const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/error.middleware");

// Routes
const authRoutes = require("./routes/auth.routes");
const agentRoutes = require("./routes/agent.routes");
const agriculteurRoutes = require("./routes/agriculteur.routes");
const parcelleRoutes = require("./routes/parcelle.routes");
const produitRoutes = require("./routes/produit.routes");
const recolteRoutes = require("./routes/recolte.routes");
const marcheRoutes = require("./routes/marche.routes");
const prixMarcheRoutes = require("./routes/prixMarche.routes");
const offreVenteRoutes = require("./routes/offreVente.routes");

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
app.use("/agriculteurs", agriculteurRoutes);
app.use("/parcelles", parcelleRoutes);
app.use("/produits", produitRoutes);
app.use("/recoltes", recolteRoutes);
app.use("/marches", marcheRoutes);
app.use("/prix-marches", prixMarcheRoutes);
app.use("/offres-vente", offreVenteRoutes);

// Middlewares
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;