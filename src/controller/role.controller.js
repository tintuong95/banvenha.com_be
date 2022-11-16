const { roleService } = require("../service");

function getAllRole(req, res) {
  roleService.roleAll(req, res);
}

function getRoleDetail(req, res) {
  roleService.roleDetail(req, res);
}

function createRole(req, res) {
  roleService.roleCreate(req, res);
}

function updateRole(req, res) {
  roleService.roleUpdate(req, res);
}

function deleteRole(req, res) {
  roleService.roleDelete(req, res);
}

module.exports = {
  getAllRole,
  getRoleDetail,
  createRole,
  updateRole,
  deleteRole,
};
