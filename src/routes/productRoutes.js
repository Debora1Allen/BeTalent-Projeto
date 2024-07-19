const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', productController.index);

router.get('/:id', productController.show);

router.post('/', productController.store);

router.put('/:id', productController.update);

router.delete('/:id', productController.delete);

module.exports = router;
