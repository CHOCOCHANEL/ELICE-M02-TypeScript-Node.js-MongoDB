var express = require("express");
var router = express.Router();
const { renderController } = require('../controller/post');
const { postController } = require('../controller/post');
const { postAddBookController } = require('../controller/post');
const { getBookController } = require('../controller/post');
const { deleteController } = require('../controller/post');
const { deleteBookNameController } = require('../controller/post');

router.get('/', renderController);

router.post('/', postController);

router.post('/addbook', postAddBookController);

router.get('/book/:bookName', getBookController)

router.get('/del', deleteController)

router.delete("/del/:id", deleteBookNameController);

module.exports = router;