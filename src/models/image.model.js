const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const randString = require("../utils/randString");

module.exports = sequelize.define("Image", {
    id: {
        type: new DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randString(6),
    },
    url: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    name: {
        type: new DataTypes.STRING(100),
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