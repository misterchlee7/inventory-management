const express = require('express');
const itemCtrl = require('../controller/item');

const item = express.Router();

item.post('/add_item', (req, res, next) => {
    itemCtrl.addItem(req.body, next);
});

module.exports = item;