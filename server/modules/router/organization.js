const express = require('express');
const organizationCtrl = require('../controller/organization');

const organization = express.Router();

organization.post('/add_organization', (req, res, next) => {
    organizationCtrl.addorganization(req.body, next);
});

module.exports = organization;