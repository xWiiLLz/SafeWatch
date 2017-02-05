var express      = require('express');
var router       = express.Router();
var phone        = require('../functions/phone').phone;

router.post('/', function(req, res) {
  phone(function(done){
    res.send(done);
  })
})

module.exports = router;
