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

module.exports = router;
