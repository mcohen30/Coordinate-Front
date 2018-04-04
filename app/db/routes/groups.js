'use strict'
const express  = require('express');
const mongoose = require('mongoose');
var Groups     = require('../models/Groups');
var router     = express.Router();

/* GET /users listing. */
router.get('/', function(req, res, next) {
  Groups.find(function (err, groups) {
    if (err) return next(err);
    res.json(groups);
  });
});

/* POST to /groups */
router.post('/', function(req, res, next) {
  Groups.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
