const { imageModel } = require("../models");

async function imageAll(req, res) {
  return await imageModel.findAll({});
}

async function imageDetail(req, res) {
  return await imageModel.findAll({});
}

async function imageCreate(req, res) {
  return await imageModel.findAll({});
}

async function imageUpdate(req, res) {
  return await imageModel.findAll({});
}

async function imageDelete(req, res) {
  return await imageModel.findAll({});
}

module.exports = {
  imageAll,
  imageDetail,
  imageCreate,
  imageUpdate,
  imageDelete,
};
