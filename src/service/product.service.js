const { productModel } = require("../models");
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

/**@note get product with pagination */

function productPageAll(req, res) {
    const query = queryHandler(req);
    productModel
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

/**@note get product not pagination */

function productAll(req, res) {

    productModel
        .findAndCountAll(req.query)
        .then((result) => {
            res.status(STATUS_SUCCESS).json(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

/**@note get product details */

function productDetail(req, res) {
    productModel
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

/**@note create product  */

function productCreate(req, res) {
    productModel
        .create(req.body)
        .then((result) => {
            res.status(STATUS_SUCCESS).send(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

/**@note update product  */

function productUpdate(req, res) {
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

/**@note delete product  */

function productDelete(req, res) {
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
    productAll,
    productDetail,
    productCreate,
    productUpdate,
    productDelete,
    productPageAll,
};