"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("offres_vente", [
      {
        quantite: 300,
        prixSouhaite: 6.0,
        statut: "ouverte",
        recolteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("offres_vente", null, {});
  },
};