const { groupNewsModel, productModel, newsModel } = require("../models");
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
const { GROUP_NEWS } = require("../constants/alias.association");

function newsProductPageAll(req, res) {
  const query = queryHandler(req);
  groupNewsModel
    .findAndCountAll({
      ...query,
    //   include: { model: productModel, as: GROUP_NEWS },
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

function newsProductAll(req, res) {
  groupNewsModel
    .findAndCountAll({
      ...req.query,
    //   include: { model: newsModel, as: GROUP_NEWS },
    })
    .then((result) => {
      res.status(STATUS_SUCCESS).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(STATUS_SERVER_ERROR).send(err);
    });
}

function newsProductDetail(req, res) {
  groupNewsModel
    .findOne({
      where: { ...req.query },
    })
    .then((result) => {
      result
        ? res.status(STATUS_SUCCESS).send(result)
        : res.status(STATUS_NOTFOUND).send(NOT_FOUND_TEXT);
    })
    .catch((err) => {
      res.status(STATUS_SERVER_ERROR).send(err);
    });
}

function newsProductCreate(req, res) {
  groupNewsModel
    .create(req.body)
    .then((result) => {
      res.status(STATUS_SUCCESS).send(result);
    })
    .catch((err) => {
      res.status(STATUS_SERVER_ERROR).send(err);
    });
}

function newsProductUpdate(req, res) {
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

function newsProductDelete(req, res) {
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
  newsProductPageAll,
  newsProductDetail,
  newsProductCreate,
  newsProductUpdate,
  newsProductDelete,
  newsProductAll,
};
