const { productService } = require("../service");

function getAllProduct(req, res) {
    req.query.page ?
        productService.productPageAll(req, res) :
        productService.productAll(req, res);
}

function getProductDetail(req, res) {
    productService.productDetail(req, res);
}

function createProduct(req, res) {
    productService.productCreate(req, res);
}

function updateProduct(req, res) {
    productService.productUpdate(req, res);
}

function deleteProduct(req, res) {
    productService.productDelete(req, res);
}

module.exports = {
    getAllProduct,
    getProductDetail,
    createProduct,
    updateProduct,
    deleteProduct,
};