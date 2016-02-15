'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user')
var request = require('request')
router.get('/', function(req, res) {
    request('https://api.brewerydb.com/v2/beer/random/?key=630ac9ae73a7ceedf3a70a4f2740d5c5/', function(err, data){
      res.send(data)
    })
});
router.post('/hastried', function(req, res) {
  User.find({email: req.body.user.email}, function(err, user){
    var thisUser = user[0]
    thisUser.beers.push({beer:req.body.name, hasTried: true, notes: req.body.notes, rating: req.body.rating})
    User.findByIdAndUpdate(thisUser._id,{beers: thisUser.beers}, function(err, updatedUser){
      res.send('beer created')
    })
  })
});
router.post('/hasnottried', function(req, res) {
  User.find({email: req.body.user.email}, function(err, user){
    var thisUser = user[0]
    thisUser.beers.push({beer:req.body.name, hasTried: true, notes: req.body.notes, rating: req.body.rating})
    User.findByIdAndUpdate(thisUser._id,{beers: thisUser.beers}, function(err, updatedUser){
      res.send('beer created')
    })
  })
});

module.exports = router;
