const { orderModel } = require("../models");

async function orderAll(req, res) {
  return await orderModel.findAll({});
}

async function orderDetail(req, res) {
  return await orderModel.findAll({});
}

async function orderCreate(req, res) {
  return await orderModel.findAll({});
}

async function orderUpdate(req, res) {
  return await orderModel.findAll({});
}

async function orderDelete(req, res) {
  return await orderModel.findAll({});
}

module.exports = {
  orderAll,
  orderDetail,
  orderCreate,
  orderUpdate,
  orderDelete,
};
