"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors')
var app = express();
var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

require('./routes/route-config')(app);

app.listen(port, function() {
    console.log('localhost:' + port);
})
