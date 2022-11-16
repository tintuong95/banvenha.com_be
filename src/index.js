//import 
const express = require('express');
const addPlugins = require("./plugins");
const routes = require('./router');
const startServer = require("./config/server");
const sequelize = require('./config/sequelize');


//setup
const server = express()

addPlugins(server)

server.use("/api", routes)

sequelize.sync({alter:false})


startServer(server)