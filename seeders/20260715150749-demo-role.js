module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("roles", [
      { nom: "admin", createdAt: new Date(), updatedAt: new Date() },
      { nom: "farmer", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};