var express = require('express');
var router = express.Router();
const { renderController,
        signupController,
        signinController} = require('../controller/user');
const { body, validationResult } = require('express-validator');
const asyncErrorHandler = require('../utils/async-handler');

/* GET users listing. */
router.get('/', asyncErrorHandler(renderController));
router.post('/signup', body('email').isEmail().withMessage('Wrong Email Format'), 
                       body('password').isLength({ min: 5 }).withMessage('Wrong Paswword Format'), 
                       asyncErrorHandler(signupController));
router.post('/signin', asyncErrorHandler(signinController));

module.exports = router;
