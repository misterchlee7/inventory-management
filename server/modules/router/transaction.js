const express = require('express');
const transactionCtrl = require('../controller/transaction');

const transaction = express.Router();

transaction.post('/add_transaction', (req, res, next) => {
    transactionCtrl.addtransaction(req.body, next);
});

module.exports = transaction;