const newsService = require("./news.service");
const roleService = require("./role.service");
const adminService = require("./admin.service");
const accountService = require("./account.service");
const orderService = require("./order.service");
const imageService = require("./image.service");
const productService = require("./product.service");
const groupNewsService = require("./n.group.service");
const groupProductService = require("./p.group.service");

module.exports = {
  groupNewsService,
  groupProductService,
  productService,
  orderService,
  imageService,
  newsService,
  roleService,
  adminService,
  accountService,
};
