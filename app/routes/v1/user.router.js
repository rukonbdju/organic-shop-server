const express =require('express')
const userRouter=express.Router()
const userController = require('../../controllers/user.controller')

userRouter.route('/').get(userController.getAllUser)

module.exports=userRouter;