'use strict'
const mongoose  = require('mongoose');
const mongo_uri = process.env.MONGO_URI || '127.0.0.1:27017/coordinate';
let db = null;

module.exports = {
  connect: async () => {
    db = db || (await mongoose.connect('mongodb://'+ mongo_uri));
    console.log('connection to database established');
    return db;
  }
}
