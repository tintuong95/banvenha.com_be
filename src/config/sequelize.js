const { Sequelize } = require("sequelize");

require("dotenv").config();

const {
    DB_HOSTNAME = "localhost",
        DB_USERNAME = "root",
        DB_PASSWORD = "",
        DB_DIALECT = "mysql",
        DB_NAME = "name",
} = process.env;

module.exports = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
    define: {
        hooks: {
            afterCreate(model, option) {
                console.log("something")
            },
        },
    },
});