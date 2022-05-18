const { User } = require('../models/blog-user');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const renderController = (req, res, next) => {
    res.render('blog-user');
};

const signupController = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const bcryptPassword = bcrypt.hashSync(password, salt);
    
    User.create({
        email: email,
        password: bcryptPassword,
    }).then(result => {
        res.status(200).json(result);
    });
};

module.exports = {
    renderController,
    signupController,
}