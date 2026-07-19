module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("prix_marches", [
      {
        prix: 2.0,
        datePrix: "2026-07-14",
        produitId: 1,
        marcheId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        prix: 6.0,
        datePrix: "2026-07-14",
        produitId: 1,
        marcheId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("prix_marches", null, {});
  },
};