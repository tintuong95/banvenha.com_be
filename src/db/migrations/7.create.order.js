module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Order", {
          id: {
            type: new Sequelize.STRING(6),
            primaryKey: true,
            allowNull: false,
          },
          fullName: {
            type: new Sequelize.STRING(30),
            allowNull: false,
          },
          phone: {
            type: new Sequelize.STRING(30),
            allowNull: false,
          },
          address: {
            type: new Sequelize.STRING(100),
            allowNull: false,
          },
          productId: {
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
        await queryInterface.dropTable("Order");
    }
};