const { Post } = require('../models');

const updatePostController = async (req, res, next) => {
    const { shortId } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
        throw new Error('Put Title and Content!');
    }

    await Post.updateOne({ shortId }, {
        title,
        content,
    });

    res.redirect(`/posts/${shortId}`);
};

module.exports = updatePostController;