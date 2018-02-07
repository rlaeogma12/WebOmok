var express = require('express');
var router = express.Router();
/* GET omok page */

var room = [];

router.get('/', function(req, res, next) {
  res.render('omokroom');
});

router.get('/GameRoom', function(req, res, next){
  res.render('omok');
});

module.exports = router;
