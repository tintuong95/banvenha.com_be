const { adminModel } = require("../models");

async function adminAll(req, res) {
  return await adminModel.findAll({});
}

async function adminDetail(req, res) {
  return await adminModel.findAll({});
}

async function adminCreate(req, res) {
  return await adminModel.findAll({});
}

async function adminUpdate(req, res) {
  return await adminModel.findAll({});
}

async function adminDelete(req, res) {
  return await adminModel.findAll({});
}

module.exports = {
  adminAll,
  adminDetail,
  adminCreate,
  adminUpdate,
  adminDelete,
};
