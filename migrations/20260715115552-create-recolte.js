"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("recoltes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantite: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dateRecolte: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      parcelleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "parcelles",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      produitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "produits",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
    await queryInterface.addIndex("recoltes", ["parcelleId"]);
    await queryInterface.addIndex("recoltes", ["produitId"]);
  },
  async down(queryInterface) {
    await queryInterface.dropTable("recoltes");
  },
};