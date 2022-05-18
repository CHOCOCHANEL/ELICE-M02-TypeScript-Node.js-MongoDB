var express = require('express');
var router = express.Router();
const { renderController,
        signupController,
        signinController,
        cookieController} = require('../controller/user');
const { body, validationResult } = require('express-validator');
const asyncErrorHandler = require('../utils/async-handler');
const session = require('express-session');
const parseurl = require('parseurl');

/* express-session */
router.use(
    session({
        secret: "12345",
        resave: false,
        saveUninitialized: true,
    })
);

router.use( (req, res, next) => {
    if(!req.session.views) {
        req.session.views = {};
    }

    // get the url pathname
    let pathname = parseurl(req).pathname;

    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    next();
});

router.get('/foo', (req, res, next) => {
    res.send(`you viewed this page ${req.session.views['/foo']} times`);
})

/* GET users listing. */
router.get('/', asyncErrorHandler(renderController));

router.post('/signup', body('email').isEmail().withMessage('Wrong Email Format'), 
                       body('password').isLength({ min: 5 }).withMessage('Wrong Paswword Format'), 
                       asyncErrorHandler(signupController));

router.post('/signin', asyncErrorHandler(signinController));

router.get('/cookie', asyncErrorHandler(cookieController));

module.exports = router;
