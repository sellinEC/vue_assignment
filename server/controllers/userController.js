const router = require('express').Router();
const userModel = require('../models/users/userModel');
const orderModel = require('../models/orders/orderModel');

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);
router.patch('/user/:id', userModel.updateUser);
router.post('/user/:id/order', orderModel.addOrder);




module.exports = router;