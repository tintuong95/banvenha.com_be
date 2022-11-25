module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("News", {
          id: {
            type: new Sequelize.STRING(6),
            primaryKey: true,
            allowNull: false,
          },
          title: {
            type: new Sequelize.STRING(50),
            allowNull: false,
            unique: true,
          },
          param: {
            type: new Sequelize.STRING(50),
            allowNull: true,
            unique: true,
          },
          description: {
            type: new Sequelize.STRING(200),
            allowNull: false,
          },
          content: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          photo: {
            type: new Sequelize.STRING(6),
            allowNull: false,
          },
          authorId: {
            type: new Sequelize.STRING(6),
            allowNull: false,
          },
          groupId: {
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
        await queryInterface.dropTable("News");
    }
};