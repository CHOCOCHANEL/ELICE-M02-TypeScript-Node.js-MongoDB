const { Post } = require('../models');

const createPostController = async (req, res, next) => {
    const { title, content } = req.body;

    if (!title || !content) {
        throw new Error('Put Title and Content!');
    }

    // CREATE Post
    const post = await Post.create({
        title,
        content,
    });

    res.redirect(`/posts/${post.shortId}`);
};

module.exports = createPostController;