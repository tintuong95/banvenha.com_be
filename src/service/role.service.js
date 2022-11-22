const { roleModel } = require("../models");
const { pagination } = require("../utils/pagination");
const { queryHandler } = require("../utils/query");
const {
    DELETE_SUCCESS,
    NOT_FOUND_TEXT,
} = require("../constants/response.text");

const {
    STATUS_SUCCESS,
    STATUS_SERVER_ERROR,
    STATUS_NOTFOUND,
} = require("../constants/response.status");


function roleAll(req, res) {
    roleModel
        .findAndCountAll(req.query)
        .then((result) => {
            res.status(STATUS_SUCCESS).send(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

function roleDetail(req, res) {
    roleModel
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

function roleCreate(req, res) {
    roleModel
        .create(req.body)
        .then((result) => {
            res.status(STATUS_SUCCESS).send(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

function roleUpdate(req, res) {
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

function roleDelete(req, res) {
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
    roleAll,
    roleDetail,
    roleCreate,
    roleUpdate,
    roleDelete,
};