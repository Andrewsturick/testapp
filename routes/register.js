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
      res.send('success!')
      console.log(user);
    }
  })
});
module.exports = router;
