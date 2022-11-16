const express = require("express");

const { categoryProductController } = require("../controller");

const categoryProduct = express.Router();

categoryProduct.get("/", categoryProductController.getAllCategoryProduct);

categoryProduct.get("/:id", categoryProductController.getDetailCategoryProduct);

categoryProduct.post("/", categoryProductController.createCategoryProduct);

categoryProduct.put("/:id", categoryProductController.updateCategoryProduct);

categoryProduct.delete("/:id", categoryProductController.deleteCategoryProduct);

module.exports = categoryProduct;
