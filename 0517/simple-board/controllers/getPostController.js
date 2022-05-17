const { Post } = require('../models');

const getPostController = async (req, res, next) => {
    const { shortId } = req.params;

    // READ Post of shortId
    const post = await Post.findOne({ shortId });
    
    if (req.query.edit) {
        res.render('post/edit', { post });
        return;
    }

    res.render('post/view', { post });
}

module.exports = getPostController;
