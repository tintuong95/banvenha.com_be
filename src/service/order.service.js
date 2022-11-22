const { orderModel } = require("../models");
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

/**@note get order with pagination */

function orderPageAll(req, res) {
    const query = queryHandler(req);
    orderModel
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

/**@note get order not pagination */

function orderAll(req, res) {
    const query = queryHandler(req);
    orderModel
        .findAndCountAll(req.query)
        .then((result) => {
            res.status(STATUS_SUCCESS).json(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}


/**@note get order details */

function orderDetail(req, res) {
    orderModel
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

/**@note create order  */

function orderCreate(req, res) {
    orderModel
        .create(req.body)
        .then((result) => {
            res.status(STATUS_SUCCESS).send(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

/**@note update order  */

function orderUpdate(req, res) {
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

/**@note delete order  */

function orderDelete(req, res) {
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
    orderAll,
    orderDetail,
    orderCreate,
    orderUpdate,
    orderDelete,
    orderPageAll,
};