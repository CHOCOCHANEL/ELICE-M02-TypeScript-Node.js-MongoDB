const { Post } = require("../models");

const getListController = async (req, res, next) => {
    if (req.query.write) {
        res.render('post/edit');
        return;
    }
    // READ Posts
    const posts = await Post.find({});
    res.render('post/list', { posts });
}

module.exports = getListController;