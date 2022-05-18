var express = require('express');
var router = express.Router();
const { renderController,
        signupController} = require('../controller/user');
const { body, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', renderController);
router.post('/signup', body('email').isEmail(), body('password').isLength({ min: 5 }), signupController);

module.exports = router;
