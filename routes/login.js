'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user')
router.get('/', function(req, res) {
  console.log('boob', req.body);
  res.send('done')
});
router.post('/', function(req, res) {
  User.authenticate(req.body, function(err, user){
    if(err){res.send('incorrect')}
    if(user){res.send(user)}
  })
});
module.exports = router;
