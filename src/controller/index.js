const newsController = require("./news.controller")
const accountController = require("./account.controller")
const adminController = require("./admin.controller");
const roleController = require("./role.controller");
const orderController = require("./order.controller");
const productController = require("./product.controller");
const imageController = require("./image.controller");
const groupProductController = require("./p.group.controller");
const groupNewsController = require("./n.group.controller");



module.exports = {
  newsController,
  accountController,
  adminController,
  roleController,
  orderController,
  productController,
  imageController,
  groupProductController,
  groupNewsController,
};