const { accountModel } = require("../models");

async function accountAll(req, res) {
  return await accountModel.findAll({});
}

async function accountDetail(req, res) {
  return await accountModel.findAll({});
}

async function accountCreate(req, res) {
  return await accountModel.findAll({});
}

async function accountUpdate(req, res) {
  return await accountModel.findAll({});
}

async function accountDelete(req, res) {
  return await accountModel.findAll({});
}

module.exports = {
  accountAll,
  accountDetail,
  accountCreate,
  accountUpdate,
  accountDelete,
};
