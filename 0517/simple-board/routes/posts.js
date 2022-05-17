const { Router } = require('express');
const { getListController,
        getPostController,
        createPostController,
        updatePostController,
        deletePostController } = require('../controllers');

const router = Router();

router.get('/', getListController);
router.get('/:shortId', getPostController);
router.post('/', createPostController);
router.post('/:shortId', updatePostController);
router.delete('/:shortId', deletePostController);

module.exports = router;