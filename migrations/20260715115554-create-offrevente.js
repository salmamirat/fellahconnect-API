module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("offres_vente", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantite: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      prixSouhaite: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      statut: {
        type: Sequelize.ENUM("ouverte", "vendue", "annulee"),
        allowNull: false,
        defaultValue: "ouverte",
      },
      recolteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "recoltes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
    await queryInterface.addIndex("offres_vente", ["recolteId"]);
    await queryInterface.addIndex("offres_vente", ["statut"]);
  },
  async down(queryInterface) {
    await queryInterface.dropTable("offres_vente");
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_offres_vente_statut";');
  },
};