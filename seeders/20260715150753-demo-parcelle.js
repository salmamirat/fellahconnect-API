module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("parcelles", [
      {
        nom: "Parcelle Nord",
        superficie: 2.5,
        region: "Beni Mellal-Khenifra",
        agriculteurId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("parcelles", null, {});
  },
};