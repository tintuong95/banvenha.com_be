const { adminService } = require("../service");

function createAdmin(req, res) {
    adminService.adminSignup(req, res);
}

function loginAdmin(req, res) {
    adminService.adminLogin(req, res);
}

function logoutAdmin(req, res) {
    adminService.adminLogout(req, res);
}



module.exports = {
    loginAdmin,
    createAdmin,
    logoutAdmin
};