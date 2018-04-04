'use strict'
const mongoose = require('mongoose');
// const voting   = require('mongoose-voting');

var MarkersSchema = new mongoose.Schema({
  time: {
    type: Date,
    required: false,
    default: Date.now
  },
  place_name: {
    type: String,
    required: false,
    default: ''
  },
  location: {
    type: [Number],
    required: false
  },
  message: {
    type: String,
    required: false,
    default: ''
  }
});

// MarkersSchema.plugin(voting, { ref: 'UsersSchema' });

module.exports = MarkersSchema;
