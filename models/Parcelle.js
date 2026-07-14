const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Parcelle = sequelize.define(
  "Parcelle",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    superficie: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    agriculteurId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "parcelles",
    timestamps: true,
  }
);

module.exports = Parcelle;