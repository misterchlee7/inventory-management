const express = require('express');
const userCtrl = require('../controller/user');

const user = express.Router();

user.post('/register', (req, res, next) => {
    userCtrl.register(req.body, next);
});

module.exports = user;