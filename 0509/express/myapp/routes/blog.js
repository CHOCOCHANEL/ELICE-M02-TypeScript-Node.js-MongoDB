const { Router } = require('express');
const router = Router();
const { renderController } = require('../controller/blog');

router.get('/', renderController);

module.exports = router;