var express = require("express");
var router = express.Router();
const { renderController, postController, postAddBookController, getBookController, getBookListController, deleteController, deleteBookNameController } = require('../controller/post');

router.get('/', renderController);

router.post('/', postController);

router.post('/addbook', postAddBookController);

router.get('/book/:bookName', getBookController);

router.get('/booklist', getBookListController);

router.get('/del', deleteController)

router.delete("/del/:id", deleteBookNameController);

module.exports = router;