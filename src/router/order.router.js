const express = require("express");

const { orderController } = require("../controller");
const findByPk = require("../middleware/findByPk");
const { orderModel } = require("../models");

const orderRouter = express.Router();

orderRouter.get("/", orderController.getAllOrder);

orderRouter.get("/details", orderController.getOrderDetail);

orderRouter.post("/create", orderController.createOrder);

orderRouter.put("/:id/update", findByPk(orderModel), orderController.updateOrder);

orderRouter.delete("/:id/delete", findByPk(orderModel), orderController.deleteOrder);

module.exports = orderRouter;