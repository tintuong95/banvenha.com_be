const express = require("express");

const { roleController } = require("../controller");
const findByPk = require("../middleware/findByPk");
const { roleModel } = require("../models");

const roleRouter = express.Router();

roleRouter.get("/", roleController.getAllRole);

roleRouter.get("/details", roleController.getRoleDetail);

roleRouter.post("/create", roleController.createRole);

roleRouter.put("/:id/update", findByPk(roleModel), roleController.updateRole);

roleRouter.delete(
    "/:id/delete",
    findByPk(roleModel),
    roleController.deleteRole
);

module.exports = roleRouter;