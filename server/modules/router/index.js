const express = require('express');
const item = require('./item');
const organization = require('./organization');
const transaction = require('./transaction');
const user = require('./user');

const router = express.Router();

router.use('/item', item);
router.use('/organization', organization);
router.use('/transaction', transaction);
router.use('/user', user);

module.exports = router;