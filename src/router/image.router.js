const express = require("express");

const { imageController } = require("../controller");

const imageRouter = express.Router();

imageRouter.get("/", imageController.getImageAll);

imageRouter.get("/:id", imageController.getImageDetail);

imageRouter.post("/", imageController.createImage);

imageRouter.put("/:id", imageController.updateImage);

imageRouter.delete("/:id", imageController.deleteImage);

module.exports = imageRouter;
