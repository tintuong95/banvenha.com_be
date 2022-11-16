const express = require("express");

const { orderController } = require("../controller");

const orderRouter = express.Router();

orderRouter.get("/", orderController.getAllOrder);

orderRouter.get("/:id", orderController.getOrderDetail);

orderRouter.post("/", orderController.createOrder);

orderRouter.put("/:id", orderController.updateOrder);

orderRouter.delete("/:id", orderController.deleteOrder);

module.exports = orderRouter;
