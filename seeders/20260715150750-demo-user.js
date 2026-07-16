"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    const hashedAdmin = await bcrypt.hash("admin123", 10);
    const hashedFarmer = await bcrypt.hash("farmer123", 10);

    await queryInterface.bulkInsert("users", [
      {
        nom: "Admin FellahConnect",
        email: "admin@fellahconnect.ma",
        password: hashedAdmin,
        roleId: 1, // admin
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nom: "Ahmed Bennani",
        email: "ahmed.bennani@fellahconnect.ma",
        password: hashedFarmer,
        roleId: 2, // farmer
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};