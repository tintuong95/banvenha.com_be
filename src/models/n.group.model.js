const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const randString = require("../utils/randString");
const remakeParam = require("../utils/remake.param");

const GroupNews = sequelize.define(
  "GroupNews",
  {
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
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate(category, option) {
        category.param = remakeParam(category.name);
      },
    },
  }
);

module.exports = GroupNews