var express = require('express');
var router = express.Router();

const asyncHandler = require('../utils/async-handler');
const hashPassword = require('../utils/hash-password');
const { User } = require('../models');

/* GET home page. */
router.get('/', (req, res) => {
  if(req.user) {
    res.redirect('/posts');
    return;
  }

  res.redirect('/login');
});


router.get('/login', (req, res, next) => {
  res.render('user/login');
});

router.get('/join', (req, res, next) => {
  res.render('user/join');
});

router.post('/join', asyncHandler(async (req, res, next) => {
  const { email, name, password } = req.body;
  const hashedPassword = hashPassword(password);
  const exists = await User.findOne({ email, });

  if (exists) {
    throw new Error('It exists already.');
    return;
  }

  const user = await User.create({
    email,
    name,
    password: hashedPassword,
  });

  console.log(`Created User: ${user}`);

  res.redirect('/');
}));

module.exports = router;
