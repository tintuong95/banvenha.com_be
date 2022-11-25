const {
  ADMIN_ACCOUNT,
  GROUP_PRODUCT,
  GROUP_NEWS,
  PRODUCT_ORDER,
} = require("../constants/alias.association");
const {
  newsModel,
  roleModel,
  imageModel,
  orderModel,
  adminModel,
  productModel,
  accountModel,
  groupNewsModel,
  groupProductModel,
} = require("../models");

/** @association  account with admin */
adminModel.hasOne(accountModel, {
  foreignKey: "adminId",
  as: ADMIN_ACCOUNT,
});
accountModel.belongsTo(adminModel, {
  foreignKey: "adminId",
  as: ADMIN_ACCOUNT,
});

/** @association  group product */
groupProductModel.hasMany(productModel, {
  foreignKey: "groupId",
  as: GROUP_PRODUCT,
});
productModel.belongsTo(groupProductModel, {
  foreignKey: "groupId",
  as: GROUP_PRODUCT,
});

/** @association  group news */
groupNewsModel.hasMany(newsModel, {
  foreignKey: "groupId",
  as: GROUP_NEWS,
});
newsModel.belongsTo(groupNewsModel, {
  foreignKey: "groupId",
  as: GROUP_NEWS,
});

/** @association  product order */
productModel.hasMany(orderModel, {
  foreignKey: "productId",
  as: PRODUCT_ORDER,
});
orderModel.belongsTo(productModel, {
  foreignKey: "productId",
  as: PRODUCT_ORDER,
});



