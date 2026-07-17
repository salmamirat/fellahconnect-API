module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("recoltes", [
      {
        quantite: 300,
        dateRecolte: "2026-07-10",
        parcelleId: 1,
        produitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("recoltes", null, {});
  },
};