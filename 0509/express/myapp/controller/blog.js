const blogSchema = require('../models/blog');

const renderController = (req, res) => {
    res.render('blog', { title: 'MyBlog', headMessage: 'Hello My Blog' });
}

const writeController = (req, res) => {
    res.render('blog-write', { title: 'MyBlog', headMessage: 'Write My Blog' });
}

const postController = (req, res) => {

    const blog = {
        title: req.body.title,
        content: req.body.content,
    }

    const blogData = new blogSchema(blog);
    blogData.save()
            .then(result => {
                console.log(result);
                res.redirect('/blog');
            })
            .catch(e => {
                console.log(`Error!: ${e}`);
                next(e);
            });
}


module.exports = {
    renderController,
    writeController,
    postController,
}