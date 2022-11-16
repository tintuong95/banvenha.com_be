const express = require('express');

const { newsController } = require("../controller")

const newsRouter = express.Router()

newsRouter.get("/", newsController.getNewsAll);

newsRouter.get("/:id", newsController.getNewsDetail);

newsRouter.post("/", newsController.createNews);

newsRouter.put("/:id", newsController.updateNews);

newsRouter.delete("/:id", newsController.deleteNews);


module.exports = newsRouter;