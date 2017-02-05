var express      = require('express');
var router       = express.Router();
var analyze      = require('../functions/analyze').analyze;

router.post('/', function(req, res) {
	console.log('Got request');
  analyze(req.body.image, function(number){
    res.send(number);
  })
})

module.exports = router;
