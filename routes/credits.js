var express = require('express');
var router = express.Router();
var Credit = require('../db/schema.js')

//get all credits
router.get('/', function(request, response) {
      console.log('getCredits route');
  Credit.find(function(error, credits) {
    if(error) {
      console.log('error while finding credits: '+error);
      return;
    }
    response.json({credits: credits});
  });
});

/post new credit
router.post('/', function(request, response) {
  console.log('post called in credits router');
  console.log(request.body);
  var credit = new Credit(request.body);
  credit.save(function(error) {
    if(error) {
      response.json({message: 'Could not create credit b/c: '+error});
      return;
    }
    response.json({credit: credit});
  });
});

module.exports = router;
