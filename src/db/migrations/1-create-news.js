module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("News", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: new Sequelize.STRING(6),
            },
            title: {
                type: new Sequelize.STRING(100),
                allowNull: false,
                unique: true,
            },
            param: {
                type: new Sequelize.STRING(100),
                allowNull: false,
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
            state: {
                type: new Sequelize.BOOLEAN,
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
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('News');
    }
};