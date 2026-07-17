const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Marche = sequelize.define(
  "Marche",
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
    ville: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "marches",
    timestamps: true,
  }
);

module.exports = Marche;