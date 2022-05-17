const { Post } = require('../models');

const deletePostController = async (req, res, next) => {
    const { shortId } = req.params;

    await Post.deleteOne({ shortId });
    res.send('OK');
};

module.exports = deletePostController;