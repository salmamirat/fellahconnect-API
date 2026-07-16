"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("prix_marches", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      prix: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      datePrix: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      produitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "produits",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      marcheId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "marches",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
    await queryInterface.addIndex("prix_marches", ["produitId", "datePrix"]);
    await queryInterface.addIndex("prix_marches", ["marcheId"]);
  },
  async down(queryInterface) {
    await queryInterface.dropTable("prix_marches");
  },
};