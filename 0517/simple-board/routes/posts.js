const { Router } = require('express');
const { getListController,
        getPostController,
        createPostController,
        updatePostController,
        deletePostController } = require('../controllers');
const asyncErrorHandler = require('../utils/async-handler');

const router = Router();

router.get('/', asyncErrorHandler(getListController));
router.get('/:shortId', asyncErrorHandler(getPostController));
router.post('/', asyncErrorHandler(createPostController));
router.post('/:shortId', asyncErrorHandler(updatePostController));
router.delete('/:shortId', asyncErrorHandler(deletePostController));

module.exports = router;