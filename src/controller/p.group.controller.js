const { groupProductService } = require("../service");

function getAllGroupProduct(req, res) {
    req.query.page
      ? groupProductService.productGroupPageAll(req, res)
      : groupProductService.productGroupAll(req, res);
}

function getDetailGroupProduct(req, res) {
    groupProductService.productGroupDetail(req, res);
}

function createGroupProduct(req, res) {
    groupProductService.productGroupCreate(req, res);
}

function updateGroupProduct(req, res) {
    groupProductService.productGroupUpdate(req, res);
}

function deleteGroupProduct(req, res) {
    groupProductService.productGroupDelete(req, res);
}

module.exports = {
    getAllGroupProduct,
    getDetailGroupProduct,
    deleteGroupProduct,
    updateGroupProduct,
    createGroupProduct,
};