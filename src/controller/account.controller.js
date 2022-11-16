const { accountService } = require("../service");

function getAllAccount(req, res) {
  accountService.accountAll(req, res);
}

function getAccountDetail(req, res) {
  accountService.accountDetail(req, res);
}

function createAccount(req, res) {
  accountService.accountCreate(req, res);
}

function updateAccount(req, res) {
  accountService.accountUpdate(req, res);
}

function deleteAccount(req, res) {
  accountService.accountDelete(req, res);
}

module.exports = {
  getAllAccount,
  getAccountDetail,
  createAccount,
  updateAccount,
  deleteAccount,
};
