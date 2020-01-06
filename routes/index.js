var express = require('express');
var router = express.Router();
var list = require('../list');

/* GET home page. */
router.get('/list/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  list.getList(req, res,next);
});

module.exports = router;
