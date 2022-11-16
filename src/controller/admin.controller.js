const { adminService } = require("../service");

function getAdminAll(req, res) {
  adminService.adminAll(req, res);
}

function getAdminDetail(req, res) {
  adminService.adminDetail(req, res);
}

function createAdmin(req, res) {
  adminService.adminCreate(req, res);
}

function updateAdmin(req, res) {
  adminService.adminUpdate(req, res);
}

function deleteAdmin(req, res) {
  adminService.adminDelete(req, res);
}

module.exports = {
  getAdminAll,
  getAdminDetail,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
