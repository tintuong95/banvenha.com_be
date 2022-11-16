const newsModel = require("./news.model");
const categoryNewsModel = require("./category_n.model");
const categoryProductModel = require("./category_p.model");
const orderModel = require("./order.model");
const adminModel = require("./admin.model");
const accountModel = require(".//account.model");
const imageModel = require("./image.model");
const roleModel = require("./role.model");
const productModel = require("./product.model");


module.exports = {
  newsModel,
  roleModel,
  imageModel,
  orderModel,
  adminModel,
  productModel,
  accountModel,
  categoryNewsModel,
  categoryProductModel,
};