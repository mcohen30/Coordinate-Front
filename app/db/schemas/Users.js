'use strict'
const mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: ''
  },
  location: {
    type: [Number],
    required: false
  }
});

module.exports = UsersSchema;
