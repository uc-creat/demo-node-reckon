const express = require('express');
const router = express.Router();
const demoController = require('./../controller/demoController.js')


router.route('/').get(demoController.getAllData).post(demoController.addData);
router.route('/:id').get(demoController.getOneData);


module.exports = router;
