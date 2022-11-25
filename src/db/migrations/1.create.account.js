module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Account", {
          id: {
            type: new Sequelize.STRING(6),
            primaryKey: true,
            allowNull: false,
          },
          username: {
            type: new Sequelize.STRING(20),
            allowNull: false,
          },
          password: {
            type: new Sequelize.STRING(100),
            allowNull: false,
          },
          adminId: {
            type: new Sequelize.STRING(6),
            allowNull: false,
            unique: true,
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
        await queryInterface.dropTable("Account");
    }
};