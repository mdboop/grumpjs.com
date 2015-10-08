var express   = require('express');
var path      = require('path');
var router    = express.Router();
var User      = require('../models/User');
var request   = require('request');
var utils     = require('../helpers/route-utils');

//get the library of grumps that belong to you
router.post('/', function(req, res, next) {
  var newUser = req.body;

  // post to mongo
  var user = new Package(newUser);
  user.save(function (err) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});