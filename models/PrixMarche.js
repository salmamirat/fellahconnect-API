const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PrixMarche = sequelize.define(
  "PrixMarche",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    datePrix: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    produitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    marcheId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "prix_marches",
    timestamps: true,
  }
);

module.exports = PrixMarche;