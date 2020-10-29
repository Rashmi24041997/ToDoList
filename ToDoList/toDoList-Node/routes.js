const express = require('express');

const router = express.Router();

const ctrlr = require('../controllers/controller')

router.get('/',ctrlr.index)

router.post('/',ctrlr.store)

module.exports = router