const newsController = require("./news.controller")
const accountController = require("./account.controller")
const adminController = require("./admin.controller");
const roleController = require("./role.controller");
const orderController = require("./order.controller");
const productController = require("./product.controller");
const imageController = require("./image.controller");
const categoryProductController = require("./p.category.controller");
const categoryNewsController = require("./n.category.controller");



module.exports = {
  newsController,
  accountController,
  adminController,
  roleController,
  orderController,
  productController,
  imageController,
  categoryProductController,
  categoryNewsController,
};