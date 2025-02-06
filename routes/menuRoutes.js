const express = require('express');
const { addItem, getMenuItem ,updateItem,deleteItem} = require('../controller/menuController');

const router = express.Router();

router.post('/', addItem);
router.get('/', getMenuItem);
router.put('/:id', updateItem);
router.delete('/:id',deleteItem);

module.exports = router;