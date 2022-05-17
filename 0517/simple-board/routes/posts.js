const { Router } = require('express');
const getListController = require('../controllers/getListController');

const router = Router();

router.get('/', getListController);

module.exports = router;