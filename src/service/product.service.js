const { productModel } = require("../models");

async function productAll(req, res) {
  return await productModel.findAll({});
}

async function productDetail(req, res) {
  return await productModel.findAll({});
}

async function productCreate(req, res) {
  return await productModel.findAll({});
}

async function productUpdate(req, res) {
  return await productModel.findAll({});
}

async function productDelete(req, res) {
  return await productModel.findAll({});
}

module.exports = {
  productAll,
  productDetail,
  productCreate,
  productUpdate,
  productDelete,
};
