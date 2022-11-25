const express = require("express");

const { groupProductController } = require("../controller");
const findByPk = require("../middleware/findByPk");
const { groupProductModel } = require("../models");

const groupProduct = express.Router();

groupProduct.get("/", groupProductController.getAllGroupProduct);

groupProduct.get(
    "/details",
    groupProductController.getDetailGroupProduct
);

groupProduct.post(
    "/create",
    groupProductController.createGroupProduct
);

groupProduct.put(
    "/:id/update",
    findByPk(groupProductModel),
    groupProductController.updateGroupProduct
);

groupProduct.delete(
    "/:id/delete",
    findByPk(groupProductModel),
    groupProductController.deleteGroupProduct
);

module.exports = groupProduct;