var mongoose = require('../helpers/db.js');

//sets expiry time on data in mongoose
var ttl = require('mongoose-ttl');

var userSchema = new mongoose.Schema({
  name  : String,
  password: String,
  email : String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;