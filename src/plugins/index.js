const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("./cors");

module.exports = function addPlugins(server) {

    dotenv.config();
    
    server.use(cors);

    server.use(express.static(path.join(__dirname, "../../public")));

    server.use(helmet({ contentSecurityPolicy: false }));

    server.use(express.urlencoded({ extended: true, limit: "10mb" }));

    server.use(express.json());

    server.use(cors, express.static(path.join(__dirname, "../public")));

    server.use(morgan("combined"));
}