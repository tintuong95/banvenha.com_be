module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Product", {
          id: {
            type: new Sequelize.STRING(6),
            primaryKey: true,
            allowNull: false,
          },
          title: {
            type: new Sequelize.STRING(50),
            allowNull: false,
          },
          param: {
            type: new Sequelize.STRING(50),
            allowNull: true,
          },
          description: {
            type: new Sequelize.STRING(200),
            allowNull: false,
          },
          content: {
            type: Sequelize.STRING,
          },
          views: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
          },
          likes: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
          },
          authorId: {
            type: new Sequelize.STRING(6),
            allowNull: false,
          },
          photo: {
            type: new Sequelize.STRING(6),
          },
          album: {
            type: new Sequelize.STRING(6),
          },

          width: {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          height: {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          area: {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          floor: {
            type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Product");
    }
};