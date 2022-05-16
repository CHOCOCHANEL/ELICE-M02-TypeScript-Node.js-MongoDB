const userSchema = require('../models/user');

const renderController = (req, res, next) => {
    res.render('user', { title: 'Example-user'} );
};

module.exports = {
    renderController,
}