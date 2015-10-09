var mongoose = require('../helpers/db.js');

var packageSchema = new mongoose.Schema({
  repoName: String,
  userId: String,           // left blank if signed in with GitHub, this is to hold reference to users registered to our service
  author: String,           // unique (based on github handle)
  defaultCommand: String,   // not necessarily unique (conflict resolution refers to authors)
  cloneUrl : String,
  category : { type:String, default:'General' },
  description: String
});

var Package = mongoose.model('Package', packageSchema);

module.exports = Package;
