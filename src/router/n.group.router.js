const express = require("express");

const { groupNewsController } = require("../controller");
const findByPk = require("../middleware/findByPk");
const { groupNewsModel } = require("../models");

const groupNews = express.Router();

groupNews.get("/", groupNewsController.getAllProductNews);

groupNews.get("/details", groupNewsController.getDetailProductNews);

groupNews.post("/create", groupNewsController.createProductNews);

groupNews.put(
    "/:id/update",
    findByPk(groupNewsModel),
    groupNewsController.updateProductNews
);

groupNews.delete(
    "/:id/delete",
    findByPk(groupNewsModel),
    groupNewsController.deleteProductNews
);



module.exports = groupNews;