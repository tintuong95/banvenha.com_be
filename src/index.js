//import
const express = require("express");
const addPlugins = require("./plugins");
const routes = require("./router");
const startServer = require("./config/server");
const sequelize = require("./config/sequelize");
const association = require("./config/association");

//setup
const server = express();

addPlugins(server);

server.use("/api", routes);

startServer(server);
