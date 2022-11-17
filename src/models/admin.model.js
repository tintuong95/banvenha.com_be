const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const randString = require("../utils/randString");

module.exports = sequelize.define("Admin", {
    id: {
        type: new DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randString(6),
    },
    accountId: {
        type: new DataTypes.STRING(6),
        allowNull: false,
    },
    fullname: {
        type: new DataTypes.STRING(30),
    },
    phone: {
        type: new DataTypes.STRING(30),
    },
    email: {
        type: new DataTypes.STRING(30),
    },
    address: {
        type: new DataTypes.STRING(100),
    },
    avatar: {
        type: new DataTypes.STRING(6),
    },
    roleId: {
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