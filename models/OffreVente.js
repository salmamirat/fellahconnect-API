const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OffreVente = sequelize.define(
  "OffreVente",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    quantite: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    prixSouhaite: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    statut: {
      type: DataTypes.ENUM("ouverte", "vendue", "annulee"),
      defaultValue: "ouverte",
    },

    recolteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "offres_vente",
    timestamps: true,
  }
);

module.exports = OffreVente;