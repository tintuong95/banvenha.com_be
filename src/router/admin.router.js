const express = require("express");

const { adminController } = require("../controller");

const adminRouter = express.Router();

adminRouter.post("/sign-up", adminController.createAdmin);

adminRouter.post("/login", adminController.loginAdmin);

adminRouter.get("/logout", adminController.logoutAdmin);

module.exports = adminRouter;