module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Image", {
          id: {
            type: new Sequelize.STRING(6),
            primaryKey: true,
            allowNull: false,
          },
          url: {
            type: new Sequelize.STRING(100),
            allowNull: false,
          },
          name: {
            type: new Sequelize.STRING(100),
            allowNull: false,
          },
          type: {
            type: new Sequelize.STRING(10),
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
        await queryInterface.dropTable("Image");
    }
};