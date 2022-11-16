const express = require('express');
const accountRouter = require('./account.router');
const adminRouter = require('./admin.router');
const categoryNews = require('./n.category.router');
const categoryProduct = require('./p.category.router');
const imageRouter = require('./image.router');
const newsRouter = require('./news.router');
const orderRouter = require('./order.router');
const productRouter = require('./product.router');
const roleRouter = require('./role.router');


const routes = express.Router()

routes.use("/news", newsRouter);

routes.use("/account", accountRouter);

routes.use("/admin", adminRouter);

routes.use("/category-news", categoryNews);

routes.use("/category-product", categoryProduct);

routes.use("/image", imageRouter);

routes.use("/orderRouter", orderRouter);

routes.use("/product", productRouter);

routes.use("/role", roleRouter);

module.exports = routes;