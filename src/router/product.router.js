const express = require("express");

const { productController } = require("../controller");
const findByPk = require("../middleware/findByPk");
const { productModel } = require("../models");

const productRouter = express.Router();

productRouter.get("/", productController.getAllProduct);

productRouter.get("/details", productController.getProductDetail);

productRouter.post("/create", productController.createProduct);

productRouter.put(
    "/:id/update",
    findByPk(productModel),
    productController.updateProduct
);

productRouter.delete(
    "/:id/delete",
    findByPk(productModel),
    productController.deleteProduct
);

module.exports = productRouter;