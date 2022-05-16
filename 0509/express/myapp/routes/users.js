var express = require('express');
var router = express.Router();
const { renderController } = require('../controller/user');

/* GET users listing. */
router.get('/', renderController);

module.exports = router;
