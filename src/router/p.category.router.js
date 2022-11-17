const express = require("express");

const { categoryProductController } = require("../controller");
const findByPk = require("../middleware/findByPk");
const { categoryProductModel } = require("../models");
const categoryProduct = express.Router();

categoryProduct.get("/", categoryProductController.getAllCategoryProduct);

categoryProduct.get(
    "/details",
    categoryProductController.getDetailCategoryProduct
);

categoryProduct.post(
    "/create",
    categoryProductController.createCategoryProduct
);

categoryProduct.put(
    "/:id/update",
    findByPk(categoryProductModel),
    categoryProductController.updateCategoryProduct
);

categoryProduct.delete(
    "/:id/delete",
    findByPk(categoryProductModel),
    categoryProductController.deleteCategoryProduct
);

module.exports = categoryProduct;