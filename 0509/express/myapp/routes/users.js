var express = require('express');
var router = express.Router();
const { renderController,
        signupController} = require('../controller/user');
const { body, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', renderController);
router.post('/signup', body('email').isEmail().withMessage('Wrong Email Format'), 
                       body('password').isLength({ min: 5 }).withMessage('Wrong Paswword Format'), 
                       signupController);

module.exports = router;
