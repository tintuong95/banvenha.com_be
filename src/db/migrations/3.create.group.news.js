module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("GroupNews", {
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
            type: Sequelize.DATE,
            allowNull: true,
          },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("GroupNews");
    }
};