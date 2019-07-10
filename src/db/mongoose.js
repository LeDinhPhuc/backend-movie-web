const mongoose = require('mongoose');
const dbURL = require('../config/dbURL');

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});