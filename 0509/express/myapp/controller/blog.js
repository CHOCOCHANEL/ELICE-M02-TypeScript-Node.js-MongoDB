const renderController = (req, res) => {
    res.render('blog', { title: 'MyBlog', headMessage: 'Hello My Blog' });
}

module.exports = {
    renderController,
}