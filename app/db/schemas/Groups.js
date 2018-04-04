'use strict'
const mongoose = require('mongoose');
var   Users    = require('./Users');
var   Markers  = require('./Markers');

var MapsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: ''
  },
  createdOn: {
    type: Date,
    required: false,
    default: Date.now
  },
  url_hash: {
    type: String,
    required: false
  },
  users:   { type: [Users] },
  markers: { type: [Markers] }
});

module.exports = MapsSchema;
