const { categoryNewsModel } = require("../models");
const {
    DELETE_SUCCESS,
    NOT_FOUND_TEXT,
} = require("../constants/response.text");

const { pagination } = require("../utils/pagination");
const { queryHandler } = require("../utils/query");

const {
    STATUS_SUCCESS,
    STATUS_SERVER_ERROR,
    STATUS_NOTFOUND,
} = require("../constants/response.status");

function newsCategoryPageAll(req, res) {
    const query = queryHandler(req);
    categoryNewsModel
        .findAndCountAll(query)
        .then((result) => {
            res
                .status(STATUS_SUCCESS)
                .json(pagination(req, result, query.page, query.perPage));
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

function newsCategoryAll(req, res) {
    categoryNewsModel
        .findAndCountAll(req.query)
        .then((result) => {
            res.status(STATUS_SUCCESS).send(result);
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
                res.status(STATUS_SUCCESS).send(result) :
                res.status(STATUS_NOTFOUND).send(NOT_FOUND_TEXT);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

function newsCategoryCreate(req, res) {
    categoryNewsModel
        .create(req.body)
        .then((result) => {
            res.status(STATUS_SUCCESS).send(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

function newsCategoryUpdate(req, res) {
    const newModel = res.locals.model;
    newModel
        .update(req.body)
        .then((result) => {
            res.status(STATUS_SUCCESS).json(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

function newsCategoryDelete(req, res) {
    const newModel = res.locals.model;
    newModel
        .destroy()
        .then((result) => {
            res.status(STATUS_SUCCESS).send(DELETE_SUCCESS);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

module.exports = {
    newsCategoryPageAll,
    newsCategoryDetail,
    newsCategoryCreate,
    newsCategoryUpdate,
    newsCategoryDelete,
    newsCategoryAll,
};