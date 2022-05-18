const userSchema = require('../models/blog-user');

const renderController = (req, res, next) => {
    res.render('blog-user');
};

const signupController = (req, res, next) => {
    res.send('OK');
};

module.exports = {
    renderController,
    signupController,
}