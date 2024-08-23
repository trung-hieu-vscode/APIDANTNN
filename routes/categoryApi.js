const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/categoryController')

router.get('/get-all-category', categoryController.getAllCategory)

module.exports = router;


