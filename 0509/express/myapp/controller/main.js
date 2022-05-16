const mainController = (req, res) => {
    res.render('index', { title: 'Express' });
}

module.exports = mainController;