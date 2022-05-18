const userSchema = require('../models/blog-user');

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
    res.send('OK');
};

module.exports = {
    renderController,
    signupController,
}