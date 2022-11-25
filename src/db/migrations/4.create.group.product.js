module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("GroupProduct", {
          id: {
            type: new Sequelize.STRING(6),
            primaryKey: true,
            allowNull: false,
          },
          name: {
            type: new Sequelize.STRING(20),
            allowNull: false,
          },
          param: {
            type: new Sequelize.STRING(20),
            allowNull: false,
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
        await queryInterface.dropTable("GroupProduct");
    }
};