const express = require('express');
const accountRouter = require('./account.router');
const adminRouter = require('./admin.router');
const groupNews = require('./n.group.router');
const groupProduct = require('./p.group.router');
const imageRouter = require('./image.router');
const newsRouter = require('./news.router');
const orderRouter = require('./order.router');
const productRouter = require('./product.router');
const roleRouter = require('./role.router');


const routes = express.Router()

routes.use("/news", newsRouter);

routes.use("/account", accountRouter);

routes.use("/admin", adminRouter);

routes.use("/group-news", groupNews);

routes.use("/group-product", groupProduct);

routes.use("/image", imageRouter);

routes.use("/order", orderRouter);

routes.use("/product", productRouter);

routes.use("/role", roleRouter);

module.exports = routes;