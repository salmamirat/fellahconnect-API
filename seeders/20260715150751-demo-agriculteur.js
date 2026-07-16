"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("agriculteurs", [
      {
        nom: "Ahmed Bennani",
        telephone: "0612345678",
        region: "Beni Mellal-Khenifra",
        userId: 2, // matches the farmer user
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("agriculteurs", null, {});
  },
};