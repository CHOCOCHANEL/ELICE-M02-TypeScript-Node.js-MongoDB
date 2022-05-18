var express = require('express');
var router = express.Router();
const { renderController,
        signupController } = require('../controller/user');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
 
/* GET users listing. */
router.get('/', renderController);
router.post('/signup', signupController);

module.exports = router;
