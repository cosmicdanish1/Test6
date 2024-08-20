const express = require('express');
const { createSubCategory, getAllSubCategories, getSubCategory, editSubCategory } = require('../controllers/subCategoryController');

const router = express.Router();

router.post('/', createSubCategory);
router.get('/', getAllSubCategories);
router.get('/:id', getSubCategory);
router.put('/:id', editSubCategory);

module.exports = router;
