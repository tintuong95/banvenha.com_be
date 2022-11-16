const { newsModel } = require("../models");


async function newsAll(req, res) {
    res.send( await newsModel.findAll({}))
}

async function newsDetail(req, res) {
  return await newsModel.findAll({});
}

async function newsCreate(req, res) {
  return await newsModel.findAll({});
}

async function newsUpdate(req, res) {
  return await newsModel.findAll({});
}

async function newsDelete(req, res) {
  return await newsModel.findAll({});
}


module.exports = {
  newsAll,
  newsDetail,
  newsCreate,
  newsUpdate,
  newsDelete,
};