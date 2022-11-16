const express = require("express");

const { accountController } = require("../controller");

const accountRouter = express.Router();

accountRouter.get("/", accountController.getAllAccount);

accountRouter.get("/:id", accountController.getAccountDetail);

accountRouter.post("/", accountController.createAccount);

accountRouter.put("/:id", accountController.updateAccount);

accountRouter.delete("/:id", accountController.deleteAccount);

module.exports = accountRouter;
