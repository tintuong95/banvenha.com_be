const express = require("express");

const { categoryNewsController } = require("../controller");
const findByPk = require("../middleware/findByPk");
const { categoryNewsModel } = require("../models");

const categoryNews = express.Router();

categoryNews.get("/", categoryNewsController.getAllCategoryNews);

categoryNews.get("/details", categoryNewsController.getDetailCategoryNews);

categoryNews.post("/create", categoryNewsController.createCategoryNews);

categoryNews.put(
    "/:id/update",
    findByPk(categoryNewsModel),
    categoryNewsController.updateCategoryNews
);

categoryNews.delete(
    "/:id/delete",
    findByPk(categoryNewsModel),
    categoryNewsController.deleteCategoryNews
);



module.exports = categoryNews;