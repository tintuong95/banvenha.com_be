const { groupNewsService } = require("../service");

function getAllProductNews(req, res) {
    req.query.page ?
        groupNewsService.newsProductPageAll(req, res) :
        groupNewsService.newsProductAll(req, res);
}

function getDetailProductNews(req, res) {
    groupNewsService.newsProductDetail(req, res);
}

function createProductNews(req, res) {
    groupNewsService.newsProductCreate(req, res);
}

function updateProductNews(req, res) {
    groupNewsService.newsProductUpdate(req, res);
}

function deleteProductNews(req, res) {
    groupNewsService.newsProductDelete(req, res);
}

module.exports = {
    getAllProductNews,
    getDetailProductNews,
    deleteProductNews,
    updateProductNews,
    createProductNews,
};