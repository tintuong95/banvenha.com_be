const { groupProductModel, productModel } = require("../models");
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
const { GROUP_PRODUCT } = require("../constants/alias.association");

function productGroupPageAll(req, res) {
    const query = queryHandler(req);
    groupProductModel
      .findAndCountAll({
        ...query,
        // include:{model:productModel,as:GROUP_PRODUCT}
      })
      .then((result) => {
        res
          .status(STATUS_SUCCESS)
          .json(pagination(req, result, query.page, query.perPage));
      })
      .catch((err) => {
        res.status(STATUS_SERVER_ERROR).send(err);
      });
}

function productGroupAll(req, res) {
    groupProductModel
      .findAndCountAll({
        ...req.query,
        // include: { model: productModel, as: GROUP_PRODUCT },
      })
      .then((result) => {
        res.status(STATUS_SUCCESS).send(result);
      })
      .catch((err) => {
        res.status(STATUS_SERVER_ERROR).send(err);
      });
}

function productGroupDetail(req, res) {
    groupProductModel
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

function productGroupCreate(req, res) {
    groupProductModel
        .create(req.body)
        .then((result) => {
            res.status(STATUS_SUCCESS).send(result);
        })
        .catch((err) => {
            res.status(STATUS_SERVER_ERROR).send(err);
        });
}

function productGroupUpdate(req, res) {
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

function productGroupDelete(req, res) {
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
    productGroupAll,
    productGroupDetail,
    productGroupCreate,
    productGroupUpdate,
    productGroupDelete,
    productGroupPageAll,
};