const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Recolte = sequelize.define(
  "Recolte",
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

    dateRecolte: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    parcelleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    produitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "recoltes",
    timestamps: true,
  }
);

module.exports = Recolte;