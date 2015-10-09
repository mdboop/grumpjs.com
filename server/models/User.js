var mongoose = require('../helpers/db.js');

var userSchema = new mongoose.Schema({
  name  : {type: String, unique: true},
  handle: {type: String, unique: true},
  password: String,
  email : String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;