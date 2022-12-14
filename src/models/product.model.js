const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const randString = require("../utils/randString");
const remakeParam = require("../utils/remake.param");

const Product=sequelize.define(
    "Product", {
        id: {
            type: new DataTypes.STRING(6),
            primaryKey: true,
            allowNull: false,
            defaultValue: () => randString(6),
        },
        title: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        param: {
            type: new DataTypes.STRING(50),
            allowNull: true,
        },
        description: {
            type: new DataTypes.STRING(200),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
        },
        views: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        authorId: {
            type: new DataTypes.STRING(6),
            allowNull: false,
        },
        photo: {
            type: new DataTypes.STRING(6),
        },
        album: {
            type: new DataTypes.STRING(6),
        },

        width: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        area: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        floor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        groupId: {
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
    }, {
        hooks: {
            beforeCreate(product, option) {
                product.param = remakeParam(product.title);
            },
        },
    }
);

module.exports = Product;