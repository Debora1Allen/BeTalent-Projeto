const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', customerController.index);

router.get('/:id', customerController.show);

router.post('/', customerController.store);

router.put('/:id', customerController.update);

router.delete('/:id', customerController.delete);

module.exports = router;
