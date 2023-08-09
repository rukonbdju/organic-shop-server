const express = require("express");
const productRouter = express.Router()
const productController = require("../../controllers/product.controller");

productRouter.route('/')
    .get(productController.getAllProduct)
    .post()
    .put()
    .delete()
    .patch()

module.exports = productRouter;