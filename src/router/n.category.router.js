const express = require("express");

const { categoryNewsController } = require("../controller");

const categoryNews = express.Router();

categoryNews.get("/", categoryNewsController.getAllCategoryNews);

categoryNews.get("/details", categoryNewsController.getDetailCategoryNews);

categoryNews.post("/create", categoryNewsController.createCategoryNews);

categoryNews.put("/:id/update", categoryNewsController.updateCategoryNews);

categoryNews.delete("/:id/delete", categoryNewsController.deleteCategoryNews);

module.exports = categoryNews;
