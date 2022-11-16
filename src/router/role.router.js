const express = require("express");

const { roleController } = require("../controller");

const roleRouter = express.Router();

roleRouter.get("/", roleController.getAllRole);

roleRouter.get("/:id", roleController.getRoleDetail);

roleRouter.post("/", roleController.createRole);

roleRouter.put("/:id", roleController.getAllRole);

roleRouter.delete("/:id", roleController.deleteRole);

module.exports = roleRouter;
