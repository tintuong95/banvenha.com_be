module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Role", {
          id: {
            type: new Sequelize.STRING(6),
            primaryKey: true,
            allowNull: false,
          },
          level: {
            type: new Sequelize.INTEGER(),
            allowNull: false,
          },
          name: {
            type: new Sequelize.STRING(30),
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE,
          },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Role");
    }
};