const { newsService } = require("../service")

function getAllNews(req, res) {
    req.query.page ?
        newsService.newsPageAll(req, res) :
        newsService.newsAll(req, res);
}

function getNewsDetail(req, res) {
    newsService.newsDetail(req, res);
}

function createNews(req, res) {
    newsService.newsCreate(req, res);
}

function updateNews(req, res) {
    newsService.newsUpdate(req, res);
}

function deleteNews(req, res) {
    newsService.newsDelete(req, res);
}


module.exports = {

    getNewsDetail,
    createNews,
    updateNews,
    deleteNews,
    getAllNews,
};