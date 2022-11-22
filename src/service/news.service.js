const { newsModel } = require("../models");
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

/**@note get news with pagination */

function newsPageAll(req, res) {
    const query = queryHandler(req);
    newsModel
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

/**@note get news not pagination */

function newsAll(req, res) {
    newsModel
        .findAndCountAll(req.query)
        .then((result) => {
            res.status(STATUS_SUCCESS).json(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

/**@note get news details */

function newsDetail(req, res) {
    newsModel
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

/**@note create news  */

function newsCreate(req, res) {
    newsModel
        .create(req.body)
        .then((result) => {
            res.status(STATUS_SUCCESS).send(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

/**@note update news  */

function newsUpdate(req, res) {
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

/**@note delete news  */

function newsDelete(req, res) {
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
    newsAll,
    newsDetail,
    newsCreate,
    newsUpdate,
    newsDelete,
    newsPageAll,
};