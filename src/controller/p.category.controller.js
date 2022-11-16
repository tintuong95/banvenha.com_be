const { categoryProductService } = require("../service");

function getAllCategoryProduct(req, res) {
  categoryProductService.productCategoryAll(req, res);
}

function getDetailCategoryProduct(req, res) {
  categoryProductService.productCategoryDetail(req, res);
}

function createCategoryProduct(req, res) {
  categoryProductService.productCategoryCreate(req, res);
}

function updateCategoryProduct(req, res) {
  categoryProductService.productCategoryUpdate(req, res);
}

function deleteCategoryProduct(req, res) {
  categoryProductService.productCategoryDelete(req, res);
}

module.exports = {
  getAllCategoryProduct,
  getDetailCategoryProduct,
  deleteCategoryProduct,
  updateCategoryProduct,
  createCategoryProduct,
};
