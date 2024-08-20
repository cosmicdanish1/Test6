const express = require('express');
const { createCategory, getAllCategories, getCategory, editCategory } = require('../controllers/categoryController');

const router = express.Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategory);
router.put('/:id', editCategory);

module.exports = router;
