'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user')
router.get('/', function(req, res) {
  console.log('boob', req.body);
  res.send('done')
});
router.post('/', function(req, res) {
  console.log(req.body)
  User.register(req.body, function(err, user){
    if(err) res.send('alreadyTaken!')
    if(user){
      console.log(user);
      console.log('helloooooooooo');
      res.send('success!')
    }
  })
});
module.exports = router;
