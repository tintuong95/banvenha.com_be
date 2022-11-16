

const express = require("express");

const { productController } = require("../controller");

const productRouter = express.Router();

productRouter.get("/", productController.getAllProduct);

productRouter.get("/:id", productController.getProductDetail);

productRouter.post("/", productController.createProduct);

productRouter.put("/:id", productController.updateProduct);

productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;