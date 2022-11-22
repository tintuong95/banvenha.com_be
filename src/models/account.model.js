const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const randString = require("../utils/randString");

const Account = sequelize.define("Account", {
    id: {
        type: new DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randString(6),
    },
    username: {
        type: new DataTypes.STRING(20),
        allowNull: false,
    },
    password: {
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
}, {
    hooks: {
        beforeCreate(account, options) {
            account.password = hashPassword(account.password);
        },
    },

});

Account.prototype.handleLogin = function(password, hashPassword) {

    return comparePassword(password, hashPassword);
};


module.exports = Account