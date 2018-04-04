'use strict'
const mongoose = require('mongoose');
module.exports = mongoose.model('Users', require('../schemas/Users'));
