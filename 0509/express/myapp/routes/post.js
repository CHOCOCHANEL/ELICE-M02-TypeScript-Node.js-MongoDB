var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
    res.render('post', { title: 'Example-Post' });
  });

router.post('/', (req, res, next)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    res.json({
        name: name,
        phone: phone,
        date: date,
    });
});

module.exports = router;