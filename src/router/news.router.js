const express = require("express");

const { newsController } = require("../controller");
const findByPk = require("../middleware/findByPk");
const { newsModel } = require("../models");

const newsRouter = express.Router();

newsRouter.get("/", newsController.getAllNews);

newsRouter.get("/details", newsController.getNewsDetail);

newsRouter.post("/create", newsController.createNews);

newsRouter.put("/:id/update", findByPk(newsModel), newsController.updateNews);

newsRouter.delete(
    "/:id/delete",
    findByPk(newsModel),
    newsController.deleteNews
);

module.exports = newsRouter;