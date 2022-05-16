const bookSchema = require('../models/book');

const renderController = (req, res) => {
    res.render('post', { title: 'Example-post' });
}

const postController =(req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    res.json({
        name: name,
        phone: phone,
        date: date,
    });
}

const postAddBookController = (req, res)=>{
    const bookName = req.body.bookName;
    const author = req.body.author;
    const price = req.body.price;
    const publish = req.body.publish;
    
    const bookData = new bookSchema({
        bookName: bookName,
        author: author,
        price: price,
        publish: publish
    })

    bookData.save();
    res.redirect('/post');
}

const getBookController = (req, res) => {
    const bookName = req.params.bookName;

    bookSchema.findOne( {bookName: bookName}, (err, result)=>{
        if (result) res.json(result);
        else res.send(`${bookName}으로 등록된 책이 없습니다.`);
    });
}

const deleteController = (req, res) => {
    res.render('delete');
}

const deleteBookNameController = (req, res) => {
    const bookName = req.params.id;
    bookSchema.findOneAndDelete({ bookName: bookName })
      .then((result) => {
        res.json({ redirect: "/post" });
      })
      .catch((err) => {
        console.log(err);
      });
}


module.exports = {
    renderController,
    postController,
    postAddBookController,
    getBookController,
    deleteController,
    deleteBookNameController
}