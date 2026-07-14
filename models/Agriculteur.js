const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Agriculteur = sequelize.define(
  "Agriculteur",
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

    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "agriculteurs",
    timestamps: true,
  }
);

module.exports = Agriculteur;