var express = require('express');
var router = express.Router();
var Credit = require('../db/schema.js')


router.get('/', function(request, response) {
      console.log('getCredits route');
  Credit.find(function(error, credits) {
    if(error) {
      console.log('error while finding credits: '+error);
      return;
    }
    response.json({credits: credits})
  }).select('-__v');
});

module.exports = router;
