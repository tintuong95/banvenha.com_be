const newsService = require("./news.service");
const roleService = require("./role.service");
const adminService = require("./admin.service");
const accountService = require("./account.service");
const orderService = require("./order.service");
const imageService = require("./image.service");
const productService = require("./product.service");
const categoryNewsService = require("./n.category.service");
const categoryProductService = require("./p.category.service");

module.exports = {
  categoryNewsService,
  categoryProductService,
  productService,
  orderService,
  imageService,
  newsService,
  roleService,
  adminService,
  accountService,
};
