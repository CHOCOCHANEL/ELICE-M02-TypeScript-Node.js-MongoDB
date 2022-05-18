const { User } = require('../models/blog-user');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const renderController = async (req, res, next) => {
    const { mode } = req.query || 'signin';
    if (mode === 'signup') {
        res.render('blog-signup');
        return;
    } 
    res.render('blog-signin');
};

const signupController = async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    // 중복 가입
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).exec();
    
    if (user) {
        return res.status(401).json({ msg: 'Email already exists'});
    }

    const salt = bcrypt.genSaltSync(10);
    const bcryptPassword = bcrypt.hashSync(password, salt);
    
    await User.create({
        email: email,
        password: bcryptPassword,
    }).then(result => {
        res.status(200).json(result);
    });

    
};

const signinController = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).exec();

    if (!user) {
        return res.status(401).json({ msg: 'No enrollment'});
    }

    // Confirm password
    const passwordMatched = bcrypt.compareSync(password, user.password);
    passwordMatched? res.status(200).send('Ok') : res.status(401).send('Wrong password!');
}

const cookieController = async (req, res, next) => {
    res.cookie('cookie', 'choco');
    res.send('set cookies');
}

module.exports = {
    renderController,
    signupController,
    signinController,
    cookieController,
}