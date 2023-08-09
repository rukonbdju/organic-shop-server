const express = require('express')
const orderController = require('../../controllers/order.controller')
const orderRouter=express.Router()

orderRouter.route('/')
.get(orderController.getAllOrder)
.post()
.put()
.patch()
.delete()

module.exports=orderRouter;