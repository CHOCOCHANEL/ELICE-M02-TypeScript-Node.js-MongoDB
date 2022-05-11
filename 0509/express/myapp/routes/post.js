var express = require("express");
var router = express.Router();
var bookSchema = require("../models/book");

router.get('/', function(req, res) {
    res.render('post', { title: 'Example-Post' });
  });

router.post('/', (req, res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    res.json({
        name: name,
        phone: phone,
        date: date,
    });
});

router.post('/addbook', (req, res)=>{
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
    res.redirect('/example');
});

module.exports = router;