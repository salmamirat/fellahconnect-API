module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("parcelles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      superficie: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      region: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agriculteurId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "agriculteurs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
    await queryInterface.addIndex("parcelles", ["agriculteurId"]);
  },
  async down(queryInterface) {
    await queryInterface.dropTable("parcelles");
  },
};