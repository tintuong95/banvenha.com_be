const { categoryProductModel } = require("../models");

async function productCategoryAll(req, res) {
  return await categoryProductModel.findAll({});
}

async function productCategoryDetail(req, res) {
  return await categoryProductModel.findAll({});
}

async function productCategoryCreate(req, res) {
  return await categoryProductModel.findAll({});
}

async function productCategoryUpdate(req, res) {
  return await categoryProductModel.findAll({});
}

async function productCategoryDelete(req, res) {
  return await categoryProductModel.findAll({});
}

module.exports = {
  productCategoryAll,
  productCategoryDetail,
  productCategoryCreate,
  productCategoryUpdate,
  productCategoryDelete,
};
