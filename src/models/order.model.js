const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const randString = require("../utils/randString");

module.exports = sequelize.define("Order", {
  id: {
    type: new DataTypes.STRING(6),
    primaryKey: true,
    allowNull: false,
    defaultValue: () => randString(6),
  },
  fullname: {
    type: new DataTypes.STRING(30),
    allowNull: false,
  },
  phone: {
    type: new DataTypes.STRING(30),
    allowNull: false,
  },
  address: {
    type: new DataTypes.STRING(100),
    allowNull: false,
  },
  productId: {
    type: new DataTypes.STRING(6),
    allowNull: false,
  },
  state: {
    type:  DataTypes.BOOLEAN,
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
    allowNull: false,
    type: DataTypes.DATE,
  },
});