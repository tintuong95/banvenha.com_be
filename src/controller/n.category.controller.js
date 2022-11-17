const { categoryNewsService } = require("../service");

function getAllCategoryNews(req, res) {
    req.query.page ?
        categoryNewsService.newsCategoryPageAll(req, res) :
        categoryNewsService.newsCategoryAll(req, res);
}

function getDetailCategoryNews(req, res) {
    categoryNewsService.newsCategoryDetail(req, res);
}

function createCategoryNews(req, res) {
    categoryNewsService.newsCategoryCreate(req, res);
}

function updateCategoryNews(req, res) {
    categoryNewsService.newsCategoryUpdate(req, res);
}

function deleteCategoryNews(req, res) {
    categoryNewsService.newsCategoryDelete(req, res);
}

module.exports = {
    getAllCategoryNews,
    getDetailCategoryNews,
    deleteCategoryNews,
    updateCategoryNews,
    createCategoryNews,
};