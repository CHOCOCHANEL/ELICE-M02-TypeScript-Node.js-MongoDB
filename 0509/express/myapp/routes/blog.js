const { Router } = require('express');
const router = Router();
const { renderController,
        writeController,
        postController } = require('../controller/blog');

router.get('/', renderController);

router.get('/write', writeController);

router.post('/write', postController);

module.exports = router;