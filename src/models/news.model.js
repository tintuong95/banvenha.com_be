const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const randString = require("../utils/randString");

module.exports = sequelize.define("News", {
    id: {
        type: new DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randString(6),
    },
    title: {
        type: new DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    param: {
        type: new DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    description: {
        type: new DataTypes.STRING(200),
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photo: {
        type: new DataTypes.STRING(6),
        allowNull: false,
    },
    authorId: {
        type: new DataTypes.STRING(6),
        allowNull: false,
    },
    categoryId: {
        type: new DataTypes.STRING(6),
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
    },
});