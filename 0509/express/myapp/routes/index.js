var express = require('express');
var router = express.Router();
const mainController = require('../controller/main');

/* GET home page. */
router.get('/', mainController);

module.exports = router;
