module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Admin", {
          id: {
            type: new Sequelize.STRING(6),
            primaryKey: true,
            allowNull: false,
          },
          fullName: {
            type: new Sequelize.STRING(30),
          },
          phone: {
            type: new Sequelize.STRING(30),
          },
          email: {
            type: new Sequelize.STRING(30),
          },
          address: {
            type: new Sequelize.STRING(100),
          },
          avatar: {
            type: new Sequelize.STRING(6),
          },
          roleId: {
            type: new Sequelize.STRING(6),
            allowNull: false,
          },
          state: {
            type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable("Admin");
    }
};