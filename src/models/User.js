const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accType: {
    type: Number,
    required: true
  },
  dateRegistered: {
    type: Date,
    required: true,
    default: Date.now()
  },
  watchedFilms: {
    default: null,
    type: mongoose.Schema.Types.ObjectId,
    required: false
  },
  ratedFilms: {
    type: Array,
    required: false,
    default: []
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;