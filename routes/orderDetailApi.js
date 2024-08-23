const express = require('express')
const router = express.Router();
const orderDetailController = require('../controllers/orderDetailController')

router.get('/get-all-orderDetail', orderDetailController.getAllOrderDetail)

router.post('/add', orderDetailController.addOrderDetail)

router.post('/delete/:id', orderDetailController.deleteOrderDetail)

module.exports = router;


