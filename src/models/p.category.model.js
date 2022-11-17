const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const randString = require("../utils/randString");
const remakeParam = require("../utils/remake.param");

module.exports = sequelize.define(
    "CategoryProduct", {
        id: {
            type: new DataTypes.STRING(6),
            primaryKey: true,
            allowNull: false,
            defaultValue: () => randString(6),
        },
        name: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        param: {
            type: new DataTypes.STRING(20),
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
    }, {
        hooks: {
            beforeCreate(category, option) {
                category.param = remakeParam(category.name);
            },
        },

    }
);