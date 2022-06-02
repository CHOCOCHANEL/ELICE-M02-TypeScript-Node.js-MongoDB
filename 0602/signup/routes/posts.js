const { Router } = require('express');
const { Post } = require('../models');
const asyncHandler = require('../utils/async-handler');

const router = Router();

router.get('/', asyncHandler(async (req, res, next) => {
    if (req.query.write) {
        res.render('post/edit');
        return;
    }

    const page = Number(req.query.page || 1);
    const perPage = Number(req.query.perPage || 10);

    const [total, posts] = await Promise.all([
        Post.countDocuments({}),
        Post.find({})
            .sort({ createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage),
    ]);

    const totalPage = Math.ceil(total / perPage);

    res.render('post/list', { posts, page, perPage, totalPage });
}));

router.get('/:shortId', asyncHandler(async (req, res, next) => {
    const { shortId } = req.params;
    const post = await Post.findOne({ shortId });

    if (req.query.edit) {
        res.render('post/edit', { post });
        return;
    }

    res.render('post/view', { post });
}));

router.post('/', asyncHandler(async (req, res, next) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        throw new Error('Put title and content');
    }

    const post = await Post.create({ title, content });
    res.redirect(`/posts/${post.shortId}`);
}));

router.post('/:shortId', asyncHandler(async (req, res, next) => {
    const { shortId } = req.params;
    const { title, content } = req.body;

    if (!title || ! content) {
        throw new Error('Put title and content');
    }

    await Post.updateOne({ shortId }, {
        title, 
        content,
    });

    res.redirect(`/posts/${shortId}`);
}));

router.delete('/:shortId', asyncHandler(async (req, res, next) => {
    const { shortId } = req.params;
    await Post.deleteOne({ shortId });
    res.send('OK');
}));

module.exports = router;