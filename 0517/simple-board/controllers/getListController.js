const { Post } = require("../models");

const getListController = async (req, res, next) => {
    if (req.query.write) {
        res.render('post/edit');
        return;
    }
    // READ Posts
    const page = Number(req.query.page || 1);
    const perPage = Number(req.query.perPage || 10);
    const [ total, posts ] = await Promise.all([
        Post.countDocuments({}),
        Post.find({})
            .sort({ createdAt: -1})
            .skip(perPage * (page - 1))
            .limit(perPage)
    ])
    const totalPage = Math.ceil(total / perPage);

    res.render('post/list', { posts, page, perPage, totalPage});
}

module.exports = getListController;