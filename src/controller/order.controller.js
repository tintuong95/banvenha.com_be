const { orderService } = require("../service");

function getAllOrder(req, res) {
  orderService.orderAll(req, res);
}

function getOrderDetail(req, res) {
  orderService.orderDetail(req, res);
}

function createOrder(req, res) {
  orderService.orderCreate(req, res);
}

function updateOrder(req, res) {
  orderService.orderUpdate(req, res);
}

function deleteOrder(req, res) {
  orderService.orderDelete(req, res);
}

module.exports = {
  getAllOrder,
  getOrderDetail,
  createOrder,
  updateOrder,
  deleteOrder,
};
