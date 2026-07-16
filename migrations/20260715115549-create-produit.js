"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("produits", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      categorie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unite: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "kg",
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("produits");
  },
};