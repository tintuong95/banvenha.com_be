const {
    STATUS_SUCCESS,
    STATUS_SERVER_ERROR,
    STATUS_NOTFOUND,
} = require("../constants/response.status");
const { categoryNewsModel } = require("../models");
const pagination = require("../utils/pagination");
const queryHandler = require("../utils/query");

function newsCategoryAll(req, res) {
    const query = queryHandler(req.query);
    categoryNewsModel
        .findAndCountAll(query)
        .then((result) => {
            res
                .status(STATUS_SUCCESS)
                .json(pagination(result, query.offset, query.limit));
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

function newsCategoryDetail(req, res) {
    categoryNewsModel
        .findOne({
            where: {...req.query },
        })
        .then((result) => {
            result
                ?
                res.status(STATUS_SUCCESS).json(result) :
                res.status(STATUS_NOTFOUND).json(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

async function newsCategoryCreate(req, res) {
    return await categoryNewsModel.findAll({});
}

async function newsCategoryUpdate(req, res) {
    return await categoryNewsModel.findAll({});
}

async function newsCategoryDelete(req, res) {
    return await categoryNewsModel.findAll({});
}

module.exports = {
    newsCategoryAll,
    newsCategoryDetail,
    newsCategoryCreate,
    newsCategoryUpdate,
    newsCategoryDelete,
};