// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  person: { type: String, unique: true },
  password: String,
  role: { type: Number, unique: true }
});

module.exports = mongoose.model('User', userSchema);