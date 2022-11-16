const express = require("express");

const { adminController } = require("../controller");

const adminRouter = express.Router();

adminRouter.get("/", adminController.getAdminAll);

adminRouter.get("/:id", adminController.getAdminDetail);

adminRouter.post("/", adminController.createAdmin);

adminRouter.put("/:id", adminController.updateAdmin);

adminRouter.delete("/:id", adminController.deleteAdmin);

module.exports = adminRouter;
