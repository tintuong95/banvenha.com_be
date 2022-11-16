const { roleModel } = require("../models");

async function roleAll(req, res) {
  return await roleModel.findAll({});
}

async function roleDetail(req, res) {
  return await roleModel.findAll({});
}

async function roleCreate(req, res) {
  return await roleModel.findAll({});
}

async function roleUpdate(req, res) {
  return await roleModel.findAll({});
}

async function roleDelete(req, res) {
  return await roleModel.findAll({});
}

module.exports = {
  roleAll,
  roleDetail,
  roleCreate,
  roleUpdate,
  roleDelete,
};
