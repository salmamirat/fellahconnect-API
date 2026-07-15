const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Produit = sequelize.define(
  "Produit",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    categorie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unite: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "kg",
    },
  },
  {
    tableName: "produits",
    timestamps: true,
  }
);

module.exports = Produit;