var express = require('express');
var router = express.Router();
var config = require('../config/config.js');

var redis = require('redis');

/* GET users listing. */
router.get('/nodes', function(req, res, next) {
  var client = redis.createClient(config.redisport,config.redisip);
  client.set('test','qqqqqq',function (err,result) {
     console.log(result);
     if (result=="OK"){

     }
  });
});

module.exports = router;
