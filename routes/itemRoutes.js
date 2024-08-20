const express = require('express');
const { createItem, getAllItems, getItem, editItem } = require('../controllers/itemController');

const router = express.Router();

router.post('/', createItem);
router.get('/', getAllItems);
router.get('/:id', getItem);
router.put('/:id', editItem);

module.exports = router;
