"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("produits", [
      {
        nom: "Tomate",
        categorie: "Legume",
        unite: "kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("produits", null, {});
  },
};