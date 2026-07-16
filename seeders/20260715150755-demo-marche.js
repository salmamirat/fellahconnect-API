"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("marches", [
      {
        nom: "Souk Beni Mellal",
        ville: "Beni Mellal",
        region: "Beni Mellal-Khenifra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nom: "Souk Fkih Ben Salah",
        ville: "Fkih Ben Salah",
        region: "Beni Mellal-Khenifra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("marches", null, {});
  },
};